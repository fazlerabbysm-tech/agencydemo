import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { serviceDetails, getServiceBySlug } from "@/data/services";
import ServiceDetailPage from "@/components/site/service-detail-page";
import PageShell from "@/components/site/page-shell";
import {
  JsonLd,
  getBreadcrumbSchema,
  getFaqSchema,
  getServiceSchema,
} from "@/components/seo/json-ld";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.name} Agency in Anaheim, CA`,
    description: service.heroOutcome.slice(0, 160),
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} — Katella Digital`,
      description: service.heroOutcome.slice(0, 160),
      url: `/services/${service.slug}`,
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
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <PageShell>
      <JsonLd
        data={getServiceSchema({
          name: service.name,
          description: service.heroOutcome,
          path: `/services/${service.slug}`,
        })}
      />
      <JsonLd data={getFaqSchema(service.faqs)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <ServiceDetailPage service={service} />
    </PageShell>
  );
}
