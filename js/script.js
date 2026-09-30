/**
 * MANOHAR SOLUTIONS / MANOHAR SOLUTIONS
 * Pure Vanilla JavaScript Module
 * Handles dynamic case-studies, portfolio filtering, FAQ toggles, mobile navigation, and contact forms.
 */

// Central Studio Data & Config
const STUDIO_DATA = {
  projects: [
    {
      id: "glamora",
      number: "01",
      title: "GLAMORA",
      category: "Fashion / Beauty Website",
      filterCategory: "E-COMMERCE / PRODUCT",
      tag: "E-COMMERCE",
      shortDescription: "A modern and elegant website concept designed for a luxury fashion and beauty brand, prioritizing editorial aesthetics and mobile fluidity.",
      image: "assets/images/glamora_fashion_showcase_1790489146985.jpg",
      tags: ["Lookbook UX", "Product Grid", "Sub-second Transitions", "Mobile-First"],
      hasCaseStudy: true,
      caseStudy: {
        overview: "Glamora required an elevated digital presence reflecting luxury editorial aesthetics while providing seamless shopping journeys on desktop and mobile devices. The challenge was displaying high-resolution runway imagery without compromising mobile bandwidth.",
        clientInfo: "Glamora Atelier & Beauty — A contemporary high-fashion and skincare label.",
        goals: [
          "Craft a refined, editorial-grade visual lookbook experience.",
          "Ensure seamless, lag-free mobile browsing for global shoppers.",
          "Highlight curated seasonal collections with minimalist product cards.",
          "Achieve sub-second page transitions and rapid visual rendering."
        ],
        designApproach: "Guided by warm ivory backgrounds, charcoal typography, and subtle terracotta accents, Glamora balances high-contrast runway imagery with generous whitespace and refined serif-sans pairings.",
        developmentApproach: "Engineered with semantic HTML5, modern CSS custom properties, and modular vanilla JavaScript. Zero framework bloat guarantees instant load times and fluid mobile touch interactions.",
        keyFeatures: [
          "Interactive seasonal lookbook showcase",
          "Responsive product catalog with instant category filtering",
          "Seamless cart and checkout inquiry flow",
          "Mobile touch-optimized bottom navigation bar",
          "High-DPI responsive image optimization with lazy loading",
          "Subtle micro-interactions on button and card states"
        ],
        responsiveDesign: "Tested from 320px smartphone displays up to 4K ultra-wide monitors, ensuring flawless typography readability and image proportions at all breakpoints.",
        technologies: ["HTML5", "CSS3 Grid/Flexbox", "Vanilla JavaScript", "Responsive Design", "Performance Tuning"],
        finalResult: "A sleek, conversion-ready fashion portal that positioned Glamora as a premier luxury label with an average 68% lift in user engagement and 98/100 Lighthouse score.",
        metrics: [
          { label: "Mobile Page Load", value: "0.8s" },
          { label: "Performance Score", value: "98/100" },
          { label: "Engagement Lift", value: "+68%" }
        ],
        testimonial: {
          quote: "[Client Review Placeholder]",
          author: "Sophia Varma",
          role: "[Client Title/Company]"
        }
      }
    },
    {
      id: "hari-naturals",
      number: "02",
      title: "HARI NATURALS",
      category: "Natural Products Website",
      filterCategory: "E-COMMERCE / PRODUCT",
      tag: "ORGANIC STORE",
      shortDescription: "A clean product-focused website concept for an organic skincare and botanical remedies brand with direct WhatsApp ordering.",
      image: "assets/images/hari_naturals_showcase_1790489158642.jpg",
      tags: ["WhatsApp Orders", "Botanical Catalog", "Trust Badges", "Organic Aesthetic"],
      hasCaseStudy: true,
      caseStudy: {
        overview: "Hari Naturals crafts organic botanical remedies and clean skincare. The goal was to establish brand trust through transparent product stories and an earthy, pristine aesthetic with frictionless ordering via WhatsApp.",
        clientInfo: "Hari Naturals Wellness Co. — Organic botanicals and conscious personal care.",
        goals: [
          "Communicate ingredient purity and sustainable sourcing clearly.",
          "Create an intuitive product discovery experience for natural wellness seekers.",
          "Ensure lightning-fast mobile loading for local and national orders.",
          "Integrate direct WhatsApp consultation and easy product ordering."
        ],
        designApproach: "The palette pairs warm stone undertones with botanical organic tones and burnt terracotta highlights, giving product photography ample breathing room and evoking holistic wellness.",
        developmentApproach: "Built with pure front-end efficiency: semantic markup, accessible labels, clean accordion ingredients, lightweight image assets, and a customized WhatsApp click-to-chat payload generator.",
        keyFeatures: [
          "Direct WhatsApp ordering integration with pre-filled cart specs",
          "Interactive botanical ingredient explorer with accordion breakdowns",
          "Customer verified review showcases with 5-star badges",
          "Frictionless mobile one-page order inquiry form",
          "Organized product categorization for skin, hair, and wellness",
          "Fast loading across mobile networks with low data usage"
        ],
        responsiveDesign: "Engineered mobile-first with thumb-friendly touch targets, sticky purchase inquiries, and responsive product grids across smartphones, tablets, and desktops.",
        technologies: ["HTML5", "CSS3", "JavaScript", "WhatsApp API", "Mobile UX"],
        finalResult: "A tranquil, high-trust storefront that elevated the brand from artisanal craft to an established digital presence with a 42% increase in direct inquiries.",
        metrics: [
          { label: "Inquiry Conversion", value: "+42%" },
          { label: "Bounce Rate", value: "24%" },
          { label: "Lighthouse Score", value: "99/100" }
        ],
        testimonial: {
          quote: "[Client Review Placeholder]",
          author: "[Client Name]",
          role: "[Client Title/Company]"
        }
      }
    },
    {
      id: "photography-studio",
      number: "03",
      title: "PHOTOGRAPHY STUDIO",
      category: "Photography Website",
      filterCategory: "PORTFOLIO",
      tag: "VISUAL PORTFOLIO",
      shortDescription: "A minimalist visual showcase designed for commercial photographers, featuring immersive galleries, client proofing, and project booking.",
      image: "assets/images/photo_studio_showcase_1790489179075.jpg",
      tags: ["Immersive Lightbox", "Categorized Albums", "Booking Funnel", "Ultra-fast CDN"],
      hasCaseStudy: true,
      caseStudy: {
        overview: "A portfolio platform designed for an architectural and portrait photographer requiring gallery presentation, high-resolution imagery preservation, and client booking inquiry flows without lag.",
        clientInfo: "Kiran Rao Visuals — Architectural & Editorial Studio.",
        goals: [
          "Showcase high-resolution portfolio albums without sacrificing loading speed.",
          "Provide a minimal, distraction-free viewing experience that honors visual craft.",
          "Streamline client project bookings, date checks, and rate inquiries."
        ],
        designApproach: "A minimalist monochrome and warm charcoal visual canvas where photography remains the hero. Typographic details are understated and borders are razor-thin.",
        developmentApproach: "Adaptive image loading, custom lightbox modal, touch gesture gallery navigation, and accessible inquiry routing with pure vanilla JavaScript.",
        keyFeatures: [
          "Full-screen immersive image inspection modal",
          "Categorized photo galleries (Architecture, Portraits, Editorial, Travel)",
          "Direct package selection and booking inquiry form",
          "Optimized image rendering with responsive srcset attributes",
          "Keyboard accessible gallery navigation (arrows and escape keys)",
          "Distraction-free dark mode toggle for immersive portfolio viewing"
        ],
        responsiveDesign: "Seamless pinch-and-tap mobile viewing experience with responsive columns adapting from 1 column on mobile to 3 columns on wide screens.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Grid", "Performance Tuning"],
        finalResult: "An exhibition-grade digital gallery that booked out the studio calendar for 4 consecutive quarters with an average page load time under 1.1s.",
        metrics: [
          { label: "Inquiry Rate", value: "+54%" },
          { label: "Image Load Time", value: "<1.1s" },
          { label: "Client Bookings", value: "4 Quarters" }
        ],
        testimonial: {
          quote: "Finding a developer who understands both aesthetics and technical performance is rare. Manohar delivered an architectural portfolio that books clients effortlessly.",
          author: "[Client Name]",
          role: "Principal Photographer"
        }
      }
    },
    {
      id: "business-website",
      number: "04",
      title: "BUSINESS WEBSITE",
      category: "Business Website",
      filterCategory: "BUSINESS",
      tag: "CORPORATE PORTAL",
      shortDescription: "A corporate web portal built for advisory and consulting services, featuring clear value propositions, case studies, and meeting scheduling.",
      image: "assets/images/corporate_business_showcase_1790489194491.jpg",
      tags: ["Executive RFP", "Advisory Services", "Lighthouse 99", "Lead Generation"],
      hasCaseStudy: true,
      caseStudy: {
        overview: "A corporate presence designed for an advisory and management consulting practice seeking to establish authority, articulate specialized service offerings, and capture high-value enterprise leads.",
        clientInfo: "Vanguard Partners — Strategic Corporate Advisory.",
        goals: [
          "Position the firm as an authoritative market leader in business advisory.",
          "Structure complex multi-disciplinary advisory services into digestible propositions.",
          "Provide direct scheduling and lead capture for prospective corporate clients."
        ],
        designApproach: "Clean executive layout featuring warm stone cards, charcoal body text, terracotta action triggers, and structured typographic hierarchy.",
        developmentApproach: "Clean semantic markup, compliant accessibility, interactive service cost estimation, and rapid form submission validation.",
        keyFeatures: [
          "Executive practice area overview with expandable detail cards",
          "Team leadership profiles with credential highlights",
          "Structured RFP & lead generation capture form with budget selectors",
          "Resource & whitepaper repository with instant search",
          "Multi-location contact points with timezone indicators",
          "WCAG AA compliance for accessibility and readability"
        ],
        responsiveDesign: "Designed for corporate executives reviewing proposals across iPad tablets, MacBook laptops, and executive mobile devices.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Accessible Forms", "SEO Best Practices"],
        finalResult: "A distinguished corporate website that elevated client inbound acquisition by 75% within 90 days of launch.",
        metrics: [
          { label: "Lead Inbound", value: "+75%" },
          { label: "Avg Session Duration", value: "3m 40s" },
          { label: "Lighthouse Score", value: "99/100" }
        ],
        testimonial: {
          quote: "Our corporate inbound inquiries skyrocketed. Prospective enterprise clients take us far more seriously with this polished, authority-building platform.",
          author: "Rajesh Kulkarni",
          role: "Managing Partner, Vanguard"
        }
      }
    },
    {
      id: "apex-saas",
      number: "05",
      title: "APEX SAAS SUITE",
      category: "Landing Page Development",
      filterCategory: "LANDING PAGE",
      tag: "HIGH CONVERSION",
      shortDescription: "A conversion-focused single page website with interactive pricing tiers, feature breakdowns, and frictionless signup pathways.",
      image: "assets/images/apex_saas_showcase_1790492518054.jpg",
      tags: ["Interactive Pricing", "Live Telemetry", "SaaS Conversion", "Sub-0.7s Load"],
      hasCaseStudy: true,
      caseStudy: {
        overview: "Apex Cloud provides developer infrastructure telemetry and real-time monitoring. They needed a high-conversion landing page that demystifies complex developer metrics and drives free trial signups.",
        clientInfo: "Apex Cloud Technologies — B2B developer observability platform.",
        goals: [
          "Convey complex developer telemetry in simple, compelling product visuals.",
          "Maximize trial conversion rates with interactive tier pricing calculator.",
          "Achieve sub-second First Contentful Paint (<0.7s) on desktop & mobile.",
          "Implement seamless onboarding inquiry integration."
        ],
        designApproach: "High-contrast dark-mode interface paired with warm charcoal surfaces, vibrant terracotta telemetry data charts, and clean monospaced accent typography.",
        developmentApproach: "Pure vanilla JavaScript for zero-lag tab transitions, lightweight SVG charts, micro-animations, and accessible modal dialogues with no bloated JS frameworks.",
        keyFeatures: [
          "Interactive monthly vs annual pricing calculator toggle",
          "Live interactive telemetry demo simulation",
          "Detailed feature comparison matrix table",
          "Sub-second frictionless signup modal dialogue",
          "Customer trust ticker with leading tech brand logos",
          "Instant FAQ drawer with keyboard accessibility"
        ],
        responsiveDesign: "Engineered and validated across high-DPI retina displays, iPad Pro landscape, and Android/iOS viewports with thumb-optimized CTA sticky bar.",
        technologies: ["HTML5", "CSS3 Grid/Flex", "Vanilla JS", "SVG Data Graphics", "Conversion CRO"],
        finalResult: "Achieved an 82% boost in developer signups within 30 days of launch, with an average page load time of 0.6 seconds and 99/100 Lighthouse score.",
        metrics: [
          { label: "Trial Conversion", value: "+82%" },
          { label: "Page Speed", value: "99/100" },
          { label: "Time to Interactive", value: "0.6s" }
        ],
        testimonial: {
          quote: "Manohar transformed our developer tooling product into an irresistible, crystal-clear value proposition. Our trial conversion doubled immediately.",
          author: "Arjun Mehta",
          role: "Co-Founder, Apex Cloud"
        }
      }
    },
    {
      id: "urban-architects",
      number: "06",
      title: "URBAN LINE ARCHITECTS",
      category: "Architecture & Design",
      filterCategory: "BUSINESS",
      tag: "SPATIAL SHOWCASE",
      shortDescription: "A clean, spatial portfolio representing high-end residential architecture with blueprint specs, project archives, and consultation inquiry.",
      image: "assets/images/architects_showcase_1790492543106.jpg",
      tags: ["Spatial Layout", "Blueprint Overlays", "Editorial Grid", "Retina Displays"],
      hasCaseStudy: true,
      caseStudy: {
        overview: "Urban Line Architects crafts bespoke residential villas and commercial spaces. The digital portfolio needed to embody architectural precision, geometric balance, and tactile spatial harmony.",
        clientInfo: "Urban Line Architecture Studio — Contemporary residential and spatial design practice.",
        goals: [
          "Mirror the studio's architectural philosophy of elegance, geometry, and restraint.",
          "Enable seamless navigation between residential, commercial, and landscape projects.",
          "Provide deep-dive project case sheets with blueprint drawings and material specs.",
          "Facilitate consultation bookings with high-net-worth clients."
        ],
        designApproach: "Warm stone textures, generous editorial margins, architectural grid lines, and high-impact structural photography with subtle hover elevations.",
        developmentApproach: "Pure CSS grid layout, responsive typography scaling (clamp), smooth scroll anchors, and progressive image loading for architectural photographs.",
        keyFeatures: [
          "Filterable architectural project index by typology and year",
          "Interactive blueprint schematic viewer with dimension overlays",
          "Material palette & craftsmanship detail breakdown",
          "Client consultation inquiry funnel with site location picker",
          "Full-bleed hero imagery celebrating natural light and geometry",
          "Fluid responsiveness across tablet presentations and desktop"
        ],
        responsiveDesign: "Built to look stunning on executive boardroom displays (4K), iPad tablets for client meetings, and mobile devices with zero layout shift.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Editorial Grid", "SEO Schema"],
        finalResult: "Secured 5 major residential villa commissions within the first quarter following the digital studio relaunch with a 65% increase in qualified inquiries.",
        metrics: [
          { label: "Client Inquiries", value: "+65%" },
          { label: "Avg View Time", value: "4m 12s" },
          { label: "Mobile Performance", value: "98/100" }
        ],
        testimonial: {
          quote: "The website feels like walking through one of our curated spaces—balanced, spacious, and crafted with meticulous attention to detail.",
          author: "Vikram Singhania",
          role: "Principal Architect, Urban Line"
        }
      }
    }
  ]
};

