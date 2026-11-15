"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "UI/UX Design", href: "/services/ui-ux" },
  { label: "Motion Graphics", href: "/services/motion-graphics" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Web & App Dev", href: "/services/web-app-dev" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onDark = !scrolled && !open && isHome;

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setOpen(false);
    // For in-page anchors on home, scroll smoothly
    if (href.startsWith("/#")) {
      e.preventDefault();
      if (isHome) {
        const id = href.slice(2);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        onDark
          ? "bg-transparent border-b border-transparent"
          : "bg-[#060000]/85 backdrop-blur-md border-b border-[#3a1518]"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <span
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 group-hover:scale-150 ${
              onDark ? "bg-[#C71F42]" : "bg-[#C71F42]"
            }`}
          />
          <span
            className={`font-display font-bold tracking-tight text-base sm:text-lg md:text-xl transition-colors duration-300 ${
              onDark ? "text-white" : "text-white"
            }`}
          >
            Katella <span className="font-light">Digital</span>
          </span>
        </Link>

        {/* Desktop nav — 5 items, no dropdowns */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-xs lg:text-sm font-medium tracking-wide uppercase relative group transition-colors duration-300 cursor-pointer ${
                onDark ? "text-white/90 hover:text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full bg-[#C71F42]" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}
            className={`group inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 text-xs lg:text-sm font-medium tracking-wide uppercase border transition-colors duration-300 cursor-pointer ${
              "bg-[#C71F42] text-white border-[#C71F42] hover:bg-transparent hover:text-[#C71F42]"
            }`}
          >
            Get a Quote
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden h-10 w-10 flex items-center justify-center transition-colors duration-300 ${
            onDark ? "text-white" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#060000] border-t border-[#3a1518]"
          >
            <div className="px-5 sm:px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xl font-display font-medium tracking-tight text-white text-left"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  window.dispatchEvent(new CustomEvent("open-contact-modal"));
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-[#C71F42] text-white px-5 py-3 text-sm font-medium tracking-wide uppercase"
              >
                Get a Quote →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
