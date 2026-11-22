import { JsonLd } from "@/components/seo/json-ld";
import CampaignsPillarView from "@/components/services/campaigns/campaigns-pillar-view";
import { getRouteByPath } from "@/lib/service-routes";
import { CAMPAIGNS_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/campaigns")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Integrated Advertising Campaigns Agency in Anaheim & Orange County",
  description:
    "Full-funnel advertising campaigns uniting big creative concepts, modular video production, multi-channel media buying, conversion landing pages, and CRM attribution.",
  keywords: [
    "advertising agency Anaheim",
    "integrated advertising campaigns Orange County",
    "product launch marketing agency California",
    "omnichannel campaign agency",
  ],
});

export default function CampaignsPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Integrated Advertising Campaigns — Katella Digital",
    description:
      "End-to-end launch campaigns combining creative direction, video production, multi-channel media buying, and CRM attribution.",
    faqs: CAMPAIGNS_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <CampaignsPillarView />
    </>
  );
}
