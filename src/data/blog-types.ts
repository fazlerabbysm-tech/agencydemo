export interface BlogTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface BlogCallout {
  label: string;
  body: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: BlogTable;
  callout?: BlogCallout;
}

export interface BlogFaq {
  q: string;
  a: string;
}

export type BlogCategory =
  | "Marketing"
  | "AI Search (GEO)"
  | "Branding"
  | "Web & Tech"
  | "Strategy";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  region?: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
  };
  keyTakeaways: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
}
