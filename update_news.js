const fs = require('fs');
const path = require('path');

async function fetchNews(url, categoryName) {
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        
        const posts = [];
        // Since we don't have cheerio installed locally yet, we can use regex for a simple parse
        // format: <a href="LINK">[[DATE]] TITLE</a>
        // Example: <a href="https://kcri.wku.ac.kr/?p=7586">[2025.09.20] 한중관계연구원...</a>
        
        const regex = /<a[^>]+href="([^"]+)"[^>]*>\[(\d{4}\.\d{2}\.\d{2})\]\s*([^<]+)<\/a>/g;
        let match;
        while ((match = regex.exec(html)) !== null) {
            const [_, link, date, title] = match;
            // Basic HTML entity decoding
            const decodedTitle = title
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'")
                .trim();

            posts.push({
                date,
                title: decodedTitle,
                link: link.startsWith('http') ? link : `https://kcri.wku.ac.kr/${link.replace(/^\//, '')}`,
                category: categoryName
            });
        }
        return posts;
    } catch (error) {
        console.error(`Error fetching ${url}:`, error);
        return [];
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
    
    // Remove duplicates
    const seenLinks = new Set();
    const uniqueNews = [];
    for (const n of allNews) {
        if (!seenLinks.has(n.link)) {
            uniqueNews.push(n);
            seenLinks.add(n.link);
        }
    }
    
    // Sort by date descending
    uniqueNews.sort((a, b) => b.date.localeCompare(a.date));
    
    // Limit to 4
    const latestNews = uniqueNews.slice(0, 4);
    
    const outputPath = path.join(__dirname, 'news.json');
    fs.writeFileSync(outputPath, JSON.stringify(latestNews, null, 2), 'utf-8');
    
    console.log(`Successfully updated news.json with ${latestNews.length} items.`);
}

main();
