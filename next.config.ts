import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      // Marketing & Growth Silo
      { source: "/services/digital-marketing", destination: "/digital-marketing", permanent: true },
      { source: "/services/seo", destination: "/digital-marketing/seo", permanent: true },
      { source: "/services/local-seo", destination: "/digital-marketing/local-seo", permanent: true },
      { source: "/services/google-ads", destination: "/digital-marketing/google-ads", permanent: true },
      { source: "/services/performance-marketing", destination: "/digital-marketing/performance-marketing", permanent: true },
      { source: "/services/content-marketing", destination: "/digital-marketing/content-marketing", permanent: true },
      { source: "/services/ai-search-geo", destination: "/digital-marketing/ai-search-geo", permanent: true },
      { source: "/services/social-media-management", destination: "/digital-marketing/social-media-management", permanent: true },

      // Brand & Creative Silo
      { source: "/services/brand-strategy-identity", destination: "/branding", permanent: true },
      { source: "/services/brand-strategy", destination: "/branding/brand-strategy", permanent: true },
      { source: "/services/brand-identity", destination: "/branding/brand-identity", permanent: true },
      { source: "/services/logo-design", destination: "/branding/logo-design", permanent: true },
      { source: "/services/motion-graphics", destination: "/branding/motion-graphics", permanent: true },

      // Web & Apps Silo
      { source: "/services/web-app-dev", destination: "/web-development", permanent: true },
      { source: "/services/ui-ux", destination: "/web-development/ui-ux", permanent: true },
      { source: "/services/ecommerce-development", destination: "/web-development/ecommerce", permanent: true },
      { source: "/services/web-applications", destination: "/web-development/web-applications", permanent: true },
      { source: "/services/mobile-app-development", destination: "/web-development/mobile-apps", permanent: true },

      // Campaigns & Systems Silo
      { source: "/services/advertising-campaigns", destination: "/campaigns", permanent: true },
      { source: "/services/video-production", destination: "/campaigns/video-production", permanent: true },
      { source: "/services/crm-automation", destination: "/campaigns/crm-automation", permanent: true },
    ];
  },
};

export default nextConfig;
