import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { serviceDetails } from "@/data/services";
import { portfolioDetails } from "@/data/portfolio";
import { caseStudyDetails } from "@/data/caseStudies";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${siteConfig.url}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceDetails.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s.isPillar ? 0.92 : 0.85,
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

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((b) => ({
    url: `${siteConfig.url}/blog/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.78,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...portfolioRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ];
}
