import { ServiceItem } from '../types';

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
  visualPreviewType: 'web' | 'portfolio' | 'graphic' | 'academic' | 'research';
}

export const OFFICIAL_SERVICES: ServiceDefinition[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'WEBSITE DEVELOPMENT',
    displayName: 'Website Development',
    shortDesc: 'Modern, high-converting and responsive websites tailored for businesses, creators and personal brands.',
    fullDesc: 'We design and engineer bespoke web solutions from clean landing pages to multi-page business websites. Every build is optimized for blistering performance, fluid mobile responsiveness, intuitive user experience, and modern aesthetics.',
    sampleImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    sampleImageCaption: 'Responsive Web UI & Dashboard',
    subcategoryGroups: [
      {
        subcategories: [
          'Business Websites',
          'Personal Websites',
          'Landing Pages',
          'Custom Websites'
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
    fullDesc: 'Whether you need an interactive developer/designer portfolio website or an executive, ATS-optimized resume, we help you present your work with undeniable polish and clear visual hierarchy.',
    sampleImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    sampleImageCaption: 'ATS-Compliant Resume & CV Layout',
    subcategoryGroups: [
      {
        groupName: 'Portfolio',
        subcategories: ['Custom-Made Portfolio']
      },
      {
        groupName: 'Resume / CV',
        subcategories: ['Basic Resume Design', 'Professional Resume']
      }
    ],
    featuresIncluded: [
      'Interactive project showcase & skill badges for portfolios',
      'ATS-compliant structured layout for recruiter screening',
      'Modern typography, clear hierarchy & tailored color palettes',
      'High-resolution PDF & editable vector/document deliverables',
      'Direct social & contact integration'
    ],
    sampleDeliverable: 'Interactive live portfolio link or print-ready ATS-compliant PDF resume.',
    accentColor: '#FF3CAC',
    previewGradient: 'from-pink-500/20 via-purple-500/20 to-indigo-500/20',
    visualPreviewType: 'portfolio'
  },
  {
    id: 'graphic-design',
    number: '03',
    title: 'GRAPHIC DESIGN',
    displayName: 'Graphic Design',
    shortDesc: 'Eye-catching social media visuals, promotional creatives, event posters, flyers and corporate stationery.',
    fullDesc: 'From viral Instagram carousels and YouTube thumbnails to event posters and corporate business cards, we create impactful graphic designs aligned with modern aesthetic standards.',
    sampleImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    sampleImageCaption: 'Social Media & Promo Creatives',
    subcategoryGroups: [
      {
        groupName: 'Social Media Design',
        subcategories: [
          'Instagram Posts',
          'Instagram Stories',
          'Instagram Carousels',
          'YouTube Thumbnails',
          'LinkedIn Posts',
          'Social Media Banners'
        ]
      },
      {
        groupName: 'Promotional Design',
        subcategories: [
          'Promotional Posters',
          'Advertisement Creatives',
          'Event Posters',
          'Flyers'
        ]
      },
      {
        groupName: 'Professional Design',
        subcategories: [
          'Certificates',
          'Invitations',
          'Business Cards',
          'Letterheads'
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
    visualPreviewType: 'graphic'
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
          'College PPT',
          'School PPT',
          'Project Presentation',
          'Research Presentation',
          'Conference Presentation'
        ]
      },
      {
        groupName: 'Assignment Services',
        subcategories: [
          "Full Project File Preparation Based on Client's Own Content/Material",
          'Online Assignment File Delivery',
          'Offline Printed Assignment/File Delivery'
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
    sampleImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    sampleImageCaption: 'IEEE / Springer / LaTeX Formatting',
    subcategoryGroups: [
      {
        subcategories: [
          'IEEE Template Formatting',
          'Springer Template Formatting',
          'LaTeX Formatting',
          'Word ↔ LaTeX Formatting/Conversion'
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
    visualPreviewType: 'research'
  }
];

// Helper to get flat subcategories for dropdowns
export const getSubcategoriesForService = (serviceDisplayName: string): { group?: string; options: string[] }[] => {
  const service = OFFICIAL_SERVICES.find((s) => s.displayName === serviceDisplayName);
  if (!service) return [];
  return service.subcategoryGroups.map((g) => ({
    group: g.groupName,
    options: g.subcategories
  }));
};
