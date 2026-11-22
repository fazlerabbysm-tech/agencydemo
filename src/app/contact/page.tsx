import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Check,
} from "lucide-react";
import PageShell from "@/components/site/page-shell";
import InlineContactForm from "@/components/site/inline-contact-form";
import ContactFaq from "@/components/site/contact-faq";
import { siteConfig } from "@/lib/site-config";
import {
  JsonLd,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/components/seo/json-ld";

const contactFaqs = [
  {
    q: "How quickly will your team respond after I submit an inquiry?",
    a: "We review every inquiry personally and respond within one business day (usually within a few hours during Pacific business hours) with next steps or a short discovery call invite.",
  },
  {
    q: "What budget range do you typically work with?",
    a: "Fixed-scope brand, landing page, and website engagements start around $2,500–$6,000, while ongoing full-funnel marketing, SEO/GEO, and paid media retainers typically start at $2,000–$3,500 per month depending on scope.",
  },
  {
    q: "Do you work exclusively with California businesses?",
    a: "Our headquarters are in Anaheim, Orange County, and we serve many clients across Southern California (Irvine, Newport Beach, Los Angeles, San Diego) as well as growth companies nationwide across the US.",
  },
  {
    q: "Can we start with a single audit or project before signing a retainer?",
    a: "Yes. Many clients start with a focused SEO & AI Search audit, landing-page sprint, or Google Ads restructure so you can experience our quality and speed before expanding into a broader partnership.",
  },
  {
    q: "Do we retain full ownership of our website code, ad accounts, and creative?",
    a: "100% yes. Every repository, Vercel deployment, Google/Meta ad account, GA4 property, and Figma file remains completely owned by your company.",
  },
];

export const metadata: Metadata = {
  title: "Contact Us — Start a Project with Katella Digital",
  description:
    "Reach out to Katella Digital in Anaheim, Orange County, CA. Tell us your digital marketing, SEO, branding, or web development goals — we reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />
      <JsonLd data={getFaqSchema(contactFaqs)} />

      <div className="pt-28 sm:pt-32 lg:pt-40 pb-20">
        {/* 01 — Hero */}
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
              <span className="text-[#FF4D73]">Contact Us</span>
            </nav>

            <div className="max-w-3xl space-y-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                Start a conversation
              </p>
              <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[1.03] text-4xl sm:text-5xl lg:text-[64px] text-white">
                Let&apos;s think together<span className="text-[#E81C49]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                Tell us what you&apos;re building or scaling. Whether you need a
                full-funnel digital marketing partner, an AI-ready website
                rebuild, or a sharper brand identity, our team responds within
                one business day.
              </p>
            </div>
          </div>
        </section>

        {/* 02 — Form + Direct Contact Channels */}
        <section id="form" className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <InlineContactForm
                  heading="Tell us about your project"
                  subheading="Share your goals, website URL, and timeline — a senior strategist will reply within 24 hours."
                  ctaLabel="Send message"
                />
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="kd-obsidian-card rounded-3xl p-6 sm:p-8 space-y-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF4D73]">
                    Direct channels
                  </p>

                  <div className="space-y-3.5">
                    <a
                      href={siteConfig.phoneHref}
                      className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-4 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="h-10 w-10 rounded-xl bg-[#C71F42]/20 border border-[#C71F42]/40 flex items-center justify-center text-[#FF4D73]">
                          <Phone className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                            Phone
                          </p>
                          <p className="text-sm font-semibold text-white">
                            {siteConfig.phone}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-white/50" />
                    </a>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="kd-glass-tile kd-obsidian-card-hover rounded-2xl p-4 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="h-10 w-10 rounded-xl bg-[#C71F42]/20 border border-[#C71F42]/40 flex items-center justify-center text-[#FF4D73]">
                          <Mail className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                            Email
                          </p>
                          <p className="text-sm font-semibold text-white">
                            {siteConfig.email}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-white/50" />
                    </a>

                    <div className="kd-glass-tile rounded-2xl p-4 flex items-center gap-3.5">
                      <span className="h-10 w-10 rounded-xl bg-[#C71F42]/20 border border-[#C71F42]/40 flex items-center justify-center text-[#FF4D73] shrink-0">
                        <Clock className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                          Business hours
                        </p>
                        <p className="text-sm font-semibold text-white">
                          {siteConfig.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What happens next */}
                <div className="kd-obsidian-card rounded-3xl p-6 sm:p-8 space-y-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF4D73]">
                    What happens next
                  </p>
                  <ul className="space-y-3 text-sm text-white/75">
                    {[
                      "We review your website & market within 24 hours",
                      "20-minute strategy call with a senior growth lead",
                      "Clear scope, timeline & ROI roadmap — no hard sell",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 h-5 w-5 rounded-full bg-[#C71F42]/20 border border-[#C71F42]/45 flex items-center justify-center text-[#FF4D73] shrink-0">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — Visit Us in Anaheim, Orange County */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="kd-obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73] inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    Headquarters
                  </p>
                  <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl text-white">
                    Visit us in Anaheim, Orange County.
                  </h2>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {siteConfig.address.street}, {siteConfig.address.city},{" "}
                    {siteConfig.address.region} {siteConfig.address.postalCode}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {siteConfig.serviceAreas.map((city) => (
                      <span
                        key={city}
                        className="kd-glass-tile rounded-full px-3 py-1 text-xs text-white/80"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden border border-white/15">
                    <img
                      src="/images/about-agency-office.webp"
                      alt="Katella Digital Anaheim California office"
                      className="w-full aspect-[16/9] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — Questions, Answered */}
        <section className="pt-12 sm:pt-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FF4D73]">
                  FAQ
                </p>
                <h2 className="font-display font-bold tracking-[-0.03em] text-3xl sm:text-4xl text-white">
                  Questions, answered.
                </h2>
                <p className="text-sm text-white/65 leading-relaxed">
                  Straight answers on timelines, engagement models, and how we
                  work with teams across California and the US.
                </p>
              </div>
              <div className="lg:col-span-8">
                <ContactFaq faqs={contactFaqs} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
