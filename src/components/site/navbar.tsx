"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { siteConfig, serviceMegaMenu } from "@/lib/site-config";

function XIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
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

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpenForPath, setMobileOpenForPath] = useState<string | null>(
    null
  );
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mobileOpen = mobileOpenForPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpenForPath(null);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const openMega = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setMegaOpen(true);
  };

  const scheduleCloseMega = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const openContactModal = () => {
    setMobileOpenForPath(null);
    setMegaOpen(false);
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen || megaOpen
          ? "bg-[#060000]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          : "bg-[#060000]/45 backdrop-blur-md border-b border-white/[0.06]"
      }`}
    >
      {/* Top Utility Bar — desktop only, collapses smoothly on scroll */}
      <div
        className={`hidden lg:block overflow-hidden transition-all duration-300 border-b border-white/[0.07] bg-[#060000]/65 ${
          scrolled ? "max-h-0 opacity-0 border-b-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-9 flex items-center justify-between text-[11px] text-white/70">
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3 text-[#C71F42]" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-3 w-3 text-[#C71F42]" />
              <span>{siteConfig.email}</span>
            </a>
            <span className="inline-flex items-center gap-1.5 text-white/60">
              <MapPin className="h-3 w-3 text-[#C71F42]" />
              <span>{siteConfig.address.short}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/60">
              <Clock className="h-3 w-3 text-[#C71F42]" />
              <span>{siteConfig.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white/40 font-mono uppercase tracking-[0.16em] text-[10px]">
              Follow:
            </span>
            <a
              href={siteConfig.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a
              href={siteConfig.socials[1].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href={siteConfig.socials[2].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-white/60 hover:text-white transition-colors"
            >
              <XIcon className="h-3 w-3" />
            </a>
            <a
              href={siteConfig.socials[3].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Youtube className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => {
            setMegaOpen(false);
            setMobileOpenForPath(null);
          }}
          className="flex items-center gap-2.5 group shrink-0"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#C71F42] transition-transform duration-300 group-hover:scale-125" />
          <span className="font-display font-bold tracking-tight text-lg md:text-xl text-white">
            Katella <span className="font-normal text-white/80">Digital</span>
          </span>
        </Link>

        {/* Desktop Nav Links + Mega-Menu */}
        <div className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className={`text-[13px] font-medium tracking-wide transition-colors ${
              isActive("/")
                ? "text-white"
                : "text-white/75 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-[13px] font-medium tracking-wide transition-colors ${
              isActive("/about")
                ? "text-white"
                : "text-white/75 hover:text-white"
            }`}
          >
            About Us
          </Link>

          {/* Services Mega-Menu Trigger */}
          <div
            ref={megaRef}
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={scheduleCloseMega}
          >
            <button
              type="button"
              onClick={() => setMegaOpen((prev) => !prev)}
              aria-expanded={megaOpen}
              className={`inline-flex items-center gap-1.5 text-[13px] font-medium tracking-wide transition-colors py-2 cursor-pointer ${
                isActive("/services") || megaOpen
                  ? "text-white"
                  : "text-white/75 hover:text-white"
              }`}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  megaOpen ? "rotate-180 text-[#C71F42]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  onMouseEnter={openMega}
                  onMouseLeave={scheduleCloseMega}
                  className="fixed left-1/2 -translate-x-1/2 top-[76px] w-[min(1120px,calc(100vw-48px))] rounded-2xl border border-white/12 bg-[#0c0205]/96 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.75)] overflow-hidden z-50"
                >
                  <div className="grid grid-cols-4 gap-6 p-7">
                    {serviceMegaMenu.map((group) => (
                      <div key={group.title}>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF4D73] mb-3.5">
                          {group.title}
                        </p>
                        <ul className="space-y-1.5">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => setMegaOpen(false)}
                                className={`block rounded-md px-2.5 py-1.5 text-[13px] transition-colors ${
                                  item.isPillar
                                    ? "font-semibold text-white bg-white/[0.04] hover:bg-[#C71F42]/20 hover:text-white"
                                    : "text-white/70 hover:text-white hover:bg-white/[0.05]"
                                }`}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Mega-Menu Footer Strip */}
                  <div className="flex items-center justify-between px-7 py-3.5 border-t border-white/10 bg-[#060000]/70">
                    <p className="text-xs text-white/60">
                      Strategy, creative, paid media, SEO &amp; engineering —
                      all under one roof.
                    </p>
                    <Link
                      href="/services"
                      onClick={() => setMegaOpen(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:text-[#FF4D73] transition-colors"
                    >
                      All Services
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/portfolio"
            className={`text-[13px] font-medium tracking-wide transition-colors ${
              isActive("/portfolio")
                ? "text-white"
                : "text-white/75 hover:text-white"
            }`}
          >
            Portfolio
          </Link>

          <Link
            href="/blog"
            className={`text-[13px] font-medium tracking-wide transition-colors ${
              isActive("/blog")
                ? "text-white"
                : "text-white/75 hover:text-white"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`text-[13px] font-medium tracking-wide transition-colors ${
              isActive("/contact")
                ? "text-white"
                : "text-white/75 hover:text-white"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Right Primary CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={openContactModal}
            className="group inline-flex items-center gap-2 rounded-full bg-[#C71F42] hover:bg-[#DF254C] text-white px-5 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-200 cursor-pointer shadow-[0_6px_24px_rgba(199,31,66,0.35)]"
          >
            Get a Quote
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpenForPath(mobileOpen ? null : pathname)}
          className="lg:hidden h-10 w-10 rounded-lg border border-white/15 bg-white/[0.04] flex items-center justify-center text-white"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#060000]/98 border-t border-white/10 max-h-[calc(100svh-64px)] overflow-y-auto"
          >
            <div className="px-5 sm:px-6 py-6 flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setMobileOpenForPath(null)}
                className="py-2 text-lg font-display font-semibold text-white border-b border-white/[0.06]"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpenForPath(null)}
                className="py-2 text-lg font-display font-semibold text-white border-b border-white/[0.06]"
              >
                About Us
              </Link>

              {/* Expandable Services Accordion */}
              <div className="border-b border-white/[0.06] pb-2">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full py-2 flex items-center justify-between text-lg font-display font-semibold text-white"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#C71F42] transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-2 pt-2 space-y-4 pb-3"
                    >
                      <Link
                        href="/services"
                        onClick={() => setMobileOpenForPath(null)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#FF4D73]"
                      >
                        All Services <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      {serviceMegaMenu.map((group) => (
                        <div key={group.title}>
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 mb-2">
                            {group.title}
                          </p>
                          <ul className="space-y-1.5">
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpenForPath(null)}
                                  className="block py-1 text-sm text-white/80 hover:text-white"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/portfolio"
                onClick={() => setMobileOpenForPath(null)}
                className="py-2 text-lg font-display font-semibold text-white border-b border-white/[0.06]"
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileOpenForPath(null)}
                className="py-2 text-lg font-display font-semibold text-white border-b border-white/[0.06]"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpenForPath(null)}
                className="py-2 text-lg font-display font-semibold text-white border-b border-white/[0.06]"
              >
                Contact Us
              </Link>

              <button
                type="button"
                onClick={openContactModal}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#C71F42] text-white px-5 py-3.5 text-sm font-semibold tracking-[0.1em] uppercase"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="pt-4 mt-2 border-t border-white/10 space-y-2 text-xs text-white/60">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5 text-[#C71F42]" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 text-[#C71F42]" />
                  {siteConfig.email}
                </a>
                <p className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#C71F42]" />
                  {siteConfig.address.short}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
