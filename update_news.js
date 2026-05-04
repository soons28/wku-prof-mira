const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const translate = require('translate-google-api');

// Supported languages on the site
const TARGET_LANGS = {
    'ko': 'ko',
    'en': 'en',
    'zh': 'zh-cn',
    'zh_hant': 'zh-tw',
    'ja': 'ja',
    'de': 'de',
    'es': 'es',
    'ne': 'ne',
    'mn': 'mn',
    'vi': 'vi',
    'bn': 'bn',
    'az': 'az',
    'uz': 'uz',
    'id': 'id',
    'kk': 'kk',
    'th': 'th'
};

/**
 * Translates news items into all supported languages.
 * Translates individually with a small delay to avoid text mangling and rate limits.
 */
async function translateNews(items) {
    console.log(`Translating ${items.length} items into ${Object.keys(TARGET_LANGS).length} languages...`);
    
    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    for (const item of items) {
        item.titles = { ko: item.title };
        item.categories = { ko: item.category };
        
        for (const [key, langCode] of Object.entries(TARGET_LANGS)) {
            if (key === 'ko') continue;
            
            try {
                // Individual translation for better quality/accuracy
                const [translatedTitle] = await translate(item.title, { to: langCode });
                await delay(200); // 200ms delay between calls
                const [translatedCat] = await translate(item.category, { to: langCode });
                
                item.titles[key] = translatedTitle;
                item.categories[key] = translatedCat;
                console.log(`  - [${key}] Translated: ${item.title.substring(0, 15)}...`);
                await delay(300); // 300ms delay between languages
            } catch (err) {
                console.error(`  - [${key}] Failed:`, err.message);
                item.titles[key] = item.title;
                item.categories[key] = item.category;
                if (err.message.includes('429')) {
                    console.log('  Rate limit hit, waiting 5 seconds...');
                    await delay(5000);
                }
            }
        }
        // Cleanup original properties
        delete item.title;
        delete item.category;
    }
    return items;
}

/**
 * Fetches news from the specified URL with a timeout and robust parsing.
 */
async function fetchNews(url, categoryName) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

    try {
        console.log(`Fetching ${categoryName} from: ${url}`);
        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);
        const posts = [];

        $('a').each((i, el) => {
            const text = $(el).text().trim();
            const link = $(el).attr('href');
            const dateMatch = text.match(/^\[(\d{4}\.\d{2}\.\d{2})\]\s*(.+)$/);
            
            if (dateMatch && link) {
                const [_, date, title] = dateMatch;
                posts.push({
                    date,
                    title: title.trim(),
                    link: link.startsWith('http') ? link : `https://kcri.wku.ac.kr/${link.replace(/^\//, '')}`,
                    category: categoryName
                });
            }
        });

        return posts;
    } catch (error) {
        console.error(`Error fetching ${url}:`, error.message);
        return [];
    } finally {
        clearTimeout(timeout);
    }
}

async function main() {
    const urls = [
        ['https://kcri.wku.ac.kr/?cat=100', '국제학술회의'],
        ['https://kcri.wku.ac.kr/?cat=87', '국내학술회의']
    ];
    
    let allNews = [];
    for (const [url, cat] of urls) {
        const news = await fetchNews(url, cat);
        allNews = allNews.concat(news);
    }
    
    if (allNews.length === 0) {
        console.warn('No news items found.');
        return;
    }

    const seenLinks = new Set();
    const uniqueNews = [];
    for (const n of allNews) {
        if (!seenLinks.has(n.link)) {
            uniqueNews.push(n);
            seenLinks.add(n.link);
        }
    }
    
    uniqueNews.sort((a, b) => b.date.localeCompare(a.date));
    const latestNews = uniqueNews.slice(0, 4);
    
    // Add translations before saving
    const translatedNews = await translateNews(latestNews);
    
    const outputPath = path.join(__dirname, 'news.json');
    try {
        fs.writeFileSync(outputPath, JSON.stringify(translatedNews, null, 2), 'utf-8');
        console.log(`Successfully updated news.json with ${translatedNews.length} translated items.`);
    } catch (err) {
        console.error('Failed to write news.json:', err);
    }
}

main();


