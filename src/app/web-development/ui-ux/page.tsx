import { JsonLd } from "@/components/seo/json-ld";
import UiUxView from "@/components/services/web/ui-ux-view";
import { getRouteByPath } from "@/lib/service-routes";
import { UI_UX_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/web-development/ui-ux")!;

export const metadata = buildServiceMetadata({
  route,
  title: "UI/UX & Conversion Design Agency in Anaheim & Orange County",
  description:
    "Conversion-focused UI/UX audits, clickable Figma prototypes, CRO landing pages, and tokenized design systems engineered to maximize marketing ROI.",
  keywords: [
    "UI UX design agency Orange County",
    "CRO landing page design California",
    "Figma design system studio",
    "website redesign Anaheim",
  ],
});

export default function UiUxPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "UI/UX & Conversion Design — Katella Digital",
    description:
      "Funnel UX audits, wireframes, high-converting landing pages, and tokenized Figma component libraries.",
    faqs: UI_UX_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <UiUxView />
    </>
  );
}
