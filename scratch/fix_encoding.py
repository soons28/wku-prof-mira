def convert_to_utf8(file_path):
    encodings = ['utf-8', 'cp949', 'euc-kr', 'utf-16']
    data = None
    for enc in encodings:
        try:
            with open(file_path, 'rb') as f:
                raw_data = f.read()
            data = raw_data.decode(enc)
            print(f"Success with {enc}")
            break
        except Exception as e:
            print(f"Failed with {enc}: {e}")
    
    if data:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(data)
        print("File rewritten in UTF-8")
    else:
        print("Failed to decode file with common encodings")

if __name__ == "__main__":
    convert_to_utf8('d:/Antigravity/wku_prof_site/translations_fixed.js')
