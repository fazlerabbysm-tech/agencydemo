import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import PageShell from "@/components/site/page-shell";
import InlineContactForm from "@/components/site/inline-contact-form";
import { blogPosts } from "@/data/blog";
import { SERVICE_ROUTES } from "@/lib/service-routes";
import {
  JsonLd,
  getArticleSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/components/seo/json-ld";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Prioritize same-category articles, then fill up to 3 with newest remaining posts
  const sameCategory = blogPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  );
  const others = blogPosts.filter(
    (p) => p.slug !== post.slug && p.category !== post.category
  );
  const related = [...sameCategory, ...others].slice(0, 3);

  const matchingServices = SERVICE_ROUTES.filter((r) =>
    r.guideSlugs.includes(post.slug)
  ).slice(0, 4);

  return (
    <PageShell>
      <JsonLd
        data={getArticleSchema({
          title: post.title,
          description: post.excerpt,
          path: `/blog/${post.slug}`,
          image: post.image,
          datePublished: post.date,
          authorName: post.author.name,
        })}
      />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      {post.faqs.length > 0 && <JsonLd data={getFaqSchema(post.faqs)} />}

      <article className="pt-28 sm:pt-32 lg:pt-40 pb-20">
        {/* Hero Section (strictly animation-free via CursorGlow hero boundary) */}
        <section className="pb-10">
          <div className="mx-auto max-w-[1000px] px-5 sm:px-6 md:px-10">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/55 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/35" />
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/35" />
              <span className="text-[#FF4D73]">{post.category}</span>
            </nav>

            {/* Header */}
            <header className="space-y-5 mb-10">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-white/60">
                <span className="rounded-full bg-[#C71F42]/25 border border-[#C71F42]/45 px-3 py-1 text-[#FF4D73]">
                  {post.category}
                </span>
                {post.region && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] border border-white/15 px-3 py-1 text-white/80">
                    <MapPin className="h-3 w-3 text-[#FF4D73]" />
                    {post.region}
                  </span>
                )}
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="font-display font-extrabold tracking-[-0.03em] leading-[1.08] text-3xl sm:text-5xl text-white">
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="pt-2 text-xs text-white/55">
                By <strong className="text-white/90">{post.author.name}</strong>{" "}
                · {post.author.role}
              </div>
            </header>

            {/* Featured Image */}
            <div className="kd-obsidian-card rounded-3xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Full Article Body */}
        <section className="pb-12">
          <div className="mx-auto max-w-[1000px] px-5 sm:px-6 md:px-10">
            <div className="kd-obsidian-card rounded-3xl p-6 sm:p-10 lg:p-12 space-y-11">
              {/* Executive Key Takeaways + Table of Contents */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-white/10">
                {post.keyTakeaways.length > 0 && (
                  <div className="lg:col-span-7 kd-glass-tile rounded-2xl p-5 sm:p-6 space-y-3.5 border-[#E81C49]/25">
                    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF4D73]">
                      <Sparkles className="h-3.5 w-3.5" />
                      Key Takeaways
                    </div>
                    <ul className="space-y-2.5">
                      {post.keyTakeaways.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#FF4D73] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="lg:col-span-5 kd-glass-tile rounded-2xl p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                    <BookOpen className="h-3.5 w-3.5 text-[#FF4D73]" />
                    In This Guide
                  </div>
                  <ol className="space-y-2 text-sm">
                    {post.sections.map((section, idx) => (
                      <li key={section.heading}>
                        <a
                          href={`#section-${idx + 1}`}
                          className="group flex items-start gap-2.5 text-white/70 hover:text-white transition-colors"
                        >
                          <span className="font-mono text-[11px] text-[#FF4D73] pt-0.5 shrink-0">
                            0{idx + 1}
                          </span>
                          <span className="leading-snug group-hover:text-[#FF4D73] transition-colors">
                            {section.heading}
                          </span>
                        </a>
                      </li>
                    ))}
                    {post.faqs.length > 0 && (
                      <li>
                        <a
                          href="#article-faqs"
                          className="group flex items-start gap-2.5 text-white/70 hover:text-white transition-colors"
                        >
                          <span className="font-mono text-[11px] text-[#FF4D73] pt-0.5 shrink-0">
                            FAQ
                          </span>
                          <span className="leading-snug group-hover:text-[#FF4D73] transition-colors">
                            Frequently Asked Questions
                          </span>
                        </a>
                      </li>
                    )}
                  </ol>
                </div>
              </div>

              {/* Long-Form Sections */}
              {post.sections.map((section, idx) => (
                <div
                  key={section.heading}
                  id={`section-${idx + 1}`}
                  className="scroll-mt-28 space-y-4"
                >
                  <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF4D73]/90">
                    <span>Section 0{idx + 1}</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((para) => (
                    <p
                      key={para}
                      className="text-base text-white/80 leading-[1.8]"
                    >
                      {para}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="space-y-3 pt-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="kd-glass-tile rounded-xl p-4 flex items-start gap-3 text-sm sm:text-base text-white/85 leading-relaxed"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E81C49] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className="pt-2 space-y-2.5">
                      {section.table.caption && (
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
                          {section.table.caption}
                        </p>
                      )}
                      <div className="kd-glass-tile rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                              <tr className="border-b border-white/10 bg-white/[0.04]">
                                {section.table.headers.map((header) => (
                                  <th
                                    key={header}
                                    className="px-4 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#FF4D73] font-semibold"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-sm">
                              {section.table.rows.map((row, rowIdx) => (
                                <tr
                                  key={rowIdx}
                                  className="hover:bg-white/[0.03] transition-colors"
                                >
                                  {row.map((cell, cellIdx) => (
                                    <td
                                      key={cellIdx}
                                      className={`px-4 py-3.5 align-top leading-relaxed ${
                                        cellIdx === 0
                                          ? "font-semibold text-white"
                                          : "text-white/75"
                                      }`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.callout && (
                    <div className="mt-3 rounded-2xl border border-[#E81C49]/40 bg-[#C71F42]/12 p-5 sm:p-6 space-y-1.5">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF4D73]">
                        {section.callout.label}
                      </p>
                      <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                        {section.callout.body}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* Article FAQ Section */}
              {post.faqs.length > 0 && (
                <div
                  id="article-faqs"
                  className="scroll-mt-28 pt-8 border-t border-white/10 space-y-5"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF4D73]">
                      Quick Answers
                    </p>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mt-1.5">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <div className="space-y-3.5">
                    {post.faqs.map((faq) => (
                      <div
                        key={faq.q}
                        className="kd-glass-tile rounded-2xl p-5 sm:p-6 space-y-2"
                      >
                        <h3 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
                          {faq.q}
                        </h3>
                        <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bidirectional SEO Silo Internal Links to Related Services */}
              {matchingServices.length > 0 && (
                <div className="pt-8 border-t border-white/10 space-y-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF4D73]">
                    Related Services · Put This Guide Into Action
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchingServices.map((svc) => (
                      <Link
                        key={svc.path}
                        href={svc.path}
                        className="group kd-glass-tile kd-obsidian-card-hover rounded-2xl p-4 flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 block">
                            {svc.siloLabel}
                          </span>
                          <span className="font-display font-bold text-sm text-white group-hover:text-[#FF4D73] transition-colors truncate block mt-0.5">
                            {svc.label}
                          </span>
                        </div>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-white/45 group-hover:text-[#FF4D73]" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-white/10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 text-[#FF4D73]" />
                  Back to all {blogPosts.length} articles
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles & Strategy Call Form */}
        <section className="pt-4">
          <div className="mx-auto max-w-[1000px] px-5 sm:px-6 md:px-10 space-y-14">
            <div className="space-y-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Keep reading
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group kd-obsidian-card kd-obsidian-card-hover rounded-2xl p-5 flex flex-col justify-between gap-4"
                  >
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                        {r.category} · {r.readTime}
                      </p>
                      <h3 className="font-display font-bold text-base text-white mt-2 leading-snug group-hover:text-[#FF4D73] transition-colors">
                        {r.title}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/75 group-hover:text-white">
                      Read{" "}
                      <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73]" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <InlineContactForm
              heading="Need help putting this into action?"
              subheading="Talk with our Anaheim digital marketing strategists about California Local SEO, Google Ads, AI Search (GEO), or conversion web engineering."
              ctaLabel="Request strategy call"
            />
          </div>
        </section>
      </article>
    </PageShell>
  );
}
