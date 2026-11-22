import { JsonLd } from "@/components/seo/json-ld";
import WebAppsView from "@/components/services/web/web-apps-view";
import { getRouteByPath } from "@/lib/service-routes";
import { WEB_APPS_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/web-development/web-applications")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Custom Web Application & Client Portal Development — Katella Digital",
  description:
    "TypeScript & Next.js custom web applications, client portals, interactive quote/ROI calculators, and CRM-integrated SaaS MVPs engineered for speed and security.",
  keywords: [
    "custom web application development California",
    "client portal development Orange County",
    "SaaS MVP engineering agency",
    "Next.js TypeScript agency",
  ],
});

export default function WebApplicationsPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Web Application Development — Katella Digital",
    description:
      "Custom Next.js web applications, client portals, quote calculators, and API-integrated operational dashboards.",
    faqs: WEB_APPS_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <WebAppsView />
    </>
  );
}
