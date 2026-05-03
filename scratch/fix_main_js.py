import os

file_path = r'd:/Antigravity/wku_prof_site/main.js'

ko_content = """        ko: {
            site_title: "김미라 교수 - 원광대학교 한중관계연구원",
            site_description: "원광대학교 한중관계연구원 연구교수 김미라 교수의 공식 홈페이지입니다. 중국 고전산문, 문학비평, 한중비교문학 연구 및 주요 저서 정보를 제공합니다.",
            wku_name: "원광대학교",
            header_title: "한중관계연구원 연구교수",
            nav_profile: "프로필",
            nav_research: "연구분야",
            nav_publications: "학술성과",
            nav_contact: "연락처",
            hero_sub_title: "학문과 지혜의 조화",
            prof_name: "김미라",
            prof_title_suffix: "교수",
            hero_desc: "원광대학교 한중관계연구원에서 중국 고전산문을 연구하며, 전통의 깊이와 현대적 시각을 잇는 학문적 가교 역할을 수행하고 있습니다.",
            hero_btn_research: "연구 둘러보기",
            hero_btn_contact: "문의하기",
            prof_img_alt: "김미라 교수 프로필 사진",
            section_about_badge: "ABOUT",
            section_about_title: "학문적 여정",
            about_history_title: "학력 및 경력",
            about_history_1_date: "현재",
            about_history_1_desc: "원광대학교 한중관계연구원 연구교수",
            about_history_2_date: "최종학위",
            about_history_2_desc: "중국 복단대학(复旦大学) 문학 박사 (중국고대문학 전공)",
            about_content_p1: "중국 복단대학에서 중국고대문학 박사 학위를 취득한 후, 중국 고전 산문과 문학 비평, 그리고 한중 비교 문학 분야에서 심도 있는 연구를 수행하고 있습니다. 특히 고전 텍스트의 현대적 해석과 AI를 활용한 새로운 인문학적 접근에도 관심을 기울이고 있습니다.",
            about_quote: "\\"학문은 과거와 현재를 잇는 대화이며, 사람과 시대를 이해하는 창입니다.\\"",
            section_research_badge: "RESEARCH",
            section_research_title: "주요 연구 분야",
            research_1_title: "중국고전산문",
            research_1_desc: "당송팔대가를 비롯한 중국 고전 산문의 문체와 사상적 배경을 심도 있게 연구합니다.",
            research_2_title: "중국고전문학비평",
            research_2_desc: "고전 문학 이론과 비평사적 맥락을 통해 문학적 가치를 분석하고 재조명합니다.",
            research_3_title: "한중비교문학",
            research_3_desc: "한국과 중국 문학 간의 상호 영향과 교류 양상을 비교 문학적 관점에서 고찰합니다.",
            section_pub_badge: "PUBLICATIONS",
            section_pub_title: "학술 및 저술 활동",
            pub_tab_books: "저서",
            pub_tab_papers: "학술지 논문",
            pub_book_1_title: "『중국미술사2 (위진부터 수당까지)』",
            pub_book_1_info: "김미라, 홍기용 공역 | 다른생각 | 2011.",
            pub_paper_1_title: "「柳宗元의 『永州八記』의 認知的 解釋 初探—AI 이미지 생성과의 연계 시도를 겸하며」",
            pub_paper_1_info: "『中國散文硏究集刊』 18집, 2025.06.",
            pub_paper_2_title: "「왕우칭[王禹偁]의 율부 창작 시론」",
            pub_paper_2_info: "『한국인문융합연구』 제1집, 2024.12.",
            pub_paper_3_title: "「王禹偁의 『莊子』 제재 律賦 創作 小考」",
            pub_paper_3_info: "『열린정신 인문학 연구』 25집 제3호, 2024.12.",
            pub_paper_4_title: "「‘養花’와 ‘賞花’, 송대 도시 문인의 소확행 : 歐陽修의 ≪洛陽牡丹記≫를 중심으로」",
            pub_paper_4_info: "『中國散文硏究集刊』 15집, 2023.12.",
            pub_paper_5_title: "「배움과 기록의 전범화 고찰: 茅坤의 ≪唐宋八大家文鈔≫ 수록 ‘學記’를 중심으로」",
            pub_paper_5_info: "『中國散文硏究集刊』 13집, 2022.12.",
            contact_title: "CONTACT",
            contact_desc: "강연 의뢰, 학술 교류 및 기타 문의는 아래 연락처로 주시기 바랍니다.",
            contact_label_phone: "연락처",
            contact_label_email: "이메일",
            contact_label_office: "연구실",
            contact_office_value: "전라북도 익산시 익산대로 460 원광대학교 학군단 3층 한중관계연구원",
            contact_phone_value: "063-850-7120",
            form_placeholder_name: "성함",
            form_placeholder_email: "이메일",
            form_placeholder_message: "문의 내용을 입력해 주세요",
            form_submit: "보내기",
            form_success: "메시지가 성공적으로 전송되었습니다.",
            form_error: "오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
            footer_copyright: "© 2026 김미라 교수. All rights reserved.",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "메뉴 토글",
            back_to_top_title: "위로 이동"
        },"""

