import { JsonLd } from "@/components/seo/json-ld";
import GoogleAdsView from "@/components/services/marketing/google-ads-view";
import { getRouteByPath } from "@/lib/service-routes";
import { GOOGLE_ADS_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/digital-marketing/google-ads")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Google Ads Management Agency in Anaheim & Orange County",
  description:
    "Cut wasted search spend and scale qualified leads with tightly structured Google Ads, Shopping, Quality Score landing pages, and offline CRM conversion tracking.",
  keywords: [
    "Google Ads agency Anaheim",
    "PPC management Orange County",
    "Google Shopping agency California",
    "paid search management",
  ],
});

export default function GoogleAdsPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Google Ads & Paid Search Management — Katella Digital",
    description:
      "High-intent Google Search, Shopping, PMax governance, Quality Score landing pages, and offline CRM conversion bidding.",
    faqs: GOOGLE_ADS_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <GoogleAdsView />
    </>
  );
}
