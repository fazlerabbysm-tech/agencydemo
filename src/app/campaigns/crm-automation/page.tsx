import { JsonLd } from "@/components/seo/json-ld";
import CrmAutomationView from "@/components/services/campaigns/crm-automation-view";
import { getRouteByPath } from "@/lib/service-routes";
import { CRM_AUTOMATION_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/campaigns/crm-automation")!;

export const metadata = buildServiceMetadata({
  route,
  title: "CRM & Marketing Automation Agency — HubSpot & Closed-Loop Attribution",
  description:
    "Connect marketing directly to closed revenue with HubSpot/CRM architecture, 5-minute speed-to-lead routing, automated email/SMS follow-ups, and offline ad conversion sync.",
  keywords: [
    "CRM automation agency California",
    "HubSpot implementation Orange County",
    "marketing automation agency Anaheim",
    "closed loop revenue attribution",
  ],
});

export default function CrmAutomationPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "CRM & Marketing Automation — Katella Digital",
    description:
      "CRM pipeline design, instant lead routing, multi-step email/SMS follow-ups, and offline ad platform conversion sync.",
    faqs: CRM_AUTOMATION_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <CrmAutomationView />
    </>
  );
}