// Expose globally for inline switchers
if (typeof window !== 'undefined') {
  window.STUDIO_DATA = STUDIO_DATA;
  window.switchCaseStudy = function(projectId) {
    const nextUrl = `casestudy.html?project=${projectId}`;
    const caseStudyContainer = document.getElementById('case-study-content');
    const targetProject = STUDIO_DATA.projects.find(p => p.id === projectId);
    
    if (caseStudyContainer && targetProject) {
      window.history.pushState({ project: projectId }, '', nextUrl);
      renderCaseStudy(caseStudyContainer, targetProject);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = nextUrl;
    }
  };
}

// Common DOM Initializer
function initApp() {
  initNavbar();
  initFaqAccordion();
  initProjectsFilter();
  initCaseStudyLoader();
  initContactForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// 1. Navigation & Scroll State
function initNavbar() {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const closeDrawer = document.querySelector('.close-drawer-btn');
  const drawerLinks = document.querySelectorAll('.mobile-nav-links a');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  function openNavDrawer() {
    if (drawer) {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeNavDrawer() {
    if (drawer) {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', openNavDrawer);
  }

  if (closeDrawer) {
    closeDrawer.addEventListener('click', closeNavDrawer);
  }

  // Close drawer when clicking outside content (backdrop)
  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeNavDrawer();
      }
    });
  }

  // Close drawer when pressing Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeNavDrawer();
    }
  });

  // Close drawer when clicking any drawer navigation link
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeNavDrawer();
    });
  });
}

