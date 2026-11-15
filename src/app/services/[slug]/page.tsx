import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { serviceDetails } from "@/data/services";
import ServiceDetailPage from "@/components/site/service-detail-page";
import PageShell from "@/components/site/page-shell";

export const dynamicParams = false;

// Pre-render all 4 service pages at build time
export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found — Katella Digital" };
  return {
    title: `${service.name} — Katella Digital`,
    description: service.heroOutcome.slice(0, 160),
    openGraph: {
      title: `${service.name} — Katella Digital`,
      description: service.heroOutcome.slice(0, 160),
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) notFound();
  return (
    <PageShell>
      <ServiceDetailPage service={service} />
    </PageShell>
  );
}
