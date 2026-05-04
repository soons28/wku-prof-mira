document.addEventListener('DOMContentLoaded', () => {
    // Check if global translations are loaded from translations_fixed.js
    if (typeof translations === 'undefined') {
        console.error('Translations not loaded! Please check translations_v107.js');
        return;
    }

    const currentLangText = document.querySelector('.current-lang');
    const langOptions = document.querySelectorAll('.lang-dropdown li');

    // Optimization: Cache elements but allow refreshing for dynamic content
    const getI18nElements = () => ({
        i18n: document.querySelectorAll('[data-i18n]'),
        alt: document.querySelectorAll('[data-i18n-alt]'),
        placeholder: document.querySelectorAll('[data-i18n-placeholder]'),
        aria: document.querySelectorAll('[data-i18n-aria-label]'),
        title: document.querySelectorAll('[data-i18n-title]')
    });

    const langSelector = document.querySelector('.lang-selector');
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');

    let currentNewsData = [];
    let currentAppLang = 'ko';

    const renderKcriNews = (lang) => {
        const newsContainer = document.getElementById('kcri-news-list');
        if (!newsContainer) return;
        
        if (!currentNewsData || !currentNewsData.length) {
            const loadingText = (translations[lang] && translations[lang].news_loading) ? translations[lang].news_loading : (translations['ko'].news_loading || 'Loading...');
            newsContainer.innerHTML = `<div class="news-loading">${loadingText}</div>`;
            return;
        }

        newsContainer.innerHTML = '';
        currentNewsData.forEach(item => {
            const newsItem = document.createElement('a');
            newsItem.href = item.link;
            newsItem.target = '_blank';
            newsItem.className = 'news-card';
            
            // Comprehensive language fallback
            let displayTitle = '';
            let displayCat = '';

            if (item.titles) {
                displayTitle = item.titles[lang] || item.titles['en'] || item.titles['ko'] || '';
            }
            
            if (item.categories) {
                displayCat = item.categories[lang] || item.categories['en'] || item.categories['ko'] || '학술회의';
            }

            newsItem.innerHTML = `
                <div class="news-date">${item.date}</div>
                <div class="news-title">${displayTitle}</div>
                <div class="news-tag">${displayCat}</div>
            `;
            newsContainer.appendChild(newsItem);
        });
        console.log(`News rendered in ${lang}`);
    };

    const updateLanguage = (lang) => {
        currentAppLang = lang;
        document.documentElement.lang = lang; // Update HTML lang attribute
        const t = translations[lang];
        if (!t) return;

        const elements = getI18nElements();

        // Update elements with data-i18n
        elements.i18n.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.value = t[key];
                } else {
                    el.innerText = t[key];
                }
            }
        });

        // Update alt text
        elements.alt.forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (t[key]) el.setAttribute('alt', t[key]);
        });

        // Update placeholders
        elements.placeholder.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) el.setAttribute('placeholder', t[key]);
        });

        // Update aria-labels
        elements.aria.forEach(el => {
            const key = el.getAttribute('data-i18n-aria-label');
            if (t[key]) el.setAttribute('aria-label', t[key]);
        });

        // Update titles
        elements.title.forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (t[key]) el.setAttribute('title', t[key]);
        });

        // Localize Visitor Count and other reach stats
        const visitorCountEl = document.getElementById('visitor-count');
        if (visitorCountEl) {
            const countToFormat = parseInt(visitorCountEl.getAttribute('data-current-count')) || parseInt(visitorCountEl.getAttribute('data-count')) || 0;
            const jsLocale = lang === 'zh_hant' ? 'zh-Hant' : (lang === 'zh' ? 'zh-Hans' : lang.replace('_', '-'));
            const formattedNum = countToFormat.toLocaleString(jsLocale);
            
            if (t.visitor_count_value) {
                visitorCountEl.innerText = t.visitor_count_value.replace('{n}', formattedNum);
            } else {
                visitorCountEl.innerText = formattedNum + '+';
            }
            console.log(`Visitor count updated for ${lang}: ${formattedNum}`);
        }

        // Update document title and meta description for SEO
        if (t.site_title) {
            document.title = t.site_title;
            // Update other title-related meta tags
            ['meta[name="title"]', 'meta[property="og:title"]', 'meta[property="twitter:title"]'].forEach(selector => {
                const el = document.querySelector(selector);
                if (el) el.setAttribute('content', t.site_title);
            });
        }

        if (t.site_description) {
            ['meta[name="description"]', 'meta[property="og:description"]', 'meta[property="twitter:description"]'].forEach(selector => {
                const el = document.querySelector(selector);
                if (el) el.setAttribute('content', t.site_description);
            });
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = lang === 'zh_hant' ? 'zh-Hant' : (lang === 'zh' ? 'zh-Hans' : lang);

        // Highlight the flag corresponding to the current language
        document.querySelectorAll('.global-reach .flag').forEach(flag => {
            flag.classList.remove('active');
            if (flag.getAttribute('data-lang') === lang) {
                flag.classList.add('active');
            }
        });

        const langData = { 
            ko: { flag: "🇰🇷", name: "한국어" }, 
            en: { flag: "🇺🇸", name: "English" }, 
            zh: { flag: "🇨🇳", name: "中文" }, 
            ja: { flag: "🇯🇵", name: "日本語" }, 
            de: { flag: "🇩🇪", name: "Deutsch" }, 
            es: { flag: "🇪🇸", name: "Español" },
            ne: { flag: "🇳🇵", name: "네पाली" },
            mn: { flag: "🇲🇳", name: "Монгол" },
            vi: { flag: "🇻🇳", name: "Tiếng Việt" },
            bn: { flag: "🇧🇩", name: "বাংলা" },
            az: { flag: "🇦🇿", name: "Azərbaycan" },
            uz: { flag: "🇺🇿", name: "O'zbek" },
            id: { flag: "🇮🇩", name: "Bahasa Indonesia" },
            zh_hant: { flag: "🇭🇰", name: "繁體中文" },
            kk: { flag: "🇰🇿", name: "Қาзақша" },
            th: { flag: "🇹🇭", name: "ไทย" }
        };
        
        if (currentLangText) {
            const data = langData[lang] || { flag: "", name: lang };
            currentLangText.innerHTML = `<span class="flag-icon">${data.flag}</span> ${data.name}`;
        }
        
        localStorage.setItem('preferredLang', lang);

        // Update URL without reloading
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);

        // Re-render news with the new language
        if (currentNewsData && currentNewsData.length > 0) {
            renderKcriNews(lang);
        }
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
    
    // Fetch and display KCRI News (Academic Conferences)
    const fetchKcriNews = async () => {
        try {
            const response = await fetch('news.json');
            if (!response.ok) throw new Error('News file not found');
            
            currentNewsData = await response.json();
            renderKcriNews(currentAppLang);
        } catch (error) {
            console.log('Using static or empty news state:', error);
            const newsSection = document.getElementById('news');
            if (newsSection) newsSection.style.display = 'none';
        }
    };

    updateLanguage(initialLang);
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

    // Visitor count animation (Simulating real-time academic reach)
    const visitorCountEl = document.getElementById('visitor-count');
    if (visitorCountEl) {
        const target = parseInt(visitorCountEl.getAttribute('data-count'));
        let current = 0;
        const duration = 2000; // 2s animation
        const startTime = performance.now();

        const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            current = Math.floor(easedProgress * target);
            // Store current count for re-formatting on language change
            visitorCountEl.setAttribute('data-current-count', Math.floor(current));
            const jsLocale = currentAppLang === 'zh_hant' ? 'zh-Hant' : (currentAppLang === 'zh' ? 'zh-Hans' : currentAppLang.replace('_', '-'));
            const formattedNum = Math.floor(current).toLocaleString(jsLocale);
            const t = translations[currentAppLang];
            
            if (t && t.visitor_count_value) {
                visitorCountEl.innerText = t.visitor_count_value.replace('{n}', formattedNum);
            } else {
                visitorCountEl.innerText = formattedNum + '+';
            }
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Occasional "real-time" increment every 15-30 seconds
                setInterval(() => {
                    const randomInc = Math.floor(Math.random() * 2);
                    if (randomInc > 0) {
                        const current = parseInt(visitorCountEl.getAttribute('data-current-count') || 0) + randomInc;
                        visitorCountEl.setAttribute('data-current-count', current);
                        const jsLocale = currentAppLang === 'zh_hant' ? 'zh-Hant' : (currentAppLang === 'zh' ? 'zh-Hans' : currentAppLang.replace('_', '-'));
                        const formattedNum = current.toLocaleString(jsLocale);
                        const t = translations[currentAppLang];
                        
                        if (t && t.visitor_count_value) {
                            visitorCountEl.innerText = t.visitor_count_value.replace('{n}', formattedNum);
                        } else {
                            visitorCountEl.innerText = formattedNum + '+';
                        }
                    }
                }, 20000);
            }
        };
        requestAnimationFrame(animate);
    }
});
