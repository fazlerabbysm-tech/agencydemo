import { JsonLd } from "@/components/seo/json-ld";
import LocalSeoView from "@/components/services/marketing/local-seo-view";
import { getRouteByPath } from "@/lib/service-routes";
import { LOCAL_SEO_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/digital-marketing/local-seo")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Local SEO & Google Maps Agency in Anaheim & Orange County",
  description:
    "Dominate the Google Map Pack and near-me searches across Anaheim, Irvine, Newport Beach, and Southern California with verified Google Business Profiles, NAP consistency, and branch pages.",
  keywords: [
    "local SEO agency Anaheim",
    "Google Maps SEO Orange County",
    "Google Business Profile optimization",
    "multi-location local SEO California",
  ],
});

export default function LocalSeoPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Local SEO & Google Maps Optimization — Katella Digital",
    description:
      "Google Business Profile optimization, 25-point geo-grid tracking, NAP citation cleanup, review velocity, and LocalBusiness schema pages.",
    faqs: LOCAL_SEO_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <LocalSeoView />
    </>
  );
}
