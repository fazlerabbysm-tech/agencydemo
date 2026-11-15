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
    <div
      className="min-h-screen flex flex-col text-white relative"
      style={{
        background:
          "linear-gradient(120deg, #060000 0%, #2F000A 35%, #9A0E28 70%, #C71F42 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <CursorGlow />
      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
