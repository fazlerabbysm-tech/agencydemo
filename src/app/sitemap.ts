import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { serviceDetails } from "@/data/services";
import { portfolioDetails } from "@/data/portfolio";
import { caseStudyDetails } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceDetails.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioDetails.map((p) => ({
    url: `${siteConfig.url}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudyDetails.map((c) => ({
    url: `${siteConfig.url}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...portfolioRoutes,
    ...caseStudyRoutes,
  ];
}
