import { JsonLd } from "@/components/seo/json-ld";
import SeoView from "@/components/services/marketing/seo-view";
import { getRouteByPath } from "@/lib/service-routes";
import { SEO_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/digital-marketing/seo")!;

export const metadata = buildServiceMetadata({
  route,
  title: "SEO Agency in California — Technical & Organic Search Growth",
  description:
    "Earn compounding non-branded organic traffic and qualified leads with technical SEO, siloed URL architecture, commercial content clusters, and revenue-attributed reporting.",
  keywords: [
    "SEO agency California",
    "SEO agency Anaheim",
    "technical SEO Orange County",
    "organic search optimization",
  ],
});

export default function SeoPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "SEO Agency Services — Katella Digital",
    description:
      "Technical SEO, site architecture, hub-and-spoke internal linking, commercial keyword mapping, and digital PR authority.",
    faqs: SEO_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <SeoView />
    </>
  );
}
