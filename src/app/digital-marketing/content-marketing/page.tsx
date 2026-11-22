import { JsonLd } from "@/components/seo/json-ld";
import ContentMarketingView from "@/components/services/marketing/content-marketing-view";
import { getRouteByPath } from "@/lib/service-routes";
import { CONTENT_MARKETING_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/digital-marketing/content-marketing")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Content Marketing Agency — Topic Clusters & Editorial SEO",
  description:
    "Build topical authority and inbound pipeline with pillar pages, hub-and-spoke topic clusters, buyer comparison guides, and interview-led thought leadership.",
  keywords: [
    "content marketing agency California",
    "SEO topic clusters agency",
    "B2B content strategy Orange County",
    "editorial marketing agency",
  ],
});

export default function ContentMarketingPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Content Marketing & Editorial Strategy — Katella Digital",
    description:
      "Topic maps, pillar pages, supporting cluster articles, comparison guides, and sales-enablement content.",
    faqs: CONTENT_MARKETING_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ContentMarketingView />
    </>
  );
}
