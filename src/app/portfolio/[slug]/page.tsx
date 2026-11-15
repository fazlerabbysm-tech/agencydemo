import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { portfolioDetails } from "@/data/portfolio";
import PortfolioDetailPage from "@/components/site/portfolio-detail-page";
import PageShell from "@/components/site/page-shell";

export const dynamicParams = false;

// Pre-render all 4 portfolio pages at build time
export function generateStaticParams() {
  return portfolioDetails.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioDetails.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found — Katella Digital" };
  return {
    title: `${project.title} — Katella Digital`,
    description: project.subtitle.slice(0, 160),
    openGraph: {
      title: `${project.title} — Katella Digital`,
      description: project.subtitle.slice(0, 160),
      type: "website",
    },
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioDetails.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <PageShell>
      <PortfolioDetailPage project={project} />
    </PageShell>
  );
}
