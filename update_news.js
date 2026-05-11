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
 * Reuses existing translations from existingNews if available.
 */
async function translateNews(items, existingNews = []) {
    console.log(`Processing ${items.length} items...`);
    
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
    const existingMap = new Map(existingNews.map(item => [item.link, item]));

    for (const item of items) {
        // Check if we already have translations for this link
        const existing = existingMap.get(item.link);
        if (existing && existing.titles && existing.categories) {
            console.log(`  - Reusing existing translations for: ${item.title.substring(0, 20)}...`);
            item.titles = existing.titles;
            item.categories = existing.categories;
            delete item.title;
            delete item.category;
            continue;
        }

        console.log(`  - Translating new item: ${item.title.substring(0, 20)}...`);
        item.titles = { ko: item.title };
        item.categories = { ko: item.category };
        
        for (const [key, langCode] of Object.entries(TARGET_LANGS)) {
            if (key === 'ko') continue;
            
            let success = false;
            let retries = 0;
            const maxRetries = 3;

            while (!success && retries < maxRetries) {
                try {
                    // Individual translation for better quality/accuracy
                    const resultTitle = await translate(item.title, { to: langCode });
                    const translatedTitle = Array.isArray(resultTitle) ? resultTitle[0] : resultTitle;
                    
                    await delay(300); // Increased delay
                    
                    const resultCat = await translate(item.category, { to: langCode });
                    const translatedCat = Array.isArray(resultCat) ? resultCat[0] : resultCat;
                    
                    item.titles[key] = translatedTitle || item.title;
                    item.categories[key] = translatedCat || item.category;
                    
                    success = true;
                    console.log(`    [${key}] Translated.`);
                    await delay(500); // 500ms delay between languages
                } catch (err) {
                    retries++;
                    console.error(`    [${key}] Failed (Attempt ${retries}/${maxRetries}):`, err.message);
                    
                    if (err.message.includes('429')) {
                        const waitTime = 10000 * retries; // Wait 10s, 20s, 30s
                        console.log(`    Rate limit hit, waiting ${waitTime/1000}s...`);
                        await delay(waitTime);
                    } else {
                        // For other errors, wait a bit and retry
                        await delay(2000);
                    }
                }
            }

            if (!success) {
                console.warn(`    [${key}] Giving up translation, using original.`);
                item.titles[key] = item.title;
                item.categories[key] = item.category;
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
            // Improved regex to handle date ranges like [2023.10.12-13]
            const dateMatch = text.match(/^\[(\d{4}\.\d{2}\.\d{2}[^\]]*)\]\s*(.+)$/);
            
            if (dateMatch && link) {
                const [_, date, title] = dateMatch;
                posts.push({
                    date: date.trim(),
                    title: title.trim(),
                    link: link.startsWith('http') ? link : `https://kcri.wku.ac.kr/${link.replace(/^\//, '')}`,
                    category: categoryName
                });
            }
        });

        return posts;
    } catch (error) {
        console.error(`Error fetching ${categoryName} from ${url}:`, error.message);
        return [];
    } finally {
        clearTimeout(timeout);
    }
}

async function main() {
    try {
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
            console.warn('No news items found. Check if the website structure has changed.');
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
        
        // Load existing news for translation reuse
        const outputPath = path.join(__dirname, 'news.json');
        let existingNews = [];
        try {
            if (fs.existsSync(outputPath)) {
                existingNews = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
            }
        } catch (e) {
            console.warn('Could not read existing news.json, will translate all.');
        }

        console.log(`Processing ${latestNews.length} latest news items...`);
        const translatedNews = await translateNews(latestNews, existingNews);
        
        fs.writeFileSync(outputPath, JSON.stringify(translatedNews, null, 2), 'utf-8');
        console.log(`Successfully updated news.json with ${translatedNews.length} items.`);
    } catch (error) {
        console.error('Fatal error in main process:', error);
        process.exit(1);
    }
}

main().catch(err => {
    console.error('Unhandled rejection:', err);
    process.exit(1);
});


