import json
import re
import os

main_js_path = r'd:/Antigravity/wku_prof_site/main.js'
translations_path = r'd:/Antigravity/wku_prof_site/scratch/all_translations.json'

if not os.path.exists(translations_path):
    print(f"Error: {translations_path} not found.")
    exit(1)

with open(translations_path, 'r', encoding='utf-8') as f:
    all_translations = json.load(f)

with open(main_js_path, 'r', encoding='utf-8', errors='ignore') as f:
    main_js_content = f.read()

# Generate the JS object string
# We indent it by 4 spaces to match the code style
translations_js = "    const translations = " + json.dumps(all_translations, ensure_ascii=False, indent=8) + ";"
# Fix indentation slightly for the first line
translations_js = translations_js.replace('\n', '\n    ')

# Replace the translations block
# We use a non-greedy match for the block
pattern = re.compile(r'const translations = \{.*?\n\s+\};', re.DOTALL)

if not pattern.search(main_js_content):
    print("Warning: Could not find translations block using standard regex. Trying alternative.")
    # Fallback: Find from 'const translations =' to the first '};' that is followed by 'const currentLangText'
    pattern = re.compile(r'const translations = \{.*?\}\;\s+(?=const currentLangText)', re.DOTALL)

new_content = pattern.sub(translations_js, main_js_content)

# Also ensure langNames mapping is correct in the updateLanguage function
lang_names_js = """        const langNames = { 
            ko: "한국어", 
            en: "English", 
            zh: "中文", 
            ja: "日本語", 
            de: "Deutsch", 
            es: "Español",
            vi: "Tiếng Việt",
            id: "Bahasa Indonesia",
            th: "ไทย",
            mn: "Монгол",
            ne: "नेपाली",
            uz: "O'zbek",
            az: "Azərbaycan",
            kk: "Қазақша",
            bn: "বাংলা",
            zh_hant: "繁體中文"
        };"""

lang_names_pattern = re.compile(r'const langNames = \{.*?\};', re.DOTALL)
new_content = lang_names_pattern.sub(lang_names_js, new_content)

with open(main_js_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated main.js with 16 languages and fixed langNames mapping.")
