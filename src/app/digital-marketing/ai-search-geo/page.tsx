import { JsonLd } from "@/components/seo/json-ld";
import AiSearchGeoView from "@/components/services/marketing/ai-search-geo-view";
import { getRouteByPath } from "@/lib/service-routes";
import { AI_SEARCH_GEO_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/digital-marketing/ai-search-geo")!;

export const metadata = buildServiceMetadata({
  route,
  title: "AI Search Optimization (GEO) Agency — Rank in ChatGPT & Perplexity",
  description:
    "Generative Engine Optimization (GEO) for California and US brands. Earn verified citations and brand recommendations inside ChatGPT, Perplexity, and Google AI Overviews.",
  keywords: [
    "AI search optimization agency",
    "GEO generative engine optimization",
    "how to appear in ChatGPT",
    "Perplexity SEO agency California",
  ],
});

export default function AiSearchGeoPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "AI Search Optimization (GEO) — Katella Digital",
    description:
      "Entity consistency, AI crawler accessibility, linked JSON-LD schema graphs, and citation authority for ChatGPT, Perplexity, and Google AI Overviews.",
    faqs: AI_SEARCH_GEO_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <AiSearchGeoView />
    </>
  );
}