en_content = """        en: {
            site_title: "Professor Mira Kim - Wonkwang University",
            site_description: "Official website of Professor Mira Kim, Research Professor at the Institute for Korea-China Relations, Wonkwang University.",
            wku_name: "Wonkwang University",
            header_title: "Research Professor, Institute for Korea-China Relations",
            nav_profile: "Profile",
            nav_research: "Research",
            nav_publications: "Publications",
            nav_contact: "Contact",
            hero_sub_title: "Harmony of Wisdom & Academia",
            prof_name: "Mira Kim",
            prof_title_suffix: "Professor",
            hero_desc: "Researching classical Chinese literature at Wonkwang University, serving as an academic bridge between tradition and modern perspective.",
            hero_btn_research: "View Research",
            hero_btn_contact: "Contact Me",
            prof_img_alt: "Portrait of Professor Mira Kim",
            section_about_badge: "ABOUT",
            section_about_title: "Academic Journey",
            about_history_title: "Education & Career",
            about_history_1_date: "Present",
            about_history_1_desc: "Research Professor, Institute for Korea-China Relations, Wonkwang Univ.",
            about_history_2_date: "Degree",
            about_history_2_desc: "Ph.D. in Ancient Chinese Literature, Fudan University (China)",
            about_content_p1: "After obtaining a Ph.D. in Ancient Chinese Literature from Fudan University, I have been conducting in-depth research in classical Chinese prose, literary criticism, and comparative literature between Korea and China. I am particularly interested in modern interpretations of classical texts and new humanities approaches utilizing AI.",
            about_quote: "\\"Scholarship is a conversation connecting the past and present, a window to understanding people and eras.\\"",
            section_research_badge: "RESEARCH",
            section_research_title: "Key Research Areas",
            research_1_title: "Classical Chinese Prose",
            research_1_desc: "In-depth study of styles and ideological backgrounds of classical Chinese prose.",
            research_2_title: "Classical Literary Criticism",
            research_2_desc: "Analyzing literary values through classical theory and historical context.",
            research_3_title: "Comparative Literature",
            research_3_desc: "Examining interactions and exchanges between Korean and Chinese literature.",
            section_pub_badge: "PUBLICATIONS",
            section_pub_title: "Academic Activities",
            pub_tab_books: "Books",
            pub_tab_papers: "Journal Papers",
            pub_book_1_title: "History of Chinese Art 2 (Wei-Jin to Sui-Tang)",
            pub_book_1_info: "Co-translated by Mira Kim, Kiyong Hong | 2011.",
            pub_paper_1_title: "A Cognitive Interpretation of Liu Zongyuan's 'Eight Records of Yongzhou' — Including an Attempt to Link with AI Image Generation",
            pub_paper_1_info: "Journal of Chinese Prose, Vol. 18, 2025.06.",
            pub_paper_2_title: "Wang Yucheng's Poetic Theory of Lufu Creation",
            pub_paper_2_info: "Humanities Convergence Research, Vol. 1, 2024.12.",
            pub_paper_3_title: "A Study on Wang Yucheng's Lufu Creation Based on Zhuangzi",
            pub_paper_3_info: "Open Spirit Humanities Research, Vol. 25, No. 3, 2024.12.",
            pub_paper_4_title: "Flower Cultivation and Appreciation in Song Dynasty Urban Life",
            pub_paper_4_info: "Journal of Chinese Prose, Vol. 15, 2023.12.",
            pub_paper_5_title: "A Study on the Canonicalization of Learning and Records in Mao Kun",
            pub_paper_5_info: "Journal of Chinese Prose, Vol. 13, 2022.12.",
            contact_title: "CONTACT",
            contact_desc: "For lecture requests, academic exchange, or other inquiries, please contact me below.",
            contact_label_phone: "Phone",
            contact_label_email: "Email",
            contact_label_office: "Office",
            contact_office_value: "3F, Institute for Korea-China Relations, ROTC Building, Wonkwang University, 460 Iksan-daero, Iksan, Jeollabuk-do, Republic of Korea",
            contact_phone_value: "+82-63-850-7120",
            form_placeholder_name: "Name",
            form_placeholder_email: "Email",
            form_placeholder_message: "Enter your message",
            form_submit: "Send",
            form_success: "Message sent successfully.",
            form_error: "An error occurred. Please try again later.",
            footer_copyright: "© 2026 Professor Mira Kim. All rights reserved.",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "Toggle Menu",
            back_to_top_title: "Back to Top"
        },"""

