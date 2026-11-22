import { JsonLd } from "@/components/seo/json-ld";
import SocialMediaView from "@/components/services/marketing/social-media-view";
import { getRouteByPath } from "@/lib/service-routes";
import { SOCIAL_MEDIA_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/digital-marketing/social-media-management")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Social Media Management Agency in Anaheim & Orange County",
  description:
    "Full-service social media strategy, short-form Reels & TikTok production, cohesive grid design, daily community management, and paid social amplification.",
  keywords: [
    "social media management agency Anaheim",
    "social media marketing Orange County",
    "Instagram Reels and TikTok agency",
    "B2B LinkedIn management California",
  ],
});

export default function SocialMediaManagementPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Social Media Management — Katella Digital",
    description:
      "Monthly editorial calendars, short-form video, community management, visual grid systems, and conversion reporting.",
    faqs: SOCIAL_MEDIA_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <SocialMediaView />
    </>
  );
}
