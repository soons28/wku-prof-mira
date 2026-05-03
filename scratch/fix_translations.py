
import re

# Correct paper data for all 16 languages
translations_all = {
    "ko": {
        "pub_paper_1_title": "「柳宗元의 『永州八記』의 認知的 解釋 初探—AI 이미지 생성과의 연계 시도를 겸하며」",
        "pub_paper_1_info": "『中國散文硏究集刊』 18집, 2025.06.",
        "pub_paper_2_title": "「왕우칭[王禹偁]의 율부 창작 시론」",
        "pub_paper_2_info": "『한국인문융합연구』 제1집, 2024.12.",
        "pub_paper_3_title": "「王禹偁의 『莊子』 제재 律賦 創作 小考」",
        "pub_paper_3_info": "『열린정신 인문학 연구』 25집 제3호, 2024.12.",
        "pub_paper_4_title": "「‘養花’와 ‘賞花’, 송대 도시 문인의 소확행 : 歐陽修의 ≪洛陽牡丹記≫를 중심으로」",
        "pub_paper_4_info": "『中國散文硏究集刊』 15집, 2023.12.",
        "pub_paper_5_title": "「배움과 기록의 전범화 고찰: 茅坤의 ≪唐宋八大家文鈔≫ 수록 ‘學記’를 중심으로」",
        "pub_paper_5_info": "『中國散文硏究集刊』 13집, 2022.12."
    },
    "en": {
        "pub_paper_1_title": "A Preliminary Study on the Cognitive Interpretation of Liu Zongyuan's 'Eight Records of Yongzhou'—Combined with an Attempt to Link with AI Image Generation",
        "pub_paper_1_info": "Journal of Chinese Prose, Vol. 18, 2025.06.",
        "pub_paper_2_title": "A Study on Wang Yucheng's Poetic Theory of Lufu Creation",
        "pub_paper_2_info": "Korean Journal of Human-Convergence Studies, Vol. 1, 2024.12.",
        "pub_paper_3_title": "A Short Study on Wang Yucheng's Lufu Creation Based on 'Zhuangzi' Themes",
        "pub_paper_3_info": "Open Spirit Humanities Research, Vol. 25, No. 3, 2024.12.",
        "pub_paper_4_title": "'Cultivating Flowers' and 'Admiring Flowers', the Small but Certain Happiness of Song Dynasty Urban Literati: Focusing on Ouyang Xiu's 'Luoyang Mudan Ji'",
        "pub_paper_4_info": "Journal of Chinese Prose, Vol. 15, 2023.12.",
        "pub_paper_5_title": "A Study on the Canonization of Learning and Recording: Focusing on the 'Xueji' in Mao Kun's 'Selected Works of the Eight Great Masters of Tang and Song'",
        "pub_paper_5_info": "Journal of Chinese Prose, Vol. 13, 2022.12."
    },
    "zh": {
        "pub_paper_1_title": "“柳宗元《永州八记》的认知解释初探——兼论与AI图像生成的联动尝试”",
        "pub_paper_1_info": "《中国散文研究集刊》第18辑，2025.06.",
        "pub_paper_2_title": "“王禹偁律赋创作诗论研究”",
        "pub_paper_2_info": "《韩国人文融合研究》第1辑，2024.12.",
        "pub_paper_3_title": "“王禹偁《庄子》题材律赋创作小考”",
        "pub_paper_3_info": "《开放精神人文学研究》第25辑第3号，2024.12.",
        "pub_paper_4_title": "“‘养花’与‘赏花’，宋代都市文人的小确幸：以欧阳修《洛阳牡丹记》为中心”",
        "pub_paper_4_info": "《中国散文研究集刊》第15辑，2023.12.",
        "pub_paper_5_title": "“学与记的典范化考察：以茅坤《唐宋八大家文钞》所收‘学记’为中心”",
        "pub_paper_5_info": "《中国散文研究集刊》第13辑，2022.12."
    },
    "zh_hant": {
        "pub_paper_1_title": "「柳宗元《永州八記》的認知解釋初探——兼論與AI圖像生成的聯動嘗試」",
        "pub_paper_1_info": "《中國散文研究集刊》第18輯，2025.06.",
        "pub_paper_2_title": "「王禹偁律賦創作詩論研究」",
        "pub_paper_2_info": "《韓國人文融合研究》第1輯，2024.12.",
        "pub_paper_3_title": "「王禹偁《莊子》題材律賦創作小考」",
        "pub_paper_3_info": "《開放精神人文學研究》第25輯第3號，2024.12.",
        "pub_paper_4_title": "「『養花』與『賞花』，宋代都市文人的小確幸：以歐陽修《洛陽牡丹記》為中心」",
        "pub_paper_4_info": "《中國散文研究集刊》第15輯，2023.12.",
        "pub_paper_5_title": "「學與記的典範化考察：以茅坤《唐宋八大家文鈔》所收『學記』為中心」",
        "pub_paper_5_info": "《中國散文研究集刊》第13輯，2022.12."
    },
    "ja": {
        "pub_paper_1_title": "「柳宗元『永州八記』の認知的解釈の初歩的考察―AI画像生成との連携の試みを兼ねて」",
        "pub_paper_1_info": "『中国散文研究集刊』第18輯、2025.06.",
        "pub_paper_2_title": "「王禹偁の律賦創作詩論研究」",
        "pub_paper_2_info": "『韓国人文融合研究』第1輯、2024.12.",
        "pub_paper_3_title": "「王禹偁の『荘子』題材律賦創作小考」",
        "pub_paper_3_info": "『開かれた精神人文学研究』第25輯第3号、2024.12.",
        "pub_paper_4_title": "「『養花』と『賞花』、宋代都市文人のささやかな幸せ：欧陽修『洛陽牡丹記』を中心に」",
        "pub_paper_4_info": "『中国散文研究集刊』第15輯、2023.12.",
        "pub_paper_5_title": "「学びと記録의 典範化に関する考察：茅坤『唐宋八大家文鈔』所収『学記』を中心に」",
        "pub_paper_5_info": "『中国散文研究集刊』第13輯、2022.12."
    },
    "de": {
        "pub_paper_1_title": "Eine vorläufige Studie zur kognitiven Interpretation von Liu Zongyuans 'Acht Aufzeichnungen von Yongzhou' — In Verbindung mit einem Versuch der KI-Bildgenerierung",
        "pub_paper_1_info": "Journal of Chinese Prose, Band 18, 2025.06.",
        "pub_paper_2_title": "Eine Studie über Wang Yuchengs poetische Theorie der Lufu-Schöpfung",
        "pub_paper_2_info": "Koreanische Zeitschrift für Human-Konvergenz-Studien, Band 1, 2024.12.",
        "pub_paper_3_title": "Eine kurze Studie über Wang Yuchengs Lufu-Schöpfung basierend auf 'Zhuangzi'-Themen",
        "pub_paper_3_info": "Geisteswissenschaftliche Forschung des offenen Geistes, Band 25, Nr. 3, 2024.12.",
        "pub_paper_4_title": "'Blumen züchten' und 'Blumen bewundern', das kleine, aber sichere Glück der städtischen Literaten der Song-Dynastie: Fokus auf Ouyang Xius 'Luoyang Mudan Ji'",
        "pub_paper_4_info": "Journal of Chinese Prose, Band 15, 2023.12.",
        "pub_paper_5_title": "Eine Studie über die Kanonisierung von Lernen und Aufzeichnen: Fokus auf die 'Xueji' in Mao Kuns 'Ausgewählte Werke der acht großen Meister von Tang und Song'",
        "pub_paper_5_info": "Journal of Chinese Prose, Band 13, 2022.12."
    },
    "es": {
        "pub_paper_1_title": "Un estudio preliminar sobre la interpretación cognitiva de las 'Ocho crónicas de Yongzhou' de Liu Zongyuan — Combinado con un intento de vinculación con la generación de imágenes por IA",
        "pub_paper_1_info": "Revista de Prosa China, Vol. 18, 2025.06.",
        "pub_paper_2_title": "Un estudio sobre la teoría poética de la creación Lufu de Wang Yucheng",
        "pub_paper_2_info": "Revista Coreana de Estudios de Convergencia Humana, Vol. 1, 2024.12.",
        "pub_paper_3_title": "Un breve estudio sobre la creación Lufu de Wang Yucheng basado en temas de 'Zhuangzi'",
        "pub_paper_3_info": "Investigación en Humanidades de Espíritu Abierto, Vol. 25, No. 3, 2024.12.",
        "pub_paper_4_title": "'Cultivar flores' y 'admirar flores', la pequeña pero segura felicidad de los literatos urbanos de la dinastía Song: enfoque en 'Luoyang Mudan Ji' de Ouyang Xiu",
        "pub_paper_4_info": "Revista de Prosa China, Vol. 15, 2023.12.",
        "pub_paper_5_title": "Un estudio sobre la canonización del aprendizaje y el registro: enfoque en el 'Xueji' en las 'Obras seleccionadas de los ocho grandes maestros de Tang y Song' de Mao Kun",
        "pub_paper_5_info": "Revista de Prosa China, Vol. 13, 2022.12."
    },
    "vi": {
        "pub_paper_1_title": "Nghiên cứu sơ bộ về giải thích nhận thức đối với 'Vĩnh Châu bát ký' của Liễu Tông Nguyên — Kết hợp với nỗ lực liên kết tạo hình ảnh bằng AI",
        "pub_paper_1_info": "Tạp chí Văn xuôi Trung Quốc, Tập 18, 2025.06.",
        "pub_paper_2_title": "Nghiên cứu về lý luận thơ ca trong sáng tác Luật phú của Vương Vũ Xứng",
        "pub_paper_2_info": "Tạp chí Nghiên cứu Hội tụ Nhân văn Hàn Quốc, Tập 1, 2024.12.",
        "pub_paper_3_title": "Tiểu khảo về sáng tác Luật phú đề tài 'Trang Tử' của Vương Vũ Xứng",
        "pub_paper_3_info": "Nghiên cứu Nhân văn Tinh thần Mở, Tập 25, Số 3, 2024.12.",
        "pub_paper_4_title": "'Dưỡng hoa' và 'Thưởng hoa', hạnh phúc nhỏ bé nhưng chắc chắnของ văn nhân thành thị thời Tống: Tập trung vào 'Lạc Dương mẫu đơn ký' của Âu Dương Tu",
        "pub_paper_4_info": "Tạp chí Văn xuôi Trung Quốc, Tập 15, 2023.12.",
        "pub_paper_5_title": "Khảo sát về điển phạm hóa việc học và ghi chép: Tập trung vào 'Học ký' trong 'Đường Tống bát đại gia văn sao' của Mao Khôn",
        "pub_paper_5_info": "Tạp chí Văn xuôi Trung Quốc, Tập 13, 2022.12."
    },
    "id": {
        "pub_paper_1_title": "Studi Pendahuluan tentang Interpretasi Kognitif 'Delapan Catatan Yongzhou' karya Liu Zongyuan — Dikombinasikan dengan upaya menghubungkan dengan pembuatan gambar AI",
        "pub_paper_1_info": "Jurnal Prosa Tiongkok, Vol. 18, 2025.06.",
        "pub_paper_2_title": "Studi tentang Teori Puitis Penciptaan Lufu karya Wang Yucheng",
        "pub_paper_2_info": "Jurnal Studi Konvergensi Manusia Korea, Vol. 1, 2024.12.",
        "pub_paper_3_title": "Studi Singkat tentang Penciptaan Lufu Wang Yucheng Berdasarkan Tema 'Zhuangzi'",
        "pub_paper_3_info": "Penelitian Humaniora Semangat Terbuka, Vol. 25, No. 3, 2024.12.",
        "pub_paper_4_title": "'Menanam Bunga' dan 'Mengagumi Bunga', kebahagiaan kecil tapi pasti dari sastrawan perkotaan Dinasti Song: Fokus pada 'Luoyang Mudan Ji' karya Ouyang Xiu",
        "pub_paper_4_info": "Jurnal Prosa Tiongkok, Vol. 15, 2023.12.",
        "pub_paper_5_title": "Studi tentang Kanonisasi Pembelajaran dan Pencatatan: Fokus pada 'Xueji' dalam 'Karya Terpilih Delapan Guru Besar Tang dan Song' karya Mao Kun",
        "pub_paper_5_info": "Jurnal Prosa Tiongkok, Vol. 13, 2022.12."
    },
    "th": {
        "pub_paper_1_title": "การศึกษาเบื้องต้นเกี่ยวกับการตีความทางปัญญาของ 'บันทึกทั้งแปดแห่งหยงโจว' ของ หลิว จงหยวน — ร่วมกับความพยายามในการเชื่อมโยงกับการสร้างภาพด้วย AI",
        "pub_paper_1_info": "วารสารร้อยแก้วจีน, เล่มที่ 18, 2025.06.",
        "pub_paper_2_title": "การศึกษาทฤษฎีบทกวีในการสร้างสรรค์ ลู่ฟู่ ของ หวาง อวี่เฉิง",
        "pub_paper_2_info": "วารสารมนุษยศาสตร์เกาหลีแบบผสมผสาน, เล่มที่ 1, 2024.12.",
        "pub_paper_3_title": "การศึกษาสั้นๆ เกี่ยวกับการสร้างสรรค์ ลู่ฟู่ ของ หวาง อวี่เฉิง ตามหัวข้อ 'จวงจื่อ'",
        "pub_paper_3_info": "การวิจัยมนุษยศาสตร์จิตวิญญาณเปิด, เล่มที่ 25, ฉบับที่ 3, 2024.12.",
        "pub_paper_4_title": "'การปลูกดอกไม้' และ 'การชมดอกไม้' ความสุขเล็กๆ แต่แน่นอนของปัญญาชนในเมืองสมัยราชวงศ์ซ่ง: เน้นที่ 'ลั่วหยางหมู่ตานจี้' ของ โอวหยาง ซิว",
        "pub_paper_4_info": "วารสารร้อยแก้วจีน, เล่มที่ 15, 2023.12.",
        "pub_paper_5_title": "การศึกษาเกี่ยวกับการทำให้การเรียนรู้และการบันทึกเป็นแบบอย่าง: เน้นที่ 'เสวียจี้' ใน 'ผลงานคัดสรรของแปดปรมาจารย์แห่งถังและซ่ง' ของ เหมา คุน",
        "pub_paper_5_info": "วารสารร้อยแก้วจีน, เล่มที่ 13, 2022.12."
    },
    "mn": {
        "pub_paper_1_title": "Лю Зунъюаний 'Юнжоугийн найман тэмдэглэл'-ийн танин мэдэхүйн тайлбарын урьдчилсан судалгаа — AI дүрс үүсгэхтэй холбох оролдлоготой хамт",
        "pub_paper_1_info": "Хятадын хүүрнэл зохиолын сэтгүүл, 18-р боть, 2025.06.",
        "pub_paper_2_title": "Ван Юйчэний Луфү бүтээх яруу найргийн онолын судалгаа",
        "pub_paper_2_info": "Солонгосын Хүмүүнлэгийн нэгдсэн судалгааны сэтгүүл, 1-р боть, 2024.12.",
        "pub_paper_3_title": "'Жуанз'-ын сэдэвт Ван Юйчэний Луфү бүтээлийн талаарх товч судалгаа",
        "pub_paper_3_info": "Нээлттэй оюун санааны хүмүүнлэгийн судалгаа, 25-р боть, 3-р дугаар, 2024.12.",
        "pub_paper_4_title": "'Цэцэг тарих' ба 'Цэцэг бишрэх', Сүн улсын хотын сэхээтнүүдийн бага боловч тодорхой аз жаргал: Оюунян Шиугийн 'Лоян Мудан Жи' дээр төвлөрөх нь",
        "pub_paper_4_info": "Хятадын хүүрнэл зохиолын сэтгүүл, 15-р боть, 2023.12.",
        "pub_paper_5_title": "Суралцах ба тэмдэглэх үйл явцыг канончлох судалгаа: Мао Куний 'Тан Сүн улсын найман их мастерын түүвэр зохиол' дахь 'Шюэжи'-д төвлөрөх нь",
        "pub_paper_5_info": "Хятадын хүүрнэл зохиолын сэтгүүл, 13-р боть, 2022.12."
    },
    "ne": {
        "pub_paper_1_title": "लिउ जोन्गयुआनको 'योन्झोउका आठ रेकर्डहरू' को संज्ञानात्मक व्याख्यामा प्रारम्भिक अध्ययन — AI छवि उत्पादनसँग जोड्ने प्रयासको साथ",
        "pub_paper_1_info": "चিনীয় गद्यको जर्नल, भोल्युम १८, २०२५.०६.",
        "pub_paper_2_title": "वाङ युचेङको लुफु सिर्जनाको काव्य सिद्धान्तमा এক अध्ययन",
        "pub_paper_2_info": "कोरियाली मानव-अभिसरण अध्ययन जर्नल, भोल्युम १, २०२४.१२.",
        "pub_paper_3_title": "'झुआन्जी' विषयहरूमा आधारित वाङ युचेङको लुफु सिर्जनामा एक संक्षिप्त अध्ययन",
        "pub_paper_3_info": "खुला आत्मा मानविकी अनुसन्धान, भोल्युम २५, नं ३, २०२४.१२.",
        "pub_paper_4_title": "'फूल खेती' र 'फूलको प्रशंसा', साङ वंशका शहरी विद्वानहरूको सानो तर निश्चित खुशी: ओयाङ सिउको 'लुओयाङ मुদান जी' मा केन्द्रित",
        "pub_paper_4_info": "चिनियाँ गद्यको जर्नल, भोल्युम १५, २०२३.१२.",
        "pub_paper_5_title": "सिक्ने र रेकर्ड गर्ने क्यानोनाइजेशनमा एक अध्ययन: माও कुनको 'ताङ र साङका आठ महान गुरुहरूको चयन गरिएका कार्यहरू' मा 'शुएजी' मा केन्द्रিত",
        "pub_paper_5_info": "चिनियाँ गद्यको जर्नल, भोल्युम १३, २०२२.१२."
    },
    "uz": {
        "pub_paper_1_title": "Liu Zongyuanning 'Yongzhouning sakkizta qaydi' asarining kognitiv talqini bo'yicha dastlabki tadqiqot — Sun'iy intellekt tasvir yaratish bilan bog'lashga urinish bilan birga",
        "pub_paper_1_info": "Xitoy nasri jurnali, 18-jild, 2025.06.",
        "pub_paper_2_title": "Wang Yuchengning Lufu yaratish poetik nazariyasi bo'yicha tadqiqot",
        "pub_paper_2_info": "Koreya inson konvergentsiyasi tadqiqotlari jurnali, 1-jild, 2024.12.",
        "pub_paper_3_title": "'Zhuangzi' mavzulariga asoslangan Wang Yuchengning Lufu yaratishi bo'yicha qisqacha tadqiqot",
        "pub_paper_3_info": "Ochiq ruhli gumanitar tadqiqotlar, 25-jild, 3-son, 2024.12.",
        "pub_paper_4_title": "'Gullar yetishtirish' va 'Gullardan zavqlanish', Sung sulolasi shahar ziyolilarining kichik, ammo aniq baxti: Ouyang Xiuning 'Luoyang Mudan Ji' asari misolida",
        "pub_paper_4_info": "Xitoy nasri jurnali, 15-jild, 2023.12.",
        "pub_paper_5_title": "O'rganish va qayd etishni kanonizatsiya qilish bo'yicha tadqiqot: Mao Kuning 'Tang va Sung sulolasining sakkizta buyuk ustozlari tanlangan asarlari'dagi 'Xueji' asari misolida",
        "pub_paper_5_info": "Xitoy nasri jurnali, 13-jild, 2022.12."
    },
    "az": {
        "pub_paper_1_title": "Liu Zonqyuanın 'Yonqjounun səkkiz qeydi' əsərinin koqnitiv təfsiri üzərinə ilkin araşdırma — Süni intellekt təsvir yaradılması ilə əlaqələndirmə cəhdi ilə birlikdə",
        "pub_paper_1_info": "Çin Nəsri Jurnalı, Cild 18, 2025.06.",
        "pub_paper_2_title": "Van Yuçenqin Lufu yaradıcılığının poetik nəzəriyyəsi üzərinə bir araşdırma",
        "pub_paper_2_info": "Koreya İnsan Konvergensiyası Araşdırmaları Jurnalı, Cild 1, 2024.12.",
        "pub_paper_3_title": "'Juanzı' mövzuları əsasında Van Yuçenqin Lufu yaradıcılığı üzərinə qısa bir araşdırma",
        "pub_paper_3_info": "Açıq Ruhlu Humanitar Araşdırmalar, Cild 25, No 3, 2024.12.",
        "pub_paper_4_title": "'Gül yetişdirmək' və 'Güllərdən zövq almaq', Sun sülaləsi şəหər ziyalılarının kiçik, lakin müəyyən xoşbəxtliyi: Ouyan Siunun 'Luoyan Mudan Ji' əsəri mərkəzində",
        "pub_paper_4_info": "Çin Nəsri Jurnalı, Cild 15, 2023.12.",
        "pub_paper_5_title": "Öyrənmə və qeyd etmənin kanonizasiyası üzərinə bir araşdırma: Mao Kunun 'Tan və Sun sülaləsinin səkkiz böyük ustasının seçilmiş əsərləri'ndəki 'Şueji' əsəri mərkəzində",
        "pub_paper_5_info": "Çin Nəsri Jurnalı, Cild 13, 2022.12."
    },
    "kk": {
        "pub_paper_1_title": "Лю Цзунъюанның 'Юнжоудың сегіз жазбасы' шығармасының когнитивті интерпретациясы бойынша алдын ала зерттеу — ЖИ кескін генерациясымен байланыстыру әрекетімен бірге",
        "pub_paper_1_info": "Қытай прозасы журналы, 18-том, 2025.06.",
        "pub_paper_2_title": "Ван Юйчэннің Луфү шығармашылығының поэтикалық теориясын зерттеу",
        "pub_paper_2_info": "Корей гуманитарлық конвергенция зерттеулері журналы, 1-том, 2024.12.",
        "pub_paper_3_title": "'Чжуан-цзы' тақырыптарына негізделген Ван Юйчэннің Луфү шығармашылығы бойынша қысқаша зерттеу",
        "pub_paper_3_info": "Ашық рухты гуманитарлық зерттеулер, 25-том, №3, 2024.12.",
        "pub_paper_4_title": "'Гүл өсіру' және 'Гүлдерге тамсану', Сун әулетінің қала зиялыларының кішігірім, бірақ нақты бақыты: Оуян Сюдың 'Лоян Мудан Жи' шығармасына назар аудару",
        "pub_paper_4_info": "Қытай прозасы журналы, 15-том, 2023.12.",
        "pub_paper_5_title": "Үйрену мен жазуды канонизациялау бойынша зерттеу: Мао Куньның 'Тан және Сун әулеттерінің сегіз ұлы шеберінің таңдаулы шығармалары' жинағындағы 'Сюэжи' бойынша",
        "pub_paper_5_info": "Қытай прозасы журналы, 13-том, 2022.12."
    },
    "bn": {
        "pub_paper_1_title": "লিউ জংইউয়ানের 'ইয়ংঝু-এর আটটি রেকর্ড'-এর জ্ঞানীয় ব্যাখ্যার উপর একটি প্রাথমিক অধ্যয়ন — AI চিত্র তৈরির সাথে সংযুক্ত করার প্রচেষ্টার সাথে",
        "pub_paper_1_info": "চিনীয় গদ্যের সাময়িকী, ভলিউম ১৮, ২০২৫.০৬.",
        "pub_paper_2_title": "ওয়াং ইউচেং-এর লুফু সৃষ্টির কাব্যিক তত্ত্বের উপর একটি অধ্যয়ন",
        "pub_paper_2_info": "কোরীয় মানব-অভিসরণ অধ্যয়ন সাময়িকী, ভলিউম ১, ২০২৪.১২.",
        "pub_paper_3_title": "'ঝুয়াংজি' থিমগুলির উপর ভিত্তি করে ওয়াং ইউচেং-এর লুফু সৃষ্টির উপর একটি সংক্ষিপ্ত অধ্যয়ন",
        "pub_paper_3_info": "উন্মুক্ত আত্মা মানবিক গবেষণা, ভলিউম ২৫, নং ৩, ২০২৪.১২.",
        "pub_paper_4_title": "'ফুল চাষ' এবং 'ফুলের প্রশংসা', সং রাজবংশের নগর বুদ্ধিজীবীদের ছোট কিন্তু নিশ্চিত সুখ: ওয়ুয়াং সিউ-এর 'লুওয়াং মুদান জি'-এর উপর আলোকপাত",
        "pub_paper_4_info": "চিনীয় গদ্যের সাময়িকী, ভলিউম ১৫, ২০২৩.১২.",
        "pub_paper_5_title": "শেখা এবং নথিভুক্ত করার ক্যানোনাইজেশনের উপর একটি অধ্যয়ন: মাও কুন-এর 'তাং এবং সং-এর আটজন মহান মাস্টারের নির্বাচিত কাজ'-এ 'শুয়েজি'-এর উপর আলোকপাত",
        "pub_paper_5_info": "চিনীয় গদ্যের সাময়িকী, ভলিউম ১৩, ২০২২.১২."
    }
}

