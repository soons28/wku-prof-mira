document.addEventListener('DOMContentLoaded', () => {
    // Real Professor Data & Multi-language translations
    const translations = {
        ko: {
            site_title: "김미라 교수 - 원광대학교 한중관계연구원",
            site_description: "원광대학교 한중관계연구원 김미라 교수 공식 홈페이지입니다. 중국고전문학, 문학비평 및 한중비교문학 연구 성과를 소개합니다.",
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
            contact_label_phone: "연락처",
            contact_label_email: "이메일",
            contact_label_office: "연구실",
            contact_office_value: "전라북도 익산시 익산대로460 원광대학교 학군단 3층 한중관계연구원",
            contact_phone_value: "063-850-7120",
            form_placeholder_name: "성함",
            form_placeholder_email: "이메일",
            form_placeholder_message: "메시지 내용을 입력하세요",
            form_submit: "보내기",
            form_success: "메시지가 성공적으로 전송되었습니다.",
            form_error: "오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
            footer_copyright: "© 2026 Professor Mira Kim. All rights reserved. Designed for WKU Research.",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "메뉴 토글",
            back_to_top_title: "위로 이동"
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
            research_2_desc: "Analyzing literary values through classical theory and historical context.",
            research_3_title: "Comparative Literature",
            research_3_desc: "Examining interactions and exchanges between Korean and Chinese literature.",
            section_pub_badge: "PUBLICATIONS",
            section_pub_title: "Academic Activities",
            pub_tab_books: "Books",
            pub_tab_papers: "Journal Papers",
            pub_book_1_title: "History of Chinese Art 2 (Wei-Jin to Sui-Tang)",
            pub_book_1_info: "Co-translated by Mira Kim, Kiyong Hong | Dareun Saenggak | 2011.",
            pub_paper_1_title: "A Cognitive Interpretation of Liu Zongyuan's Eight Records of Yongzhou",
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
        },
        zh: {
            site_title: "金美拉 教授 - 圆光大学韩中关系研究院",
            site_description: "圆光大学韩中关系研究院 金美拉 教授 官方网站。介绍中国古典散文、文学批评及韩中比较文学的研究成果。",
            wku_name: "圆光大学",
            header_title: "韩中关系研究院 研究教授",
            nav_profile: "个人简介",
            nav_research: "研究领域",
            nav_publications: "学术成果",
            nav_contact: "联系方式",
            hero_sub_title: "学问与智慧的融合",
            prof_name: "金美拉",
            prof_title_suffix: "教授",
            hero_desc: "在圆光大学韩中关系研究院从事中国古典文学研究，致力于搭建连接传统深度与现代视角的学术桥梁。",
            hero_btn_research: "查看研究",
            hero_btn_contact: "咨询详情",
            prof_img_alt: "金美拉 教授 个人肖像",
            section_about_badge: "关于",
            section_about_title: "学术历程",
            about_history_title: "学历及经历",
            about_history_1_date: "现任",
            about_history_1_desc: "圆光大学韩中关系研究院 研究教授",
            about_history_2_date: "最终学位",
            about_history_2_desc: "中国复旦大学 文学博士 (中国古代文学)",
            about_content_p1: "在复旦大学获得博士学位后，致力于中国古典散文、文学批评及韩中比较文学的深入研究。",
            about_quote: '“学术是连接过去与现在的对话，是理解人与时代的窗口。”',
            section_research_badge: "研究",
            section_research_title: "主要研究领域",
            research_1_title: "中国古典散文",
            research_1_desc: "深入研究包括唐宋八大家在内的中国古典散文的文体及思想背景。",
            research_2_title: "中国古典文学批评",
            research_2_desc: "通过古典文学理论和批评史语境，分析并重新审视文学价值。",
            research_3_title: "韩中比较文学",
            research_3_desc: "从比较文学的角度考察韩中两国文学间的相互影响及交流样态。",
            section_pub_badge: "学术活动",
            section_pub_title: "学术及著述活动",
            pub_tab_books: "著作",
            pub_tab_papers: "学术论文",
            pub_book_1_title: "《中国美术史2（魏晋至隋唐）》",
            pub_book_1_info: "金美拉, 洪起用 合译 | Dareun Saenggak | 2011.",
            pub_paper_1_title: "「柳宗元《永州八记》的认知性解释初探」",
            pub_paper_1_info: "《中国散文研究集刊》第18辑, 2025.06.",
            pub_paper_2_title: "「王禹偁律赋创作诗论」",
            pub_paper_2_info: "《韩国人文融合研究》第1辑, 2024.12.",
            pub_paper_3_title: "「王禹偁《庄子》题材律赋创作小考」",
            pub_paper_3_info: "《开明精神人文学研究》第25辑第3号, 2024.12.",
            pub_paper_4_title: "「宋代城市文人的“养花”与“赏花”」",
            pub_paper_4_info: "《中国散文研究集刊》第15辑, 2023.12.",
            pub_paper_5_title: "「茅坤《唐宋八大家文钞》收录“学记”考」",
            pub_paper_5_info: "《中国散文研究集刊》第13辑, 2022.12.",
            contact_title: "联系方式",
            contact_desc: "讲演邀约、学术交流及其他咨询，请通过以下方式联系。",
            contact_label_phone: "电话",
            contact_label_email: "电子邮箱",
            contact_label_office: "办公室",
            contact_office_value: "全罗北道益山市益山大路460 圆光大学校 学军团3层 韩中关系研究院",
            contact_phone_value: "+82-63-850-7120",
            form_placeholder_name: "姓名",
            form_placeholder_email: "邮箱",
            form_placeholder_message: "请输入内容",
            form_submit: "发送",
            form_success: "消息发送成功。",
            form_error: "发生错误，请稍后再试。",
            footer_copyright: "© 2026 金美拉 教授。版权所有。",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "切换菜单",
            back_to_top_title: "返回顶部"
        },
        ja: {
            site_title: "金美拉 教授 - 円光大学校韓中関係研究院",
            site_description: "円光大学校韓中関係研究院 金美拉 教授 公式ウェブサイト。中国古典散文、文学批評、韓中比較文学の研究成果を紹介します。",
            wku_name: "円光大学",
            header_title: "韓中関係研究院 研究教授",
            nav_profile: "プロフィール",
            nav_research: "研究分野",
            nav_publications: "研究成果",
            nav_contact: "連絡先",
            hero_sub_title: "学問と知恵の調和",
            prof_name: "金美拉",
            prof_title_suffix: "教授",
            hero_desc: "円光大学校韓中関係研究院で中国古典文学を研究し、伝統의 深みと現代の視点を結ぶ学術的な架け橋としての役割を担っています。",
            hero_btn_research: "研究を見る",
            hero_btn_contact: "お問い合わせ",
            prof_img_alt: "金美拉 教授 ポートレート",
            section_about_badge: "ABOUT",
            section_about_title: "学問の旅",
            about_history_title: "学歴および経歴",
            about_history_1_date: "現在",
            about_history_1_desc: "円光大学校韓中関係研究院 研究教授",
            about_history_2_date: "最終学位",
            about_history_2_desc: "中国 復旦大学 文学博士 (中国古代文学)",
            about_content_p1: "復旦大学で博士号を取得後、中国古典散文、文学批評、韓中比較文学の分野で深い研究を行っています。",
            about_quote: '「学問は過去と現在を結ぶ対話であり、人と時代を理解するための窓です。」',
            section_research_badge: "RESEARCH",
            section_research_title: "主要研究分野",
            research_1_title: "中国古典散文",
            research_1_desc: "唐宋八大家をはじめとする中国古典散文の文体と思想的背景を深く研究します。",
            research_2_title: "中国古典文学批評",
            research_2_desc: "古典文学理論と批評史的文脈を通じて文学的価値を分析し、再照明します。",
            research_3_title: "韓中比較文学",
            research_3_desc: "韓国と中国の文学間の相互影響と交流の様相を比較文学的な視点から考察します。",
            section_pub_badge: "PUBLICATIONS",
            section_pub_title: "学術および著述活動",
            pub_tab_books: "著書",
            pub_tab_papers: "学術論文",
            pub_book_1_title: "『中国美術史2（魏晋から隋唐まで）』",
            pub_book_1_info: "金美라, 洪起用 共訳 | Dareun Saenggak | 2011.",
            pub_paper_1_title: "「柳宗元『永州八記』の認知的解釈初探」",
            pub_paper_1_info: "『中国散文研究集刊』18集, 2025.06.",
            pub_paper_2_title: "「王禹偁の律賦創作試論」",
            pub_paper_2_info: "『韓国人文融合研究』第1集, 2024.12.",
            pub_paper_3_title: "「王禹偁『荘子』題材律賦創作小考」",
            pub_paper_3_info: "『開かれた精神人文学研究』25集第3号, 2024.12.",
            pub_paper_4_title: "「宋代都市文人の‘養花’と‘賞花’」",
            pub_paper_4_info: "『中国散文研究集刊』15集, 2023.12.",
            pub_paper_5_title: "「茅坤『唐宋八大家文抄』収録‘学記’考」",
            pub_paper_5_info: "『中国散文研究集刊』13集, 2022.12.",
            contact_title: "CONTACT",
            contact_desc: "講演依頼、学術交流などのお問い合わせは、下記の連絡先までお願いいたします。",
            contact_label_phone: "電話",
            contact_label_email: "Eメール",
            contact_label_office: "研究室",
            contact_office_value: "全羅北道益山市益山大路460 円光大学校 学軍団3階 韓中関係研究院",
            contact_phone_value: "+82-63-850-7120",
            form_placeholder_name: "お名前",
            form_placeholder_email: "Eメール",
            form_placeholder_message: "内容を入力してください",
            form_submit: "送信",
            form_success: "メッセージが送信されました。",
            form_error: "エラーが発生しました。後で再試行してください。",
            footer_copyright: "© 2026 金美拉 教授。All rights reserved.",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "メニュー切替",
            back_to_top_title: "トップへ戻る"
        },
        de: {
            site_title: "Prof. Mira Kim - Wonkwang Universität",
            site_description: "Offizielle Website von Prof. Mira Kim, Forschungsprofessorin am Institut für Korea-China-Beziehungen der Wonkwang Universität.",
            wku_name: "Wonkwang Universität",
            header_title: "Forschungsprofessorin, Institut für Korea-China-Beziehungen",
            nav_profile: "Profil",
            nav_research: "Forschung",
            nav_publications: "Publikationen",
            nav_contact: "Kontakt",
            hero_sub_title: "Harmonie von Weisheit und Wissenschaft",
            prof_name: "Mira Kim",
            prof_title_suffix: "Professorin",
            hero_desc: "Forschung zur klassischen chinesischen Literatur an der Wonkwang Universität als akademische Brücke zwischen Tradition und Moderne.",
            hero_btn_research: "Forschung ansehen",
            hero_btn_contact: "Kontaktieren",
            prof_img_alt: "Porträt von Prof. Mira Kim",
            section_about_badge: "ÜBER MICH",
            section_about_title: "Akademischer Werdegang",
            about_history_title: "Bildung & Karriere",
            about_history_1_date: "Aktuell",
            about_history_1_desc: "Forschungsprofessorin, Institut für Korea-China-Beziehungen, Wonkwang Univ.",
            about_history_2_date: "Abschluss",
            about_history_2_desc: "Dr. phil. in klassischer chinesischer Literatur, Fudan Universität (China)",
            about_content_p1: "Nach meiner Promotion an der Fudan Universität forsche ich intensiv in den Bereichen klassische chinesische Prosa, Literaturkritik und vergleichende Literaturwissenschaft.",
            about_quote: '"Wissenschaft ist ein Dialog, der Vergangenheit und Gegenwart verbindet – ein Fenster zum Verständnis von Menschen und Epochen."',
            section_research_badge: "FORSCHUNG",
            section_research_title: "Hauptforschungsgebiete",
            research_1_title: "Klassische chinesische Prosa",
            research_1_desc: "Eingehende Untersuchung der Stile und ideologischen Hintergründe der klassischen chinesischen Prosa.",
            research_2_title: "Klassische Literaturkritik",
            research_2_desc: "Analyse literarischer Werte durch klassische Theorie und historischen Kontext.",
            research_3_title: "Vergleichende Literatur",
            research_3_desc: "Untersuchung der Wechselwirkungen zwischen koreanischer und chinesischer Literatur.",
            section_pub_badge: "PUBLIKATIONEN",
            section_pub_title: "Akademische Aktivitäten",
            pub_tab_books: "Bücher",
            pub_tab_papers: "Fachartikel",
            pub_book_1_title: "Geschichte der chinesischen Kunst 2 (Wei-Jin bis Sui-Tang)",
            pub_book_1_info: "Mitübersetzt von Mira Kim, Kiyong Hong | Dareun Saenggak | 2011.",
            pub_paper_1_title: "Eine kognitive Interpretation von Liu Zongyuans Acht Berichten von Yongzhou",
            pub_paper_1_info: "Journal of Chinese Prose, Bd. 18, 2025.06.",
            pub_paper_2_title: "Wang Yurchengs poetische Theorie der Lufu-Schöpfung",
            pub_paper_2_info: "Humanities Convergence Research, Bd. 1, 2024.12.",
            pub_paper_3_title: "Eine Studie über Wang Yurchengs Lufu-Schöpfung basierend auf Zhuangzi",
            pub_paper_3_info: "Open Spirit Humanities Research, Bd. 25, Nr. 3, 2024.12.",
            pub_paper_4_title: "Blumenzucht und -wertschätzung im städtischen Leben der Song-Dynastie",
            pub_paper_4_info: "Journal of Chinese Prose, Bd. 15, 2023.12.",
            pub_paper_5_title: "Eine Studie zur Kanonisierung des Lernens bei Mao Kun",
            pub_paper_5_info: "Journal of Chinese Prose, Bd. 13, 2022.12.",
            contact_title: "KONTAKT",
            contact_desc: "Für Vortragsanfragen oder akademischen Austausch kontaktieren Sie mich bitte wie folgt.",
            contact_label_phone: "Telefon",
            contact_label_email: "E-Mail",
            contact_label_office: "Büro",
            contact_office_value: "3. Stock, Institut für Korea-China-Beziehungen, ROTC-Gebäude, Wonkwang Universität, 460 Iksan-daero, Iksan, Jeollabuk-do, Republik Korea",
            contact_phone_value: "+82-63-850-7120",
            form_placeholder_name: "Name",
            form_placeholder_email: "E-Mail",
            form_placeholder_message: "Ihre Nachricht",
            form_submit: "Senden",
            form_success: "Nachricht erfolgreich gesendet.",
            form_error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
            footer_copyright: "© 2026 Prof. Mira Kim. Alle Rechte vorbehalten.",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "Menü",
            back_to_top_title: "Nach oben"
        },
        es: {
            site_title: "Prof. Mira Kim - Universidad Wonkwang",
            site_description: "Sitio web oficial de la Prof. Mira Kim, profesora investigadora en el Instituto de Relaciones Corea-China de la Universidad Wonkwang.",
            wku_name: "Universidad Wonkwang",
            header_title: "Profesora Investigadora, Instituto de Relaciones Corea-China",
            nav_profile: "Perfil",
            nav_research: "Investigación",
            nav_publications: "Publicaciones",
            nav_contact: "Contacto",
            hero_sub_title: "Armonía de Sabiduría y Academia",
            prof_name: "Mira Kim",
            prof_title_suffix: "Profesora",
            hero_desc: "Investigadora de literatura clásica china en la Universidad Wonkwang, actuando como puente académico entre la tradición y la perspectiva moderna.",
            hero_btn_research: "Ver Investigación",
            hero_btn_contact: "Contactar",
            prof_img_alt: "Retrato de la Prof. Mira Kim",
            section_about_badge: "SOBRE MÍ",
            section_about_title: "Trayectoria Académica",
            about_history_title: "Educación y Carrera",
            about_history_1_date: "Actual",
            about_history_1_desc: "Profesora Investigadora, Instituto de Relaciones Corea-China, Univ. Wonkwang",
            about_history_2_date: "Título",
            about_history_2_desc: "Doctora en Literatura China Antigua, Universidad de Fudan (China)",
            about_content_p1: "Tras obtener el doctorado en la Universidad de Fudan, he realizado investigaciones profundas en prosa clásica china, crítica literaria y literatura comparada.",
            about_quote: '"La erudición es una conversación que conecta el pasado y el presente, una ventana para comprender a las personas y las épocas."',
            section_research_badge: "INVESTIGACIÓN",
            section_research_title: "Áreas Principales",
            research_1_title: "Prosa Clásica China",
            research_1_desc: "Estudio profundo de los estilos y trasfondos ideológicos de la prosa clásica china.",
            research_2_title: "Crítica Literaria Clásica",
            research_2_desc: "Análisis de los valores literarios a través de la teoría clásica y el contexto histórico.",
            research_3_title: "Literatura Comparada",
            research_3_desc: "Examen de las interacciones y los intercambios entre la literatura coreana y china.",
            section_pub_badge: "PUBLICACIONES",
            section_pub_title: "Actividades Académicas",
            pub_tab_books: "Libros",
            pub_tab_papers: "Artículos",
            pub_book_1_title: "Historia del Arte Chino 2 (Wei-Jin a Sui-Tang)",
            pub_book_1_info: "Co-traducido por Mira Kim, Kiyong Hong | Dareun Saenggak | 2011.",
            pub_paper_1_title: "Una interpretación cognitiva de los Ocho relatos de Yongzhou de Liu Zongyuan",
            pub_paper_1_info: "Journal of Chinese Prose, Vol. 18, 2025.06.",
            pub_paper_2_title: "La teoría poética de Wang Yucheng sobre la creación de Lufu",
            pub_paper_2_info: "Humanities Convergence Research, Vol. 1, 2024.12.",
            pub_paper_3_title: "Estudio sobre la creación de Lufu de Wang Yucheng basado en Zhuangzi",
            pub_paper_3_info: "Open Spirit Humanities Research, Vol. 25, No. 3, 2024.12.",
            pub_paper_4_title: "Cultivo y apreciación de flores en la vida urbana de la dinastía Song",
            pub_paper_4_info: "Journal of Chinese Prose, Vol. 15, 2023.12.",
            pub_paper_5_title: "Estudio sobre la canonización del aprendizaje en Mao Kun",
            pub_paper_5_info: "Journal of Chinese Prose, Vol. 13, 2022.12.",
            contact_title: "CONTACTO",
            contact_desc: "Para solicitudes de conferencias, intercambio académico u otras consultas, contácteme a continuación.",
            contact_label_phone: "Teléfono",
            contact_label_email: "Correo",
            contact_label_office: "Oficina",
            contact_office_value: "Piso 3, Instituto de Relaciones Corea-China, Edificio ROTC, Universidad Wonkwang, 460 Iksan-daero, Iksan, Jeollabuk-do, República de Corea",
            contact_phone_value: "+82-63-850-7120",
            form_placeholder_name: "Nombre",
            form_placeholder_email: "Correo",
            form_placeholder_message: "Escriba su mensaje",
            form_submit: "Enviar",
            form_success: "Mensaje enviado con éxito.",
            form_error: "Ocurrió un error. Inténtelo de nuevo más tarde.",
            footer_copyright: "© 2026 Prof. Mira Kim. Todos los derechos reservados.",
            wku_name_en: "WONKWANG UNIVERSITY",
            nav_mobile_toggle: "Menú",
            back_to_top_title: "Subir"
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
                el.setAttribute('placeholder', t[key]);
            }
        });

        // Update aria-labels
        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria-label');
            if (t[key]) {
                el.setAttribute('aria-label', t[key]);
            }
        });

        // Update titles
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (t[key]) {
                el.setAttribute('title', t[key]);
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

    // Initial language setup
    const savedLang = localStorage.getItem('preferredLang') || 'ko';
    updateLanguage(savedLang);

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
