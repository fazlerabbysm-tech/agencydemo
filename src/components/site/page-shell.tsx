"use client";

import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import CursorGlow from "@/components/site/cursor-glow";

interface PageShellProps {
  children: React.ReactNode;
}

/**
 * Universal page shell used by every static detail page
 * (services, portfolio, case studies). Provides the dark
 * gradient background, the universal Navbar, the universal
 * Footer, and the cursor glow.
 *
 * The fixed Navbar already has a logo link back to home —
 * no extra "Back to home" chip is needed.
 */
export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col text-white relative kd-canvas-bg">
      <div aria-hidden="true" className="h-0 w-0" />
      <CursorGlow />
      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
