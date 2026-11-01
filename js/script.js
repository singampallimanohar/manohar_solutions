/**
 * MANOHAR SOLUTIONS
 * Pure Vanilla JavaScript Module
 * Handles dynamic case-studies, portfolio filtering, FAQ accordions,
 * mobile navigation drawer, interactive scope estimator, and WhatsApp contact integration.
 */

// Central Studio Data & Config
const STUDIO_DATA = {
  config: {
    whatsappNumber: "919391461106",
    displayPhone: "+91 9391461106",
    email: "singampallimanohar6@gmail.com",
    brandName: "MANOHAR SOLUTIONS",
    studioLocation: "Visakhapatnam, Andhra Pradesh, India · Remote Worldwide"
  },
  projects: [
    {
      id: "kings-biryani",
      number: "01",
      title: "KINGS BIRYANI'S",
      category: "Restaurant Website Design",
      filterCategory: "RESTAURANT / FOOD",
      tag: "LIVE PROJECT",
      isLive: true,
      isConceptDemo: false,
      demoUrl: "https://kingbiryani.netlify.app/",
      shortDescription: "A modern, premium restaurant website featuring a cinematic homepage, digital food menu, photo gallery, restaurant information, and WhatsApp ordering interface. Located in Tuni, Andhra Pradesh.",
      image: "assets/images/kings-biryani-home.webp",
      imageFallback: "assets/images/kings-biryani-home.webp",
      thumb: "assets/images/kings-biryani-thumb.jpg",
      thumbFallback: "assets/images/kings-biryani-thumb.jpg",
      mobileImage: "assets/images/kings_biryani_mobile.jpg",
      mobileFallback: "assets/images/kings_biryani_mobile.jpg",
      tags: ["Restaurant Website", "WhatsApp Order", "Food Menu", "Photo Gallery"],
      hasCaseStudy: true,

      caseStudy: {
        overview: "Kings Biryani's and Family Restaurant is an authentic dum biryani dining destination located in Tuni, Andhra Pradesh. This website project was designed and developed to provide a strong digital presence, showcasing authentic dum biryani specialties, a comprehensive digital food menu, dining ambience, and a frictionless WhatsApp ordering interface.",
        clientInfo: "Kings Biryani's & Family Restaurant — Tuni, Andhra Pradesh. Authentic Andhra & Hyderabadi dum biryani dining, takeaways, and online order inquiries.",
        goals: [
          "Create an authentic, cinematic online presence for the restaurant brand.",
          "Display a comprehensive digital food menu with categorized dish listings.",
          "Enable direct WhatsApp-based customer ordering and inquiry routing.",
          "Showcase the restaurant ambience and food dishes through a high-quality gallery.",
          "Ensure fluid mobile responsiveness across all smartphone viewports.",
          "Help customers locate the restaurant with embedded Google Maps directions."
        ],
        designApproach: "The design uses a dark, cinematic aesthetic with gold typography and warm amber accents that complement biryani's rich culinary tradition. A full-screen video hero sets the atmosphere instantly, while structured section navigation guides visitors smoothly from menu exploration to direct WhatsApp order inquiries.",
        developmentApproach: "Built with semantic HTML5, modern CSS custom properties, and modular vanilla JavaScript. Features a dynamic food menu categorized into Starters, Biryanis, Gravies, and Beverages, a WhatsApp order payload generator, and an interactive photo gallery. Fully mobile-responsive across all viewports.",
        keyFeatures: [
          "Cinematic full-screen video hero presentation with gold accents",
          "Digital food menu with 70+ dishes organized by category",
          "WhatsApp click-to-order integration for direct customer ordering",
          "High-quality culinary and dining ambience photo gallery",
          "Restaurant location overview with integrated Google Maps directions",
          "Contact details with operating hours and dine-in seating specs",
          "Mobile-first responsive design tested from 320px to 4K"
        ],
        responsiveDesign: "Optimized for all viewports from 320px smartphones to 1440px+ desktop displays. Mobile navigation uses a slide-in drawer. The food menu grid reflows seamlessly from multi-column desktop displays down to single-column mobile views.",
        technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Google Fonts", "WhatsApp Business Integration"],
        finalResult: "An authentic, royal digital restaurant experience showcasing culinary craft, effortless digital menu navigation, and direct WhatsApp customer ordering without external platform commissions.",
        challenges: [
          {
            challenge: "Presenting an extensive menu of 70+ authentic culinary dishes across Starters, Dum Biryanis, Gravies, and Beverages without creating excessive vertical scrolling or confusing mobile navigation.",
            solution: "Designed a clean, categorized tabbed menu system with rapid section jumping, consistent pricing badges, and item tags that adapt fluidly between desktop columns and thumb-friendly mobile cards."
          },
          {
            challenge: "Enabling direct client ordering without recurring SaaS software costs, external aggregators, or commissions taking away restaurant profit.",
            solution: "Implemented a pure vanilla JavaScript WhatsApp click-to-order engine that formats dishes, quantities, and customer instructions into an organized, instant chat payload sent directly to the restaurant desk."
          }
        ],
        metrics: [
          { label: "Food Menu Catalog", value: "70+ Dishes" },
          { label: "Ordering Channel", value: "WhatsApp Direct" },
          { label: "Multi-Device QA", value: "320px–4K" }
        ],
        qaSpecs: [
          { device: "Smartphones (320px – 430px)", tested: "iPhone SE, 13/14 Pro, Samsung Galaxy S22", result: "Pass", notes: "Zero overflow, thumb-friendly 48px touch targets" },
          { device: "Tablets (768px – 1024px)", tested: "iPad Mini, iPad Air, Galaxy Tab", result: "Pass", notes: "Menu reflows to 2 columns with fluid clamp font scaling" },
          { device: "Desktop (1024px – 1440px+)", tested: "MacBook Pro, 1080p Monitor, 4K Display", result: "Pass", notes: "Cinematic widescreen framing with sticky navigation" }
        ]
      }
    },
    {
      id: "hari-naturals",
      number: "02",
      title: "HARI NATURALS",
      category: "Natural Products Website",
      filterCategory: "E-COMMERCE / PRODUCT",
      tag: "CONCEPT SHOWCASE",
      isLive: false,
      isConceptDemo: true,
      demoUrl: "",
      shortDescription: "A clean product-focused website concept for an organic skincare and botanical remedies brand with direct WhatsApp ordering.",
      image: "assets/images/hari_naturals_showcase_1790489158642.jpg",
      imageFallback: "assets/images/hari_naturals_showcase_1790489158642.jpg",
      thumb: "assets/images/hari_naturals_thumb.webp",
      thumbFallback: "assets/images/hari_naturals_thumb.webp",
      mobileImage: "assets/images/hari_naturals_mobile.jpg",
      mobileFallback: "assets/images/hari_naturals_mobile.jpg",
      tags: ["WhatsApp Orders", "Botanical Catalog", "Trust Badges", "Organic Aesthetic"],
      hasCaseStudy: true,

      caseStudy: {
        overview: "Hari Naturals crafts organic botanical remedies and clean skincare. The concept demonstrates how to establish brand trust through transparent product stories and an earthy, pristine aesthetic with frictionless ordering via WhatsApp click-to-chat.",
        clientInfo: "Hari Naturals Wellness Co. — Concept design prototype for organic personal care.",
        goals: [
          "Communicate ingredient purity and sustainable sourcing clearly.",
          "Create an intuitive product discovery experience for natural wellness seekers.",
          "Ensure fast, lightweight mobile loading for local and national orders.",
          "Integrate direct WhatsApp consultation and easy product ordering."
        ],
        designApproach: "The palette pairs warm stone undertones with botanical organic tones and burnt terracotta highlights, giving product photography ample breathing room and evoking holistic wellness.",
        developmentApproach: "Built with pure front-end efficiency: semantic markup, accessible labels, clean accordion ingredients, lightweight image assets, and a customized WhatsApp click-to-chat payload generator.",
        keyFeatures: [
          "Direct WhatsApp ordering integration with pre-filled cart specs",
          "Interactive botanical ingredient explorer with accordion breakdowns",
          "Customer trust indicators and ingredient transparency badges",
          "Frictionless mobile one-page order inquiry form",
          "Organized product categorization for skin, hair, and wellness",
          "Lightweight asset loading across mobile networks with low data usage"
        ],
        responsiveDesign: "Engineered mobile-first with thumb-friendly touch targets, sticky purchase inquiries, and responsive product grids across smartphones, tablets, and desktops.",
        technologies: ["HTML5", "CSS3", "JavaScript", "WhatsApp API", "Mobile UX"],
        finalResult: "A tranquil, high-trust storefront concept demonstrating frictionless WhatsApp consultation and streamlined ordering without complex e-commerce backend overhead.",
        challenges: [
          {
            challenge: "Conveying natural botanical purity and organic sourcing while keeping page load lightweight on variable mobile connections.",
            solution: "Engineered an interactive ingredient transparency explorer using semantic HTML accordions and modern WebP image compression, achieving zero bloat and instant interactivity."
          },
          {
            challenge: "Capturing direct orders from wellness customers without maintaining a heavy server-side checkout backend.",
            solution: "Integrated a custom WhatsApp order funnel that pre-populates product selections and package sizes into a one-tap consultation chat."
          }
        ],
        metrics: [
          { label: "Ordering Channel", value: "WhatsApp Direct" },
          { label: "Catalog Layout", value: "Botanical Grid" },
          { label: "Design System", value: "Mobile-First" }
        ],
        qaSpecs: [
          { device: "Smartphones (320px – 430px)", tested: "iPhone SE, iPhone 14, Pixel 7", result: "Pass", notes: "Sticky consultation button & responsive product cards" },
          { device: "Tablets (768px – 1024px)", tested: "iPad 10th Gen, Galaxy Tab A8", result: "Pass", notes: "Clean 2-column catalog grid with accordion toggles" },
          { device: "Desktop (1024px – 1440px+)", tested: "Chrome, Safari, Firefox on Desktop", result: "Pass", notes: "Balanced whitespace and high-res imagery presentation" }
        ]
      }
    },
    {
      id: "photography-studio",
      number: "03",
      title: "PHOTOGRAPHY STUDIO",
      category: "Photography Website",
      filterCategory: "PORTFOLIO",
      tag: "CONCEPT SHOWCASE",
      isLive: false,
      isConceptDemo: true,
      demoUrl: "",
      shortDescription: "A minimalist visual showcase designed for commercial photographers, featuring immersive galleries, client proofing, and project booking.",
      image: "assets/images/photo_studio_showcase_1790489179075.webp",
      imageFallback: "assets/images/photo_studio_showcase_1790489179075.webp",
      thumb: "assets/images/photo_studio_thumb.jpg",
      thumbFallback: "assets/images/photo_studio_thumb.jpg",
      mobileImage: "assets/images/photo_studio_mobile.webp",
      mobileFallback: "assets/images/photo_studio_mobile.webp",
      tags: ["Immersive Lightbox", "Categorized Albums", "Booking Funnel", "Asset Tuning"],
      hasCaseStudy: true,

      caseStudy: {
        overview: "A portfolio platform designed for architectural and portrait photography requiring high-definition imagery presentation, subtle typographic restraint, and client booking inquiry flows without lag.",
        clientInfo: "Architectural & Editorial Visual Studio — Concept design prototype for creative professionals.",
        goals: [
          "Showcase high-resolution portfolio albums without sacrificing loading speed.",
          "Provide a minimal, distraction-free viewing experience that honors visual craft.",
          "Streamline client project bookings, date checks, and rate inquiries."
        ],
        designApproach: "A minimalist monochrome and warm charcoal visual canvas where photography remains the hero. Typographic details are understated and borders are razor-thin.",
        developmentApproach: "Adaptive image loading, touch gesture gallery navigation, and accessible inquiry routing engineered with pure vanilla JavaScript.",
        keyFeatures: [
          "Full-screen immersive image inspection modal",
          "Categorized photo galleries (Architecture, Portraits, Editorial, Travel)",
          "Direct package selection and booking inquiry form",
          "Optimized image rendering with responsive aspect ratios",
          "Keyboard accessible gallery navigation (arrows and escape keys)",
          "Distraction-free viewing layout for immersive portfolio inspection"
        ],
        responsiveDesign: "Seamless pinch-and-tap mobile viewing experience with responsive columns adapting from 1 column on mobile to 3 columns on wide screens.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Grid", "Asset Tuning"],
        finalResult: "An exhibition-grade digital gallery concept designed to present creative portfolios with editorial elegance, lightweight image delivery, and intuitive booking pathways.",
        challenges: [
          {
            challenge: "Preserving exhibition-grade clarity for high-resolution portfolio images without causing slow load times or high mobile bandwidth consumption.",
            solution: "Implemented responsive aspect ratios, progressive decoding, and lazy loading for off-screen shots, coupled with a lightweight vanilla JS modal lightbox supporting keyboard and touch navigation."
          },
          {
            challenge: "Guiding art directors and corporate clients toward structured booking and date-check inquiries without friction.",
            solution: "Created a dedicated booking funnel with package selectors and clear scope expectations directly connected to client messaging."
          }
        ],
        metrics: [
          { label: "Image Strategy", value: "Adaptive Web" },
          { label: "Navigation Spec", value: "Keyboard & Touch" },
          { label: "Viewing Canvas", value: "Minimalist Grid" }
        ],
        qaSpecs: [
          { device: "Smartphones (320px – 430px)", tested: "iPhone 12/13/14, OnePlus 11", result: "Pass", notes: "Fluid single-column gallery with swipeable modal" },
          { device: "Tablets (768px – 1024px)", tested: "iPad Pro 11-inch portrait & landscape", result: "Pass", notes: "Dual-column masonry layout with instant lightbox" },
          { device: "Desktop (1024px – 1440px+)", tested: "Retina 4K iMac, 1440p Monitor", result: "Pass", notes: "Exhibition 3-column grid with keyboard arrow controls" }
        ]
      }
    },
    {
      id: "business-website",
      number: "04",
      title: "BUSINESS WEBSITE",
      category: "Business Website",
      filterCategory: "BUSINESS",
      tag: "CONCEPT SHOWCASE",
      isLive: false,
      isConceptDemo: true,
      demoUrl: "",
      shortDescription: "A corporate web portal built for advisory and consulting services, featuring clear value propositions, case studies, and meeting scheduling.",
      image: "assets/images/corporate_business_showcase_1790489194491.webp",
      imageFallback: "assets/images/corporate_business_showcase_1790489194491.webp",
      thumb: "assets/images/corporate_business_thumb.webp",
      thumbFallback: "assets/images/corporate_business_thumb.webp",
      mobileImage: "assets/images/business_website_mobile.jpg",
      mobileFallback: "assets/images/business_website_mobile.jpg",
      tags: ["Executive RFP", "Advisory Services", "Semantic HTML5", "Lead Generation"],
      hasCaseStudy: true,

      caseStudy: {
        overview: "A corporate digital presence designed for advisory and management consulting practices seeking to establish authority, articulate specialized service offerings, and capture high-value prospective client leads.",
        clientInfo: "Corporate Advisory & Consulting — Concept design prototype for B2B enterprises.",
        goals: [
          "Position the business as an authoritative, trustworthy leader in professional services.",
          "Structure complex multi-disciplinary advisory services into digestible propositions.",
          "Provide direct scheduling and inquiry capture for prospective corporate clients."
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
        responsiveDesign: "Designed for corporate executives reviewing proposals across tablet computers, laptops, and mobile devices.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Accessible Forms", "SEO Best Practices"],
        finalResult: "A distinguished corporate website concept establishing commercial authority with clean navigation, rapid responsiveness, and clear lead capture pathways.",
        challenges: [
          {
            challenge: "Distilling complex multi-practice advisory services and corporate capabilities into an authoritative, clear value proposition.",
            solution: "Crafted structured service cards with explicit client deliverables and a clean corporate visual rhythm balancing warm stone tones and charcoal typography."
          },
          {
            challenge: "Capturing qualified corporate RFP inquiries while filtering out spam or underspecified requests.",
            solution: "Engineered an accessible RFP inquiry form with budget selectors, service categorization, and client-side validation."
          }
        ],
        metrics: [
          { label: "Structure", value: "B2B Lead Flow" },
          { label: "Accessibility Target", value: "WCAG Compliant" },
          { label: "Markup Standard", value: "Semantic HTML5" }
        ],
        qaSpecs: [
          { device: "Smartphones (320px – 430px)", tested: "iPhone 13, Galaxy A53", result: "Pass", notes: "Accordion service cards with clear single-tap dial/email" },
          { device: "Tablets (768px – 1024px)", tested: "iPad Air, Surface Pro 8", result: "Pass", notes: "Balanced 2-column layout for proposal reviews" },
          { device: "Desktop (1024px – 1440px+)", tested: "Chrome, Edge, Safari", result: "Pass", notes: "Structured hierarchy with full RFP capture layout" }
        ]
      }
    },
    {
      id: "apex-saas",
      number: "05",
      title: "APEX SAAS SUITE",
      category: "Landing Page Development",
      filterCategory: "LANDING PAGE",
      tag: "CONCEPT SHOWCASE",
      isLive: false,
      isConceptDemo: true,
      demoUrl: "",
      shortDescription: "A conversion-focused single page website with interactive pricing tiers, feature breakdowns, and frictionless signup pathways.",
      image: "assets/images/apex_saas_thumb.webp",
      imageFallback: "assets/images/apex_saas_thumb.webp",
      thumb: "assets/images/apex_saas_thumb.webp",
      thumbFallback: "assets/images/apex_saas_thumb.webp",
      mobileImage: "assets/images/apex_saas_mobile.jpg",
      mobileFallback: "assets/images/apex_saas_mobile.jpg",
      tags: ["Interactive Pricing", "Live Telemetry", "SaaS Conversion", "Performance Tuned"],
      hasCaseStudy: true,

      caseStudy: {
        overview: "Apex Cloud demonstrates a modern developer infrastructure product landing page. The goal is illustrating how to demystify complex technical features into simple, compelling value propositions that maximize conversion.",
        clientInfo: "Developer Tooling & Cloud Telemetry — Concept design prototype for software products.",
        goals: [
          "Convey technical features in clear, compelling product visuals.",
          "Maximize trial conversion rates with an interactive tier pricing calculator.",
          "Achieve fast initial paint and responsive interaction on desktop & mobile.",
          "Implement seamless onboarding inquiry integration."
        ],
        designApproach: "High-contrast dark-mode interface paired with warm charcoal surfaces, vibrant terracotta accents, and clean monospaced typography.",
        developmentApproach: "Pure vanilla JavaScript for zero-lag tab transitions, lightweight SVG charts, micro-animations, and accessible modal dialogues with no bloated JS frameworks.",
        keyFeatures: [
          "Interactive monthly vs annual pricing calculator toggle",
          "Live interactive telemetry demo simulation",
          "Detailed feature comparison matrix table",
          "Frictionless signup modal dialogue",
          "Customer trust ticker with technology partner badges",
          "Instant FAQ drawer with keyboard accessibility"
        ],
        responsiveDesign: "Engineered and validated across high-DPI retina displays, iPad Pro landscape, and mobile viewports with thumb-optimized CTA sticky bar.",
        technologies: ["HTML5", "CSS3 Grid/Flex", "Vanilla JS", "SVG Data Graphics", "Conversion CRO"],
        finalResult: "A high-impact landing page concept showcasing conversion design principles, responsive layout discipline, and lightweight code architecture.",
        challenges: [
          {
            challenge: "Explaining technical cloud telemetry and SaaS capabilities quickly without overwhelming prospective subscribers.",
            solution: "Built a high-impact split layout with an interactive live telemetry simulation, pricing calculator, and feature comparison matrix table using pure vanilla JavaScript."
          },
          {
            challenge: "Maximizing landing page conversion rates across diverse device viewports from mobile smartphones to ultra-wide displays.",
            solution: "Implemented sticky action bars on mobile, clear contrast CTA buttons, and zero external framework dependencies for sub-second visual responsiveness."
          }
        ],
        metrics: [
          { label: "Front-End Architecture", value: "Vanilla JS" },
          { label: "Interactive Tools", value: "Pricing Toggle" },
          { label: "Dependencies", value: "Zero Bloat" }
        ],
        qaSpecs: [
          { device: "Smartphones (320px – 430px)", tested: "iPhone 13 mini, Pixel 6a", result: "Pass", notes: "Sticky bottom CTA bar & horizontally scrollable pricing comparison" },
          { device: "Tablets (768px – 1024px)", tested: "iPad 9th Gen, Galaxy Tab S7", result: "Pass", notes: "Clean 2-tier pricing view with toggle" },
          { device: "Desktop (1024px – 1440px+)", tested: "Chrome, Safari, Firefox", result: "Pass", notes: "Full 3-column pricing grid and telemetry animations" }
        ]
      }
    },
    {
      id: "urban-architects",
      number: "06",
      title: "URBAN LINE ARCHITECTS",
      category: "Architecture & Design",
      filterCategory: "BUSINESS",
      tag: "CONCEPT SHOWCASE",
      isLive: false,
      isConceptDemo: true,
      demoUrl: "",
      shortDescription: "A clean, spatial portfolio representing high-end residential architecture with blueprint specs, project archives, and consultation inquiry.",
      image: "assets/images/architects_thumb.webp",
      imageFallback: "assets/images/architects_thumb.webp",
      thumb: "assets/images/architects_thumb.webp",
      thumbFallback: "assets/images/architects_thumb.webp",
      mobileImage: "assets/images/architects_mobile.jpg",
      mobileFallback: "assets/images/architects_mobile.jpg",
      tags: ["Spatial Layout", "Blueprint Overlays", "Editorial Grid", "Retina Displays"],
      hasCaseStudy: true,

      caseStudy: {
        overview: "Urban Line Architects models a digital portfolio for architectural studios. The design embodies architectural precision, geometric balance, and tactile spatial harmony.",
        clientInfo: "Spatial Design & Architecture Practice — Concept design prototype for design studios.",
        goals: [
          "Mirror architectural philosophies of elegance, geometry, and restraint.",
          "Enable seamless navigation between residential, commercial, and landscape projects.",
          "Provide project case sheets with blueprint drawings and material specs.",
          "Facilitate consultation bookings with prospective clients."
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
        finalResult: "A sophisticated studio concept demonstrating spatial layout balance, high-resolution architectural photo rendering, and intuitive client consultation inquiry.",
        challenges: [
          {
            challenge: "Reflecting architectural restraint, spatial balance, and blueprint precision across responsive viewports without layout distortion.",
            solution: "Applied fluid CSS Grid systems with clamp typography scaling, generous white space, and interactive blueprint modal inspections."
          },
          {
            challenge: "Facilitating confidential consultations for high-end residential and commercial architecture projects.",
            solution: "Structured a streamlined project consultation inquiry flow with typology filters, timeline indicators, and site location selectors."
          }
        ],
        metrics: [
          { label: "Visual System", value: "Spatial Grid" },
          { label: "Typography Scale", value: "Fluid Clamp" },
          { label: "Device Testing", value: "Mobile to 4K" }
        ],
        qaSpecs: [
          { device: "Smartphones (320px – 430px)", tested: "iPhone 14 Pro, Samsung Galaxy S23", result: "Pass", notes: "Vertical architectural photo feed with touch inspection" },
          { device: "Tablets (768px – 1024px)", tested: "iPad Pro 12.9-inch", result: "Pass", notes: "Portfolio presentation view with blueprint specs" },
          { device: "Desktop (1024px – 1440px+)", tested: "Retina 5K & 4K displays", result: "Pass", notes: "Wide spatial geometry layout with zero distortion" }
        ]
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

    if (caseStudyContainer) {
      window.history.pushState({ project: projectId }, '', nextUrl);
      if (targetProject) {
        renderCaseStudy(caseStudyContainer, targetProject);
      } else {
        renderNotFound(caseStudyContainer, projectId);
      }
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
  initProjectEstimator();
  updateDynamicYear();
}

function updateDynamicYear() {
  const currentYear = new Date().getFullYear();
  document.querySelectorAll('.footer-copy').forEach(el => {
    el.innerHTML = `&copy; ${currentYear} MANOHAR SOLUTIONS. Handcrafted with semantic HTML, CSS &amp; Vanilla JavaScript. All rights reserved.`;
  });
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
      drawer.setAttribute('aria-hidden', 'false');
      if (hamburger) {
        hamburger.setAttribute('aria-expanded', 'true');
      }
      document.body.style.overflow = 'hidden';
      if (closeDrawer) {
        closeDrawer.focus();
      }
    }
  }

  function closeNavDrawer() {
    if (drawer) {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      if (hamburger) {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
      }
      document.body.style.overflow = '';
    }
  }

  if (hamburger) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.addEventListener('click', openNavDrawer);
  }

  if (closeDrawer) {
    closeDrawer.addEventListener('click', closeNavDrawer);
  }

  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeNavDrawer();
      }
    });

    // Trap focus inside open drawer
    drawer.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const focusable = drawer.querySelectorAll('button, a, [tabindex="0"]');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
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

