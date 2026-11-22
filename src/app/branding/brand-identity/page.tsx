import { JsonLd } from "@/components/seo/json-ld";
import BrandIdentityView from "@/components/services/branding/brand-identity-view";
import { getRouteByPath } from "@/lib/service-routes";
import { BRAND_IDENTITY_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/branding/brand-identity")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Brand Identity Design Agency — Visual Systems & Brand Guidelines",
  description:
    "Complete visual identity systems: accessible color tokens, typography scales, Figma UI kits, editable pitch decks, social templates, and brand guidelines.",
  keywords: [
    "brand identity design agency",
    "visual identity Orange County",
    "brand guidelines design California",
    "corporate identity system",
  ],
});

export default function BrandIdentityPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Brand Identity Design — Katella Digital",
    description:
      "Color systems, typography scales, brand books, Figma UI kits, and editable multi-channel collateral templates.",
    faqs: BRAND_IDENTITY_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <BrandIdentityView />
    </>
  );
}
