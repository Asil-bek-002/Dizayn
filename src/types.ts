export interface PricingPlan {
  id: string;
  name: string;
  priceFormatted: string;
  priceRaw: number;
  period: string;
  badge?: string;
  popular?: boolean;
  description: string;
  features: string[];
  deliverablesSummary: string;
  telegramMessage: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'cafe' | 'clothing' | 'education' | 'beauty' | 'ecommerce' | 'story';
  categoryLabel: string;
  aspectRatio: '1:1' | '9:16' | '4:5';
  targetAudience: string;
  description: string;
  colorPalette: {
    name: string;
    hex: string;
  }[];
  typography: string;
  keyElements: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  timeline: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'muddat' | 'tahrir' | 'material' | 'tolov' | 'jarayon';
}
