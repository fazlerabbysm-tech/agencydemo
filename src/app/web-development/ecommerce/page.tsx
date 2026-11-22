import { JsonLd } from "@/components/seo/json-ld";
import EcommerceView from "@/components/services/web/ecommerce-view";
import { getRouteByPath } from "@/lib/service-routes";
import { ECOMMERCE_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/web-development/ecommerce")!;

export const metadata = buildServiceMetadata({
  route,
  title: "E-commerce Website Development Agency — Shopify & Headless Next.js",
  description:
    "High-converting Shopify, headless Next.js, and custom e-commerce storefronts engineered for sub-second mobile speed, higher AOV, and seamless Klaviyo & Shopping feed integration.",
  keywords: [
    "ecommerce development agency California",
    "Shopify agency Orange County",
    "headless Next.js ecommerce",
    "online store CRO agency",
  ],
});

export default function EcommercePage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "E-commerce Website Development — Katella Digital",
    description:
      "Custom Shopify, Headless Next.js, and WooCommerce storefronts optimized for speed, AOV, and checkout conversion.",
    faqs: ECOMMERCE_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <EcommerceView />
    </>
  );
}
