import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageShell from "@/components/site/page-shell";
import BlogListClient from "@/components/site/blog-list-client";
import InlineContactForm from "@/components/site/inline-contact-form";
import { blogPosts } from "@/data/blog";
import { JsonLd, getBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Blog — Digital Marketing, SEO & AI Search (GEO) Insights",
  description:
    "Practical notes on SEO, AI Search (GEO), Google Ads, brand identity, and conversion web engineering from the Katella Digital team in Anaheim, California.",
  alternates: { canonical: "/blog" },
};

export default function BlogHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <div className="pt-28 sm:pt-32 lg:pt-40 pb-20">
        {/* Hero */}
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-mono text-white/55 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/35" />
              <span className="text-[#FF4D73]">Blog</span>
            </nav>

            <div className="max-w-3xl space-y-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                The journal
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl lg:text-[64px] text-white">
                Ideas worth thinking about
                <span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                Notes on digital marketing, SEO, AI Search (GEO), branding, and
                high-converting web engineering from the Katella Digital team.
              </p>
            </div>
          </div>
        </section>

        {/* Featured + Filterable Articles */}
        <section className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <BlogListClient posts={blogPosts} />
          </div>
        </section>

        {/* Bottom Lead Form (matching ltsthink.com/blog) */}
        <section className="pt-8 sm:pt-12">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                  Let&apos;s talk
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl text-white">
                  Like how we think? Let&apos;s build together.
                </h2>
                <p className="text-base text-white/70 leading-relaxed">
                  Tell us about your project or growth goals — our strategists
                  usually reply within one business day.
                </p>
              </div>
              <div className="lg:col-span-7">
                <InlineContactForm
                  heading="Start a conversation"
                  ctaLabel="Send message"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
