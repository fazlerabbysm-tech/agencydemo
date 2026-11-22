export type {
  BlogCategory,
  BlogCallout,
  BlogFaq,
  BlogPost,
  BlogSection,
  BlogTable,
} from "./blog-types";

import type { BlogPost } from "./blog-types";
import { coreBlogArticles } from "./blog-articles-core";
import { californiaBlogArticles } from "./blog-articles-california";

// Combine all 12 long-form articles in reverse chronological order
const bySlug = new Map<string, BlogPost>(
  [...californiaBlogArticles, ...coreBlogArticles].map((post) => [
    post.slug,
    post,
  ])
);

const ORDERED_SLUGS = [
  "california-local-seo-google-maps-playbook",
  "california-google-ads-cpc-benchmarks-budget-guide",
  "ai-search-visibility-how-to-check-your-brand",
  "california-digital-marketing-trends-2026",
  "how-to-appear-in-chatgpt-practical-guide",
  "conversion-tracking-google-analytics-4-guide",
  "seo-vs-google-ads-where-to-spend-first",
  "high-converting-landing-page-anatomy",
  "structured-data-for-ai-and-modern-seo",
  "brand-identity-vs-logo-what-your-company-needs",
  "brand-positioning-before-scaling-paid-ads",
  "performance-creative-that-actually-converts",
] as const;

export const blogPosts: BlogPost[] = ORDERED_SLUGS.map((slug) =>
  bySlug.get(slug)
).filter((post): post is BlogPost => Boolean(post));
