export interface PricingItem {
  id: string;
  name: string;
  startingPrice: string;
  rawPrice?: number;
  period?: string; // e.g. '/month', '/request', '/year'
  badge?: string;
  description?: string;
  features?: string[];
  popular?: boolean;
}

export interface PricingCategoryGroup {
  id: string;
  number: string;
  title: string;
  displayName: string;
  icon: string;
  description?: string;
  subgroups?: {
    subtitle?: string;
    items: PricingItem[];
  }[];
  packageFeature?: {
    title: string;
    startingPrice: string;
    description: string;
    features: string[];
    notes?: string;
  };
  tableMatrix?: {
    title: string;
    headers: string[];
    rows: { col1: string; col2: string }[];
  };
  disclaimer?: string;
}

export const PRICING_HIGHLIGHT_TICKER = [
  { label: 'Websites', price: '₹2,500+' },
  { label: 'E-Commerce', price: '₹15,000+' },
  { label: 'Portfolios', price: '₹3,000+' },
  { label: 'Graphic Design', price: '₹250+' },
  { label: 'Academic & PPT', price: '₹300+' },
  { label: 'Research Formatting', price: '₹800+' },
  { label: 'Maintenance', price: '₹1,500/mo' },
];

export const PRICING_CATEGORIES: PricingCategoryGroup[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'WEBSITE DEVELOPMENT',
    displayName: 'Website Development',
    icon: 'Globe',
    description: 'High-performance, modern responsive websites tailored for business growth, creators, and online stores.',
    subgroups: [
      {
        subtitle: 'Core Web Solutions',
        items: [
          { id: 'business-website', name: 'Business Website', startingPrice: '₹5,000+', rawPrice: 5000, description: 'Multi-page corporate or business website with SEO and lead capture.' },
          { id: 'personal-website', name: 'Personal Website', startingPrice: '₹4,000+', rawPrice: 4000, description: 'Clean personal branding website with custom aesthetic.' },
          { id: 'landing-page', name: 'Landing Page', startingPrice: '₹2,500+', rawPrice: 2500, popular: true, description: 'High-conversion single page build for campaigns or products.' },
          { id: 'custom-website', name: 'Custom Website', startingPrice: '₹12,000+', rawPrice: 12000, description: 'Tailored architecture with dynamic animations and custom layout.' },
          { id: 'startup-package', name: 'Startup Website Package', startingPrice: '₹15,000+', rawPrice: 15000, badge: 'Best Value', popular: true, description: 'Complete 5–8 page package with SEO, deployment, and integrations.' },
          { id: 'ecommerce-website', name: 'E-Commerce Website', startingPrice: '₹15,000+', rawPrice: 15000, description: 'Online store with catalog, payment gateway, and cart workflow.' },
          { id: 'custom-web-app', name: 'Custom Web Application', startingPrice: '₹20,000+', rawPrice: 20000, description: 'Complex full-stack web application with authentication and dashboard.' }
        ]
      }
    ],
    packageFeature: {
      title: 'Startup Website Package',
      startingPrice: '₹15,000+',
      description: 'The all-in-one launch pad for emerging brands and ambitious startups.',
      features: [
        'Custom website design & modern aesthetic',
        'Responsive / mobile-friendly design across all screen sizes',
        '5–8 dedicated pages (Home, About, Services, Contact, etc.)',
        'Direct Contact & WhatsApp integration',
        'Basic On-Page SEO meta setup',
        'Production cloud deployment & domain pointing',
        '2 full revision rounds included'
      ],
      notes: 'E-commerce, advanced features, payment gateway, custom APIs, dashboards, hosting, and premium plugins are quoted separately.'
    }
  },
  {
    id: 'portfolio-resume-services',
    number: '02',
    title: 'PORTFOLIO & RESUME SERVICES',
    displayName: 'Portfolio & Resume Services',
    icon: 'UserCheck',
    description: 'Recruiter-ready ATS resumes and interactive personal portfolios that get you hired.',
    subgroups: [
      {
        subtitle: 'Portfolio Websites',
        items: [
          { id: 'custom-portfolio', name: 'Custom Portfolio Website', startingPrice: '₹3,000+', rawPrice: 3000, description: 'Interactive personal showcase with project gallery and bio.' },
          { id: 'professional-portfolio', name: 'Professional Portfolio', startingPrice: '₹6,000+', rawPrice: 6000, popular: true, description: 'Executive portfolio with case studies, testimonials, and animations.' },
          { id: 'dev-designer-portfolio', name: 'Developer / Designer Portfolio', startingPrice: '₹5,000+', rawPrice: 5000, description: 'Tech-focused interactive portfolio featuring code repositories and live demos.' }
        ]
      },
      {
        subtitle: 'Resume / CV Services (ATS-Compliant)',
        items: [
          { id: 'basic-resume', name: 'Basic Resume Design', startingPrice: '₹500+', rawPrice: 500, description: 'Clean, structured 1-page resume for entry-level professionals.' },
          { id: 'professional-resume', name: 'Professional Resume', startingPrice: '₹1,000+', rawPrice: 1000, popular: true, description: 'Polished layout tailored to mid-level & senior corporate roles.' },
          { id: 'ats-resume', name: 'ATS-Friendly Resume', startingPrice: '₹1,000+', rawPrice: 1000, badge: 'Popular', description: '100% compliant with Applicant Tracking Systems (R1 to R6 templates).' },
          { id: 'resume-portfolio-pkg', name: 'Resume + Portfolio Package', startingPrice: '₹3,000+', rawPrice: 3000, badge: 'Bundle Deal', description: 'Combined high-impact ATS resume + personal portfolio website.' }
        ]
      }
    ]
  },
  {
    id: 'graphic-design',
    number: '03',
    title: 'GRAPHIC DESIGN',
    displayName: 'Graphic Design',
    icon: 'Palette',
    description: 'Engaging social media creatives, print-ready posters, and corporate stationery.',
    subgroups: [
      {
        subtitle: 'Social Media Design',
        items: [
          { id: 'instagram-post', name: 'Instagram Post', startingPrice: '₹300+', rawPrice: 300 },
          { id: 'instagram-story', name: 'Instagram Story', startingPrice: '₹250+', rawPrice: 250 },
          { id: 'instagram-carousel', name: 'Instagram Carousel (Multi-slide)', startingPrice: '₹800+', rawPrice: 800, popular: true },
          { id: 'youtube-thumbnail', name: 'YouTube Thumbnail', startingPrice: '₹300+', rawPrice: 300 },
          { id: 'linkedin-post', name: 'LinkedIn Post', startingPrice: '₹300+', rawPrice: 300 },
          { id: 'social-banner', name: 'Social Media Banner / Header', startingPrice: '₹500+', rawPrice: 500 }
        ]
      },
      {
        subtitle: 'Promotional Design',
        items: [
          { id: 'promotional-poster', name: 'Promotional Poster', startingPrice: '₹400+', rawPrice: 400 },
          { id: 'advertisement-creative', name: 'Advertisement Creative', startingPrice: '₹500+', rawPrice: 500, popular: true },
          { id: 'event-poster', name: 'Event Poster', startingPrice: '₹500+', rawPrice: 500 },
          { id: 'flyer', name: 'Flyer / Handout Design', startingPrice: '₹500+', rawPrice: 500 }
        ]
      },
      {
        subtitle: 'Professional & Stationery Design',
        items: [
          { id: 'certificate', name: 'Certificate Design', startingPrice: '₹300+', rawPrice: 300 },
          { id: 'invitation', name: 'Invitation Card', startingPrice: '₹500+', rawPrice: 500 },
          { id: 'business-card', name: 'Business Card (Front + Back)', startingPrice: '₹300+', rawPrice: 300 },
          { id: 'letterhead', name: 'Official Letterhead', startingPrice: '₹300+', rawPrice: 300 }
        ]
      }
    ]
  },
  {
    id: 'assignment-academic-support',
    number: '04',
    title: 'ASSIGNMENT & ACADEMIC SUPPORT',
    displayName: 'Assignment & Academic Support',
    icon: 'BookOpen',
    description: 'Presentation slide deck design and project file preparation strictly based on your provided material.',
    subgroups: [
      {
        subtitle: 'PPT & Presentation Design',
        items: [
          { id: 'school-ppt', name: 'School PPT', startingPrice: '₹500+', rawPrice: 500 },
          { id: 'college-ppt', name: 'College PPT', startingPrice: '₹700+', rawPrice: 700, popular: true },
          { id: 'project-presentation', name: 'Project Presentation', startingPrice: '₹1,000+', rawPrice: 1000 },
          { id: 'research-presentation', name: 'Research Presentation', startingPrice: '₹1,500+', rawPrice: 1500 },
          { id: 'conference-presentation', name: 'Conference Presentation', startingPrice: '₹2,000+', rawPrice: 2000 }
        ]
      },
      {
        subtitle: 'Assignment & Project File Services',
        items: [
          { id: 'assignment-formatting', name: 'Assignment Formatting', startingPrice: '₹300+', rawPrice: 300, description: 'Typography, alignment, margins, and bibliography cleanup.' },
          { id: 'project-file-formatting', name: 'Project File Formatting', startingPrice: '₹800+', rawPrice: 800, description: 'Index, certificates, chapter layout, tables, and pagination.' },
          { id: 'complete-project-file', name: 'Complete Project File Preparation*', startingPrice: '₹1,500+', rawPrice: 1500, popular: true, description: 'Based on client own content/material. Pricing depends on page count.' },
          { id: 'online-assignment-delivery', name: 'Online Assignment File Delivery', startingPrice: 'Included', rawPrice: 0, description: 'Digital PDF, Word, and PPT files delivered via email/drive.' },
          { id: 'offline-printed-file', name: 'Offline Printed Assignment / File', startingPrice: '₹500+', rawPrice: 500, description: 'Printed, bound, and couriered to your location (paper, binding & delivery added).' }
        ]
      }
    ],
    disclaimer: '*Based on the client’s own content/material. For offline orders, printing, binding, material, and delivery charges are added according to package and delivery location.'
  },
  {
    id: 'research-paper-formatting',
    number: '05',
    title: 'RESEARCH PAPER FORMATTING',
    displayName: 'Research Paper Formatting',
    icon: 'FileCode2',
    description: 'Precision IEEE, Springer, LaTeX template formatting, equation tuning, and citation structuring.',
    subgroups: [
      {
        subtitle: 'Manuscript & Template Services',
        items: [
          { id: 'research-paper-format', name: 'Research Paper Formatting', startingPrice: '₹800+', rawPrice: 800 },
          { id: 'ieee-template', name: 'IEEE Template Formatting', startingPrice: '₹1,000+', rawPrice: 1000, popular: true },
          { id: 'springer-template', name: 'Springer Template Formatting', startingPrice: '₹1,000+', rawPrice: 1000 },
          { id: 'latex-formatting', name: 'LaTeX Formatting', startingPrice: '₹1,500+', rawPrice: 1500 },
          { id: 'word-to-latex', name: 'Word → LaTeX Conversion', startingPrice: '₹1,500+', rawPrice: 1500 },
          { id: 'latex-to-word', name: 'LaTeX → Word Conversion', startingPrice: '₹1,500+', rawPrice: 1500 },
          { id: 'citations-formatting', name: 'References / Citation Formatting', startingPrice: '₹500+', rawPrice: 500 },
          { id: 'tables-figures-format', name: 'Tables & Figures Formatting', startingPrice: '₹500+', rawPrice: 500 },
          { id: 'final-formatting-check', name: 'Final Formatting Check', startingPrice: '₹1,000+', rawPrice: 1000 },
          { id: 'thesis-dissertation', name: 'Thesis / Dissertation Formatting', startingPrice: '₹2,000+', rawPrice: 2000 }
        ]
      }
    ],
    tableMatrix: {
      title: 'IEEE / Springer — Page-Based Pricing',
      headers: ['Page Count', 'Starting Price'],
      rows: [
        { col1: '1 – 5 pages', col2: '₹1,000' },
        { col1: '6 – 10 pages', col2: '₹1,500' },
        { col1: '11 – 20 pages', col2: '₹2,500' },
        { col1: '21 – 30 pages', col2: '₹3,500' },
        { col1: '30+ pages', col2: 'Custom Quote' }
      ]
    },
    disclaimer: 'Academic services are strictly limited to technical template formatting, typography, styling, and documentation based on client-provided material. We do not provide fabricated research, data, or publication acceptance guarantees.'
  },
  {
    id: 'website-maintenance-support',
    number: '06',
    title: 'WEBSITE MAINTENANCE & SUPPORT',
    displayName: 'Website Maintenance & Support',
    icon: 'Wrench',
    description: 'Keep your web presence fast, secure, up-to-date, and bug-free with our recurring monthly plans and on-demand fixes.',
    subgroups: [
      {
        subtitle: 'Monthly Maintenance Packages',
        items: [
          {
            id: 'maint-basic',
            name: 'Basic Maintenance',
            startingPrice: '₹1,500/month',
            rawPrice: 1500,
            period: '/month',
            description: 'Essential upkeep for personal & small business sites.',
            features: [
              'Minor content & text updates',
              'Basic bug fixes & responsive checks',
              'Routine cloud backups',
              'Basic technical email support'
            ]
          },
          {
            id: 'maint-business',
            name: 'Business Maintenance',
            startingPrice: '₹2,500/month',
            rawPrice: 2500,
            period: '/month',
            popular: true,
            badge: 'Most Popular',
            description: 'Active monitoring and proactive updates for commercial websites.',
            features: [
              'Everything in Basic tier',
              'Regular content & page updates',
              'Speed & performance monitoring',
              'Security audits & patch updates',
              'Priority 24/7 technical support'
            ]
          },
          {
            id: 'maint-ecommerce',
            name: 'E-Commerce Maintenance',
            startingPrice: '₹4,000/month',
            rawPrice: 4000,
            period: '/month',
            badge: 'Enterprise',
            description: 'Complete technical partner for revenue-generating online stores.',
            features: [
              'Everything in Business tier',
              'Product updates & catalog management',
              'E-commerce & cart troubleshooting',
              'Payment gateway & order technical support',
              'Continuous performance & uptime monitoring'
            ]
          }
        ]
      },
      {
        subtitle: 'On-Demand Technical Services',
        items: [
          { id: 'website-updates', name: 'Website Updates', startingPrice: '₹500/request', rawPrice: 500, period: '/request' },
          { id: 'bug-fixing', name: 'Bug Fixing', startingPrice: '₹500+', rawPrice: 500 },
          { id: 'speed-optimization', name: 'Speed Optimization', startingPrice: '₹1,500+', rawPrice: 1500 },
          { id: 'security-backup', name: 'Security / Backup Setup', startingPrice: '₹1,000+', rawPrice: 1000 },
          { id: 'website-migration', name: 'Website Migration', startingPrice: '₹2,000+', rawPrice: 2000 },
          { id: 'domain-hosting-mgmt', name: 'Domain & Hosting Management', startingPrice: '₹1,000/year+', rawPrice: 1000, period: '/year' }
        ]
      }
    ]
  },
  {
    id: 'add-on-services',
    number: '07',
    title: 'ADD-ON SERVICES',
    displayName: 'Add-on Services',
    icon: 'Sparkles',
    description: 'Modular add-ons you can pair with any website build or service.',
    subgroups: [
      {
        subtitle: 'Available Add-ons',
        items: [
          { id: 'addon-extra-page', name: 'Extra Website Page', startingPrice: '₹500', rawPrice: 500, description: 'Add additional custom designed pages to your site.' },
          { id: 'addon-whatsapp', name: 'WhatsApp Integration', startingPrice: '₹500', rawPrice: 500, description: 'Floating WhatsApp chat widget with prefilled messaging.' },
          { id: 'addon-google-maps', name: 'Google Maps Integration', startingPrice: '₹300', rawPrice: 300, description: 'Interactive embed with customized pin and theme.' },
          { id: 'addon-contact-form', name: 'Contact Form Integration', startingPrice: '₹500', rawPrice: 500, description: 'Spam-protected contact form with direct email delivery.' },
          { id: 'addon-payment-gateway', name: 'Payment Gateway Integration', startingPrice: '₹1,500', rawPrice: 1500, description: 'Razorpay, Stripe, or UPI integration for instant transactions.' },
          { id: 'addon-basic-seo', name: 'Basic SEO Setup', startingPrice: '₹2,000', rawPrice: 2000, description: 'Meta tags, sitemap generation, OpenGraph previews & indexing.' },
          { id: 'addon-analytics', name: 'Google Analytics Setup', startingPrice: '₹500', rawPrice: 500, description: 'GA4 installation with basic event & conversion tracking.' },
          { id: 'addon-product-upload', name: 'Product Upload', startingPrice: '₹20/product', rawPrice: 20, description: 'Image optimization, descriptions, pricing and categorization.' },
          { id: 'addon-custom-feature', name: 'Custom Feature', startingPrice: '₹1,000+', rawPrice: 1000, description: 'Calculators, dynamic modals, filtering engines, or custom widgets.' },
          { id: 'addon-hosting-setup', name: 'Hosting Setup', startingPrice: '₹500+', rawPrice: 500, description: 'Server deployment on Vercel, Netlify, cPanel, or VPS.' },
          { id: 'addon-domain-setup', name: 'Domain Setup', startingPrice: '₹300+', rawPrice: 300, description: 'DNS configuration, SSL certificate, and record pointing.' }
        ]
      }
    ]
  }
];

export const PRICING_NOTE = 
  "All prices listed are starting prices. Final pricing depends on project scope, page count, complexity, features, revisions, timeline, and specific client requirements. Domain, hosting, premium tools/plugins, third-party services, printing, binding, delivery, and other external charges are billed separately where applicable.";
