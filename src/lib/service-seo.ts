import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import type { ServiceRouteMeta } from "@/lib/service-routes";
import type { ServiceFaqItem } from "@/components/services/service-shell";

export function buildServiceMetadata(opts: {
  route: ServiceRouteMeta;
  title: string;
  description: string;
  keywords: string[];
}): Metadata {
  const canonical = opts.route.path;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${opts.title} | ${siteConfig.name}`,
      description: opts.description,
      url: `${siteConfig.url}${canonical}`,
      type: "website",
    },
  };
}

export function buildServiceSchemas(opts: {
  route: ServiceRouteMeta;
  name: string;
  description: string;
  faqs: ServiceFaqItem[];
}) {
  const { route, name, description, faqs } = opts;

  const breadcrumbItems = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    ...(!route.isPillar
      ? [{ name: route.siloLabel, url: `${siteConfig.url}${route.siloPath}` }]
      : []),
    { name: route.shortTitle, url: `${siteConfig.url}${route.path}` },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${route.path}`,
    serviceType: route.label,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
    },
    areaServed: siteConfig.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return { breadcrumbSchema, serviceSchema, faqSchema };
}