def fix_translations():
    filepath = 'd:/Antigravity/wku_prof_site/translations_fixed.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix the "satin" typo globally if it still exists
    content = content.replace('領域 satin 的深入研究', '領域的深入研究')

    # 2. Fix the corrupted lines in all languages
    # Strategy: find each language block, extract it, clean it, and replace it.
    
    # Split by top-level language keys
    # pattern = r'([a-z_]+):\s*\{'
    # This is tricky because of nested braces. But the structure is flat.
    
    for lang, correct_papers in translations_all.items():
        # Find block using a more precise regex
        # Look for the start of the block: lang: {
        # And the end of the block: }, (followed by the next lang or the end of object)
        
        start_marker = f'    {lang}: {{'
        if start_marker not in content:
            # Try without spaces if it's the first one
            start_marker = f'{lang}: {{'
            if start_marker not in content:
                print(f"Could not find block for {lang}")
                continue

        # Find the content between { and }
        # Since the blocks are separated by "    }," or similar
        pattern = rf'{lang}:\s*\{{(.*?)\n\s*(\}},|\}})'
        match = re.search(pattern, content, re.DOTALL)
        if not match:
            print(f"Regex failed for {lang}")
            continue

        block_inner = match.group(1)
        
        # CLEANUP:
        # a. Remove existing pub_paper lines
        lines = block_inner.split('\n')
        new_lines = []
        for line in lines:
            if 'pub_paper_' in line:
                continue
            
            # b. Fix corrupted pub_book_1_info line
            if 'pub_book_1_info:' in line:
                # Find the first valid quoted string and comma
                # Example: pub_book_1_info: "info.", junk junk...
                m = re.search(r'(pub_book_1_info:\s*".*?")', line)
                if m:
                    line = f'        {m.group(1)},'
            
            new_lines.append(line)
        
        # c. Re-insert correct papers before contact_title
        papers_str_list = []
        for k, v in correct_papers.items():
            papers_str_list.append(f'        {k}: "{v}",')
        
        # Find where to insert (before contact_title)
        inserted = False
        final_lines = []
        for line in new_lines:
            if 'contact_title:' in line and not inserted:
                final_lines.extend(papers_str_list)
                inserted = True
            final_lines.append(line)
        
        if not inserted:
            final_lines.extend(papers_str_list)

        new_block_inner = '\n'.join(final_lines)
        
        # Replace in original content
        # Use re.escape to avoid issues with special characters in the old content
        old_full_block = match.group(0)
        # Construct the new full block manually to avoid regex replacement issues with large content
        new_full_block = f'    {lang}: {{{new_block_inner}\n    }},'
        if lang == "bn": # Last one might not have a comma
             new_full_block = f'    {lang}: {{{new_block_inner}\n    }}'
             
        content = content.replace(old_full_block, new_full_block)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully fixed all language blocks in translations_fixed.js")

if __name__ == "__main__":
    fix_translations()
