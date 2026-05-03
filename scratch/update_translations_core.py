
import json
import re

# Original Korean data for the 5 papers
papers_ko = {
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
}

# Translated data (Base English)
papers_en = {
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
}

# Simplified Chinese
papers_zh = {
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
}

# Traditional Chinese
papers_zh_hant = {
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
}

# Japanese
papers_ja = {
    "pub_paper_1_title": "「柳宗元『永州八記』の認知的解釈の初歩的考察―AI画像生成との連携の試みを兼ねて」",
    "pub_paper_1_info": "『中国散文研究集刊』第18輯、2025.06.",
    "pub_paper_2_title": "「王禹偁の律賦創作詩論研究」",
    "pub_paper_2_info": "『韓国人文融合研究』第1輯、2024.12.",
    "pub_paper_3_title": "「王禹偁の『荘子』題材律賦創作小考」",
    "pub_paper_3_info": "『開かれた精神人文学研究』第25輯第3号、2024.12.",
    "pub_paper_4_title": "「『養花』と『賞花』、宋代都市文人のささやかな幸せ：欧陽修『洛陽牡丹記』を中心に」",
    "pub_paper_4_info": "『中国散文研究集刊』第15輯、2023.12.",
    "pub_paper_5_title": "「学びと記録の典範化に関する考察：茅坤『唐宋八大家文鈔』所収『学記』を中心に」",
    "pub_paper_5_info": "『中国散文研究集刊』第13輯、2022.12."
}

# Helper to add papers to a language if missing or replace if needed
def update_translations_file():
    filepath = 'd:/Antigravity/wku_prof_site/translations_fixed.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define common papers for other languages (using English titles as a fallback or original for names)
    # For languages like de, es, vi, etc., we'll provide reasonable translations for the titles.
    
    translations_to_add = {
        "en": papers_en,
        "zh": papers_zh,
        "zh_hant": papers_zh_hant,
        "ja": papers_ja,
        "ko": papers_ko
    }

    # Add translations for other languages using automated translation patterns
    other_langs = ["de", "es", "vi", "id", "th", "mn", "ne", "uz", "az", "kk", "bn"]
    
    # Simple logic: for these languages, we add the papers if they are missing.
    # To save space and time, I'll use a generic "English Title [Original]" approach for them if I don't have full translations.
    # But for a "WOW" effect, I should try to provide at least the first few.
    
    # Actually, I'll generate the full 5 papers for ALL 16 languages.
    # (Omitted full generation here for brevity in the script creation, will do it in a separate step if needed)
    
    # Fixing the "satin" typo in zh_hant
    content = content.replace('領域 satin 的深入研究', '領域的深入研究')

    # Iterate through languages and inject papers
    for lang, papers in translations_to_add.items():
        # Find the language block
        pattern = rf'{lang}:\s*\{{(.*?)\n\s*\}}'
        match = re.search(pattern, content, re.DOTALL)
        if match:
            block_content = match.group(1)
            # Remove existing pub_paper entries to avoid duplicates
            block_content = re.sub(r'\s+pub_paper_\d_title:.*?,', '', block_content)
            block_content = re.sub(r'\s+pub_paper_\d_info:.*?,', '', block_content)
            
            # Add new papers before "contact_title"
            papers_str = ""
            for k, v in papers.items():
                papers_str += f'\n        {k}: "{v}",'
            
            new_block_content = re.sub(r'(\s+contact_title:)', rf'{papers_str}\1', block_content)
            content = content.replace(match.group(1), new_block_content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated translations_fixed.js with core languages and fixed zh_hant typo.")

if __name__ == "__main__":
    update_translations_file()
