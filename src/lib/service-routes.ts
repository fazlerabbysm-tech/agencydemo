export type SiloKey =
  | "digital-marketing"
  | "branding"
  | "web-development"
  | "campaigns";

export interface ServiceRouteMeta {
  slug: string;
  silo: SiloKey;
  siloLabel: string;
  siloPath: string;
  path: string;
  label: string;
  shortTitle: string;
  isPillar: boolean;
  /** Related cross-pillar paths for strong semantic internal linking */
  crossLinks: string[];
  /** Matching blog post slugs from src/data/blog.ts */
  guideSlugs: string[];
}

export const SERVICE_ROUTES: ServiceRouteMeta[] = [
  // ==================== MARKETING & GROWTH SILO ====================
  {
    slug: "digital-marketing",
    silo: "digital-marketing",
    siloLabel: "Digital Marketing",
    siloPath: "/digital-marketing",
    path: "/digital-marketing",
    label: "Digital Marketing Agency",
    shortTitle: "Digital Marketing",
    isPillar: true,
    crossLinks: ["/web-development", "/branding", "/campaigns/crm-automation"],
    guideSlugs: [
      "california-digital-marketing-trends-2026",
      "seo-vs-google-ads-where-to-spend-first",
      "california-local-seo-google-maps-playbook",
    ],
  },
  {
    slug: "seo",
    silo: "digital-marketing",
    siloLabel: "Digital Marketing",
    siloPath: "/digital-marketing",
    path: "/digital-marketing/seo",
    label: "SEO Agency in California",
    shortTitle: "SEO",
    isPillar: false,
    crossLinks: ["/web-development", "/campaigns/crm-automation"],
    guideSlugs: [
      "seo-vs-google-ads-where-to-spend-first",
      "structured-data-for-ai-and-modern-seo",
      "california-local-seo-google-maps-playbook",
    ],
  },
  {
    slug: "local-seo",
    silo: "digital-marketing",
    siloLabel: "Digital Marketing",
    siloPath: "/digital-marketing",
    path: "/digital-marketing/local-seo",
    label: "Local SEO & Google Maps",
    shortTitle: "Local SEO",
    isPillar: false,
    crossLinks: ["/web-development", "/campaigns/crm-automation"],
    guideSlugs: [
      "california-local-seo-google-maps-playbook",
      "seo-vs-google-ads-where-to-spend-first",
      "how-to-appear-in-chatgpt-practical-guide",
    ],
  },
  {
    slug: "google-ads",
    silo: "digital-marketing",
    siloLabel: "Digital Marketing",
    siloPath: "/digital-marketing",
    path: "/digital-marketing/google-ads",
    label: "Google Ads Management",
    shortTitle: "Google Ads",
    isPillar: false,
    crossLinks: ["/web-development/ui-ux", "/campaigns/crm-automation"],
    guideSlugs: [
      "california-google-ads-cpc-benchmarks-budget-guide",
      "seo-vs-google-ads-where-to-spend-first",
      "conversion-tracking-google-analytics-4-guide",
    ],
  },
  {
    slug: "performance-marketing",
    silo: "digital-marketing",
    siloLabel: "Digital Marketing",
    siloPath: "/digital-marketing",
    path: "/digital-marketing/performance-marketing",
    label: "Performance Marketing",
    shortTitle: "Performance Marketing",
    isPillar: false,
    crossLinks: ["/campaigns", "/web-development", "/campaigns/crm-automation"],
    guideSlugs: [
      "performance-creative-that-actually-converts",
      "california-google-ads-cpc-benchmarks-budget-guide",
      "conversion-tracking-google-analytics-4-guide",
    ],
  },
  {
    slug: "content-marketing",
    silo: "digital-marketing",
    siloLabel: "Digital Marketing",
    siloPath: "/digital-marketing",
    path: "/digital-marketing/content-marketing",
    label: "Content Marketing Agency",
    shortTitle: "Content Marketing",
    isPillar: false,
    crossLinks: ["/branding/brand-strategy", "/web-development"],
    guideSlugs: [
      "ai-search-visibility-how-to-check-your-brand",
      "how-to-appear-in-chatgpt-practical-guide",
      "california-digital-marketing-trends-2026",
    ],
  },
  {
    slug: "ai-search-geo",
    silo: "digital-marketing",
    siloLabel: "Digital Marketing",
    siloPath: "/digital-marketing",
    path: "/digital-marketing/ai-search-geo",
    label: "AI Search Optimization (GEO)",
    shortTitle: "AI Search (GEO)",
    isPillar: false,
    crossLinks: ["/web-development", "/branding/brand-strategy"],
    guideSlugs: [
      "ai-search-visibility-how-to-check-your-brand",
      "how-to-appear-in-chatgpt-practical-guide",
      "structured-data-for-ai-and-modern-seo",
    ],
  },
  {
    slug: "social-media-management",
    silo: "digital-marketing",
    siloLabel: "Digital Marketing",
    siloPath: "/digital-marketing",
    path: "/digital-marketing/social-media-management",
    label: "Social Media Management",
    shortTitle: "Social Media Management",
    isPillar: false,
    crossLinks: ["/campaigns/video-production", "/branding/motion-graphics"],
    guideSlugs: [
      "performance-creative-that-actually-converts",
      "california-digital-marketing-trends-2026",
      "brand-positioning-before-scaling-paid-ads",
    ],
  },

  // ==================== BRAND & CREATIVE SILO ====================
  {
    slug: "brand-strategy-identity",
    silo: "branding",
    siloLabel: "Branding",
    siloPath: "/branding",
    path: "/branding",
    label: "Brand Strategy & Identity",
    shortTitle: "Brand Strategy & Identity",
    isPillar: true,
    crossLinks: ["/web-development/ui-ux", "/digital-marketing", "/campaigns"],
    guideSlugs: [
      "brand-identity-vs-logo-what-your-company-needs",
      "brand-positioning-before-scaling-paid-ads",
      "high-converting-landing-page-anatomy",
    ],
  },
  {
    slug: "brand-strategy",
    silo: "branding",
    siloLabel: "Branding",
    siloPath: "/branding",
    path: "/branding/brand-strategy",
    label: "Brand Strategy",
    shortTitle: "Brand Strategy",
    isPillar: false,
    crossLinks: ["/digital-marketing/content-marketing", "/campaigns"],
    guideSlugs: [
      "brand-positioning-before-scaling-paid-ads",
      "california-digital-marketing-trends-2026",
      "how-to-appear-in-chatgpt-practical-guide",
    ],
  },
  {
    slug: "brand-identity",
    silo: "branding",
    siloLabel: "Branding",
    siloPath: "/branding",
    path: "/branding/brand-identity",
    label: "Brand Identity Design",
    shortTitle: "Brand Identity",
    isPillar: false,
    crossLinks: ["/web-development/ui-ux", "/campaigns"],
    guideSlugs: [
      "brand-identity-vs-logo-what-your-company-needs",
      "brand-positioning-before-scaling-paid-ads",
      "high-converting-landing-page-anatomy",
    ],
  },
  {
    slug: "logo-design",
    silo: "branding",
    siloLabel: "Branding",
    siloPath: "/branding",
    path: "/branding/logo-design",
    label: "Logo Design",
    shortTitle: "Logo Design",
    isPillar: false,
    crossLinks: ["/web-development", "/digital-marketing/social-media-management"],
    guideSlugs: [
      "brand-identity-vs-logo-what-your-company-needs",
      "brand-positioning-before-scaling-paid-ads",
      "ai-search-visibility-how-to-check-your-brand",
    ],
  },
  {
    slug: "motion-graphics",
    silo: "branding",
    siloLabel: "Branding",
    siloPath: "/branding",
    path: "/branding/motion-graphics",
    label: "Motion Graphics & Animation",
    shortTitle: "Motion Graphics",
    isPillar: false,
    crossLinks: ["/campaigns/video-production", "/digital-marketing/performance-marketing"],
    guideSlugs: [
      "performance-creative-that-actually-converts",
      "brand-identity-vs-logo-what-your-company-needs",
      "high-converting-landing-page-anatomy",
    ],
  },

  // ==================== WEB & APPS SILO ====================
  {
    slug: "web-app-dev",
    silo: "web-development",
    siloLabel: "Web Development",
    siloPath: "/web-development",
    path: "/web-development",
    label: "Web & App Development",
    shortTitle: "Web & App Development",
    isPillar: true,
    crossLinks: ["/digital-marketing/seo", "/branding", "/campaigns/crm-automation"],
    guideSlugs: [
      "high-converting-landing-page-anatomy",
      "structured-data-for-ai-and-modern-seo",
      "conversion-tracking-google-analytics-4-guide",
    ],
  },
  {
    slug: "ui-ux",
    silo: "web-development",
    siloLabel: "Web Development",
    siloPath: "/web-development",
    path: "/web-development/ui-ux",
    label: "UI/UX & Conversion Design",
    shortTitle: "UI/UX Design",
    isPillar: false,
    crossLinks: ["/branding/brand-identity", "/digital-marketing/performance-marketing"],
    guideSlugs: [
      "high-converting-landing-page-anatomy",
      "brand-identity-vs-logo-what-your-company-needs",
      "conversion-tracking-google-analytics-4-guide",
    ],
  },
  {
    slug: "ecommerce-development",
    silo: "web-development",
    siloLabel: "Web Development",
    siloPath: "/web-development",
    path: "/web-development/ecommerce",
    label: "E-commerce Development",
    shortTitle: "E-commerce Development",
    isPillar: false,
    crossLinks: ["/digital-marketing/performance-marketing", "/digital-marketing/seo"],
    guideSlugs: [
      "high-converting-landing-page-anatomy",
      "performance-creative-that-actually-converts",
      "structured-data-for-ai-and-modern-seo",
    ],
  },
  {
    slug: "web-applications",
    silo: "web-development",
    siloLabel: "Web Development",
    siloPath: "/web-development",
    path: "/web-development/web-applications",
    label: "Web Applications & Portals",
    shortTitle: "Web Applications",
    isPillar: false,
    crossLinks: ["/campaigns/crm-automation", "/branding/brand-identity"],
    guideSlugs: [
      "structured-data-for-ai-and-modern-seo",
      "conversion-tracking-google-analytics-4-guide",
      "high-converting-landing-page-anatomy",
    ],
  },
  {
    slug: "mobile-app-development",
    silo: "web-development",
    siloLabel: "Web Development",
    siloPath: "/web-development",
    path: "/web-development/mobile-apps",
    label: "Mobile App Development",
    shortTitle: "Mobile App Development",
    isPillar: false,
    crossLinks: ["/digital-marketing/performance-marketing", "/branding"],
    guideSlugs: [
      "high-converting-landing-page-anatomy",
      "conversion-tracking-google-analytics-4-guide",
      "brand-positioning-before-scaling-paid-ads",
    ],
  },

  // ==================== CAMPAIGNS & SYSTEMS SILO ====================
  {
    slug: "advertising-campaigns",
    silo: "campaigns",
    siloLabel: "Campaigns & Systems",
    siloPath: "/campaigns",
    path: "/campaigns",
    label: "Advertising Campaigns",
    shortTitle: "Advertising Campaigns",
    isPillar: true,
    crossLinks: [
      "/digital-marketing/performance-marketing",
      "/branding",
      "/web-development/ui-ux",
    ],
    guideSlugs: [
      "california-google-ads-cpc-benchmarks-budget-guide",
      "performance-creative-that-actually-converts",
      "brand-positioning-before-scaling-paid-ads",
    ],
  },
  {
    slug: "video-production",
    silo: "campaigns",
    siloLabel: "Campaigns & Systems",
    siloPath: "/campaigns",
    path: "/campaigns/video-production",
    label: "Video & Brand Production",
    shortTitle: "Video Production",
    isPillar: false,
    crossLinks: [
      "/branding/motion-graphics",
      "/digital-marketing/social-media-management",
      "/digital-marketing/performance-marketing",
    ],
    guideSlugs: [
      "performance-creative-that-actually-converts",
      "brand-positioning-before-scaling-paid-ads",
      "california-digital-marketing-trends-2026",
    ],
  },
  {
    slug: "crm-automation",
    silo: "campaigns",
    siloLabel: "Campaigns & Systems",
    siloPath: "/campaigns",
    path: "/campaigns/crm-automation",
    label: "CRM & Marketing Automation",
    shortTitle: "CRM & Automation",
    isPillar: false,
    crossLinks: [
      "/digital-marketing/performance-marketing",
      "/digital-marketing/google-ads",
      "/web-development/web-applications",
    ],
    guideSlugs: [
      "conversion-tracking-google-analytics-4-guide",
      "california-google-ads-cpc-benchmarks-budget-guide",
      "california-digital-marketing-trends-2026",
    ],
  },
];

export function getRouteBySlug(slug: string): ServiceRouteMeta | undefined {
  return SERVICE_ROUTES.find((r) => r.slug === slug);
}

export function getRouteByPath(path: string): ServiceRouteMeta | undefined {
  return SERVICE_ROUTES.find((r) => r.path === path);
}

export function getSiloLinksFor(path: string): {
  parent?: ServiceRouteMeta;
  siblings: ServiceRouteMeta[];
  crossSilo: ServiceRouteMeta[];
} {
  const current = getRouteByPath(path);
  if (!current) return { siblings: [], crossSilo: [] };

  const parent = current.isPillar
    ? undefined
    : SERVICE_ROUTES.find((r) => r.silo === current.silo && r.isPillar);

  const siblings = SERVICE_ROUTES.filter(
    (r) => r.silo === current.silo && r.path !== current.path
  );

  const crossSilo = current.crossLinks
    .map((p) => getRouteByPath(p))
    .filter((r): r is ServiceRouteMeta => Boolean(r));

  return { parent, siblings, crossSilo };
}
