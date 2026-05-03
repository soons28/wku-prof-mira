document.addEventListener('DOMContentLoaded', () => {
    // Real Professor Data & Multi-language translations
    const translations = {
        ko: {
            site_title: "원광대학교 한중관계연구원 김미라 교수 - 공식 홈페이지",
            site_description: "원광대학교 한중관계연구원 김미라 연구교수의 공식 홈페이지입니다. 중국고전산문, 문학비평 및 한중비교문학 연구 성과를 소개합니다.",
            wku_name: "원광대학교",
            header_title: "한중관계연구원 연구교수",
            nav_profile: "프로필",
            nav_research: "연구분야",
            nav_publications: "학술성과",
            nav_contact: "연락처",
            hero_sub_title: "학문과 지혜의 조화",
            prof_name: "김미라",
            prof_title_suffix: "교수",
            hero_desc: "원광대학교 한중관계연구원에서 중국 고전문학을 연구하며, 전통의 깊이와 현대의 시각을 잇는 학문적 가교 역할을 하고 있습니다.",
            hero_btn_research: "연구 둘러보기",
            hero_btn_contact: "문의하기",
            prof_img_alt: "김미라 교수 프로필 사진",
            section_about_badge: "ABOUT",
            section_about_title: "학문적 여정",
            about_history_title: "학력 및 경력",
            about_history_1_date: "현재",
            about_history_1_desc: "원광대학교 한중관계연구원 연구교수",
            about_history_2_date: "최종학위",
            about_history_2_desc: "중국 복단대학(复旦大学) 문학 박사 (중국고대문학)",
            about_content_p1: "중국 복단대학에서 중국고대문학 박사 학위를 취득한 후, 중국 고전 산문과 문학 비평, 그리고 한중 비교 문학 분야에서 깊이 있는 연구를 수행하고 있습니다. 특히 고전 텍스트의 현대적 해석과 AI를 활용한 새로운 인문학적 접근에도 관심을 기울이고 있습니다.",
            about_quote: '"학문은 과거와 현재를 잇는 대화이며, 사람과 시대를 이해하는 창입니다."',
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
            pub_book_1_info: "김미라, 홍기용 공역 | 다른 생각 | 2011.",
            pub_paper_1_title: "「柳宗元의 『永州八記』의 認知的 解釋 初探—AI 이미지 생성과의 연계 시도를 겸하며」",
            pub_paper_1_info: "『中國散文硏究集刊』 18집, 2025.06.",
            pub_paper_2_title: "「왕우칭[王禹偁]의 율부 창작 시론」",
            pub_paper_2_info: "『한국인문융합연구』제1집, 2024.12.",
            pub_paper_3_title: "「王禹偁의 『莊子』 제재 律賦 創作 小考」",
            pub_paper_3_info: "『열린정신 인문학 연구』 25집 제3호, 2024.12.",
            pub_paper_4_title: "「‘養花’와 ‘賞花’, 송대 도시 문인의 소확행 : 歐陽修의 ≪洛陽牡丹記≫를 중심으로」",
            pub_paper_4_info: "『中國散文硏究集刊』 15집, 2023.12.",
            pub_paper_5_title: "「배움과 기록의 전범화 고찰: 茅坤의 ≪唐宋八大家文鈔≫ 수록 ‘學記’를 중심으로」",
            pub_paper_5_info: "『中國散文硏究集刊』 13집, 2022.12.",
            contact_title: "CONTACT",
            contact_desc: "강연 의뢰, 학술 교류 및 기타 문의는 아래 연락처로 주시기 바랍니다.",
            contact_label_phone: "Phone",
            contact_label_email: "Email",
            contact_label_office: "Office",
            contact_office_value: "원광대학교 한중관계연구원 3층",
            contact_phone_value: "+82-63-850-7123",
            form_placeholder_name: "성함",
            form_placeholder_email: "이메일",
            form_placeholder_message: "메시지 내용을 입력하세요",
            form_submit: "보내기",
            footer_copyright: "© 2026 Professor Mira Kim. All rights reserved. Designed for WKU Research.",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "메뉴 토글",
            back_to_top_title: "맨 위로 이동"
        },
        en: {
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
            about_content_p1: "After obtaining a Ph.D. from Fudan University, I have been conducting in-depth research in classical Chinese prose, literary criticism, and comparative literature.",
            about_quote: '"Scholarship is a conversation connecting the past and present, a window to understanding people and eras."',
            section_research_badge: "RESEARCH",
            section_research_title: "Key Research Areas",
            research_1_title: "Classical Chinese Prose",
            research_1_desc: "In-depth study of styles and ideological backgrounds of classical Chinese prose.",
            research_2_title: "Classical Literary Criticism",
            research_2_desc: "Analyzing literary values through classical theories and historical contexts.",
            research_3_title: "Comparative Literature",
            research_3_desc: "Examining mutual influences and exchange patterns between Korean and Chinese literature.",
            section_pub_badge: "PUBLICATIONS",
            section_pub_title: "Publications & Activities",
            pub_tab_books: "Books",
            pub_tab_papers: "Papers",
            pub_book_1_title: "『History of Chinese Art 2 (From Wei-Jin to Sui-Tang)』",
            pub_book_1_info: "Co-translated by Mira Kim, Kiyong Hong | Dareun Saenggak | 2011.",
            pub_paper_1_title: "「A Preliminary Study on the Cognitive Interpretation of Liu Zongyuan's Yongzhou Baji—Combined with AI Image Generation」",
            pub_paper_1_info: "Journal of Chinese Prose Research, Vol. 18, 2025.06.",
            pub_paper_2_title: "「A Study on Wang Yucheng's Theory of Lufu Creation」",
            pub_paper_2_info: "Journal of Korean Humanities Convergence, Vol. 1, 2024.12.",
            pub_paper_3_title: "「A Brief Study on Wang Yucheng's Lufu Creation Based on the Zhuangzi」",
            pub_paper_3_info: "Open Spirit Humanities Research, Vol. 25 No. 3, 2024.12.",
            pub_paper_4_title: "「'Cultivating Flowers' and 'Appreciating Flowers', the Small but Certain Happiness of Song Dynasty Urban Literati」",
            pub_paper_4_info: "Journal of Chinese Prose Research, Vol. 15, 2023.12.",
            pub_paper_5_title: "「A Study on the Canonization of Learning and Recording: Focusing on 'Xueji' in Mao Kun's Tang Song Ba Da Jia Wen Chao」",
            pub_paper_5_info: "Journal of Chinese Prose Research, Vol. 13, 2022.12.",
            contact_title: "CONTACT",
            contact_desc: "For lecture requests or academic exchanges, please contact me below.",
            contact_label_phone: "Phone",
            contact_label_email: "Email",
            contact_label_office: "Office",
            contact_office_value: "3F, Institute for Korea-China Relations, Wonkwang Univ., South Korea",
            contact_phone_value: "+82-63-850-7123",
            form_placeholder_name: "Name",
            form_placeholder_email: "Email",
            form_placeholder_message: "Enter your message here",
            form_submit: "Send",
            footer_copyright: "© 2026 Professor Mira Kim. All rights reserved.",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "Toggle Menu",
            back_to_top_title: "Go to top"
        },
        zh: {
            site_title: "金美罗教授 - 圆光大学",
            site_description: "圆光大学韩中关系研究院金美罗研究教授的官方网站。介绍中国古典散文、文学批评及韩中比较文学的研究成果。",
            wku_name: "圆光大学",
            header_title: "韩中关系研究院 研究教授",
            nav_profile: "个人简介",
            nav_research: "研究领域",
            nav_publications: "学术成果",
            nav_contact: "联系方式",
            hero_sub_title: "学术与智慧的和谐",
            prof_name: "金美罗",
            prof_title_suffix: "教授",
            hero_desc: "在圆光大学韩中关系研究院研究中国古典文学，致力于连接传统深度与现代视角的学术桥梁。",
            hero_btn_research: "查看研究",
            hero_btn_contact: "联系我们",
            prof_img_alt: "金美罗教授 个人照片",
            section_about_badge: "关于",
            section_about_title: "学术历程",
            about_history_title: "教育与背景",
            about_history_1_date: "至今",
            about_history_1_desc: "圆光大学 韩中关系研究院 研究教授",
            about_history_2_date: "最终学位",
            about_history_2_desc: "中国复旦大学 文学博士 (中国古代文学)",
            about_content_p1: "在复旦大学获得博士学位后，致力于中国古典散文、文学批评及韩中比较文学领域的深入研究。",
            about_quote: '“学术是连接过去与现在的对话，是理解人和时代的窗口。”',
            section_research_badge: "研究",
            section_research_title: "主要研究领域",
            research_1_title: "中国古典散文",
            research_1_desc: "深入研究以唐宋八大家为首的中国古典散文文体及思想背景。",
            research_2_title: "中国古典文学批评",
            research_2_desc: "通过古典文学理论和批评史脉络分析并重新审视文学价值。",
            research_3_title: "韩中比较文学",
            research_3_desc: "从比较文学视角考察韩中两国文学间的相互影响与交流模式。",
            section_pub_badge: "成果",
            section_pub_title: "学术及著作活动",
            pub_tab_books: "著作",
            pub_tab_papers: "学术论文",
            pub_book_1_title: "《中国美术史2（从魏晋到隋唐）》",
            pub_book_1_info: "金美罗、洪基用 共译 | Dareun Saenggak | 2011.",
            pub_paper_1_title: "“柳宗元《永州八记》的认知解读初探——兼论与AI图像生成的联动尝试”",
            pub_paper_1_info: "《中国散文研究集刊》第18辑，2025.06.",
            pub_paper_2_title: "“论王禹偁的律赋创作试论”",
            pub_paper_2_info: "《韩国人文融合研究》第1辑，2024.12.",
            pub_paper_3_title: "“关于王禹偁以《庄子》为题材的律赋创作小考”",
            pub_paper_3_info: "《开放精神人文研究》第25卷第3号，2024.12.",
            pub_paper_4_title: "“‘养花’与‘赏花’，宋代都市文人的‘小确幸’：以欧阳修《洛阳牡丹记》为中心”",
            pub_paper_4_info: "《中国散文研究集刊》第15辑，2023.12.",
            pub_paper_5_title: "“学习与记录的典范化考察：以茅坤《唐宋八大家文钞》收录的《学记》为中心”",
            pub_paper_5_info: "《中国散文研究集刊》第13辑，2022.12.",
            contact_title: "联系",
            contact_desc: "讲演邀约、学术交流及其他咨询，请通过以下方式联系。",
            contact_label_phone: "电话",
            contact_label_email: "电子邮箱",
            contact_label_office: "办公室",
            contact_office_value: "圆光大学 韩中关系研究院 3层, 韩国",
            contact_phone_value: "+82-63-850-7123",
            form_placeholder_name: "姓名",
            form_placeholder_email: "邮箱",
            form_placeholder_message: "请输入留言内容",
            form_submit: "发送",
            footer_copyright: "© 2026 金美罗教授。版权所有。",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "切换菜单",
            back_to_top_title: "回到顶部"
        },
        ja: {
            site_title: "キム・ミラ教授 - 円光大学",
            site_description: "円光大学韓中関係研究院キム・ミラ研究教授の公式サイト。中国古典散文、文学批評、韓中比較文学の研究成果を紹介します。",
            wku_name: "円光大学",
            header_title: "韓中関係研究院 研究教授",
            nav_profile: "プロフィール",
            nav_research: "研究分野",
            nav_publications: "学術成果",
            nav_contact: "連絡先",
            hero_sub_title: "学問と知恵の調和",
            prof_name: "キム・ミラ",
            prof_title_suffix: "教授",
            hero_desc: "円光大学韓中関係研究院で中国古典文学를 연구하며, 전통의 깊이와 현대의 시각을 잇는 학문적 가교 역할을 하고 있습니다.",
            hero_btn_research: "研究を見る",
            hero_btn_contact: "お問い合わせ",
            prof_img_alt: "キム・ミラ教授のプロフィール写真",
            section_about_badge: "ABOUT",
            section_about_title: "学問の旅",
            about_history_title: "学歴・経歴",
            about_history_1_date: "現在",
            about_history_1_desc: "円光大学 韓中関係研究院 研究教授",
            about_history_2_date: "学位",
            about_history_2_desc: "中国復旦大学 文学博士 (中国古代文学)",
            about_content_p1: "復旦大学で博士号取得後、中国古典散文、文学批評、韓中比較文学の分野で深い研究を行っています。",
            about_quote: '「学問は過去と現在を繋ぐ対話であり、人と時代を理解する窓です」',
            section_research_badge: "RESEARCH",
            section_research_title: "主な研究分野",
            research_1_title: "中国古典散文",
            research_1_desc: "唐宋八大家をはじめとする中国古典散文の文体と思想的背景を研究します。",
            research_2_title: "中国古典文学批評",
            research_2_desc: "古典文学理論と批評史的文脈を通じて文学的価値を分析します。",
            research_3_title: "韓中比較文学",
            research_3_desc: "韓国と中国文学の相互影響と交流様相を比較文学的観点から考察します。",
            section_pub_badge: "PUBLICATIONS",
            section_pub_title: "学術・著述活動",
            pub_tab_books: "著書",
            pub_tab_papers: "学術論文",
            pub_book_1_title: "『中国美術史2（魏晋から隋唐まで）』",
            pub_book_1_info: "キム・ミラ、ホン・ギヨン共訳 | 他の考え | 2011.",
            pub_paper_1_title: "「柳宗元『永州八記』の認知的解釈初探—AI画像生成との連携試みを兼ねて」",
            pub_paper_1_info: "『中国散文研究集刊』第18集、2025.06.",
            pub_paper_2_title: "「王禹偁の律賦創作試論」",
            pub_paper_2_info: "『韓国人文融合研究』第1集、2024.12.",
            pub_paper_3_title: "「王禹偁の『荘子』を題材とした律賦創作小考」",
            pub_paper_3_info: "『開かれた精神人文学研究』第25巻第3号、2024.12.",
            pub_paper_4_title: "「『養花』と『賞花』、宋代都市文人の小さな幸せ：欧陽修『洛陽牡丹記』を中心に」",
            pub_paper_4_info: "『中国散文研究集刊』第15集、2023.12.",
            pub_paper_5_title: "「学びと記録の典範化考察：茅坤『唐宋八大家文鈔』収録『学記』を中心に」",
            pub_paper_5_info: "『中国散文研究集刊』第13集、2022.12.",
            contact_title: "CONTACT",
            contact_desc: "講演依頼、学術交流などのお問い合わせは、下記までご連絡ください。",
            contact_label_phone: "電話",
            contact_label_email: "メール",
            contact_label_office: "研究室",
            contact_office_value: "円光大学 韓中関係研究院 3階, 韓国",
            contact_phone_value: "+82-63-850-7123",
            form_placeholder_name: "お名前",
            form_placeholder_email: "メールアドレス",
            form_placeholder_message: "メッセージを入力してください",
            form_submit: "送信",
            footer_copyright: "© 2026 キム・ミラ教授。全著作権所有。",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "メニュー切替",
            back_to_top_title: "トップへ戻る"
        },
        de: {
            site_title: "Professorin Mira Kim - Wonkwang Universität",
            site_description: "Offizielle Website von Professorin Mira Kim, Forschungsprofessorin am Institut für koreanisch-chinesische Beziehungen, Wonkwang Universität.",
            wku_name: "Wonkwang Universität",
            header_title: "Forschungsprofessorin am Institut für koreanisch-chinesische Beziehungen",
            nav_profile: "Profil",
            nav_research: "Forschung",
            nav_publications: "Publikationen",
            nav_contact: "Kontakt",
            hero_sub_title: "Harmonie von Weisheit & Wissenschaft",
            prof_name: "Mira Kim",
            prof_title_suffix: "Professorin",
            hero_desc: "Erforschung klassischer chinesischer Literatur an der Wonkwang Universität, als akademische Brücke zwischen Tradition und Moderne.",
            hero_btn_research: "Forschung ansehen",
            hero_btn_contact: "Kontaktieren",
            prof_img_alt: "Porträt von Professorin Mira Kim",
            section_about_badge: "ÜBER MICH",
            section_about_title: "Akademischer Weg",
            about_history_title: "Bildung & Karriere",
            about_history_1_date: "Heute",
            about_history_1_desc: "Forschungsprofessorin am Institut für koreanisch-chinesische Beziehungen",
            about_history_2_date: "Abschluss",
            about_history_2_desc: "Promotion in altchinesischer Literatur, Fudan Universität (China)",
            about_content_p1: "Nach meiner Promotion an der Fudan Universität widme ich mich der Erforschung klassischer chinesischer Prosa, Literaturkritik und Komparatistik.",
            about_quote: '"Wissenschaft ist ein Gespräch zwischen Vergangenheit und Gegenwart, ein Fenster zum Verständnis von Mensch und Zeit."',
            section_research_badge: "FORSCHUNG",
            section_research_title: "Forschungsschwerpunkte",
            research_1_title: "Klassische chin. Prosa",
            research_1_desc: "Eingehende Untersuchung der Stile und ideologischen Hintergründe klassischer chinesischer Prosa.",
            research_2_title: "Klassische Literaturkritik",
            research_2_desc: "Analyse literarischer Werte durch klassische Theorien und historische Kontexte.",
            research_3_title: "Vergleichende Lit.-Wiss.",
            research_3_desc: "Untersuchung der wechselseitigen Einflüsse zwischen koreanischer und chinesischer Literatur.",
            section_pub_badge: "PUBLIKATIONEN",
            section_pub_title: "Wissenschaftliche Aktivitäten",
            pub_tab_books: "Bücher",
            pub_tab_papers: "Aufsätze",
            pub_book_1_title: "『Chinesische Kunstgeschichte 2 (Wei-Jin bis Sui-Tang)』",
            pub_book_1_info: "Mitübersetzt von Mira Kim, Kiyong Hong | Dareun Saenggak | 2011.",
            pub_paper_1_title: "「Kognitive Interpretation von Liu Zongyuans Yongzhou Baji unter Einsatz von KI-Bildgenerierung」",
            pub_paper_1_info: "Journal of Chinese Prose Research, Vol. 18, 2025.06.",
            pub_paper_2_title: "「Untersuchung zur Lufu-Theorie von Wang Yucheng」",
            pub_paper_2_info: "Journal of Korean Humanities Convergence, Vol. 1, 2024.12.",
            pub_paper_3_title: "「Eine kurze Studie über Wang Yurchengs Lufu-Kreation basierend auf Zhuangzi」",
            pub_paper_3_info: "Open Spirit Humanities Research, Vol. 25 No. 3, 2024.12.",
            pub_paper_4_title: "「'Blumenzucht' und 'Blumenbewunderung', das kleine Glück der städtischen Literaten der Song-Dynastie」",
            pub_paper_4_info: "Journal of Chinese Prose Research, Vol. 15, 2023.12.",
            pub_paper_5_title: "「Studie zur Kanonisierung des Lernens und Aufzeichnens: Fokus auf 'Xueji' in Mao Kuns Tang Song Ba Da Jia Wen Chao」",
            pub_paper_5_info: "Journal of Chinese Prose Research, Vol. 13, 2022.12.",
            contact_title: "KONTAKT",
            contact_desc: "Für Vortragsanfragen kontaktieren Sie mich bitte.",
            contact_label_phone: "Tel",
            contact_label_email: "E-Mail",
            contact_label_office: "Büro",
            contact_office_value: "3. Stock, Institut für kor.-chin. Beziehungen, Wonkwang Univ., Südkorea",
            contact_phone_value: "+82-63-850-7123",
            form_placeholder_name: "Name",
            form_placeholder_email: "E-Mail",
            form_placeholder_message: "Ihre Nachricht hier eingeben",
            form_submit: "Absenden",
            footer_copyright: "© 2026 Professorin Mira Kim. Alle Rechte vorbehalten.",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "Menü umschalten",
            back_to_top_title: "Nach oben"
        },
        es: {
            site_title: "Profesora Mira Kim - Universidad Wonkwang",
            site_description: "Sitio web oficial de la Profesora Mira Kim, Investigadora en el Instituto de Relaciones Corea-China, Universidad Wonkwang.",
            wku_name: "Universidad Wonkwang",
            header_title: "Profesora de Investigación, Instituto de Relaciones Corea-China",
            nav_profile: "Perfil",
            nav_research: "Investigación",
            nav_publications: "Publicaciones",
            nav_contact: "Contacto",
            hero_sub_title: "Armonía de Sabiduría y Academia",
            prof_name: "Mira Kim",
            prof_title_suffix: "Profesora",
            hero_desc: "Investigando literatura china clásica en la Universidad Wonkwang, sirviendo como puente académico entre la tradición y la perspectiva moderna.",
            hero_btn_research: "Ver Investigación",
            hero_btn_contact: "Contáctame",
            prof_img_alt: "Retrato de la profesora Mira Kim",
            section_about_badge: "SOBRE MÍ",
            section_about_title: "Trayectoria Académica",
            about_history_title: "Educación y Carrera",
            about_history_1_date: "Presente",
            about_history_1_desc: "Profesora de Investigación, Instituto de Relaciones Corea-China",
            about_history_2_date: "Grado",
            about_history_2_desc: "Doctorado en Literatura China Antigua, Universidad Fudan (China)",
            about_content_p1: "Tras doctorarme en la Universidad Fudan, realizo investigaciones profundas en prosa china clásica, crítica literaria y literatura comparada.",
            about_quote: '"La academia es una conversación que conecta el pasado y el presente, una ventana para comprender a las personas y las épocas."',
            section_research_badge: "INVESTIGACIÓN",
            section_research_title: "Áreas de Investigación",
            research_1_title: "Prosa China Clásica",
            research_1_desc: "Estudio profundo de los estilos y trasfondos ideológicos de la prosa clásica china.",
            research_2_title: "Crítica Literaria Clásica",
            research_2_desc: "Analizando valores literarios a través de teorías clásicas y contextos históricos.",
            research_3_title: "Literatura Comparada",
            research_3_desc: "Examinando influencias mutuas y patrones de intercambio entre la literatura coreana y china.",
            section_pub_badge: "PUBLICACIONES",
            section_pub_title: "Actividades Académicas",
            pub_tab_books: "Libros",
            pub_tab_papers: "Artículos",
            pub_book_1_title: "『Historia del Arte Chino 2 (De Wei-Jin a Sui-Tang)』",
            pub_book_1_info: "Co-traducido por Mira Kim, Kiyong Hong | Dareun Saenggak | 2011.",
            pub_paper_1_title: "「Interpretación cognitiva de Yongzhou Baji de Liu Zongyuan: Uso de generación de imágenes por IA」",
            pub_paper_1_info: "Revista de Investigación de Prosa China, Vol. 18, 2025.06.",
            pub_paper_2_title: "「Estudio sobre la teoría de la creación de Lufu de Wang Yucheng」",
            pub_paper_2_info: "Journal of Korean Humanities Convergence, Vol. 1, 2024.12.",
            pub_paper_3_title: "「Un breve estudio sobre la creación de Lufu de Wang Yucheng basada en el Zhuangzi」",
            pub_paper_3_info: "Open Spirit Humanities Research, Vol. 25 No. 3, 2024.12.",
            pub_paper_4_title: "「'Cultivar flores' y 'Apreciar flores', la pequeña pero segura felicidad de los literatos urbanos de la dinastía Song」",
            pub_paper_4_info: "Revista de Investigación de Prosa China, Vol. 15, 2023.12.",
            pub_paper_5_title: "「Estudio sobre la canonización del aprendizaje y el registro: Centrado en 'Xueji' en Tang Song Ba Da Jia Wen Chao de Mao Kun」",
            pub_paper_5_info: "Revista de Investigación de Prosa China, Vol. 13, 2022.12.",
            contact_title: "CONTACTO",
            contact_desc: "Para solicitudes de conferencias o intercambios académicos, por favor contácteme a continuación.",
            contact_label_phone: "Tel",
            contact_label_email: "Correo",
            contact_label_office: "Oficina",
            contact_office_value: "3F, Instituto de Relaciones Corea-China, Univ. Wonkwang, Corea del Sur",
            contact_phone_value: "+82-63-850-7123",
            form_placeholder_name: "Nombre",
            form_placeholder_email: "Correo electrónico",
            form_placeholder_message: "Ingrese su mensaje aquí",
            form_submit: "Enviar",
            footer_copyright: "© 2026 Profesora Mira Kim. Todos los derechos reservados.",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "Alternar menú",
            back_to_top_title: "Volver arriba"
        }
    };

    const currentLangText = document.querySelector('.current-lang');
    const langOptions = document.querySelectorAll('.lang-dropdown li');

    const updateLanguage = (lang) => {
        const t = translations[lang];
        if (!t) return;

        // Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.innerText = t[key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) {
                el.placeholder = t[key];
            }
        });

        // Update alt tags
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (t[key]) {
                el.alt = t[key];
            }
        });

        // Update titles
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (t[key]) {
                el.title = t[key];
            }
        });

        // Update aria-labels
        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria-label');
            if (t[key]) {
                el.setAttribute('aria-label', t[key]);
            }
        });

        // Update document title and meta description for SEO
        if (t.site_title) document.title = t.site_title;
        if (t.site_description) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', t.site_description);
        }

        const langNames = { ko: "한국어", en: "English", zh: "中文", ja: "日本語", de: "Deutsch", es: "Español" };
        currentLangText.innerText = langNames[lang];
        localStorage.setItem('preferredLang', lang);
    };

    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            updateLanguage(lang);
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

    const savedLang = localStorage.getItem('preferredLang') || 'ko';
    updateLanguage(savedLang);

    // Tab switching logic for publications
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

    // Header scroll effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '1rem 0';
            header.style.background = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for reveal animations
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
    style.innerHTML = `
        .revealed { opacity: 1 !important; transform: translateY(0) !important; }
    `;
    document.head.appendChild(style);

    // Form submission mock
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = '...';
            btn.disabled = true;

            setTimeout(() => {
                const currentLang = localStorage.getItem('preferredLang') || 'ko';
                const msg = {
                    ko: '메시지가 성공적으로 전송되었습니다.',
                    en: 'Message sent successfully.',
                    zh: '消息已成功发送。',
                    ja: 'メッセージが送信されました。',
                    de: 'Nachricht erfolgreich gesendet.',
                    es: 'Mensaje enviado con éxito.'
                };
                alert(msg[currentLang]);
                btn.innerText = originalText;
                btn.disabled = false;
                contactForm.reset();
            }, 1000);
        });
    }

    // Back to Top Logic
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });


    // Hero Parallax Effect
    document.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('#hero');
        if (!hero) return;
        
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        const bg = hero.querySelector('.video-bg-layer');
        const mist1 = hero.querySelector('.mist-1');
        const mist2 = hero.querySelector('.mist-2');
        const b1 = hero.querySelector('.butterfly-1');
        const b2 = hero.querySelector('.butterfly-2');
        const d1 = hero.querySelector('.duck-1');
        
        if (bg) bg.style.transform = `scale(1.05) translate(${x * 0.5}px, ${y * 0.5}px)`;
        if (mist1) mist1.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
        if (mist2) mist2.style.transform = `translate(${x * -1}px, ${y * -1}px)`;
        if (b1) b1.style.transform = `translate(${x * 3}px, ${y * 3}px)`;
        if (b2) b2.style.transform = `translate(${x * -2}px, ${y * 4}px)`;
        if (d1) d1.style.transform = `translate(${x * 0.2}px, ${y * 0.1}px)`;
    });
});
