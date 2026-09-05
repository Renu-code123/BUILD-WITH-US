import { ServiceItem } from '../types';

export interface ServiceTemplate {
  id: string;
  name: string;
  image: string;
  pdfUrl?: string;
  tag?: string;
}

export interface ServiceDefinition {
  id: string;
  number: string;
  title: string;
  displayName: string;
  shortDesc: string;
  fullDesc: string;
  sampleImage: string;
  sampleImageCaption: string;
  subcategoryGroups: {
    groupName?: string;
    subcategories: string[];
  }[];
  featuresIncluded: string[];
  sampleDeliverable: string;
  importantNote?: string;
  accentColor: string;
  previewGradient: string;
  visualPreviewType: 'web' | 'portfolio' | 'graphic' | 'academic' | 'research' | 'maintenance' | 'addon';
  templates?: ServiceTemplate[];
}

export const OFFICIAL_SERVICES: ServiceDefinition[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'WEBSITE DEVELOPMENT',
    displayName: 'Website Development',
    shortDesc: 'Modern, high-converting and responsive websites tailored for businesses, creators, startups, and e-commerce.',
    fullDesc: 'We design and engineer bespoke web solutions from clean landing pages to multi-page business websites and full e-commerce stores. Every build is optimized for blistering performance, fluid mobile responsiveness, intuitive user experience, and modern aesthetics.',
    sampleImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    sampleImageCaption: 'Responsive Web UI & Dashboard',
    subcategoryGroups: [
      {
        groupName: 'Web Solutions',
        subcategories: [
          'Business Website (From ₹5,000)',
          'Personal Website (From ₹4,000)',
          'Landing Page (From ₹2,500)',
          'Custom Website (From ₹12,000+)',
          'Startup Website Package (From ₹15,000+)',
          'E-Commerce Website (From ₹15,000+)',
          'Custom Web Application (From ₹20,000+)'
        ]
      }
    ],
    featuresIncluded: [
      'Responsive design across Mobile, Tablet & Desktop',
      'Modern UI/UX with smooth micro-interactions',
      'SEO meta setup & ultra-fast performance tuning',
      'Contact form & direct messaging integrations',
      'Production deployment and launch assistance'
    ],
    sampleDeliverable: 'Fully functional, responsive live website with clean code and modern aesthetics.',
    accentColor: '#00D2FF',
    previewGradient: 'from-cyan-500/20 via-blue-500/20 to-purple-500/20',
    visualPreviewType: 'web'
  },
  {
    id: 'portfolio-resume-services',
    number: '02',
    title: 'PORTFOLIO & RESUME SERVICES',
    displayName: 'Portfolio & Resume Services',
    shortDesc: 'Standout personal portfolios and ATS-friendly resumes crafted to showcase your skills, career and achievements.',
    fullDesc: 'Whether you need an interactive developer/designer portfolio website or an executive, ATS-optimized resume, we help you present your work with undeniable polish and clear visual hierarchy. Select from our 6 proven resume templates (R1 to R6) or request a custom build.',
    sampleImage: '/resumes/r1_template.jpg',
    sampleImageCaption: 'ATS-Compliant Resume & CV Templates (R1–R6)',
    subcategoryGroups: [
      {
        groupName: 'Portfolio Websites',
        subcategories: [
          'Custom Portfolio Website (From ₹3,000)',
          'Professional Portfolio (From ₹6,000+)',
          'Developer/Designer Portfolio (From ₹5,000+)'
        ]
      },
      {
        groupName: 'Resume / CV (ATS-Compliant)',
        subcategories: [
          'Basic Resume Design (From ₹500)',
          'Professional Resume (From ₹1,000)',
          'ATS-Friendly Resume (From ₹1,000)',
          'Resume + Portfolio Package (From ₹3,000+)',
          'Template R1 - Minimalist ATS Resume',
          'Template R2 - Modern Executive Resume',
          'Template R3 - Tech & Engineering Resume',
          'Template R4 - Corporate Professional CV',
          'Template R5 - Academic & Research CV',
          'Template R6 - Creative Professional Resume'
        ]
      }
    ],
    featuresIncluded: [
      '6 Production-ready resume templates (R1 to R6) tailored to your industry',
      '100% ATS parser compliant layout & recruiter-friendly hierarchy',
      'Interactive project showcase & skill badges for portfolios',
      'High-resolution PDF & editable document deliverables',
      'Direct social & contact integration with tailored typography'
    ],
    sampleDeliverable: 'Interactive live portfolio link or print-ready ATS-compliant PDF resume (Templates R1–R6).',
    accentColor: '#FF3CAC',
    previewGradient: 'from-pink-500/20 via-purple-500/20 to-indigo-500/20',
    visualPreviewType: 'portfolio',
    templates: [
      { id: 'r1', name: 'Template R1: ATS Minimalist', image: '/resumes/r1_template.jpg', tag: 'ATS Standard' },
      { id: 'r2', name: 'Template R2: Modern Executive', image: '/resumes/r2_template.jpg', tag: 'Executive' },
      { id: 'r3', name: 'Template R3: Tech & Engineering', image: '/resumes/r3_template.jpg', tag: 'Tech / Dev' },
      { id: 'r4', name: 'Template R4: Corporate CV', image: '/resumes/r4_template.jpg', tag: 'Corporate' },
      { id: 'r5', name: 'Template R5: Academic & Research', image: '/resumes/r5_template.jpg', tag: 'Academic' },
      { id: 'r6', name: 'Template R6: Creative Professional', image: '/resumes/r6_template.jpg', tag: 'Hybrid' }
    ]
  },
  {
    id: 'graphic-design',
    number: '03',
    title: 'GRAPHIC DESIGN',
    displayName: 'Graphic Design',
    shortDesc: 'Eye-catching social media visuals, promotional creatives, event posters, flyers and corporate stationery.',
    fullDesc: 'From viral Instagram carousels and YouTube thumbnails to event posters and corporate business cards, we create impactful graphic designs aligned with modern aesthetic standards.',
    sampleImage: '/summit-2026-poster.png',
    sampleImageCaption: 'Promotional Poster & Social Media Creatives',
    subcategoryGroups: [
      {
        groupName: 'Social Media Design',
        subcategories: [
          'Instagram Post (From ₹300)',
          'Instagram Story (From ₹250)',
          'Instagram Carousel (From ₹800)',
          'YouTube Thumbnail (From ₹300)',
          'LinkedIn Post (From ₹300)',
          'Social Media Banner (From ₹500)'
        ]
      },
      {
        groupName: 'Promotional Design',
        subcategories: [
          'Promotional Poster (From ₹400)',
          'Advertisement Creative (From ₹500)',
          'Event Poster (From ₹500)',
          'Flyer (From ₹500)'
        ]
      },
      {
        groupName: 'Professional Design',
        subcategories: [
          'Certificate (From ₹300)',
          'Invitation (From ₹500)',
          'Business Card (From ₹300)',
          'Letterhead (From ₹300)'
        ]
      }
    ],
    featuresIncluded: [
      'Custom creative layouts engineered for high engagement',
      'Pixel-perfect sizing for social platforms & print dimensions',
      'High-resolution PNG, JPEG, SVG & vector PDF exports',
      'Harmonious color schemes & modern typography',
      'Multiple concept variations & refinement rounds'
    ],
    sampleDeliverable: 'Ultra HD digital assets and print-ready vector artwork files.',
    accentColor: '#784BA0',
    previewGradient: 'from-purple-500/20 via-pink-500/20 to-rose-500/20',
    visualPreviewType: 'graphic',
    templates: [
      { id: 'inamigos-volunteer', name: 'InAmigos Foundation: Volunteer Drive', image: '/inamigos-volunteer-poster.png', tag: 'Volunteer Campaign' },
      { id: 'artist-of-the-month', name: 'Artist of the Month: Haechan (NCT)', image: '/artist-of-the-month-poster.png', tag: 'Editorial Design' },
      { id: 'inamigos-sewa', name: 'InAmigos Foundation: Project SEWA', image: '/inamigos-sewa-poster.png', tag: 'Charity Drive' },
      { id: 'summit', name: 'Summit 2026 Keynote Poster', image: '/summit-2026-poster.png', tag: 'Conference' },
      { id: 'girlscript', name: 'GirlScript Summer of Code', image: '/girlscript-summer-of-code.png', tag: 'GSSoC Open Source' },
      { id: 'gssoc', name: 'GSSoC Creative Poster', image: '/gssoc-poster.png', tag: 'Social Media' }
    ]
  },
  {
    id: 'assignment-academic-support',
    number: '04',
    title: 'ASSIGNMENT & ACADEMIC SUPPORT',
    displayName: 'Assignment & Academic Support',
    shortDesc: 'Legitimate presentation slide decks, project file preparation, editing and delivery based strictly on your content.',
    fullDesc: 'Save valuable time with professional PowerPoint/Keynote presentation design, document formatting, and complete project file preparation based on your provided material and drafts.',
    sampleImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    sampleImageCaption: 'Slide Decks & Project File Formatting',
    subcategoryGroups: [
      {
        groupName: 'PPT & Presentation Design',
        subcategories: [
          'School PPT (From ₹500)',
          'College PPT (From ₹700)',
          'Project Presentation (From ₹1,000)',
          'Research Presentation (From ₹1,500)',
          'Conference Presentation (From ₹2,000+)'
        ]
      },
      {
        groupName: 'Assignment & Project Services',
        subcategories: [
          'Assignment Formatting (From ₹300)',
          'Project File Formatting (From ₹800)',
          'Complete Project File Preparation* (From ₹1,500+)',
          'Online Assignment File Delivery (Included)',
          'Offline Printed Assignment/File (From ₹500+)'
        ]
      }
    ],
    featuresIncluded: [
      'Custom slide decks with clean typography & structured diagrams',
      'Professional document styling, proofreading & layout alignment',
      'Online digital delivery (Word, PDF, PPT, Google Slides)',
      'Optional offline printing, binding & courier delivery options',
      'Strict client confidentiality and academic integrity standards'
    ],
    sampleDeliverable: 'Polished presentation deck or properly formatted project file ready for submission.',
    importantNote: 'Complete file pricing depends on page count & requirements. Material, printing, binding & delivery charges are included/added according to the selected offline package and delivery location.',
    accentColor: '#2B86C5',
    previewGradient: 'from-blue-500/20 via-indigo-500/20 to-teal-500/20',
    visualPreviewType: 'academic'
  },
  {
    id: 'research-paper-formatting',
    number: '05',
    title: 'RESEARCH PAPER FORMATTING',
    displayName: 'Research Paper Formatting',
    shortDesc: 'Precise IEEE, Springer and LaTeX template formatting, equation structuring and Word ↔ LaTeX conversions.',
    fullDesc: 'Ensure your scholarly manuscripts comply strictly with publication formatting guidelines. We format IEEE, Springer, and custom publisher LaTeX templates, citations, formulas, figures and tables without altering your core research.',
    sampleImage: '/templates/ieee_template.png',
    sampleImageCaption: 'IEEE & Springer Publication Format Templates',
    subcategoryGroups: [
      {
        groupName: 'Template & Conversion Services',
        subcategories: [
          'Research Paper Formatting (From ₹800)',
          'IEEE Template Formatting (From ₹1,000)',
          'Springer Template Formatting (From ₹1,000)',
          'LaTeX Formatting (From ₹1,500)',
          'Word → LaTeX Conversion (From ₹1,500)',
          'LaTeX → Word Conversion (From ₹1,500)',
          'References/Citation Formatting (From ₹500)',
          'Tables & Figures Formatting (From ₹500)',
          'Final Formatting Check (From ₹1,000)',
          'Thesis/Dissertation Formatting (From ₹2,000+)'
        ]
      },
      {
        groupName: 'Page-Based IEEE/Springer Tier',
        subcategories: [
          'IEEE / Springer (1–5 pages: ₹1,000)',
          'IEEE / Springer (6–10 pages: ₹1,500)',
          'IEEE / Springer (11–20 pages: ₹2,500)',
          'IEEE / Springer (21–30 pages: ₹3,500)',
          'IEEE / Springer (30+ pages: Custom Quote)'
        ]
      }
    ],
    featuresIncluded: [
      'Strict adherence to IEEE / Springer conference & journal templates',
      'High-precision LaTeX formatting, BibTeX citation styling & macros',
      'Bidirectional Word ↔ LaTeX conversion & table/equation cleanup',
      'Vector figure positioning & caption hierarchy alignment',
      'Overleaf-ready zip bundle with compiled camera-ready PDF'
    ],
    sampleDeliverable: 'Camera-ready PDF & compiled source files (LaTeX / Word) adhering to publisher templates.',
    importantNote: 'We strictly provide technical template formatting, citation styling and conversion support. We do not offer or advertise publication guarantees, acceptance guarantees, or journal/conference acceptance.',
    accentColor: '#10B981',
    previewGradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    visualPreviewType: 'research',
    templates: [
      { id: 'ieee', name: 'IEEE Format Template', image: '/templates/ieee_template.png', pdfUrl: '/templates/ieee_template.pdf', tag: 'IEEE Two-Column' },
      { id: 'springer', name: 'Springer Format Template', image: '/templates/springer_template.png', pdfUrl: '/templates/springer_template.pdf', tag: 'Springer LNCS/Nature' }
    ]
  },
  {
    id: 'website-maintenance-support',
    number: '06',
    title: 'WEBSITE MAINTENANCE & SUPPORT',
    displayName: 'Website Maintenance & Support',
    shortDesc: 'Keep your web presence fast, bug-free, secure, and always updated with recurring monthly plans.',
    fullDesc: 'Consistent website care that prevents downtime, protects from vulnerabilities, and keeps your content fresh. Choose from our standard monthly maintenance tiers or request on-demand emergency fixes.',
    sampleImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    sampleImageCaption: 'Ongoing Web Maintenance & Monitoring',
    subcategoryGroups: [
      {
        groupName: 'Monthly Maintenance Packages',
        subcategories: [
          'Basic Website Maintenance (₹1,500/month)',
          'Business Website Maintenance (₹2,500/month)',
          'E-Commerce Maintenance (₹4,000/month)'
        ]
      },
      {
        groupName: 'On-Demand Technical Support',
        subcategories: [
          'Website Updates (From ₹500/request)',
          'Bug Fixing (From ₹500+)',
          'Speed Optimization (From ₹1,500+)',
          'Security/Backup Setup (From ₹1,000+)',
          'Website Migration (From ₹2,000+)',
          'Domain & Hosting Management (From ₹1,000/year+)'
        ]
      }
    ],
    featuresIncluded: [
      'Proactive monitoring, uptime checks and bug fixing',
      'Routine content revisions, image updates and announcements',
      'Automated secure cloud backups and disaster recovery',
      'Performance speed tuning & asset optimization',
      'Direct priority developer support via WhatsApp & email'
    ],
    sampleDeliverable: 'Monthly maintenance report and guaranteed response time for technical fixes.',
    importantNote: 'Monthly maintenance packages are billed monthly or annually with flexible cancel-anytime terms.',
    accentColor: '#F59E0B',
    previewGradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
    visualPreviewType: 'maintenance'
  },
  {
    id: 'add-on-services',
    number: '07',
    title: 'ADD-ON SERVICES',
    displayName: 'Add-on Services',
    shortDesc: 'A la carte features, integrations, integrations and setup services for any project.',
    fullDesc: 'Supercharge your website or project with individual modular upgrades. You can select single add-ons or bundle multiple items alongside any main service build.',
    sampleImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    sampleImageCaption: 'Modular Technical Add-ons & Integrations',
    subcategoryGroups: [
      {
        groupName: 'Integrations & Features',
        subcategories: [
          'Extra Website Page (₹500)',
          'WhatsApp Integration (₹500)',
          'Google Maps Integration (₹300)',
          'Contact Form Setup (₹500)',
          'Payment Gateway Integration (₹1,500)',
          'Basic SEO Setup (₹2,000)',
          'Google Analytics Setup (₹500)',
          'Product Upload (₹20/product)',
          'Custom Feature (From ₹1,000+)',
          'Hosting Setup (From ₹500+)',
          'Domain Setup (From ₹300+)'
        ]
      }
    ],
    featuresIncluded: [
      'Seamless code integration without disrupting existing pages',
      'Complete end-to-end testing and verification',
      'API key and security credential assistance',
      'No hidden platform charges or ongoing markups'
    ],
    sampleDeliverable: 'Configured and live modular feature integrated into your project.',
    accentColor: '#8B5CF6',
    previewGradient: 'from-purple-500/20 via-violet-500/20 to-indigo-500/20',
    visualPreviewType: 'addon'
  }
];

export const SERVICE_OPTIONS = OFFICIAL_SERVICES.map((s) => s.displayName);

// Helper to get flat subcategories for dropdowns
export const getSubcategoriesForService = (serviceDisplayName: string): { group?: string; options: string[] }[] => {
  const service = OFFICIAL_SERVICES.find((s) => s.displayName === serviceDisplayName);
  if (!service) return [];
  return service.subcategoryGroups.map((g) => ({
    group: g.groupName,
    options: g.subcategories
  }));
};
