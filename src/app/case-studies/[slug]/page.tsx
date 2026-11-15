import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudyDetails } from "@/data/caseStudies";
import CaseStudyDetailPage from "@/components/site/casestudy-detail-page";
import PageShell from "@/components/site/page-shell";

export const dynamicParams = false;

// Pre-render all 4 case study pages at build time
export function generateStaticParams() {
  return caseStudyDetails.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudyDetails.find((c) => c.slug === slug);
  if (!caseStudy) return { title: "Case study not found — Katella Digital" };
  return {
    title: `${caseStudy.title} — Katella Digital`,
    description: caseStudy.testimonial.quote.slice(0, 160),
    openGraph: {
      title: `${caseStudy.title} — Katella Digital`,
      description: caseStudy.testimonial.quote.slice(0, 160),
      type: "website",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudyDetails.find((c) => c.slug === slug);
  if (!caseStudy) notFound();
  return (
    <PageShell>
      <CaseStudyDetailPage caseStudy={caseStudy} />
    </PageShell>
  );
}
