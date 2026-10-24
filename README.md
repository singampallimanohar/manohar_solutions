# MANOHAR SOLUTIONS

## Project Description
Manohar Solutions is a high-performance, responsive static web development studio portfolio. It showcases case studies, responsive web development services, business website designs, and landing page development. Built with pure HTML5, CSS3, and Vanilla JavaScript, it offers lightning-fast load times, zero framework bloat, and a fluid, editorial-grade aesthetic.

## Technologies Used
*   **HTML5:** Semantic, accessible markup.
*   **CSS3:** Custom properties, CSS Grid/Flexbox, responsive media queries, and pure CSS animations (No CSS frameworks used).
*   **Vanilla JavaScript:** Lightweight DOM manipulation, dynamic case study loading, filtering, and form handling (No JS frameworks used).
*   **FormSubmit:** Reliable, backend-free contact form submission routing.

## Project Structure
```text
/
├── index.html           # Home page
├── about.html           # About & Studio information
├── services.html        # Services & capabilities
├── projects.html        # Portfolio grid & filtering
├── casestudy.html       # Dynamic case study template
├── contact.html         # Project inquiry form
├── css/
│   └── style.css        # Global stylesheet & design system
├── js/
│   └── script.js        # Global interactions, config, and form logic
└── assets/
    └── images/          # Optimized project screenshots, logos, and favicons
```

## How to Run Locally
Because this project uses vanilla web technologies and dynamic URL parameters (for case studies), it should be served via a local HTTP server rather than opening the HTML files directly via the `file://` protocol.

1.  **Clone the repository** (if applicable).
2.  **Open a terminal** in the project root directory.
3.  **Start a local server:**
    *   *Using Python 3:* `python -m http.server 8000`
    *   *Using Node.js (http-server):* `npx http-server -p 8000`
    *   *Using VS Code Live Server:* Right-click `index.html` and select "Open with Live Server".
4.  **Open your browser** and navigate to `http://localhost:8000`.

## How to Deploy
This project is a 100% static frontend and can be deployed easily to any static hosting provider.
1.  **Vercel / Netlify / Cloudflare Pages:** Connect your Git repository, set the build command to `none` (or leave empty), and set the publish directory to the root `/`.
2.  **GitHub Pages:** Push the code to a repository and enable GitHub pages from the repository settings, pointing to the `main` branch root.
3.  **Traditional Hosting:** Upload the entire directory via FTP/SFTP to your `public_html` or `www` folder.

## Contact Form Configuration
The contact form uses [FormSubmit](https://formsubmit.co/) to securely send emails without exposing backend SMTP credentials.
*   The current destination email is: `singampallimanohar6@gmail.com`
*   **To change the email:** Open `js/script.js`, locate `initContactForm()`, and change the fetch URL: `https://formsubmit.co/ajax/your-new-email@example.com`.
*   Note: On the very first submission to a new email address, FormSubmit will send a verification email. You must click the activation link in that email before subsequent messages will be delivered.

## Important Configuration Notes
*   **Dynamic Case Studies:** The `casestudy.html` page populates content dynamically using the `?project=` URL parameter based on the `STUDIO_DATA` object defined in `js/script.js`.
*   **Project URLs:** Project preview URLs are intentionally set as placeholders or safe fallback text so they do not falsely claim to be live deployed projects. This is controlled via the `demoUrl` field in the `STUDIO_DATA` object.
*   **Security:** No API keys, passwords, or secret tokens are exposed in the frontend code.
