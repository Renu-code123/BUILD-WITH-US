export interface ServiceSubcategoryGroup {
  groupName?: string;
  items: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  displayName: string;
  shortDesc: string;
  fullDesc: string;
  subcategories: string[] | ServiceSubcategoryGroup[];
  featuresIncluded: string[];
  sampleDeliverable: string;
  disclaimer?: string;
  accentColor?: string;
  previewGradient?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Websites' | 'Portfolios' | 'Resumes' | 'Graphic Design' | 'Research Paper Formatting';
  image: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  highlights: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
}

export interface ProjectInquiry {
  name: string;
  email: string;
  phone: string;
  service: string;
  serviceType: string;
  budget: string;
  deadline: string;
  description: string;
  reference: string;
  contactPreference: 'Email' | 'WhatsApp' | 'Phone Call';
}

