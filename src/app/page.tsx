"use client";

import { useState } from "react";
import Navbar from "@/components/site/navbar";
import Hero from "@/components/site/hero";
import BrandMarquee from "@/components/site/marquee";
import WhatWeDo from "@/components/site/what-we-do";
import Services from "@/components/site/services";
import WorkShowcase from "@/components/site/work-showcase";
import FinalCTA from "@/components/site/final-cta";
import FAQ from "@/components/site/faq";
import Footer from "@/components/site/footer";
import ServiceDetailModal from "@/components/site/service-detail-modal";
import PortfolioDetailModal from "@/components/site/portfolio-detail-modal";

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activePortfolio, setActivePortfolio] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <main className="flex-1">
        {/* 01 — Hero with showreel video + Get Started CTA */}
        <Hero />

        {/* 02 — Brand marquee, 2 lines, anti-clockwise rotation */}
        <BrandMarquee />

        {/* 03 — "What can we do for you?" with visual image */}
        <WhatWeDo />

        {/* 04 — "WHAT CAN WE HELP YOU WITH" — click to open service detail */}
        <Services onServiceClick={(slug) => setActiveService(slug)} />

        {/* 05 — Work showcase — click to open portfolio detail */}
        <WorkShowcase onWorkClick={(slug) => setActivePortfolio(slug)} />

        {/* 06 — Final call to action, one-line text */}
        <FinalCTA />

        {/* 07 — FAQ */}
        <FAQ />
      </main>
      <Footer />

      {/* Service detail page — opens when a service card is clicked */}
      <ServiceDetailModal
        slug={activeService}
        onClose={() => setActiveService(null)}
        onSwitchService={(slug) => setActiveService(slug)}
      />

      {/* Portfolio detail page — opens when a work card is clicked */}
      <PortfolioDetailModal
        slug={activePortfolio}
        onClose={() => setActivePortfolio(null)}
        onSwitchProject={(slug) => setActivePortfolio(slug)}
        onOpenService={(slug) => {
          setActivePortfolio(null);
          setActiveService(slug);
        }}
      />
    </div>
  );
}
