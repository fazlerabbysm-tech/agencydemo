export interface NavServiceItem {
  label: string;
  href: string;
  isPillar?: boolean;
}

export interface NavServiceGroup {
  title: string;
  items: NavServiceItem[];
}

export const siteConfig = {
  name: "Katella Digital",
  legalName: "Katella Digital Marketing Agency",
  tagline: "Full-Service Digital Marketing Agency in Anaheim, California",
  description:
    "Katella Digital is a full-service digital marketing, branding, web development, and AI search (GEO) agency in Anaheim, Orange County, California. Strategy, creative, and performance engineered to drive measurable revenue growth.",
  url: "https://katelladigital.com",
  email: "info@katelladigital.com",
  phone: "+1 (714) 555-0194",
  phoneHref: "tel:+17145550194",
  whatsappUrl:
    "https://wa.me/17145550194?text=Hi%20Katella%20Digital%2C%20I%27d%20like%20to%20discuss%20a%20digital%20marketing%20project.",
  hours: "Mon–Fri · 9 AM – 6 PM PST",
  address: {
    street: "1800 E Katella Ave, Suite 300",
    city: "Anaheim",
    region: "CA",
    postalCode: "92805",
    country: "US",
    short: "Anaheim, Orange County, CA",
  },
  geo: {
    latitude: 33.8034,
    longitude: -117.8878,
  },
  serviceAreas: [
    "Anaheim",
    "Irvine",
    "Newport Beach",
    "Costa Mesa",
    "Orange County",
    "Los Angeles",
    "San Diego",
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com/katelladigital" },
    { label: "LinkedIn", href: "https://linkedin.com/company/katelladigital" },
    { label: "X", href: "https://x.com/katelladigital" },
    { label: "YouTube", href: "https://youtube.com/@katelladigital" },
  ],
} as const;

export const serviceMegaMenu: NavServiceGroup[] = [
  {
    title: "Brand & Creative",
    items: [
      {
        label: "Brand Strategy & Identity",
        href: "/services/brand-strategy-identity",
        isPillar: true,
      },
      { label: "Brand Strategy", href: "/services/brand-strategy" },
      { label: "Brand Identity", href: "/services/brand-identity" },
      { label: "Logo Design", href: "/services/logo-design" },
      { label: "Motion Graphics", href: "/services/motion-graphics" },
    ],
  },
  {
    title: "Marketing & Growth",
    items: [
      {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
        isPillar: true,
      },
      { label: "SEO", href: "/services/seo" },
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Google Ads", href: "/services/google-ads" },
      {
        label: "Performance Marketing",
        href: "/services/performance-marketing",
      },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "AI Search (GEO)", href: "/services/ai-search-geo" },
      {
        label: "Social Media Management",
        href: "/services/social-media-management",
      },
    ],
  },
  {
    title: "Web & Apps",
    items: [
      {
        label: "Web & App Development",
        href: "/services/web-app-dev",
        isPillar: true,
      },
      { label: "UI/UX Design", href: "/services/ui-ux" },
      {
        label: "E-commerce Development",
        href: "/services/ecommerce-development",
      },
      { label: "Web Applications", href: "/services/web-applications" },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
    ],
  },
  {
    title: "Campaigns & Systems",
    items: [
      {
        label: "Advertising Campaigns",
        href: "/services/advertising-campaigns",
        isPillar: true,
      },
      {
        label: "Video & Brand Production",
        href: "/services/video-production",
      },
      {
        label: "CRM & Marketing Automation",
        href: "/services/crm-automation",
      },
    ],
  },
];

export const footerAgencyLinks = [
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

export const footerServiceLinks = [
  { label: "Digital Marketing & SEO", href: "/services/digital-marketing" },
  { label: "Brand Strategy & Identity", href: "/services/brand-strategy-identity" },
  { label: "Social Media Management", href: "/services/social-media-management" },
  { label: "Web & App Development", href: "/services/web-app-dev" },
  { label: "UI/UX Design", href: "/services/ui-ux" },
  { label: "Motion Graphics", href: "/services/motion-graphics" },
  { label: "AI Search (GEO)", href: "/services/ai-search-geo" },
];
