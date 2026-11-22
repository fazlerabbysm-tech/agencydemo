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
        href: "/branding",
        isPillar: true,
      },
      { label: "Brand Strategy", href: "/branding/brand-strategy" },
      { label: "Brand Identity", href: "/branding/brand-identity" },
      { label: "Logo Design", href: "/branding/logo-design" },
      { label: "Motion Graphics", href: "/branding/motion-graphics" },
    ],
  },
  {
    title: "Marketing & Growth",
    items: [
      {
        label: "Digital Marketing",
        href: "/digital-marketing",
        isPillar: true,
      },
      { label: "SEO", href: "/digital-marketing/seo" },
      { label: "Local SEO", href: "/digital-marketing/local-seo" },
      { label: "Google Ads", href: "/digital-marketing/google-ads" },
      {
        label: "Performance Marketing",
        href: "/digital-marketing/performance-marketing",
      },
      { label: "Content Marketing", href: "/digital-marketing/content-marketing" },
      { label: "AI Search (GEO)", href: "/digital-marketing/ai-search-geo" },
      {
        label: "Social Media Management",
        href: "/digital-marketing/social-media-management",
      },
    ],
  },
  {
    title: "Web & Apps",
    items: [
      {
        label: "Web & App Development",
        href: "/web-development",
        isPillar: true,
      },
      { label: "UI/UX Design", href: "/web-development/ui-ux" },
      {
        label: "E-commerce Development",
        href: "/web-development/ecommerce",
      },
      { label: "Web Applications", href: "/web-development/web-applications" },
      {
        label: "Mobile App Development",
        href: "/web-development/mobile-apps",
      },
    ],
  },
  {
    title: "Campaigns & Systems",
    items: [
      {
        label: "Advertising Campaigns",
        href: "/campaigns",
        isPillar: true,
      },
      {
        label: "Video & Brand Production",
        href: "/campaigns/video-production",
      },
      {
        label: "CRM & Marketing Automation",
        href: "/campaigns/crm-automation",
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
  { label: "Digital Marketing & SEO", href: "/digital-marketing" },
  { label: "Local SEO & Google Maps", href: "/digital-marketing/local-seo" },
  { label: "AI Search (GEO)", href: "/digital-marketing/ai-search-geo" },
  { label: "Brand Strategy & Identity", href: "/branding" },
  { label: "Web & App Development", href: "/web-development" },
  { label: "Advertising Campaigns", href: "/campaigns" },
  { label: "CRM & Automation", href: "/campaigns/crm-automation" },
];
