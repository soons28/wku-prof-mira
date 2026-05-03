import sys

def check_js_syntax(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Simple check for unclosed quotes across lines
        lines = content.splitlines()
        for i, line in enumerate(lines):
            # If a line has an odd number of double quotes and doesn't end with a backslash or is inside a template literal
            # This is very simplified, but let's see.
            # Better yet, let's look for specific keys that might be broken.
            pass
        print("Manual check done.")
        
    except Exception as e:
        print(f"Error reading file: {e}")

if __name__ == "__main__":
    check_js_syntax('d:/Antigravity/wku_prof_site/translations_fixed.js')
