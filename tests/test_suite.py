import os
import re
from html.parser import HTMLParser

class SiteValidator(HTMLParser):
    def __init__(self, filename):
        super().__init__()
        self.filename = filename
        self.links = []
        self.images = []
        self.ids = set()
        self.labels = []
        self.errors = []
        self.has_title = False
        self.has_description = False
        self.has_canonical = False
        self.has_viewport = False
        self.title_content = ""

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        if 'id' in attr_dict:
            self.ids.add(attr_dict['id'])
        
        if tag == 'a' and 'href' in attr_dict:
            self.links.append(attr_dict['href'])
        
        if tag == 'img' and 'src' in attr_dict:
            self.images.append(attr_dict['src'])
            if 'alt' not in attr_dict or not attr_dict['alt'].strip():
                self.errors.append(f"Image missing alt tag: {attr_dict['src']}")
        
        if tag == 'label' and 'for' in attr_dict:
            self.labels.append(attr_dict['for'])
            
        if tag == 'meta':
            if attr_dict.get('name') == 'description':
                self.has_description = True
            if attr_dict.get('name') == 'viewport':
                self.has_viewport = True
                
        if tag == 'link' and attr_dict.get('rel') == 'canonical':
            self.has_canonical = True

        if tag == 'title':
            self.in_title = True
        else:
            self.in_title = False

    def handle_data(self, data):
        if getattr(self, 'in_title', False):
            self.title_content += data.strip()
            self.has_title = True

def run_tests():
    # Ensure current directory is project root
    if os.path.exists('../index.html'):
        os.chdir('..')
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    print(f"Found {len(html_files)} HTML files: {html_files}")
    
    total_issues = 0
    all_images = set()

    for html_file in html_files:
        print(f"\n--- Testing {html_file} ---")
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check for old phone number
        if '80199' in content:
            print(f"  [ERROR] Found old phone number (80199...) in {html_file}")
            total_issues += 1
        else:
            print("  [PASS] No outdated phone numbers found.")

        # Check for confirmed WhatsApp number
        if '9391461106' in content:
            print("  [PASS] Confirmed business WhatsApp number (9391461106) present.")
        else:
            print(f"  [WARN] WhatsApp number not found in {html_file}")

        # Check HTML syntax
        parser = SiteValidator(html_file)
        try:
            parser.feed(content)
            print("  [PASS] HTML syntax successfully parsed.")
        except Exception as e:
            print(f"  [ERROR] HTML Parsing error: {e}")
            total_issues += 1

        # Check SEO meta
        if parser.has_title and parser.title_content:
            print(f"  [PASS] Title present: '{parser.title_content[:40]}...'")
        else:
            print(f"  [ERROR] Missing or empty <title> in {html_file}")
            total_issues += 1

        if parser.has_description:
            print("  [PASS] Meta description present.")
        else:
            print(f"  [ERROR] Missing meta description in {html_file}")
            total_issues += 1

        if parser.has_viewport:
            print("  [PASS] Viewport meta tag present.")
        else:
            print(f"  [ERROR] Missing viewport meta in {html_file}")
            total_issues += 1

        # Check form labels
        for lbl in parser.labels:
            if lbl not in parser.ids:
                print(f"  [ERROR] Label for='{lbl}' does not match any element ID in {html_file}")
                total_issues += 1

        # Check images
        for img in parser.images:
            all_images.add(img)
            # Remove query string if any
            clean_img = img.split('?')[0]
            if not os.path.exists(clean_img):
                print(f"  [ERROR] Image not found on disk: {clean_img}")
                total_issues += 1

        # Check internal links
        for link in parser.links:
            if link.startswith('#') or link.startswith('http') or link.startswith('mailto:') or link.startswith('tel:'):
                continue
            base_link = link.split('?')[0].split('#')[0]
            if base_link and not os.path.exists(base_link):
                print(f"  [ERROR] Internal link target not found: {base_link} (from {link})")
                total_issues += 1

        if parser.errors:
            for err in parser.errors:
                print(f"  [ERROR] {err}")
                total_issues += 1

    print("\n--- Testing JavaScript Files ---")
    with open('js/script.js', 'r', encoding='utf-8') as f:
        js_content = f.read()

    if '80199' in js_content:
        print("  [ERROR] Found old phone number in js/script.js")
        total_issues += 1
    else:
        print("  [PASS] No outdated phone numbers in js/script.js")

    if '9391461106' in js_content:
        print("  [PASS] Confirmed business WhatsApp number (9391461106) in js/script.js")
    else:
        print("  [ERROR] Missing WhatsApp number in js/script.js")
        total_issues += 1

    print("\n--- Testing robots.txt and sitemap.xml ---")
    if os.path.exists('robots.txt'):
        print("  [PASS] robots.txt exists.")
    else:
        print("  [ERROR] robots.txt missing.")
        total_issues += 1

    if os.path.exists('sitemap.xml'):
        print("  [PASS] sitemap.xml exists.")
    else:
        print("  [ERROR] sitemap.xml missing.")
        total_issues += 1

    print(f"\n==========================================")
    print(f"TEST RUN COMPLETE. Total Issues Found: {total_issues}")
    print(f"==========================================")

if __name__ == '__main__':
    run_tests()
