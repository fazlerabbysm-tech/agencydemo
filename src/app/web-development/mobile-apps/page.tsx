import { JsonLd } from "@/components/seo/json-ld";
import MobileAppsView from "@/components/services/web/mobile-apps-view";
import { getRouteByPath } from "@/lib/service-routes";
import { MOBILE_APPS_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/web-development/mobile-apps")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Mobile App Development Company — iOS, Android & React Native",
  description:
    "iOS and Android mobile app development in Orange County & California using React Native, Flutter, and custom cloud APIs — from prototype to App Store approval and growth.",
  keywords: [
    "mobile app development Orange County",
    "React Native agency California",
    "iOS and Android app developers Anaheim",
    "cross-platform mobile app studio",
  ],
});

export default function MobileAppsPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Mobile App Development — Katella Digital",
    description:
      "Cross-platform React Native & Flutter iOS/Android mobile apps, cloud backends, payments, and App Store Optimization.",
    faqs: MOBILE_APPS_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <MobileAppsView />
    </>
  );
}
