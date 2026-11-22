import { JsonLd } from "@/components/seo/json-ld";
import WebPillarView from "@/components/services/web/web-pillar-view";
import { getRouteByPath } from "@/lib/service-routes";
import { WEB_DEV_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/web-development")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Web & App Development Agency in Anaheim & Orange County, CA",
  description:
    "Sub-second Next.js websites, UI/UX systems, e-commerce storefronts, and custom web & mobile applications engineered for SEO, Core Web Vitals, and conversion.",
  keywords: [
    "web development agency Anaheim",
    "Next.js agency Orange County",
    "custom website design California",
    "web and app development company",
  ],
});

export default function WebDevelopmentPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Web & App Development — Katella Digital",
    description:
      "Custom Next.js websites, UI/UX design systems, headless e-commerce, web portals, and mobile apps.",
    faqs: WEB_DEV_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <WebPillarView />
    </>
  );
}
