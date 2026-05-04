document.addEventListener('DOMContentLoaded', () => {
    if (typeof translations === 'undefined') {
        console.error('Translations not loaded! Please check translations_v107.js');
        return;
    }

    const currentLangText = document.querySelector('.current-lang');
    const langOptions = document.querySelectorAll('.lang-dropdown li');
    const langSelector = document.querySelector('.lang-selector');
    const langBtn = document.querySelector('.lang-btn');
    const getI18nElements = () => ({
        i18n: document.querySelectorAll('[data-i18n]'),
        alt: document.querySelectorAll('[data-i18n-alt]'),
        placeholder: document.querySelectorAll('[data-i18n-placeholder]'),
        aria: document.querySelectorAll('[data-i18n-aria-label]'),
        title: document.querySelectorAll('[data-i18n-title]')
    });

    let currentNewsData = [];
    let currentAppLang = 'ko';

    const getJsLocale = (l) => l === 'zh_hant' ? 'zh-Hant' : (l === 'zh' ? 'zh-Hans' : l.replace('_', '-'));
    const langData = { 
        ko: { flag: "🇰🇷", name: "한국어" }, en: { flag: "🇺🇸", name: "English" }, zh: { flag: "🇨🇳", name: "中文" }, 
        ja: { flag: "🇯🇵", name: "日本語" }, de: { flag: "🇩🇪", name: "Deutsch" }, es: { flag: "🇪🇸", name: "Español" },
        ne: { flag: "🇳🇵", name: "네पाली" }, mn: { flag: "🇲🇳", name: "Монгол" }, vi: { flag: "🇻🇳", name: "Tiếng Việt" },
        bn: { flag: "🇧🇩", name: "বাংলা" }, az: { flag: "🇦🇿", name: "Azərbaycan" }, uz: { flag: "🇺🇿", name: "O'zbek" },
        id: { flag: "🇮🇩", name: "Bahasa Indonesia" }, zh_hant: { flag: "🇭🇰", name: "繁體中文" }, kk: { flag: "🇰🇿", name: "Қазақша" }, th: { flag: "🇹🇭", name: "ไทย" }
    };

    const renderKcriNews = (lang) => {
        const newsContainer = document.getElementById('kcri-news-list');
        if (!newsContainer) return;
        
        if (!currentNewsData || !currentNewsData.length) {
            newsContainer.innerHTML = `<div class="news-loading">${translations[lang]?.news_loading || translations['ko']?.news_loading || 'Loading...'}</div>`;
            return;
        }

        newsContainer.innerHTML = currentNewsData.map(item => `
            <a href="${item.link}" target="_blank" class="news-card">
                <div class="news-date">${item.date}</div>
                <div class="news-title">${item.titles?.[lang] || item.titles?.en || item.titles?.ko || ''}</div>
                <div class="news-tag">${item.categories?.[lang] || item.categories?.en || item.categories?.ko || '학술회의'}</div>
            </a>
        `).join('');
        console.log(`News rendered in ${lang}`);
    };

    const updateLanguage = (lang) => {
        currentAppLang = lang;
        document.documentElement.lang = getJsLocale(lang);
        const t = translations[lang];
        if (!t) return;

        const elements = getI18nElements();
        elements.i18n.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el[el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' ? 'value' : 'innerText'] = t[key];
        });

        // Simplified attribute updates
        const attrMap = { 'alt': 'alt', 'placeholder': 'placeholder', 'aria-label': 'aria', 'title': 'title' };
        Object.entries(attrMap).forEach(([attr, keySuffix]) => {
            elements[keySuffix].forEach(el => {
                const key = el.getAttribute(`data-i18n-${attr}`);
                if (t[key]) el.setAttribute(attr, t[key]);
            });
        });

        // Visitor Count Localizing
        const vEl = document.getElementById('visitor-count');
        if (vEl) {
            const count = parseInt(vEl.getAttribute('data-current-count') || vEl.getAttribute('data-count') || 0);
            vEl.innerText = (t.visitor_count_value || '{n}+').replace('{n}', count.toLocaleString(getJsLocale(lang)));
        }

        // SEO Meta Tags
        ['title', 'description'].forEach(f => {
            if (t[`site_${f}`]) {
                if (f === 'title') document.title = t.site_title;
                document.querySelectorAll(`meta[name="${f}"], meta[property="og:${f}"], meta[property="twitter:${f}"]`).forEach(el => el.content = t[`site_${f}`]);
            }
        });
        
        if (currentLangText) {
            const data = langData[lang] || { flag: "", name: lang };
            currentLangText.innerHTML = `<span class="flag-icon">${data.flag}</span> ${data.name}`;
        }
        
        localStorage.setItem('preferredLang', lang);
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
        if (currentNewsData.length) renderKcriNews(lang);
    };

    // UI Events
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langBtn.setAttribute('aria-expanded', langBtn.getAttribute('aria-expanded') !== 'true');
            langSelector.classList.toggle('active');
        });
    }

    document.addEventListener('click', () => {
        langBtn?.setAttribute('aria-expanded', 'false');
        langSelector?.classList.remove('active');
    });

    langOptions.forEach(opt => opt.addEventListener('click', (e) => {
        e.stopPropagation();
        updateLanguage(opt.getAttribute('data-lang'));
        langBtn.setAttribute('aria-expanded', 'false');
        langSelector.classList.remove('active');
    }));

    // Mobile Nav
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            [mobileToggle, navMenu].forEach(el => el.classList.toggle('active'));
        });
        document.querySelectorAll('#main-nav a').forEach(link => link.addEventListener('click', () => {
            [mobileToggle, navMenu].forEach(el => el.classList.remove('active'));
        }));
    }

    // Initial Lang Detection
    const getBrowserLang = () => {
        const navLang = navigator.language || 'ko';
        const short = navLang.split('-')[0].toLowerCase();
        const map = { 'ko': 'ko', 'en': 'en', 'zh': (navLang.toLowerCase().match(/tw|hk/) ? 'zh_hant' : 'zh'), 'ja': 'ja', 'de': 'de', 'es': 'es', 'vi': 'vi', 'id': 'id', 'th': 'th', 'mn': 'mn', 'ne': 'ne', 'uz': 'uz', 'az': 'az', 'kk': 'kk', 'bn': 'bn' };
        return map[short] || 'ko';
    };

    const urlParams = new URLSearchParams(window.location.search);
    const initialLang = urlParams.get('lang') || localStorage.getItem('preferredLang') || getBrowserLang();
    updateLanguage(translations[initialLang] ? initialLang : 'ko');

    // News Fetch
    (async () => {
        try {
            const res = await fetch('news.json');
            if (!res.ok) throw 0;
            currentNewsData = await res.json();
            renderKcriNews(currentAppLang);
        } catch (e) {
            const sec = document.getElementById('news');
            if (sec) sec.style.display = 'none';
        }
    })();

    // Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const bList = document.getElementById('books-list');
    const pList = document.getElementById('papers-list');
    tabBtns.forEach(btn => btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const isBooks = btn.getAttribute('data-tab') === 'books';
        bList.style.display = isBooks ? 'grid' : 'none';
        pList.style.display = isBooks ? 'none' : 'grid';
    }));

    // Scroll reveal
    const revealCallback = (entries, observer) => entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
    const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.15 });
    document.querySelectorAll('.section, .hero-text, .hero-image, .research-item, .about-card').forEach(el => {
        Object.assign(el.style, { opacity: '0', transform: 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)' });
        revealObserver.observe(el);
    });
    const s = document.createElement('style');
    s.innerHTML = ".revealed { opacity: 1 !important; transform: translateY(0) !important; }";
    document.head.appendChild(s);

    // Back to top
    const btt = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => btt?.classList.toggle('visible', window.scrollY > 400));
    btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Visitor Animation
    const vEl = document.getElementById('visitor-count');
    if (vEl) {
        const target = parseInt(vEl.getAttribute('data-count'));
        const startTime = performance.now();
        const animate = (time) => {
            const progress = Math.min((time - startTime) / 2000, 1);
            const current = Math.floor((1 - Math.pow(1 - progress, 3)) * target);
            vEl.setAttribute('data-current-count', current);
            vEl.innerText = (translations[currentAppLang]?.visitor_count_value || '{n}+').replace('{n}', current.toLocaleString(getJsLocale(currentAppLang)));
            if (progress < 1) requestAnimationFrame(animate);
            else setInterval(() => {
                const inc = Math.random() > 0.5 ? 1 : 0;
                if (inc) {
                    const next = parseInt(vEl.getAttribute('data-current-count')) + inc;
                    vEl.setAttribute('data-current-count', next);
                    vEl.innerText = (translations[currentAppLang]?.visitor_count_value || '{n}+').replace('{n}', next.toLocaleString(getJsLocale(currentAppLang)));
                }
            }, 20000);
        };
        requestAnimationFrame(animate);
    }
});
