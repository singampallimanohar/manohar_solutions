# MANOHAR SOLUTIONS

## Professional Web Development Studio

Manohar Solutions is a high-performance, responsive web development studio website showcasing business websites, landing pages, creative portfolios, and front-end development capabilities. Handcrafted with semantic HTML5, pure CSS3, and modern Vanilla JavaScript, it offers sub-second load times, zero framework bloat, and an editorial-grade design aesthetic.

---

## Technologies Used

*   **HTML5:** Semantic, accessible markup with structured headings, ARIA attributes, and Open Graph metadata.
*   **CSS3:** Custom properties (CSS variables), CSS Grid & Flexbox, responsive media queries, and pure CSS animations without external UI frameworks.
*   **Vanilla JavaScript:** Pure ES6+ handling dynamic case-study switching, portfolio category filtering, FAQ accordions, mobile drawer navigation, an interactive project cost/scope estimator, and prefilled WhatsApp inquiry routing.
*   **WhatsApp Click-to-Chat Integration:** Secure, backend-free contact routing formatted with client details and encoded URL parameters.

---

## Project Structure

```text
manohar_solutions/
├── index.html           # Homepage (Hero, services, portfolio, process, advantage, FAQ, CTA)
├── about.html           # Studio philosophy, workspace showcase, and core engineering principles
├── services.html        # Detailed two-column services breakdown, roadmap, & interactive scope estimator
├── projects.html        # Filterable portfolio grid & concept showcases
├── casestudy.html       # Dynamic deep-dive case study template (URL param driven)
├── contact.html         # Direct contact information & structured project inquiry form
├── robots.txt           # Search crawler directives and sitemap reference
├── sitemap.xml          # XML sitemap for search engine indexing
├── css/
│   └── style.css        # Global design system, color palette, responsive typography, & layout rules
├── js/
│   └── script.js        # Central studio data, case study engine, estimator, & form routing
└── assets/
    └── images/          # Optimized project screenshots, studio photo, monogram logo, and favicons
```

---

## How to Run Locally

Because this project uses vanilla web technologies and dynamic URL parameters (for case studies, service prefill, and the estimator), serve it via a local HTTP server rather than opening the HTML files directly via the `file://` protocol.

### Option 1: Python 3 (Recommended)
Open a terminal in the project root directory and run:
```bash
python -m http.server 8000
```
Open your browser and visit: `http://localhost:8000`

### Option 2: Node.js (npx http-server)
```bash
npx http-server -p 8000
```
Open your browser and visit: `http://localhost:8000`

### Option 3: VS Code Live Server
Right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## Contact & WhatsApp Flow Configuration

*   **Official WhatsApp Number:** `+91 9391461106` (`919391461106`)
*   **International WhatsApp URL:** `https://wa.me/919391461106`
*   **Contact Email:** `singampallimanohar6@gmail.com`
*   **How the Contact Form Works:**
    1. The client enters their Name, Email, Phone/WhatsApp, Service Needed, Budget, and Project Details.
    2. Client-side validation checks input completeness and email format.
    3. The script formats a clean, readable message payload and launches WhatsApp Web/App via `https://wa.me/919391461106?text=...`.
    4. The form displays a clear notice reminding the user to tap **Send** inside WhatsApp to deliver the message.
    5. A summary card and "Edit Request" button are presented for user convenience.

---

## Interactive Scope & Cost Estimator

Located on `services.html`, the interactive estimator allows prospective clients to:
*   Select their project type (Landing Page, Business Website, Portfolio Website, E-Commerce Store).
*   Select their page scope (1 page, 3-5 pages, 6-10 pages, 10+ pages).
*   Toggle optional capabilities (SEO Setup, WhatsApp Lead Funnel).
*   Instantly view an estimated investment range and delivery timeline.
*   Click **"Start Project with this Scope →"** which opens `contact.html` with the selected service and budget pre-filled.

---

## Production Deployment Guide

This project is a 100% static front-end website with zero build dependencies, making it universally deployable across all static hosts:

### Deploy to Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or connect your GitHub repository to [Vercel](https://vercel.com).
2. Set Build Command to: `None` (leave blank).
3. Set Output Directory to: `.` (root).
4. Deploy!

### Deploy to Netlify
1. Connect your repository to [Netlify](https://netlify.com) or drag and drop the folder into the Netlify Drop dashboard.
2. Build command: None.
3. Publish directory: `.` (root).

### Deploy to GitHub Pages
1. Push this repository to GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` and `/ (root)`.
4. Save and your site will be live at `https://<username>.github.io/<repo>/`.

### Deploy to Traditional cPanel / Apache / Nginx
1. Upload all root files (`*.html`, `css/`, `js/`, `assets/`, `robots.txt`, `sitemap.xml`) to your server's `public_html` directory via FTP, SFTP, or File Manager.

---

## Manual Configuration Checklist Before Going Live

1. **Production Domain:**
   - Currently, canonical URLs, `robots.txt`, and `sitemap.xml` reference `https://manoharsolutions.dev/`.
   - When your live domain is registered, update the domain in:
     - All `<link rel="canonical" ...>` tags in `*.html`.
     - `robots.txt` (Sitemap line).
     - `sitemap.xml` (`<loc>` tags).
2. **Social Media Profiles:**
   - Verify that the Instagram (`@manohar_solutions`), Facebook, and LinkedIn links in `*.html` match your official handles.
3. **Contact Email:**
   - Confirm that `singampallimanohar6@gmail.com` is your desired public client communication email.
