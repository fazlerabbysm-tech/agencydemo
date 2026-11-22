import { JsonLd } from "@/components/seo/json-ld";
import PerformanceMarketingView from "@/components/services/marketing/performance-marketing-view";
import { getRouteByPath } from "@/lib/service-routes";
import { PERFORMANCE_MARKETING_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/digital-marketing/performance-marketing")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Performance Marketing Agency — Paid Social, Search & Attribution",
  description:
    "Unify Google, Meta, TikTok, YouTube, and LinkedIn under one budget with server-side CAPI attribution, CAC/LTV unit economics, and weekly creative testing.",
  keywords: [
    "performance marketing agency California",
    "paid social agency Orange County",
    "Meta and TikTok ads agency",
    "server-side conversion attribution",
  ],
});

export default function PerformanceMarketingPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Performance Marketing & Paid Media — Katella Digital",
    description:
      "Cross-channel paid acquisition across Google, Meta, TikTok, YouTube, and LinkedIn backed by deduplicated CRM attribution.",
    faqs: PERFORMANCE_MARKETING_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <PerformanceMarketingView />
    </>
  );
}