// 2. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      const isInitiallyActive = item.classList.contains('active');
      questionBtn.setAttribute('aria-expanded', isInitiallyActive ? 'true' : 'false');

      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => {
          i.classList.remove('active');
          const btn = i.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
        if (!isActive) {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
}

// 3. Projects Page Filter
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.projects-grid [data-category]');
  if (!filterBtns.length || !projectCards.length) return;

  function applyFilter(filter) {
    filterBtns.forEach(b => {
      const match = b.getAttribute('data-filter') === filter;
      b.classList.toggle('active', match);
      b.setAttribute('aria-pressed', match ? 'true' : 'false');
    });

    projectCards.forEach(card => {
      const cat = card.getAttribute('data-category');
      if (filter === 'ALL' || cat === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
    btn.addEventListener('click', () => {
      applyFilter(btn.getAttribute('data-filter'));
    });
  });

  // Check URL param for pre-filtering (e.g. projects.html?category=BUSINESS)
  const urlParams = new URLSearchParams(window.location.search);
  const requestedCat = urlParams.get('category') || urlParams.get('filter');
  if (requestedCat) {
    const norm = requestedCat.trim().toUpperCase();
    const matchingBtn = Array.from(filterBtns).find(b => {
      const df = (b.getAttribute('data-filter') || '').toUpperCase();
      return df === norm || df.includes(norm) || norm.includes(df);
    });
    if (matchingBtn) {
      applyFilter(matchingBtn.getAttribute('data-filter'));
    }
  }
}

// 4. Dynamic Case Study Loader (casestudy.html?project=...)
function initCaseStudyLoader() {
  const caseStudyContainer = document.getElementById('case-study-content');
  if (!caseStudyContainer) return;

  function loadProjectFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    let projectId = urlParams.get('project') || urlParams.get('id');

    // Default to the first project (Kings Biryani) if no project parameter provided
    if (!projectId) {
      projectId = STUDIO_DATA.projects[0].id;
    }

    const project = STUDIO_DATA.projects.find(p => p.id === projectId);
    if (!project || !project.caseStudy) {
      renderNotFound(caseStudyContainer, projectId);
      return;
    }

    renderCaseStudy(caseStudyContainer, project);
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', loadProjectFromURL);

  loadProjectFromURL();
}

function renderNotFound(container, requestedId) {
  document.title = 'Case Study Not Found | MANOHAR SOLUTIONS';
  const safeId = requestedId ? requestedId.replace(/[&<>'"]/g, '') : '';
  container.innerHTML = `
    <div class="container-narrow text-center" style="padding: 5rem 1rem 6rem;">
      <span class="eyebrow">PORTFOLIO DIRECTORY</span>
      <h1 class="headline-xl" style="margin-bottom: 1rem;">Case Study Not Found</h1>
      <p class="subheadline" style="max-width: 600px; margin: 0 auto 2.5rem;">
        The requested case study identifier <strong>"${safeId}"</strong> could not be located in our portfolio index.
      </p>
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 3.5rem;">
        <a href="projects.html" class="btn btn-primary">Browse All 6 Projects</a>
        <a href="casestudy.html?project=kings-biryani" onclick="event.preventDefault(); switchCaseStudy('kings-biryani');" class="btn btn-secondary">View Featured Showcase</a>
      </div>
      <div style="padding-top: 2rem; border-top: 1px solid var(--border-stone);">
        <span style="font-size: 0.75rem; font-family: monospace; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); display: block; margin-bottom: 1rem;">Choose an Available Case Study:</span>
        <div class="case-study-switcher-bar" style="justify-content: center;">
          ${STUDIO_DATA.projects.map(p => `
            <button type="button" onclick="switchCaseStudy('${p.id}')" class="case-study-switcher-pill">
              <span class="pill-num">${p.number}</span>
              <span>${p.title}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderCaseStudy(container, project) {
  const cs = project.caseStudy;
  const allProjects = STUDIO_DATA.projects;
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  // Other projects for the bottom "Explore More" section
  const otherProjects = allProjects.filter(p => p.id !== project.id).slice(0, 3);
  const techList = cs.technologies || [];

  const getTechIcon = (name) => {
    const l = name.toLowerCase();
    const svgBase = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-terracotta); flex-shrink: 0;">`;
    if (l.includes('html')) return svgBase + `<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    if (l.includes('css')) return svgBase + `<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`;
    if (l.includes('java') || l.includes('js')) return svgBase + `<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><path d="M8 16v-4a2 2 0 0 1 2-2M16 16v-4c0-1.1-.9-2-2-2"></path></svg>`;
    if (l.includes('respons') || l.includes('mobil') || l.includes('grid')) return svgBase + `<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`;
    if (l.includes('seo') || l.includes('perform') || l.includes('cro')) return svgBase + `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`;
    if (l.includes('form') || l.includes('api') || l.includes('ux') || l.includes('what')) return svgBase + `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>`;
    return svgBase + `<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`;
  };

  // Dynamic Document Title and Meta Updates
  document.title = `${project.title} Case Study | MANOHAR SOLUTIONS`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', project.shortDescription);
  }
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', `${project.title} Case Study | MANOHAR SOLUTIONS`);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', project.shortDescription);
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute('content', `https://manoharsolutions.dev/${project.image}`);
  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage) twitterImage.setAttribute('content', `https://manoharsolutions.dev/${project.image}`);

  container.innerHTML = `
    <div class="container-narrow" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- Top Action Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-stone); padding-bottom: 1.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <a href="projects.html" class="btn btn-secondary" style="font-size: 0.75rem; padding: 0.5rem 1.25rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.35rem;"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          BACK TO ALL PROJECTS
        </a>
        <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          ${project.demoUrl ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.72rem; padding: 0.45rem 1rem; display: inline-flex; align-items: center; gap: 0.35rem;">
              <span>VISIT LIVE DEMO</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          ` : ''}
          <span class="${project.isLive ? 'badge-live' : 'badge-concept'}">
            ${project.isLive ? '<span class="badge-live-dot" aria-hidden="true"></span>' : ''}
            ${project.tag || (project.isConceptDemo ? 'CONCEPT SHOWCASE' : 'LIVE PROJECT')}
          </span>
          <span style="font-family: monospace; font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">PROJECT ${project.number} / 06</span>
        </div>
      </div>

      <!-- Quick Switcher & Category Filter Bar -->
      <div style="margin-bottom: 2.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 0.75rem;">
          <span style="font-size: 0.72rem; font-family: monospace; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); display: block;">Select Project / Filter Category:</span>
          <div class="cs-category-filter-bar" role="toolbar" aria-label="Filter case studies by category" style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
            <button type="button" class="cs-cat-btn" data-cat="ALL" aria-pressed="false">All (06)</button>
            <button type="button" class="cs-cat-btn" data-cat="RESTAURANT / FOOD" aria-pressed="false">Restaurant</button>
            <button type="button" class="cs-cat-btn" data-cat="E-COMMERCE / PRODUCT" aria-pressed="false">E-Commerce</button>
            <button type="button" class="cs-cat-btn" data-cat="PORTFOLIO" aria-pressed="false">Portfolio</button>
            <button type="button" class="cs-cat-btn" data-cat="BUSINESS" aria-pressed="false">Business</button>
            <button type="button" class="cs-cat-btn" data-cat="LANDING PAGE" aria-pressed="false">Landing Page</button>
          </div>
        </div>
        <div class="case-study-switcher-bar">
          ${allProjects.map(p => `
            <button type="button" onclick="switchCaseStudy('${p.id}')" data-category="${p.filterCategory}" class="case-study-switcher-pill ${p.id === project.id ? 'active' : ''}">
              <span class="pill-num">${p.number}</span>
              <span>${p.title}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- 1. Hero Header matching Reference Image -->
      <header style="margin-bottom: 2rem;">
        <span class="eyebrow">CASE STUDY</span>
        <h1 class="headline-xl">${project.title} &ndash; ${
          project.id === 'kings-biryani'       ? 'A Royal Digital Presence'      :
          project.id === 'hari-naturals'       ? 'Organic Botanical Storefront'   :
          project.id === 'photography-studio'  ? 'Minimalist Visual Portfolio'    :
          project.id === 'business-website'    ? 'Executive Corporate Presence'   :
          project.id === 'apex-saas'           ? 'High-Conversion Landing Page'   :
          project.id === 'urban-architects'    ? 'Spatial Architecture Portfolio' :
                                                 'Modern Digital Showcase'
        }</h1>
      </header>

      <!-- Big Dark Hero Card matching Reference Image -->
      <div class="cs-hero-dark-card">
        <div class="cs-hero-dark-left">
          <h2>${project.title}</h2>
          <p>${project.category} &bull; Website Development Case Study</p>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            ${project.demoUrl ? `
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                <span>View Live Website</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
              <a href="contact.html?project=${project.id}" class="btn btn-secondary" style="border-color: rgba(255,255,255,0.4); color: #FFFFFF;">
                <span>Discuss Your Project &rarr;</span>
              </a>
            ` : `
              <a href="contact.html?project=${project.id}" class="btn btn-primary">
                <span>Start Your Project &rarr;</span>
              </a>
              <a href="contact.html?project=${project.id}" class="btn btn-secondary" style="border-color: rgba(255,255,255,0.4); color: #FFFFFF;">
                <span>Discuss Your Project &rarr;</span>
              </a>
            `}
          </div>
        </div>
        <div class="cs-hero-dark-right">
          <button
            type="button"
            class="cs-screenshot-btn"
            aria-label="View full-size showcase preview of ${project.title}"
            data-lightbox-src="${project.imageFallback || project.image}"
            data-lightbox-alt="${project.title} – Hero Showcase Preview"
            style="display: block; width: 100%; height: 100%; padding: 0; border: none; background: none; cursor: zoom-in;"
          >
            <picture style="display: block; width: 100%; height: 100%;">
              <source srcset="${project.image}" type="image/webp">
              <img src="${project.imageFallback || project.image}" alt="${project.title} Showcase – click to enlarge" loading="eager" style="width: 100%; height: 100%; object-fit: cover; display: block;">
            </picture>
          </button>
        </div>
      </div>

      <!-- Project Metadata Strip matching Reference Image -->
      <div class="cs-meta-box">
        <div class="cs-meta-item">
          <span class="cs-meta-label">Client</span>
          <span class="cs-meta-value">${project.title}</span>
        </div>
        <div class="cs-meta-item">
          <span class="cs-meta-label">Industry</span>
          <span class="cs-meta-value">${project.category}</span>
        </div>
        <div class="cs-meta-item">
          <span class="cs-meta-label">Type</span>
          <span class="cs-meta-value">Website Design</span>
        </div>
        <div class="cs-meta-item">
          <span class="cs-meta-label">Technologies</span>
          <span class="cs-meta-value">${techList.slice(0, 3).join(', ') || 'HTML5, CSS3, JavaScript'}</span>
        </div>
      </div>

      <!-- Two-Column Overview & Solution matching Reference Image -->
      <div class="cs-split-info-grid">
        <div class="cs-info-card">
          <div class="cs-info-block">
            <h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-terracotta); flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
              Project Overview
            </h3>
            <p>${cs.overview}</p>
          </div>
          <div class="cs-info-block" style="border-top: 1px solid var(--border-stone); padding-top: 1.5rem;">
            <h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-terracotta); flex-shrink: 0;"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
              Business Challenge
            </h3>
            <p>${cs.goals && cs.goals.length ? cs.goals[0] : cs.clientInfo}</p>
          </div>
        </div>

        <div class="cs-info-card">
          <div class="cs-info-block">
            <h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-terracotta); flex-shrink: 0;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Our Solution
            </h3>
            <ul class="cs-solution-list">
              ${cs.keyFeatures.slice(0, 5).map(f => `
                <li class="cs-solution-item">
                  <span style="color: var(--accent-terracotta); font-size: 1.1rem; flex-shrink: 0; line-height: 1;">&#10003;</span>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>

      <!-- Case Study Body Sections -->
      <div style="display: flex; flex-direction: column; gap: 3rem;">
        
        <!-- 2. Project Overview & Scope -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              OVERVIEW &amp; SCOPE
            </h2>
            <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; margin-top: 1rem;">
              <span style="font-family: monospace; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-terracotta); display: block; margin-bottom: 0.35rem;">Project Scope</span>
              <strong style="display: block; font-size: 0.95rem; color: var(--text-charcoal); margin-bottom: 0.25rem;">${project.category}</strong>
              <span style="font-size: 0.8rem; color: var(--text-muted);">${project.isLive ? 'Verified Live Client Project' : 'Concept Prototype'}</span>
            </div>
          </div>
          <div>
            <p style="font-size: 1.125rem; line-height: 1.75; color: var(--text-charcoal); margin-bottom: 1.5rem;">${cs.overview}</p>
            <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; font-size: 0.95rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 38px; height: 38px; border-radius: 8px; background: #FFFFFF; border: 1px solid var(--border-stone); display: flex; align-items: center; justify-content: center; color: var(--accent-terracotta); font-weight: bold; flex-shrink: 0;">🏢</div>
              <div>
                <strong style="color: var(--text-charcoal); display: block;">${project.isLive ? 'Client &amp; Location Context:' : 'Concept Domain &amp; Focus:'}</strong>
                <span>${cs.clientInfo}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 3. Business Challenges & Solutions -->
        ${cs.challenges && cs.challenges.length ? `
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
              BUSINESS CHALLENGES
            </h2>
            <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; margin-top: 1rem;">
              <span style="font-family: monospace; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-terracotta); display: block; margin-bottom: 0.35rem;">Problem Solving</span>
              <span style="font-size: 0.85rem; color: var(--text-charcoal); font-weight: 600;">Technical Execution</span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${cs.challenges.map(item => `
              <div style="background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 14px; padding: 1.5rem;">
                <div style="margin-bottom: 0.75rem; display: flex; align-items: baseline; gap: 0.5rem; flex-wrap: wrap;">
                  <span style="font-family: monospace; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: #CF1322; background: #FFF1F0; border: 1px solid #FFCCC7; padding: 0.2rem 0.5rem; border-radius: 4px;">CHALLENGE</span>
                  <strong style="color: var(--text-charcoal); font-size: 0.95rem;">${item.challenge}</strong>
                </div>
                <div style="display: flex; align-items: baseline; gap: 0.5rem; border-top: 1px dashed var(--border-stone); padding-top: 0.75rem; flex-wrap: wrap;">
                  <span style="font-family: monospace; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--accent-terracotta); background: rgba(214, 83, 43, 0.08); border: 1px solid var(--border-stone); padding: 0.2rem 0.5rem; border-radius: 4px;">SOLUTION</span>
                  <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; margin: 0;">${item.solution}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
        ` : ''}

        <!-- 4. Project Objectives -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
              PROJECT OBJECTIVES
            </h2>
            <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; margin-top: 1rem;">
              <span style="font-family: monospace; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-terracotta); display: block; margin-bottom: 0.35rem;">Milestones</span>
              <span style="font-size: 0.85rem; color: var(--text-charcoal); font-weight: 600;">${cs.goals.length} Concrete Deliverables</span>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
            ${cs.goals.map((g, idx) => `
              <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; font-size: 0.9rem; display: flex; gap: 0.85rem; align-items: flex-start;">
                <span style="width: 26px; height: 26px; border-radius: 50%; background: #FAF8F5; border: 1px solid var(--border-stone); color: var(--accent-terracotta); font-weight: 600; font-size: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: monospace;">0${idx + 1}</span>
                <span style="color: var(--text-charcoal); line-height: 1.5;">${g}</span>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- 5. Design & Front-End Approach -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              DESIGN &amp; DEV
            </h2>
            <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; margin-top: 1rem;">
              <span style="font-family: monospace; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-terracotta); display: block; margin-bottom: 0.35rem;">Methodology</span>
              <span style="font-size: 0.85rem; color: var(--text-charcoal); font-weight: 600;">Handcrafted Code Architecture</span>
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
                <span style="color: var(--accent-terracotta);">⚡</span> Front-End Architecture
              </h3>
              <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.65;">${cs.developmentApproach}</p>
            </div>
          </div>
        </section>

        <!-- 6. Key Capabilities & Features -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              KEY CAPABILITIES
            </h2>
            <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; margin-top: 1rem;">
              <span style="font-family: monospace; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-terracotta); display: block; margin-bottom: 0.35rem;">Feature Scope</span>
              <span style="font-size: 0.85rem; color: var(--text-charcoal); font-weight: 600;">Verified Functionality</span>
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

        <!-- 7. Visual Screenshot Gallery (Desktop & Mobile Previews) -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              AUTHENTIC SCREENSHOTS
            </h2>
            <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; margin-top: 1rem;">
              <span style="font-family: monospace; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-terracotta); display: block; margin-bottom: 0.35rem;">Multi-Device Previews</span>
              <span style="font-size: 0.85rem; color: var(--text-charcoal); font-weight: 600;">Desktop &amp; Mobile Views</span>
            </div>
          </div>
          <div class="cs-gallery-grid">
            <!-- Desktop Screenshot Card (clickable lightbox) -->
            <div style="border-radius: 14px; overflow: hidden; border: 1px solid var(--border-stone); background: var(--bg-stone);">
              <div style="background: #EAE6DF; padding: 0.6rem 0.85rem; border-bottom: 1px solid var(--border-stone); display: flex; align-items: center; justify-content: space-between;">
                <span style="font-family: monospace; font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">Desktop View (1376px)</span>
                <span style="font-family: monospace; font-size: 0.68rem; color: var(--accent-terracotta); font-weight: 700;">BROWSER MOCKUP</span>
              </div>
              <button
                type="button"
                class="cs-screenshot-btn"
                aria-label="View full-size desktop screenshot of ${project.title}"
                data-lightbox-src="${project.imageFallback || project.image}"
                data-lightbox-alt="${project.title} – Desktop Preview"
                style="display: block; width: 100%; padding: 0; border: none; background: none; cursor: zoom-in;"
              >
                <div style="aspect-ratio: 16 / 9; overflow: hidden; background: #FAF8F5; position: relative;">
                  <picture>
                    <source srcset="${project.image}" type="image/webp">
                    <img src="${project.imageFallback || project.image}" alt="${project.title} Desktop View – click to enlarge" style="width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; transition: transform 0.3s ease;" loading="lazy">
                  </picture>
                  <span style="position: absolute; bottom: 0.65rem; right: 0.65rem; background: rgba(23,23,21,0.7); color: #fff; font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.6rem; border-radius: 6px; font-family: monospace; pointer-events: none;">
                    🔍 CLICK TO ENLARGE
                  </span>
                </div>
              </button>
            </div>

            <!-- Mobile Screenshot Card (clickable lightbox) -->
            <div class="cs-mobile-mockup">
              <div class="phone-speaker-bar">
                <span class="phone-notch-dot"></span>
                <span class="phone-notch-pill"></span>
              </div>
              <button
                type="button"
                class="cs-screenshot-btn"
                aria-label="View full-size mobile screenshot of ${project.title}"
                data-lightbox-src="${project.mobileFallback || project.mobileImage}"
                data-lightbox-alt="${project.title} – Mobile Preview"
                style="display: block; width: 100%; padding: 0; border: none; background: none; cursor: zoom-in;"
              >
                <div class="phone-screen-area" style="aspect-ratio: 9 / 16; position: relative;">
                  <picture>
                    <source srcset="${project.mobileImage}" type="image/webp">
                    <img src="${project.mobileFallback || project.mobileImage}" alt="${project.title} Mobile View – click to enlarge" style="width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; transition: transform 0.3s ease;" loading="lazy">
                  </picture>
                  <span style="position: absolute; bottom: 0.5rem; right: 0.5rem; background: rgba(23,23,21,0.7); color: #fff; font-size: 0.62rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 5px; font-family: monospace; pointer-events: none;">
                    🔍 TAP TO ENLARGE
                  </span>
                </div>
              </button>
              <div class="phone-home-indicator">
                <span class="phone-home-pill"></span>
              </div>
            </div>
          </div>
        </section>

        <!-- 8. Technologies Used -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              TECH STACK
            </h2>
            <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; margin-top: 1rem;">
              <span style="font-family: monospace; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-terracotta); display: block; margin-bottom: 0.35rem;">Stack</span>
              <span style="font-size: 0.85rem; color: var(--text-charcoal); font-weight: 600;">Handcrafted Standards</span>
            </div>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.65rem;">
            ${techList.map(t => `
              <span style="padding: 0.6rem 1.15rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 10px; font-size: 0.82rem; font-weight: 700; color: var(--text-charcoal); display: inline-flex; align-items: center; gap: 0.4rem;">
                ${getTechIcon(t)}
                ${t}
              </span>
            `).join('')}
          </div>
        </section>

        <!-- 9. Multi-Device QA Testing Evidence -->
        <section class="cs-section-grid">
          <div>
            <h2 class="eyebrow" style="font-size: 0.85rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              MULTI-DEVICE QA
            </h2>
            <div style="padding: 1.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; margin-top: 1rem;">
              <span style="font-family: monospace; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-terracotta); display: block; margin-bottom: 0.35rem;">Testing Scope</span>
              <span style="font-size: 0.85rem; color: var(--text-charcoal); font-weight: 600;">320px – 1440px+ Range</span>
            </div>
          </div>
          <div>
            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.65; margin-bottom: 1.25rem;">${cs.responsiveDesign}</p>
            <div style="overflow-x: auto;">
              <table class="cs-qa-table" aria-label="Device QA Testing Results">
                <thead>
                  <tr>
                    <th scope="col">Device &amp; Viewport</th>
                    <th scope="col">Devices Tested</th>
                    <th scope="col">Verification Details</th>
                    <th scope="col">Result</th>
                  </tr>
                </thead>
                <tbody>
                  ${(cs.qaSpecs || []).map(spec => `
                    <tr>
                      <td><strong>${spec.device}</strong></td>
                      <td style="color: var(--text-muted); font-size: 0.8rem;">${spec.tested}</td>
                      <td style="font-size: 0.82rem;">${spec.notes}</td>
                      <td><span class="status-badge-pass">✓ ${spec.result}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- 10. Outcome -->
        <section style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div style="padding: 2.25rem; background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 16px;">
            <span class="eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              THE OUTCOME
            </span>
            <h2 class="headline-md" style="margin-bottom: 0.75rem;">Quality &amp; Performance Standards</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7;">${cs.finalResult}</p>
          </div>
        </section>

      </div>

      <!-- Previous & Next Project Navigation Cards -->
      <div class="cs-nav-grid">
        <a href="casestudy.html?project=${prevProject.id}" onclick="event.preventDefault(); switchCaseStudy('${prevProject.id}');" class="cs-nav-card prev-card">
          <div class="cs-nav-thumb">
            <picture>
              <source srcset="${prevProject.thumb}" type="image/webp">
              <img src="${prevProject.thumbFallback || prevProject.thumb}" alt="${prevProject.title}" loading="lazy" decoding="async">
            </picture>
          </div>
          <div>
            <span style="font-size: 0.72rem; font-family: monospace; color: var(--accent-terracotta); font-weight: 700; display: block;">← PREVIOUS PROJECT</span>
            <strong style="font-size: 0.95rem; color: var(--text-charcoal); display: block;">${prevProject.title}</strong>
            <span style="font-size: 0.75rem; color: var(--text-muted);">${prevProject.category}</span>
          </div>
        </a>

        <a href="casestudy.html?project=${nextProject.id}" onclick="event.preventDefault(); switchCaseStudy('${nextProject.id}');" class="cs-nav-card next-card">
          <div class="cs-nav-thumb">
            <picture>
              <source srcset="${nextProject.thumb}" type="image/webp">
              <img src="${nextProject.thumbFallback || nextProject.thumb}" alt="${nextProject.title}" loading="lazy" decoding="async">
            </picture>
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
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
          ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="border-color: var(--accent-terracotta); color: var(--accent-terracotta); font-weight: 700;">VISIT LIVE WEBSITE ↗</a>` : ''}
          <a href="https://wa.me/919391461106?text=${encodeURIComponent('Hello MANOHAR SOLUTIONS, I am viewing the ' + project.title + ' case study and would like to discuss a project.')}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/></svg>
            <span>Discuss on WhatsApp</span>
          </a>
          <a href="projects.html" class="btn btn-secondary">VIEW ALL PROJECTS</a>
          <a href="contact.html?project=${project.id}" class="btn btn-primary">START YOUR PROJECT &rarr;</a>
        </div>
      </div>

      <!-- Related Projects Section matching Reference Image -->
      <div style="margin-top: 4rem; padding-top: 2.5rem; border-top: 1px solid var(--border-stone);">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.75rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="eyebrow">PORTFOLIO</span>
            <h3 class="headline-md" style="font-size: 1.5rem;">Related Projects</h3>
          </div>
          <a href="projects.html" class="btn-link">View All Projects &rarr;</a>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
          ${otherProjects.map(op => `
            <div class="project-card" style="display: flex; flex-direction: column; cursor: pointer;" onclick="if (!event.target.closest('a')) switchCaseStudy('${op.id}');">
              <a href="casestudy.html?project=${op.id}" onclick="event.preventDefault(); switchCaseStudy('${op.id}');" class="project-img-wrap" style="aspect-ratio: 16 / 9;">
                <picture>
                  <source srcset="${op.thumb}" type="image/webp">
                  <img src="${op.thumbFallback || op.thumb}" alt="${op.title}" loading="lazy" decoding="async">
                </picture>
                <span class="${op.isLive ? 'badge-live' : 'badge-concept'}" style="position: absolute; top: 0.75rem; right: 0.75rem; z-index: 2;">
                  ${op.isLive ? '● LIVE' : 'CONCEPT'}
                </span>
              </a>
              <div class="project-meta" style="padding: 1.25rem;">
                <div class="project-meta-top" style="margin-bottom: 0.35rem;">
                  <span class="p-num">PROJECT ${op.number}</span>
                  <span>${op.category}</span>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.75rem;">
                  <a href="casestudy.html?project=${op.id}" onclick="event.preventDefault(); switchCaseStudy('${op.id}');" style="color: var(--text-charcoal);">${op.title}</a>
                </h4>
                <div class="project-meta-bottom" style="margin-top: auto; padding-top: 0.5rem;">
                  <a href="casestudy.html?project=${op.id}" onclick="event.preventDefault(); switchCaseStudy('${op.id}');" class="btn btn-primary" style="padding: 0.55rem 1.15rem; font-size: 0.8rem;">VIEW CASE STUDY →</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;

  // 1. Initialize category filter buttons in Switcher
  const catBtns = container.querySelectorAll('.cs-cat-btn');
  const projectPills = container.querySelectorAll('.case-study-switcher-pill');

  function setCategory(cat) {
    catBtns.forEach(btn => {
      const isMatch = btn.getAttribute('data-cat') === cat;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    projectPills.forEach(pill => {
      const pCat = pill.getAttribute('data-category');
      if (cat === 'ALL' || pCat === cat) {
        pill.style.display = 'inline-flex';
      } else {
        pill.style.display = 'none';
      }
    });
  }

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setCategory(btn.getAttribute('data-cat'));
    });
  });

  // Highlight active project's category by default
  setCategory(project.filterCategory || 'ALL');

  // 2. Initialize screenshot lightbox after content is injected into the DOM
  initScreenshotLightbox(container);
}

/**
 * Initialises a lightweight accessible lightbox for .cs-screenshot-btn elements.
 * Clicking a button reads data-lightbox-src / data-lightbox-alt and shows a
 * full-viewport overlay. Closes on overlay click, close button, or Escape key.
 */
function initScreenshotLightbox(scope) {
  const btns = (scope || document).querySelectorAll('.cs-screenshot-btn');
  if (!btns.length) return;

  // Build overlay once per page (idempotent)
  let overlay = document.getElementById('cs-lightbox-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'cs-lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Project screenshot preview');
    overlay.style.cssText = [
      'display:none',
      'position:fixed',
      'inset:0',
      'z-index:9999',
      'background:rgba(17,17,15,0.92)',
      'align-items:center',
      'justify-content:center',
      'padding:1.5rem',
      'cursor:zoom-out',
    ].join(';');

    overlay.innerHTML = `
      <button id="cs-lightbox-close" aria-label="Close preview" style="
        position:absolute; top:1rem; right:1rem;
        width:44px; height:44px; border-radius:50%;
        background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.2);
        color:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center;
        font-size:1.25rem; transition:background 0.2s; z-index:1;
      ">✕</button>
      <figure style="margin:0; max-width:min(1200px,95vw); max-height:90vh; display:flex; flex-direction:column; align-items:center; gap:0.75rem;">
        <img id="cs-lightbox-img" src="" alt="" style="
          max-width:100%; max-height:82vh; border-radius:10px;
          box-shadow:0 24px 64px rgba(0,0,0,0.6);
          object-fit:contain; display:block;
        ">
        <figcaption id="cs-lightbox-caption" style="
          color:rgba(255,255,255,0.7); font-size:0.8rem;
          font-family:monospace; letter-spacing:0.05em; text-align:center;
        "></figcaption>
      </figure>
    `;
    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector('#cs-lightbox-close');
    const lightboxImg = overlay.querySelector('#cs-lightbox-img');
    const caption = overlay.querySelector('#cs-lightbox-caption');

    function closeLightbox() {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      if (overlay._triggerBtn) {
        overlay._triggerBtn.focus();
        overlay._triggerBtn = null;
      }
    }

    closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target === overlay.querySelector('figure') ||
          e.target === lightboxImg) {
        closeLightbox();
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.style.display !== 'none') {
        closeLightbox();
      }
    });
  }

  const lightboxImg = overlay.querySelector('#cs-lightbox-img');
  const caption = overlay.querySelector('#cs-lightbox-caption');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-lightbox-src');
      const alt = btn.getAttribute('data-lightbox-alt') || 'Project screenshot';
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      caption.textContent = alt;
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      overlay._triggerBtn = btn;
      const closeBtn = overlay.querySelector('#cs-lightbox-close');
      if (closeBtn) closeBtn.focus();
    });
  });
}

// 5. Contact Form Submission & WhatsApp Routing
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

  // --- Per-Field Inline Validation Helpers ---

  /**
   * Mark a field as invalid: adds red border + shows error message below it.
   * @param {HTMLElement} field - The input/select/textarea element
   * @param {string} msg - Error message to display
   */
  function setFieldError(field, msg) {
    if (!field) return;
    field.classList.add('field-error');
    field.classList.remove('field-valid');
    field.setAttribute('aria-invalid', 'true');

    // Insert or update error message sibling
    const parent = field.parentElement;
    let errEl = parent.querySelector('.field-error-msg');
    if (!errEl) {
      errEl = document.createElement('span');
      errEl.className = 'field-error-msg';
      errEl.setAttribute('role', 'alert');
      errEl.setAttribute('aria-live', 'polite');
      parent.appendChild(errEl);
    }
    errEl.textContent = msg;
  }

  /**
   * Clear error state from a field.
   * @param {HTMLElement} field
   */
  function clearFieldError(field) {
    if (!field) return;
    field.classList.remove('field-error');
    field.setAttribute('aria-invalid', 'false');

    const parent = field.parentElement;
    const errEl = parent.querySelector('.field-error-msg');
    if (errEl) errEl.remove();
  }

  /**
   * Mark a field as valid (green border, used after correction).
   * @param {HTMLElement} field
   */
  function setFieldValid(field) {
    if (!field) return;
    field.classList.remove('field-error');
    field.classList.add('field-valid');
    field.setAttribute('aria-invalid', 'false');

    const parent = field.parentElement;
    const errEl = parent.querySelector('.field-error-msg');
    if (errEl) errEl.remove();
  }

  // Attach live-correction listeners so errors clear as the user types/changes
  const nameField    = document.getElementById('name');
  const emailField   = document.getElementById('email');
  const phoneField   = document.getElementById('phone');
  const messageField = document.getElementById('message');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nameField) {
    nameField.addEventListener('input', () => {
      if (nameField.value.trim()) {
        setFieldValid(nameField);
      } else {
        clearFieldError(nameField);
      }
    });
  }

  if (emailField) {
    emailField.addEventListener('input', () => {
      const val = emailField.value.trim();
      if (!val) {
        clearFieldError(emailField);
      } else if (emailRegex.test(val)) {
        setFieldValid(emailField);
      } else {
        setFieldError(emailField, 'Enter a valid email, e.g. name@company.com');
      }
    });
  }

  if (phoneField) {
    phoneField.addEventListener('input', () => {
      const val = phoneField.value.trim();
      if (!val || val.length >= 7) {
        clearFieldError(phoneField);
        if (val.length >= 7) setFieldValid(phoneField);
      }
    });
  }

  if (messageField) {
    messageField.addEventListener('input', () => {
      const val = messageField.value.trim();
      if (!val) {
        clearFieldError(messageField);
      } else if (val.length >= 10) {
        setFieldValid(messageField);
      } else {
        // only show inline hint if they've started typing but haven't reached 10 chars
        setFieldError(messageField, `Please add more detail (${val.length}/10 characters minimum).`);
      }
    });
  }

  // Pre-fill fields from URL query params
  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get('service');
  const projectParam = params.get('project');
  const budgetParam = params.get('budget');
  const timelineParam = params.get('timeline');
  const select = document.getElementById('projectType');
  const budgetSelect = document.getElementById('budget');
  const timelineSelect = document.getElementById('timeline');

  if (serviceParam && select) {
    const sLower = decodeURIComponent(serviceParam).toLowerCase();
    for (let opt of select.options) {
      const optVal = opt.value.toLowerCase();
      const optText = opt.textContent.toLowerCase();
      if (optVal.includes(sLower) || sLower.includes(optVal) || optText.includes(sLower) || sLower.includes(optText)) {
        select.value = opt.value;
        break;
      }
    }
  } else if (projectParam && select) {
    const p = projectParam.toLowerCase();
    if (p.includes('saas') || p.includes('landing')) {
      select.value = 'Landing Page';
    } else if (p.includes('photo') || p.includes('portfolio')) {
      select.value = 'Portfolio Website';
    } else if (p.includes('naturals') || p.includes('commerce') || p.includes('store') || p.includes('e-com') || p.includes('product')) {
      select.value = 'E-Commerce Website';
    } else if (p.includes('kings-biryani') || p.includes('restaurant')) {
      select.value = 'Restaurant Website';
    } else {
      select.value = 'Business Website';
    }
  }

  if (budgetParam && budgetSelect) {
    const bLower = decodeURIComponent(budgetParam).toLowerCase();
    for (let opt of budgetSelect.options) {
      if (opt.value.toLowerCase().includes(bLower)) {
        budgetSelect.value = opt.value;
        break;
      }
    }
  }

  if (timelineParam && timelineSelect) {
    const tLower = decodeURIComponent(timelineParam).toLowerCase();
    for (let opt of timelineSelect.options) {
      if (opt.value.toLowerCase().includes(tLower) || tLower.includes(opt.value.toLowerCase())) {
        timelineSelect.value = opt.value;
        break;
      }
    }
  }

  // Handle Form Submission -> Prepares structured payload and launches WhatsApp
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone')?.value.trim() || '';
    const businessName = document.getElementById('businessName')?.value.trim() || '';
    const websiteUrl = document.getElementById('websiteUrl')?.value.trim() || '';
    const type = document.getElementById('projectType').value;
    const budget = document.getElementById('budget').value;
    const timeline = document.getElementById('timeline')?.value || 'Standard (2–3 weeks)';
    const message = document.getElementById('message').value.trim();

    // --- Clear any previous banner error ---
    responseArea.innerHTML = '';

    // --- Per-field validation with inline errors ---
    let hasError = false;
    let firstErrorField = null;

    // Validate Name
    if (!name) {
      setFieldError(nameField, 'Your name is required.');
      if (!firstErrorField) firstErrorField = nameField;
      hasError = true;
    } else {
      setFieldValid(nameField);
    }

    // Validate Email
    if (!email) {
      setFieldError(emailField, 'Your email address is required.');
      if (!firstErrorField) firstErrorField = emailField;
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setFieldError(emailField, 'Enter a valid email address, e.g. name@company.com');
      if (!firstErrorField) firstErrorField = emailField;
      hasError = true;
    } else {
      setFieldValid(emailField);
    }

    // Validate Phone (optional but must be >= 7 digits if provided)
    if (phone && phone.replace(/[\s\-+()]/g, '').length < 7) {
      setFieldError(phoneField, 'Enter a valid phone number (min 7 digits), or leave it blank.');
      if (!firstErrorField) firstErrorField = phoneField;
      hasError = true;
    } else if (phone) {
      setFieldValid(phoneField);
    }

    // Validate Project Requirements
    if (!message || message.length < 10) {
      setFieldError(messageField, `Please describe your project requirements (minimum 10 characters).`);
      if (!firstErrorField) firstErrorField = messageField;
      hasError = true;
    } else {
      setFieldValid(messageField);
    }

    if (hasError) {
      // Show a top-level summary banner as well for clarity
      responseArea.innerHTML = `
        <div role="alert" style="padding: 0.85rem 1.15rem; border-radius: 8px; background: #FFF1F0; border: 1px solid #FFCCC7; color: #CF1322; font-size: 0.88rem; margin-bottom: 1.25rem; display: flex; align-items: flex-start; gap: 0.5rem;">
          <span style="font-weight: bold; flex-shrink: 0;">✕</span>
          <span>Please fix the highlighted fields below before submitting.</span>
        </div>`;
      // Scroll to first invalid field
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstErrorField.focus();
      }
      return;
    }

    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    submitBtn.innerHTML = `<span>PREPARING WHATSAPP INQUIRY...</span>`;

    // Clear all field validation highlights on successful submission
    [nameField, emailField, phoneField, messageField].forEach(f => {
      if (f) {
        f.classList.remove('field-error', 'field-valid');
        f.removeAttribute('aria-invalid');
        const errEl = f.parentElement && f.parentElement.querySelector('.field-error-msg');
        if (errEl) errEl.remove();
      }
    });
    responseArea.innerHTML = '';


    let waPayload = `*NEW PROJECT INQUIRY - MANOHAR SOLUTIONS*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${name}`;

    if (businessName) {
      waPayload += `\n🏢 *Business Name:* ${businessName}`;
    }
    if (websiteUrl) {
      waPayload += `\n🌐 *Existing Website:* ${websiteUrl}`;
    }

    waPayload += `
📧 *Email Address:* ${email}
📱 *Phone / WhatsApp:* ${phone || "Not provided (contact via email)"}
💼 *Service Needed:* ${type}
💰 *Estimated Budget:* ${budget}
⏱️ *Project Timeline:* ${timeline}
━━━━━━━━━━━━━━━━━━━━━━
📝 *Project Requirements:*
${message}
━━━━━━━━━━━━━━━━━━━━━━
_Sent via Manohar Solutions website_`;

    const waNumber = STUDIO_DATA.config.whatsappNumber;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waPayload)}`;
    const mailtoSubject = encodeURIComponent(`Project Inquiry: ${type} - ${name}`);
    const mailtoBody = encodeURIComponent(waPayload);
    const mailtoUrl = `mailto:${STUDIO_DATA.config.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Display clear, honest instructions informing the user to tap Send in WhatsApp
    form.style.display = 'none';
    responseArea.innerHTML = `
      <div style="padding: 1.5rem 0; text-align: center;">
        <div style="width: 58px; height: 58px; border-radius: 50%; background: #25D366; color: #FFFFFF; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.35);">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        
        <h3 class="headline-md" style="margin-bottom: 0.4rem;">Inquiry Formatted for WhatsApp</h3>
        <p style="color: var(--text-charcoal); font-size: 0.95rem; max-width: 480px; margin: 0 auto 0.75rem; font-weight: 500;">
          Your inquiry details have been formatted and WhatsApp has been launched in a new tab.
        </p>

        <!-- Communication & Privacy notice -->
        <div style="background: #FFFBE6; border: 1px solid #FFE58F; border-radius: 10px; padding: 0.9rem 1.15rem; max-width: 490px; margin: 0 auto 1.25rem; text-align: left; font-size: 0.86rem; color: #873800; line-height: 1.55;">
          <strong>Important Next Step:</strong> Opening WhatsApp does not send the message automatically. Please tap the <strong>Send button</strong> inside your WhatsApp chat window to deliver the message to Manohar Solutions.
        </div>

        <div style="background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 10px; padding: 0.85rem 1.15rem; max-width: 490px; margin: 0 auto 1.5rem; text-align: left; font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;">
          <strong>Client-Side Routing:</strong> This is a static website with zero database tracking. Inquiries are prepared securely on your device and sent directly to Manohar Solutions via WhatsApp or direct email.
        </div>

        <!-- Primary WhatsApp and Fallback Channels -->
        <div style="display: flex; flex-direction: column; gap: 0.75rem; max-width: 490px; margin: 0 auto 1.5rem;">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%; padding: 0.95rem 1.25rem; font-size: 0.92rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.65rem; text-decoration: none;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
            </svg>
            <span>TAP HERE TO OPEN WHATSAPP (${STUDIO_DATA.config.displayPhone})</span>
          </a>

          <!-- Email Fallback -->
          <a href="${mailtoUrl}" class="btn btn-secondary" style="width: 100%; padding: 0.85rem 1.25rem; font-size: 0.88rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; text-decoration: none;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>WHATSAPP BLOCKED? SEND VIA EMAIL INSTEAD</span>
          </a>

          <!-- Copy Clipboard Fallback -->
          <button type="button" id="copy-inquiry-btn" class="btn btn-white" style="width: 100%; padding: 0.75rem 1.25rem; font-size: 0.85rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span id="copy-btn-text">COPY INQUIRY DETAILS TO CLIPBOARD</span>
          </button>
        </div>

        <!-- Summary Preview Box -->
        <div style="background: var(--bg-stone); border: 1px solid var(--border-stone); border-radius: 12px; padding: 1.25rem; text-align: left; margin-bottom: 1.5rem; font-size: 0.88rem; max-width: 490px; margin-left: auto; margin-right: auto;">
          <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent-terracotta); letter-spacing: 0.06em; margin-bottom: 0.65rem; border-bottom: 1px solid var(--border-stone); padding-bottom: 0.4rem;">
            Prepared Inquiry Summary
          </div>
          <div style="display: grid; grid-template-columns: 120px 1fr; row-gap: 0.4rem;">
            <span style="color: var(--text-muted); font-weight: 600;">Client:</span>
            <strong>${escapeHtml(name)}</strong>
            ${businessName ? `<span style="color: var(--text-muted); font-weight: 600;">Business:</span><span>${escapeHtml(businessName)}</span>` : ''}
            ${websiteUrl ? `<span style="color: var(--text-muted); font-weight: 600;">Website:</span><span>${escapeHtml(websiteUrl)}</span>` : ''}
            <span style="color: var(--text-muted); font-weight: 600;">Email:</span>
            <span>${escapeHtml(email)}</span>
            <span style="color: var(--text-muted); font-weight: 600;">Phone:</span>
            <strong>${phone ? escapeHtml(phone) : "<em style='color:var(--text-muted); font-weight:normal;'>Not provided</em>"}</strong>
            <span style="color: var(--text-muted); font-weight: 600;">Service:</span>
            <span>${escapeHtml(type)}</span>
            <span style="color: var(--text-muted); font-weight: 600;">Budget:</span>
            <span>${escapeHtml(budget)}</span>
            <span style="color: var(--text-muted); font-weight: 600;">Timeline:</span>
            <span>${escapeHtml(timeline)}</span>
          </div>
        </div>

        <button type="button" id="reset-inquiry-form-btn" class="btn btn-white" style="font-size: 0.85rem; padding: 0.55rem 1.25rem; margin: 0 auto; display: block;">
          ← Edit or Send Another Request
        </button>
      </div>
    `;

    const copyBtn = document.getElementById('copy-inquiry-btn');
    const copyBtnText = document.getElementById('copy-btn-text');
    if (copyBtn && copyBtnText) {
      copyBtn.addEventListener('click', () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(waPayload).then(() => {
            copyBtnText.textContent = '✓ COPIED TO CLIPBOARD!';
            setTimeout(() => {
              if (copyBtnText) copyBtnText.textContent = 'COPY INQUIRY DETAILS TO CLIPBOARD';
            }, 3000);
          }).catch(() => {
            copyBtnText.textContent = '✓ Please copy from summary below';
          });
        } else {
          copyBtnText.textContent = '✓ Please copy from summary below';
        }
      });
    }

    const resetBtn = document.getElementById('reset-inquiry-form-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        form.style.display = 'flex';
        responseArea.innerHTML = '';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.innerHTML = originalBtnContent;
        // Clear all field validation states after reset
        form.querySelectorAll('input, select, textarea').forEach(f => {
          f.classList.remove('field-error', 'field-valid');
          f.removeAttribute('aria-invalid');
        });
        form.querySelectorAll('.field-error-msg').forEach(el => el.remove());
      });
    }

    responseArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

// 6. Interactive Scope & Cost Estimator (Services / Inquiry helper)
function initProjectEstimator() {
  const estimatorContainer = document.getElementById('project-estimator');
  if (!estimatorContainer) return;

  const basePrices = {
    'landing': { name: 'Landing Page Design', min: 15000, max: 25000, days: '4 – 7 business days' },
    'business': { name: 'Business Website Development', min: 30000, max: 50000, days: '10 – 14 business days' },
    'portfolio': { name: 'Portfolio Website Development', min: 22000, max: 35000, days: '7 – 10 business days' },
    'restaurant': { name: 'Restaurant Website Development', min: 32000, max: 52000, days: '10 – 15 business days' },
    'ecommerce': { name: 'E-Commerce Websites', min: 45000, max: 70000, days: '14 – 21 business days' }
  };

  const pageMultipliers = {
    '1': 0,
    '3-5': 5000,
    '6-10': 12000,
    '10+': 22000
  };

  function calculateEstimate() {
    const selectedType = estimatorContainer.querySelector('input[name="est-type"]:checked')?.value || 'business';
    const selectedPages = estimatorContainer.querySelector('input[name="est-pages"]:checked')?.value || '3-5';
    const seoChecked = estimatorContainer.querySelector('input[name="est-seo"]')?.checked;
    const whatsappChecked = estimatorContainer.querySelector('input[name="est-wa"]')?.checked;
    const hostingChecked = estimatorContainer.querySelector('input[name="est-hosting"]')?.checked;
    const maintChecked = estimatorContainer.querySelector('input[name="est-maint"]')?.checked;

    const base = basePrices[selectedType] || basePrices.business;
    const pageAdd = pageMultipliers[selectedPages] || 0;
    const featureAdd = (seoChecked ? 4000 : 0) +
                       (whatsappChecked ? 2500 : 0) +
                       (hostingChecked ? 2000 : 0);

    const minTotal = base.min + pageAdd + featureAdd;
    const maxTotal = base.max + pageAdd + featureAdd;

    const priceEl = document.getElementById('estimator-price');
    const timelineEl = document.getElementById('estimator-timeline');
    const ctaBtn = document.getElementById('estimator-cta-btn');
    const scopeNoteEl = document.getElementById('estimator-scope-note');

    let timelineText = base.days;
    if (selectedPages === '6-10') timelineText = '12 – 18 business days';
    if (selectedPages === '10+') timelineText = '18 – 25 business days';

    if (priceEl) {
      let priceString = `₹${minTotal.toLocaleString('en-IN')} – ₹${maxTotal.toLocaleString('en-IN')}`;
      if (maintChecked) {
        priceString += ` + ₹3,500/mo care`;
      }
      priceEl.textContent = priceString;
    }
    if (timelineEl) {
      timelineEl.textContent = timelineText;
    }
    if (scopeNoteEl) {
      scopeNoteEl.textContent = `Includes: ${base.name} (${selectedPages} pages)${seoChecked ? ' + SEO' : ''}${whatsappChecked ? ' + WhatsApp' : ''}${hostingChecked ? ' + Hosting' : ''}${maintChecked ? ' + Monthly Retainer' : ''}.`;
    }
    if (ctaBtn) {
      const budgetQuery = encodeURIComponent(`₹${minTotal.toLocaleString('en-IN')} – ₹${maxTotal.toLocaleString('en-IN')}`);
      const serviceQuery = encodeURIComponent(base.name);
      const timelineQuery = encodeURIComponent(timelineText);
      ctaBtn.href = `contact.html?service=${serviceQuery}&budget=${budgetQuery}&timeline=${timelineQuery}`;
    }
  }

  estimatorContainer.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', calculateEstimate);
  });

  calculateEstimate();
}
