import { JsonLd } from "@/components/seo/json-ld";
import BrandStrategyView from "@/components/services/branding/brand-strategy-view";
import { getRouteByPath } from "@/lib/service-routes";
import { BRAND_STRATEGY_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/branding/brand-strategy")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Brand Strategy & Market Positioning Agency in California",
  description:
    "Carve out unmistakable category positioning, ICP messaging architecture, and verbal identity playbooks that lower acquisition costs and defend margins.",
  keywords: [
    "brand strategy agency California",
    "brand positioning Orange County",
    "B2B messaging strategy",
    "competitive positioning agency",
  ],
});

export default function BrandStrategyPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Brand Strategy & Market Positioning — Katella Digital",
    description:
      "Competitive whitespace mapping, ICP buyer messaging, verbal identity, and operational brand positioning playbooks.",
    faqs: BRAND_STRATEGY_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <BrandStrategyView />
    </>
  );
}
