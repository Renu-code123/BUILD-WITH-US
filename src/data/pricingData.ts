import { PricingTier } from '../types';

export const pricingData: PricingTier[] = [
  {
    id: 'website-starter',
    name: 'WEBSITE STARTER',
    price: '₹1,499+',
    description: 'Perfect for small businesses, startups, local services, and new digital launches.',
    badge: 'MOST POPULAR',
    isPopular: true,
    features: [
      'Single-page modern landing page',
      'Fully mobile & tablet responsive',
      'Sleek modern UI & micro-interactions',
      'Contact form & WhatsApp CTA button',
      'Free deployment assistance & SSL setup',
      'Basic SEO metadata configuration'
    ],
    cta: 'Start Website →',
    serviceId: 'website-development'
  },
  {
    id: 'portfolio-starter',
    name: 'PORTFOLIO',
    price: '₹999+',
    description: 'Designed for students, developers, designers, freelancers, and creators.',
    features: [
      'Professional single-page portfolio layout',
      'Interactive Work & Project grid',
      'About me, Skills & Education section',
      'Downloadable Resume / CV integration',
      'Social media & GitHub profile links',
      'Direct client contact form setup'
    ],
    cta: 'Build Portfolio →',
    serviceId: 'portfolio-creation'
  },
  {
    id: 'resume-starter',
    name: 'RESUME / CV',
    price: '₹299+',
    description: 'Tailored for job seekers, professionals, and students needing high-impact CVs.',
    features: [
      'Clean professional visual layout',
      'ATS-Friendly compliant formatting',
      'High-resolution PDF delivery',
      'Custom typography & clean hierarchy',
      'Fast 24-48 hour delivery turnaround',
      'Includes 2 rounds of minor text edits'
    ],
    cta: 'Create Resume →',
    serviceId: 'resume-cv-design'
  }
];