optimized_logic = """    const currentLangText = document.querySelector('.current-lang');
    const langOptions = document.querySelectorAll('.lang-dropdown li');

    // Performance Optimization: Cache all elements that need translation once
    const cachedElements = {
        i18n: document.querySelectorAll('[data-i18n]'),
        alt: document.querySelectorAll('[data-i18n-alt]'),
        placeholder: document.querySelectorAll('[data-i18n-placeholder]'),
        aria: document.querySelectorAll('[data-i18n-aria-label]'),
        title: document.querySelectorAll('[data-i18n-title]')
    };

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

        const langNames = { 
            ko: "한국어", 
            en: "English", 
            zh: "中文", 
            ja: "日本語", 
            de: "Deutsch", 
            es: "Español",
            ne: "नेपाली",
            mn: "Монгол",
            vi: "Tiếng Việt",
            bn: "বাংলা",
            az: "Azərbaycan",
            uz: "O'zbek",
            id: "Bahasa Indonesia",
            zh_hant: "繁體中文",
            kk: "Қазақша",
            th: "ไทย"
        };
        
        if (currentLangText) {
            currentLangText.innerText = langNames[lang] || lang;
        }
        localStorage.setItem('preferredLang', lang);
    };"""

with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

import re

# Replace ko and en blocks
# We'll use a regex to find the translations object and replace its first two keys
translations_pattern = re.compile(r'const translations = \{(.*?)\};', re.DOTALL)
match = translations_pattern.search(content)

if match:
    # This is complex because of nested braces. Let's try a simpler approach.
    # Replace from 'ko: {' to '},' for both ko and en.
    content = re.sub(r'ko: \{.*?\},', ko_content, content, flags=re.DOTALL, count=1)
    content = re.sub(r'en: \{.*?\},', en_content, content, flags=re.DOTALL, count=1)

# Replace the updateLanguage logic block
# Find the start of the old logic and replace until the end of DOMContentLoaded wrapper
logic_start_marker = "const currentLangText"
DOMContentLoaded_end = "});"

if logic_start_marker in content:
    parts = content.split(logic_start_marker)
    header = parts[0]
    # Keep the tail end (the event listener registrations and closing)
    # Actually, it's safer to just replace the whole updateLanguage function block.
    # Let's find the closing brace of DOMContentLoaded
    footer_match = re.search(r'langOptions\.forEach\(option => \{.*\}\);', content, re.DOTALL)
    if footer_match:
        # We replace from currentLangText up to just before langOptions.forEach
        pattern = re.compile(r'const currentLangText = .*?updateLanguage = \(lang\) => \{.*?\};\s+(?=langOptions\.forEach)', re.DOTALL)
        content = pattern.sub(optimized_logic + "\\n\\n    ", content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Restoration and optimization complete.")
