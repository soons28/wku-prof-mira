document.addEventListener('DOMContentLoaded', () => {
    // Check if global translations are loaded from translations_fixed.js
    if (typeof translations === 'undefined') {
        console.error('Translations not loaded! Please check translations_v107.js');
        return;
    }

    const currentLangText = document.querySelector('.current-lang');
    const langOptions = document.querySelectorAll('.lang-dropdown li');

    // Performance Optimization: Cache all elements that need translation once
    const cachedElements = {
        i18n: document.querySelectorAll('[data-i18n]'),
        alt: document.querySelectorAll('[data-i18n-alt]'),
        placeholder: document.querySelectorAll('[data-i18n-placeholder]'),
        aria: document.querySelectorAll('[data-i18n-aria-label]'),
        title: document.querySelectorAll('[data-i18n-title]')
    };

    const langSelector = document.querySelector('.lang-selector');
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');

    const updateLanguage = (lang) => {
        const t = translations[lang];
        if (!t) return;

        // Update elements with data-i18n using cached list
        cachedElements.i18n.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.innerText = t[key];
        });

        // Update alt text
        cachedElements.alt.forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (t[key]) el.setAttribute('alt', t[key]);
        });

        // Update placeholders
        cachedElements.placeholder.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) el.setAttribute('placeholder', t[key]);
        });

        // Update aria-labels
        cachedElements.aria.forEach(el => {
            const key = el.getAttribute('data-i18n-aria-label');
            if (t[key]) el.setAttribute('aria-label', t[key]);
        });

        // Update titles
        cachedElements.title.forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (t[key]) el.setAttribute('title', t[key]);
        });

        // Update document title and meta description for SEO
        if (t.site_title) document.title = t.site_title;
        if (t.site_description) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', t.site_description);
        }

        const langData = { 
            ko: { flag: "🇰🇷", name: "한국어" }, 
            en: { flag: "🇺🇸", name: "English" }, 
            zh: { flag: "🇨🇳", name: "中文" }, 
            ja: { flag: "🇯🇵", name: "日本語" }, 
            de: { flag: "🇩🇪", name: "Deutsch" }, 
            es: { flag: "🇪🇸", name: "Español" },
            ne: { flag: "🇳🇵", name: "नेपाली" },
            mn: { flag: "🇲🇳", name: "Монгол" },
            vi: { flag: "🇻🇳", name: "Tiếng Việt" },
            bn: { flag: "🇧🇩", name: "বাংলা" },
            az: { flag: "🇦🇿", name: "Azərbaycan" },
            uz: { flag: "🇺🇿", name: "O'zbek" },
            id: { flag: "🇮🇩", name: "Bahasa Indonesia" },
            zh_hant: { flag: "🇭🇰", name: "繁體中文" },
            kk: { flag: "🇰🇿", name: "Қазақша" },
            th: { flag: "🇹🇭", name: "ไทย" }
        };
        
        if (currentLangText) {
            const data = langData[lang] || { flag: "", name: lang };
            currentLangText.innerHTML = `<span class="flag-icon">${data.flag}</span> ${data.name}`;
        }
        
        localStorage.setItem('preferredLang', lang);

        // Update URL without reloading (optional, helps with user's question about URL)
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
    };

    // Toggle dropdown
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = langBtn.getAttribute('aria-expanded') === 'true';
            langBtn.setAttribute('aria-expanded', !isExpanded);
            langSelector.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        if (langBtn) {
            langBtn.setAttribute('aria-expanded', 'false');
            langSelector.classList.remove('active');
        }
    });

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            updateLanguage(lang);
            langBtn.setAttribute('aria-expanded', 'false');
            langSelector.classList.remove('active');
        });
    });

    // Mobile Navigation Logic
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#main-nav a');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Initial language setup
    const getBrowserLanguage = () => {
        const navLang = navigator.language || navigator.userLanguage;
        if (!navLang) return 'ko';
        
        const shortLang = navLang.split('-')[0].toLowerCase();
        
        // Mapping browser language codes to our supported languages
        const langMap = {
            'ko': 'ko',
            'en': 'en',
            'zh': (navLang.toLowerCase().includes('tw') || navLang.toLowerCase().includes('hk')) ? 'zh_hant' : 'zh',
            'ja': 'ja',
            'de': 'de',
            'es': 'es',
            'vi': 'vi',
            'id': 'id',
            'th': 'th',
            'mn': 'mn',
            'ne': 'ne',
            'uz': 'uz',
            'az': 'az',
            'kk': 'kk',
            'bn': 'bn'
        };
        
        return langMap[shortLang] || 'ko';
    };

    // Check URL parameter first, then localStorage, then browser language
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    const savedLang = localStorage.getItem('preferredLang');
    
    let initialLang = 'ko';
    if (translations[langParam]) {
        initialLang = langParam;
    } else if (savedLang && translations[savedLang]) {
        initialLang = savedLang;
    } else {
        initialLang = getBrowserLanguage();
    }
    
    updateLanguage(initialLang);

    // Fetch and display KCRI News (Academic Conferences)
    const fetchKcriNews = async () => {
        const newsContainer = document.getElementById('kcri-news-list');
        if (!newsContainer) return;

        try {
            // We expect a news.json file generated by GitHub Actions
            const response = await fetch('news.json');
            if (!response.ok) throw new Error('News file not found');
            
            const newsData = await response.json();
            if (!newsData || newsData.length === 0) return;

            newsContainer.innerHTML = ''; // Clear loading state
            
            newsData.slice(0, 4).forEach(item => {
                const newsItem = document.createElement('a');
                newsItem.href = item.link;
                newsItem.target = '_blank';
                newsItem.className = 'news-card';
                newsItem.innerHTML = `
                    <div class="news-date">${item.date}</div>
                    <div class="news-title">${item.title}</div>
                    <div class="news-tag">${item.category || '학술회의'}</div>
                `;
                newsContainer.appendChild(newsItem);
            });
        } catch (error) {
            console.log('Using static or empty news state:', error);
            // If news.json doesn't exist yet, we can hide the section or show a placeholder
            const newsSection = document.getElementById('news');
            if (newsSection) newsSection.style.display = 'none';
        }
    };

    fetchKcriNews();

    // Tab switching logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const booksList = document.getElementById('books-list');
    const papersList = document.getElementById('papers-list');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tabName = btn.getAttribute('data-tab');
            if (tabName === 'books') {
                booksList.style.display = 'grid';
                papersList.style.display = 'none';
            } else {
                booksList.style.display = 'none';
                papersList.style.display = 'grid';
            }
        });
    });

    // Scroll reveal
    const revealElements = document.querySelectorAll('.section, .hero-text, .hero-image, .research-item, .about-card');
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    };
    const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.15 });
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        revealObserver.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = ".revealed { opacity: 1 !important; transform: translateY(0) !important; }";
    document.head.appendChild(style);

    // Back to top
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) backToTopBtn.classList.add('visible');
        else backToTopBtn.classList.remove('visible');
    });
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
