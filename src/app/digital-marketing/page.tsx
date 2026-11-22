import { JsonLd } from "@/components/seo/json-ld";
import DigitalMarketingView from "@/components/services/marketing/digital-marketing-view";
import { getRouteByPath } from "@/lib/service-routes";
import { DIGITAL_MARKETING_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/digital-marketing")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Digital Marketing Agency in Anaheim & Orange County, CA",
  description:
    "Full-service digital marketing agency in Anaheim, California scaling qualified leads and revenue through SEO, Google Ads, Performance Marketing, Content, and AI Search (GEO).",
  keywords: [
    "digital marketing agency Anaheim",
    "digital marketing agency Orange County",
    "performance marketing California",
    "SEO and Google Ads agency",
    "Katella Digital",
  ],
});

export default function DigitalMarketingPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Digital Marketing Agency Services — Katella Digital",
    description:
      "Full-funnel digital marketing combining SEO, Local SEO, Google Ads, Performance Marketing, Content Marketing, and AI Search (GEO).",
    faqs: DIGITAL_MARKETING_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <DigitalMarketingView />
    </>
  );
}
