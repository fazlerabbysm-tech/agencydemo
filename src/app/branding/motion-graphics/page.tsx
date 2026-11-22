import { JsonLd } from "@/components/seo/json-ld";
import MotionGraphicsView from "@/components/services/branding/motion-graphics-view";
import { getRouteByPath } from "@/lib/service-routes";
import { MOTION_GRAPHICS_FAQS } from "@/data/service-faqs";
import {
  buildServiceMetadata,
  buildServiceSchemas,
} from "@/lib/service-seo";

const route = getRouteByPath("/branding/motion-graphics")!;

export const metadata = buildServiceMetadata({
  route,
  title: "Motion Graphics & Brand Animation Studio — Katella Digital",
  description:
    "Product explainers, paid social ad animations, brand logo stingers, and lightweight Lottie web micro-interactions engineered for conversion across 9:16, 4:5, and 16:9 feeds.",
  keywords: [
    "motion graphics agency California",
    "SaaS product explainer animation",
    "paid social motion ads Orange County",
    "Lottie web animation studio",
  ],
});

export default function MotionGraphicsPage() {
  const { breadcrumbSchema, serviceSchema, faqSchema } = buildServiceSchemas({
    route,
    name: "Motion Graphics & Brand Animation — Katella Digital",
    description:
      "Multi-ratio motion graphics, product explainers, kinetic typography, and web Lottie animations.",
    faqs: MOTION_GRAPHICS_FAQS,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <MotionGraphicsView />
    </>
  );
}
