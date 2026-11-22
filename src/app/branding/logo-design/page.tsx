import { JsonLd } from "@/components/seo/json-ld";
import LogoDesignView from "@/components/services/branding/logo-design-view";
import { getRouteByPath } from "@/lib/service-routes";
import { LOGO_DESIGN_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/branding/logo-design")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Logo Design Agency in Anaheim & Orange County, CA",
  description:
    "Custom vector logo design engineered to stay razor-sharp from 16px favicons to architectural signage — complete lockup systems, monochrome variants, and full copyright ownership.",
  keywords: [
    "logo design agency Anaheim",
    "custom logo design Orange County",
    "brand mark and monogram design",
    "corporate logo refresh California",
  ],
});

export default function LogoDesignPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Logo Design & Lockup Systems — Katella Digital",
    description:
      "Bespoke vector marks, horizontal/stacked lockups, optical micro-scale testing, and production handover kits.",
    faqs: LOGO_DESIGN_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <LogoDesignView />
    </>
  );
}
