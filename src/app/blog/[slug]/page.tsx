import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import PageShell from "@/components/site/page-shell";
import InlineContactForm from "@/components/site/inline-contact-form";
import { blogPosts } from "@/data/blog";
import {
  JsonLd,
  getArticleSchema,
  getBreadcrumbSchema,
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

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

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

      <article className="pt-28 sm:pt-32 lg:pt-40 pb-20">
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
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/60">
              <span className="rounded-full bg-[#C71F42]/25 border border-[#C71F42]/45 px-3 py-1 text-[#FF4D73]">
                {post.category}
              </span>
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
              By <strong className="text-white/90">{post.author.name}</strong> ·{" "}
              {post.author.role}
            </div>
          </header>

          {/* Featured Image */}
          <div className="kd-obsidian-card rounded-3xl overflow-hidden mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          {/* Article Body in Frosted Glass Sheet */}
          <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para) => (
                  <p
                    key={para}
                    className="text-base text-white/75 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3 pt-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="kd-glass-tile rounded-xl p-4 flex items-start gap-3 text-sm sm:text-base text-white/80"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E81C49] shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="pt-6 border-t border-white/10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4 text-[#FF4D73]" />
                Back to all articles
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-14 space-y-6">
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
                    Read <ArrowRight className="h-3.5 w-3.5 text-[#FF4D73]" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Inline CTA Form */}
          <div className="mt-14">
            <InlineContactForm
              heading="Need help putting this into action?"
              subheading="Talk with our Anaheim digital marketing strategists about SEO, AI Search (GEO), paid media, or web engineering."
              ctaLabel="Request strategy call"
            />
          </div>
        </div>
      </article>
    </PageShell>
  );
}
