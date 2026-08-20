export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  startingPrice: string;
  deliveryTime: string;
  ctaText: string;
  featuresIncluded: string[];
  sampleDeliverable: string;
  disclaimer?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Websites' | 'Portfolios' | 'Resumes' | 'Posters';
  image: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  highlights: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  cta: string;
  serviceId: string;
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
  budget: string;
  deadline: string;
  description: string;
  reference: string;
}
