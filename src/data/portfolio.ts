export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Credit {
  role: string;
  name: string;
}

export interface PortfolioDetail {
  slug: string;
  no: string;
  title: string;
  subtitle: string;
  heroImage: string;
  client: string;
  industry: string;
  year: string;
  services: string[];
  serviceSlug: string;
  overviewTitle: string;
  overviewText: string[];
  gallery: GalleryImage[];
  credits: Credit[];
  caseStudyLink: string;
  relatedTitle: string;
  ctaTitle: string;
}

export const portfolioDetails: PortfolioDetail[] = [
  {
    slug: "apex-solar",
    no: "01",
    title: "Apex Solar California",
    subtitle:
      "Google Ads, Local SEO & conversion landing pages generating 3.8x qualified installs",
    heroImage: "/images/portfolio-apex-solar.webp",
    client: "Apex Solar",
    industry: "Clean Energy & Home Services",
    year: "2026",
    services: ["Google Ads", "Local SEO", "Conversion Landing Pages"],
    serviceSlug: "digital-marketing",
    overviewTitle: "Turning high-intent local search into predictable pipeline",
    overviewText: [
      "Apex Solar was spending over $35,000 a month on broad search campaigns with rising cost-per-lead and slow WordPress landing pages that lost nearly half of mobile visitors before the quote form rendered.",
      "We rebuilt their entire acquisition engine across Orange County and Los Angeles: launched 12 sub-second city-specific landing pages, restructured Google Ads around high-intent residential & commercial install queries, and connected CRM call tracking to optimize bids strictly for booked site assessments.",
      "Within 90 days, cost per qualified consultation dropped 44%, Google Maps visibility climbed into the top 3 across 9 Southern California cities, and monthly booked installs scaled 3.8x on the exact same ad budget.",
    ],
    gallery: [
      {
        src: "/images/service-google-ads.webp",
        alt: "Apex Solar intent-segmented Google Ads performance dashboard",
        caption: "Paid search architecture — 44% reduction in cost per qualified lead",
      },
      {
        src: "/images/service-local-seo.webp",
        alt: "Apex Solar Southern California Local SEO map pack coverage",
        caption: "Local SEO — Top 3 Google Map Pack rankings across 9 SoCal cities",
      },
      {
        src: "/images/service-crm-automation.webp",
        alt: "Apex Solar closed-loop CRM attribution and call tracking",
        caption: "CRM attribution — optimizing ad spend for booked site assessments",
      },
    ],
    credits: [
      { role: "Growth Lead", name: "Daniel Reyes" },
      { role: "Paid Search Strategist", name: "Claire Bennett" },
      { role: "Web Engineer", name: "Devon Brooks" },
    ],
    caseStudyLink: "/contact",
    relatedTitle: "More selected work",
    ctaTitle: "Ready to scale qualified leads from search?",
  },
  {
    slug: "vela-hospitality",
    no: "02",
    title: "Vela Hospitality Group",
    subtitle:
      "Brand identity, social media management & launch campaign driving 2.4M regional reach",
    heroImage: "/images/portfolio-vela-hospitality.webp",
    client: "Vela Hospitality",
    industry: "Hospitality & Lifestyle",
    year: "2026",
    services: ["Brand Identity", "Social Media Management", "Advertising Campaigns"],
    serviceSlug: "social-media-management",
    overviewTitle: "Filling dining rooms before opening night",
    overviewText: [
      "Vela Hospitality was launching a flagship coastal dining and boutique venue concept in Newport Beach and needed immediate regional momentum, cohesive brand presence, and sustained direct reservations beyond opening weekend.",
      "Katella Digital crafted the complete brand identity, produced a monthly engine of vertical short-form reels and dark-editorial social layouts, and executed geo-targeted Meta, TikTok, and local awareness campaigns across Orange County.",
      "The integrated launch generated 2.4M regional impressions in six weeks, booked out the first 45 days of reservations ahead of opening night, and built a repeatable social-to-booking funnel driving 62% of direct online reservations.",
    ],
    gallery: [
      {
        src: "/images/service-social-media.webp",
        alt: "Vela Hospitality cohesive social media grid and reels calendar",
        caption: "Social media engine — consistent editorial grids & short-form video",
      },
      {
        src: "/images/service-brand-identity.webp",
        alt: "Vela Hospitality visual brand identity and design system",
        caption: "Brand identity — cohesive print, signage, and digital language",
      },
      {
        src: "/images/service-advertising-campaigns.webp",
        alt: "Vela Hospitality regional launch awareness campaign",
        caption: "Launch campaign — 2.4M impressions across Orange County & LA",
      },
    ],
    credits: [
      { role: "Creative Director", name: "Elena Morales" },
      { role: "Social Media Lead", name: "Marcus Vance" },
      { role: "Paid Social Strategist", name: "Hannah Kim" },
    ],
    caseStudyLink: "/contact",
    relatedTitle: "More selected work",
    ctaTitle: "Launching a brand or campaign soon?",
  },
  {
    slug: "aurora-goods",
    no: "03",
    title: "Aurora Goods",
    subtitle:
      "E-commerce storefront rebuild, performance marketing & retention lifting CVR by +34%",
    heroImage: "/images/portfolio-aurora-ecommerce.webp",
    client: "Aurora Goods",
    industry: "D2C Skincare & E-commerce",
    year: "2025",
    services: ["E-commerce Development", "Performance Marketing", "SEO & Retention"],
    serviceSlug: "ecommerce-development",
    overviewTitle: "An e-commerce growth engine built to scale profitably",
    overviewText: [
      "Aurora Goods had strong product-market fit across 50+ skincare SKUs, but a sluggish storefront, inconsistent product merchandising, and fatigued paid social ads were capping growth and inflating customer acquisition cost.",
      "We redesigned and engineered a sub-second e-commerce experience with streamlined mobile checkout, rebuilt their Meta and Google Shopping campaigns around bi-weekly creative testing sprints, and automated Klaviyo lifecycle retention flows.",
      "Within 60 days of relaunch, overall store conversion rate climbed +34%, blended ROAS stabilized at 4.2x while scaling monthly ad spend, and repeat customer revenue grew 28% from automated email and SMS flows.",
    ],
    gallery: [
      {
        src: "/images/service-ecommerce-dev.webp",
        alt: "Aurora Goods streamlined mobile and desktop e-commerce checkout",
        caption: "E-commerce UX — sub-second storefront lifting conversion rate +34%",
      },
      {
        src: "/images/service-performance-marketing.webp",
        alt: "Aurora Goods multi-channel paid acquisition and creative testing",
        caption: "Performance marketing — weekly creative testing at 4.2x blended ROAS",
      },
      {
        src: "/images/service-seo.webp",
        alt: "Aurora Goods organic search growth across skincare collection pages",
        caption: "Commerce SEO — compounding non-branded organic product discovery",
      },
    ],
    credits: [
      { role: "E-commerce Director", name: "Maria Chen" },
      { role: "Performance Lead", name: "David Park" },
      { role: "Frontend Engineer", name: "Devon Brooks" },
    ],
    caseStudyLink: "/case-studies/aurora-goods",
    relatedTitle: "More selected work",
    ctaTitle: "Want an e-commerce funnel that scales like this?",
  },
];