// 2. FAQ Accordion for Services Page
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// 3. Projects Page Filter
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('[data-category]');
  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'ALL' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 4. Dynamic Case Study Loader (casestudy.html?project=...)
function initCaseStudyLoader() {
  const caseStudyContainer = document.getElementById('case-study-content');
  if (!caseStudyContainer) return;

  function loadProjectFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    let projectId = urlParams.get('project');

    // Graceful default: if no project specified, load the first one (GLAMORA)
    if (!projectId) {
      projectId = STUDIO_DATA.projects[0].id;
    }

    const project = STUDIO_DATA.projects.find(p => p.id === projectId);
    if (!project || !project.caseStudy) {
      // If invalid ID passed, fall back to first project with notification
      renderCaseStudy(caseStudyContainer, STUDIO_DATA.projects[0]);
      return;
    }

    renderCaseStudy(caseStudyContainer, project);
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', loadProjectFromURL);

  loadProjectFromURL();
}

function renderCaseStudy(container, project) {
  const cs = project.caseStudy;
  const allProjects = STUDIO_DATA.projects;
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  // Other projects for the bottom "More Projects" section
  const otherProjects = allProjects.filter(p => p.id !== project.id).slice(0, 3);

  document.title = `${project.title} Case Study | MANOHAR SOLUTIONS`;

  container.innerHTML = `
    <div class="container-narrow" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- Top Action Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-stone); padding-bottom: 1.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <a href="projects.html" class="btn btn-secondary" style="font-size: 0.75rem; padding: 0.5rem 1.25rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.35rem;"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          BACK TO ALL PROJECTS
        </a>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span class="tag-badge" style="position: static; background: var(--bg-stone); color: var(--accent-terracotta); border-color: var(--border-stone); font-size: 0.7rem;">${project.tag || 'CASE STUDY'}</span>
          <span style="font-family: monospace; font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">PROJECT ${project.number} / 06</span>
        </div>
      </div>

      <!-- Quick Switcher Bar (All 6 Projects) -->
      <div style="margin-bottom: 2.5rem;">
        <span style="font-size: 0.7rem; font-family: monospace; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); display: block; margin-bottom: 0.5rem;">Switch Case Study:</span>
        <div class="case-study-switcher-bar">
          ${allProjects.map(p => `
            <button type="button" onclick="switchCaseStudy('${p.id}')" class="case-study-switcher-pill ${p.id === project.id ? 'active' : ''}">
              <span class="pill-num">${p.number}</span>
              <span>${p.title}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Hero Header -->
      <header style="margin-bottom: 3rem;">
        <span class="eyebrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          ${project.category}
        </span>
        <h1 class="headline-xl">${project.title}</h1>
        <p class="subheadline" style="font-size: 1.25rem; margin-bottom: 2rem;">${project.shortDescription}</p>

        <!-- Metrics Banner -->
        ${cs.metrics && cs.metrics.length ? `
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 16px; padding: 1.75rem; margin-bottom: 2.5rem;">
            ${cs.metrics.map(m => `
              <div>
                <span style="display: block; font-family: monospace; font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 800; color: var(--accent-terracotta);">${m.value}</span>
                <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-charcoal); display: block; margin-top: 0.25rem;">${m.label}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Featured High-Res Showcase Mockup -->
        <div style="border-radius: 16px; overflow: hidden; border: 1px solid var(--border-stone); background: #E8E2D8; box-shadow: 0 20px 48px -12px rgba(20, 20, 19, 0.12);">
          <div style="background: #EAE6DF; padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-stone); display: flex; align-items: center; gap: 0.5rem;">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #D8D2C5; display: inline-block;"></span>
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #D8D2C5; display: inline-block;"></span>
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #D8D2C5; display: inline-block;"></span>
            <span style="font-family: monospace; font-size: 0.75rem; color: var(--text-muted); margin-left: 0.5rem; letter-spacing: 0.04em;">https://${project.id}.preview.manoharsolutions.dev</span>
          </div>
          <div style="aspect-ratio: 16 / 9; overflow: hidden;">
            <img src="${project.image}" alt="${project.title} Full Website Showcase" style="width: 100%; height: 100%; object-fit: cover; object-position: top; display: block;">
          </div>
        </div>
      </header>

      <!-- Case Study Body Sections -->
      <div style="display: flex; flex-direction: column; gap: 3rem;">
        
        <!-- 1. Overview & Client -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              OVERVIEW & CLIENT
            </h2>
            <div class="cs-side-thumb">
              <img src="assets/images/cs_overview_client_1790497922576.jpg" alt="Client concept & project dossier"   />
            </div>
          </div>
          <div>
            <p style="font-size: 1.125rem; line-height: 1.75; color: var(--text-charcoal); margin-bottom: 1.5rem;">${cs.overview}</p>
            <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; font-size: 0.95rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 38px; height: 38px; border-radius: 8px; background: #FFFFFF; border: 1px solid var(--border-stone); display: flex; align-items: center; justify-content: center; color: var(--accent-terracotta); font-weight: bold; flex-shrink: 0;">🏢</div>
              <div>
                <strong style="color: var(--text-charcoal); display: block;">Client / Project Concept:</strong>
                <span>${cs.clientInfo}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 2. Goals -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
              PROJECT GOALS
            </h2>
            <div class="cs-side-thumb">
              <img src="assets/images/cs_project_goals_1790497937814.jpg" alt="Project goals and wireframes"   />
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
            ${cs.goals.map((g, idx) => `
              <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; font-size: 0.9rem; display: flex; gap: 0.85rem; align-items: flex-start;">
                <span style="width: 26px; height: 26px; border-radius: 50%; background: #FAF8F5; border: 1px solid var(--border-stone); color: var(--accent-terracotta); font-weight: 800; font-size: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: monospace;">0${idx + 1}</span>
                <span style="color: var(--text-charcoal); line-height: 1.5;">${g}</span>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- 3. Design & Dev Approach -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              DESIGN & DEV
            </h2>
            <div class="cs-side-thumb">
              <img src="assets/images/cs_design_dev_1790497951833.jpg" alt="Design system and code engineering"   />
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 14px; padding: 1.5rem;">
              <h3 class="headline-md" style="font-size: 1.15rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--accent-terracotta);">🎨</span> Design Strategy
              </h3>
              <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.65;">${cs.designApproach}</p>
            </div>
            <div style="background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 14px; padding: 1.5rem;">
              <h3 class="headline-md" style="font-size: 1.15rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--accent-terracotta);">⚡</span> Engineering & Implementation
              </h3>
              <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.65;">${cs.developmentApproach}</p>
            </div>
          </div>
        </section>

        <!-- 4. Key Capabilities -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              KEY CAPABILITIES
            </h2>
            <div class="cs-side-thumb">
              <img src="assets/images/cs_key_capabilities_1790497963224.jpg" alt="Interactive component capabilities"   />
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 0.85rem;">
            ${cs.keyFeatures.map(f => `
              <div style="padding: 1rem 1.15rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; font-size: 0.88rem; font-weight: 600; display: flex; align-items: flex-start; gap: 0.65rem; color: var(--text-charcoal);">
                <span style="color: var(--accent-terracotta); font-weight: bold; flex-shrink: 0; font-size: 1rem;">✓</span>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- 5. Technologies Used -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              TECH STACK
            </h2>
            <div class="cs-side-thumb">
              <img src="assets/images/cs_tech_stack_1790497975099.jpg" alt="Modern web technology stack"   />
            </div>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.65rem;">
            ${cs.technologies.map(t => `
              <span style="padding: 0.6rem 1.15rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 10px; font-size: 0.82rem; font-weight: 700; color: var(--text-charcoal); display: inline-flex; align-items: center; gap: 0.4rem;">
                <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--accent-terracotta);"></span>
                ${t}
              </span>
            `).join('')}
          </div>
        </section>

        <!-- 6. Responsive Testing Breakpoints -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              MULTI-DEVICE QA
            </h2>
            <div class="cs-side-thumb">
              <img src="assets/images/cs_multidevice_qa_1790497988417.jpg" alt="Multi-device responsive testing"   />
            </div>
          </div>
          <div>
            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.65; margin-bottom: 1.25rem;">${cs.responsiveDesign}</p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.85rem;">
              <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; text-align: center;">
                <span style="font-size: 1.5rem; display: block; margin-bottom: 0.25rem;">💻</span>
                <strong style="display: block; font-size: 0.88rem; color: var(--text-charcoal);">Desktop Displays</strong>
                <span style="font-size: 0.75rem; color: var(--text-muted); font-family: monospace;">1440px – 4K Retina</span>
              </div>
              <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; text-align: center;">
                <span style="font-size: 1.5rem; display: block; margin-bottom: 0.25rem;">📱</span>
                <strong style="display: block; font-size: 0.88rem; color: var(--text-charcoal);">Tablet Viewports</strong>
                <span style="font-size: 0.75rem; color: var(--text-muted); font-family: monospace;">768px – 1024px</span>
              </div>
              <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; text-align: center;">
                <span style="font-size: 1.5rem; display: block; margin-bottom: 0.25rem;">📲</span>
                <strong style="display: block; font-size: 0.88rem; color: var(--text-charcoal);">Mobile Phones</strong>
                <span style="font-size: 0.75rem; color: var(--text-muted); font-family: monospace;">320px – 425px</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 7. Outcome & Client Feedback -->
        <section style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div style="padding: 2.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 16px;">
            <span class="eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              THE OUTCOME
            </span>
            <h2 class="headline-md" style="margin-bottom: 0.75rem;">Measurable Business Results</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7;">${cs.finalResult}</p>
          </div>

          ${cs.testimonial ? `
            <div class="cs-quote-card">
              <div style="display: flex; align-items: center; gap: 0.25rem; color: #F59E0B; margin-bottom: 1rem;">
                ${Array(5).fill('<svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>').join('')}
                <span style="font-family: monospace; font-size: 0.8rem; font-weight: 700; color: #D97706; margin-left: 0.35rem; background: rgba(245, 158, 11, 0.15); padding: 0.1rem 0.4rem; border-radius: 4px;">5.0 RATING</span>
              </div>
              <p class="cs-quote-text">"${cs.testimonial.quote}"</p>
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--text-charcoal); color: #FFF; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">
                  ${cs.testimonial.author.charAt(0)}
                </div>
                <div>
                  <strong style="display: block; font-size: 0.95rem; color: var(--text-charcoal);">${cs.testimonial.author}</strong>
                  <span style="font-size: 0.8rem; color: var(--text-muted);">${cs.testimonial.role}</span>
                </div>
              </div>
            </div>
          ` : ''}
        </section>

      </div>

      <!-- Previous & Next Project Navigation Cards -->
      <div class="cs-nav-grid">
        <a href="casestudy.html?project=${prevProject.id}" onclick="event.preventDefault(); switchCaseStudy('${prevProject.id}');" class="cs-nav-card prev-card">
          <div class="cs-nav-thumb">
            <img src="${prevProject.image}" alt="${prevProject.title}">
          </div>
          <div>
            <span style="font-size: 0.72rem; font-family: monospace; color: var(--accent-terracotta); font-weight: 700; display: block;">← PREVIOUS PROJECT</span>
            <strong style="font-size: 0.95rem; color: var(--text-charcoal); display: block;">${prevProject.title}</strong>
            <span style="font-size: 0.75rem; color: var(--text-muted);">${prevProject.category}</span>
          </div>
        </a>

        <a href="casestudy.html?project=${nextProject.id}" onclick="event.preventDefault(); switchCaseStudy('${nextProject.id}');" class="cs-nav-card next-card">
          <div class="cs-nav-thumb">
            <img src="${nextProject.image}" alt="${nextProject.title}">
          </div>
          <div>
            <span style="font-size: 0.72rem; font-family: monospace; color: var(--accent-terracotta); font-weight: 700; display: block;">NEXT PROJECT →</span>
            <strong style="font-size: 0.95rem; color: var(--text-charcoal); display: block;">${nextProject.title}</strong>
            <span style="font-size: 0.75rem; color: var(--text-muted);">${nextProject.category}</span>
          </div>
        </a>
      </div>

      <!-- Action Footer with Contact CTA -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-stone); padding-top: 2.5rem; margin-top: 3.5rem; flex-wrap: wrap; gap: 1.5rem;">
        <div>
          <h3 class="headline-md" style="font-size: 1.35rem; margin-bottom: 0.25rem;">Interested in a similar website?</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Let's build a clean, responsive solution customized for your business.</p>
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="projects.html" class="btn btn-secondary">VIEW ALL PROJECTS</a>
          <a href="contact.html?project=${project.id}" class="btn btn-primary">START A PROJECT →</a>
        </div>
      </div>

      <!-- Explore More Projects Section -->
      <div style="margin-top: 4.5rem; padding-top: 3rem; border-top: 1px solid var(--border-stone);">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="eyebrow">PORTFOLIO</span>
            <h3 class="headline-md">EXPLORE MORE CASE STUDIES</h3>
          </div>
          <a href="projects.html" class="btn-link">SEE ALL 6 PROJECTS →</a>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
          ${otherProjects.map(op => `
            <div class="project-card" style="display: flex; flex-direction: column;">
              <a href="casestudy.html?project=${op.id}" onclick="event.preventDefault(); switchCaseStudy('${op.id}');" class="project-img-wrap" style="aspect-ratio: 16 / 10;">
                <img src="${op.image}" alt="${op.title}" >
                <span class="tag-badge">${op.tag || 'CASE STUDY'}</span>
              </a>
              <div class="project-meta" style="padding: 1.25rem;">
                <div class="project-meta-top" style="margin-bottom: 0.5rem;">
                  <span class="p-num">PROJECT ${op.number}</span>
                  <span>${op.category}</span>
                </div>
                <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">
                  <a href="casestudy.html?project=${op.id}" onclick="event.preventDefault(); switchCaseStudy('${op.id}');" style="color: var(--text-charcoal);">${op.title}</a>
                </h4>
                <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5; margin-bottom: 1rem;">${op.shortDescription}</p>
                <div class="project-meta-bottom" style="margin-top: auto; padding-top: 0.75rem;">
                  <a href="casestudy.html?project=${op.id}" onclick="event.preventDefault(); switchCaseStudy('${op.id}');" class="btn btn-primary" style="padding: 0.6rem 1.25rem;">VIEW CASE STUDY →</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

// 5. Contact Form Submission
function initContactForm() {
  const form = document.getElementById('project-contact-form');
  const responseArea = document.getElementById('form-response');
  const submitBtn = document.getElementById('submit-btn');

  if (!form || !responseArea) return;

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // Pre-fill project type if in URL
  const params = new URLSearchParams(window.location.search);
  const prefill = params.get('project');
  if (prefill) {
    const select = document.getElementById('projectType');
    if (select) {
      if (prefill.includes('saas') || prefill.includes('landing')) {
        select.value = 'Landing Page';
      } else if (prefill.includes('photo') || prefill.includes('portfolio')) {
        select.value = 'Portfolio Website';
      } else if (prefill.includes('glamora') || prefill.includes('naturals') || prefill.includes('commerce')) {
        select.value = 'Responsive Website';
      } else {
        select.value = 'Business Website';
      }
    }
  }

  // Handle Form Submission -> Directly opens WhatsApp chat
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const type = document.getElementById('projectType').value;
    const budget = document.getElementById('budget').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !message) {
      responseArea.innerHTML = `<div style="padding: 0.85rem; border-radius: 8px; background: #FFF1F0; border: 1px solid #FFCCC7; color: #CF1322; font-size: 0.85rem; margin-bottom: 1rem;">Please provide your name, email, phone number, and project requirements.</div>`;
      return;
    }

    const formattedDate = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    // 1. Prepare WhatsApp payload pre-filled with all project details
    const waPayload = 
`*NEW PROJECT INQUIRY - MANOHAR SOLUTIONS*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${name}
📧 *Email Address:* ${email}
📱 *Phone / WhatsApp:* ${phone}
💼 *Service Needed:* ${type}
💰 *Budget Range:* ${budget}
━━━━━━━━━━━━━━━━━━━━━━
📝 *Project Requirements:*
${message}
━━━━━━━━━━━━━━━━━━━━━━
_Sent via Manohar Studio website_`;

    const waUrl = `https://wa.me/918019923533?text=${encodeURIComponent(waPayload)}`;

    // 2. Direct automatic trigger to open WhatsApp chat
    const waLink = document.createElement('a');
    waLink.href = waUrl;
    waLink.target = '_blank';
    waLink.rel = 'noopener noreferrer';
    document.body.appendChild(waLink);
    waLink.click();
    document.body.removeChild(waLink);

    // 3. Background email notification dispatch to singampallimanohar6@gmail.com
    try {
      fetch('https://formsubmit.co/ajax/singampallimanohar6@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry: ${name} (${type})`,
          _captcha: 'false',
          _template: 'table',
          'Client Name': name,
          'Email Address': email,
          'Phone Number': phone,
          'Service Needed': type,
          'Budget Range': budget,
          'Project Requirements': message,
          'Submitted At': formattedDate
        })
      }).catch(() => {});
    } catch (err) {
      // Background sync, non-blocking
    }

    // 4. Hide form and display confirmation with direct WhatsApp action button
    form.style.display = 'none';

    responseArea.innerHTML = `
      <div style="padding: 1.5rem 0; text-align: center;">
        <div style="width: 58px; height: 58px; border-radius: 50%; background: #25D366; color: #FFFFFF; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.35);">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
          </svg>
        </div>
        
        <h3 class="headline-md" style="margin-bottom: 0.4rem;">Connecting to WhatsApp Chat...</h3>
        <p style="color: var(--text-muted); font-size: 0.92rem; max-width: 440px; margin: 0 auto 1.5rem;">
          Your inquiry details have been prepared. If your WhatsApp chat did not open automatically, tap the button below to start chatting with Manohar:
        </p>

        <!-- Big Primary WhatsApp Button -->
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%; padding: 1rem 1.25rem; font-size: 1rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.65rem; margin-bottom: 1.5rem; text-decoration: none;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
          </svg>
          <span>OPEN WHATSAPP CHAT (+91 80199 23533)</span>
        </a>

        <!-- Submitted Summary Card -->
        <div style="background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; padding: 1.25rem; text-align: left; margin-bottom: 1.5rem;">
          <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-terracotta); letter-spacing: 0.05em; margin-bottom: 0.75rem; border-bottom: 1px solid var(--border-stone); padding-bottom: 0.4rem;">
            Prepared Inquiry Summary
          </div>
          <div style="display: grid; grid-template-columns: 130px 1fr; row-gap: 0.5rem; font-size: 0.88rem;">
            <span style="color: var(--text-muted); font-weight: 600;">Client:</span>
            <strong>${escapeHtml(name)}</strong>
            <span style="color: var(--text-muted); font-weight: 600;">Email:</span>
            <span>${escapeHtml(email)}</span>
            <span style="color: var(--text-muted); font-weight: 600;">Phone:</span>
            <strong>${escapeHtml(phone)}</strong>
            <span style="color: var(--text-muted); font-weight: 600;">Service:</span>
            <span>${escapeHtml(type)}</span>
            <span style="color: var(--text-muted); font-weight: 600;">Budget:</span>
            <span>${escapeHtml(budget)}</span>
          </div>
        </div>

        <button type="button" id="reset-inquiry-form-btn" class="btn btn-white" style="font-size: 0.85rem; padding: 0.55rem 1.25rem; margin: 0 auto; display: block;">
          ← Fill Out Another Request
        </button>
      </div>
    `;

    const resetBtn = document.getElementById('reset-inquiry-form-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        form.style.display = 'flex';
        responseArea.innerHTML = '';
      });
    }

    responseArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

