import { JsonLd } from "@/components/seo/json-ld";
import BrandingPillarView from "@/components/services/branding/branding-pillar-view";
import { getRouteByPath } from "@/lib/service-routes";
import { BRANDING_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/branding")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Brand Strategy & Identity Agency in Anaheim & Orange County",
  description:
    "Full-service branding agency crafting brand positioning, logo systems, visual identities, brand guidelines, and motion graphics for growth-stage brands.",
  keywords: [
    "branding agency Anaheim",
    "brand identity agency Orange County",
    "brand strategy California",
    "corporate rebrand agency",
  ],
});

export default function BrandingPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Brand Strategy & Identity — Katella Digital",
    description:
      "Brand strategy, positioning, logo design, visual identity systems, guidelines, and motion graphics.",
    faqs: BRANDING_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <BrandingPillarView />
    </>
  );
}
