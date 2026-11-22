"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Instagram, Linkedin, Youtube } from "lucide-react";
import {
  siteConfig,
  footerAgencyLinks,
  footerServiceLinks,
} from "@/lib/site-config";

function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer({ className = "" }: { className?: string }) {
  const [time, setTime] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/Los_Angeles",
      };
      setTime(now.toLocaleTimeString("en-GB", opts));
    };
    update();
    const t = setInterval(update, 1000 * 30);
    return () => clearInterval(t);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <footer
      className={`bg-[#060000]/95 backdrop-blur-md text-white border-t border-white/10 ${className}`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 pt-16 md:pt-20 pb-10">
        {/* Top 4-column grid matching reference architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand + summary + socials */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C71F42] transition-transform duration-300 group-hover:scale-125" />
              <span className="font-display font-bold tracking-tight text-xl text-white">
                Katella <span className="font-normal text-white/80">Digital</span>
              </span>
            </Link>

            <p className="text-sm text-white/65 leading-relaxed max-w-sm">
              An integrated digital marketing, creative, and web engineering
              agency in Anaheim, California. Strategies and campaigns engineered
              to drive measurable business growth.
            </p>

            {/* Social icon row */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={siteConfig.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full border border-white/12 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-[#C71F42] hover:bg-[#C71F42]/20 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials[1].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-full border border-white/12 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-[#C71F42] hover:bg-[#C71F42]/20 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials[2].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="h-9 w-9 rounded-full border border-white/12 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-[#C71F42] hover:bg-[#C71F42]/20 transition-colors"
              >
                <XIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.socials[3].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="h-9 w-9 rounded-full border border-white/12 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-[#C71F42] hover:bg-[#C71F42]/20 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2.5 text-white/60 font-mono text-[11px] tracking-[0.16em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C71F42]" />
              <span>Anaheim, CA · {time || "--:--"} PST</span>
            </div>
          </div>

          {/* Column 2: Agency */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/45 mb-5">
              Agency
            </h3>
            <ul className="space-y-3">
              {footerAgencyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/45 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/45 mb-5">
              Newsletter
            </h3>
            <p className="text-sm text-white/65 leading-relaxed mb-4">
              Ideas, SEO insights, and growth playbooks from the agency. No spam
              — promise.
            </p>
            {subscribed ? (
              <div className="rounded-xl border border-[#C71F42]/40 bg-[#C71F42]/12 px-4 py-3 text-sm text-white flex items-center gap-2">
                <Check className="h-4 w-4 text-[#FF4D73] shrink-0" />
                <span>You&apos;re subscribed. Thanks for joining!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="flex items-center rounded-full border border-white/15 bg-white/[0.04] p-1 focus-within:border-[#C71F42] transition-colors">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="you@company.com"
                    aria-label="Email address for newsletter"
                    className="w-full bg-transparent px-3.5 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="h-9 w-9 shrink-0 rounded-full bg-[#C71F42] hover:bg-[#DF254C] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}

            <div className="mt-5 text-xs text-white/50 space-y-1">
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.region}{" "}
                {siteConfig.address.postalCode}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright + Regional Service Areas */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} — Full-Service
            Digital Marketing Agency
          </p>
          <p className="font-mono text-[11px] tracking-[0.08em] text-white/45">
            {siteConfig.serviceAreas.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
