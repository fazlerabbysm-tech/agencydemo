import { JsonLd } from "@/components/seo/json-ld";
import VideoProductionView from "@/components/services/campaigns/video-production-view";
import { getRouteByPath } from "@/lib/service-routes";
import { VIDEO_PRODUCTION_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/campaigns/video-production")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Commercial Video & Brand Production — Katella Digital",
  description:
    "Marketing-led brand films, customer case-study videos, and modular vertical paid ad suites — engineered to maximize assets per shoot and drive measurable pipeline.",
  keywords: [
    "commercial video production Orange County",
    "brand film agency California",
    "paid social video ad production",
    "client testimonial video agency",
  ],
});

export default function VideoProductionPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Video & Brand Production — Katella Digital",
    description:
      "Modular brand films, customer case stories, vertical paid ad suites, and post-production motion finishing.",
    faqs: VIDEO_PRODUCTION_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <VideoProductionView />
    </>
  );
}
