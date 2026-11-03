"use client";

import { useState } from "react";
import Navbar from "@/components/site/navbar";
import Hero from "@/components/site/hero";
import BrandMarquee from "@/components/site/marquee";
import StatsValues from "@/components/site/stats-values";
import Services from "@/components/site/services";
import WorkShowcase from "@/components/site/work-showcase";
import FinalCTA from "@/components/site/final-cta";
import FAQ from "@/components/site/faq";
import Footer from "@/components/site/footer";
import ServiceDetailModal from "@/components/site/service-detail-modal";
import PortfolioDetailModal from "@/components/site/portfolio-detail-modal";
import CaseStudyModal from "@/components/site/casestudy-detail-modal";

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activePortfolio, setActivePortfolio] = useState<string | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      <Navbar
        onOpenService={(slug) => setActiveService(slug)}
        onOpenPortfolio={(slug) => setActivePortfolio(slug)}
        onOpenCaseStudy={(slug) => setActiveCaseStudy(slug)}
      />
      <main className="flex-1">
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — Brand marquee */}
        <BrandMarquee />

        {/* 03 — Stats + What We Believe + Values */}
        <StatsValues />

        {/* 04 — Services — click to open service detail */}
        <Services onServiceClick={(slug) => setActiveService(slug)} />

        {/* 05 — Work showcase — click to open portfolio detail */}
        <WorkShowcase onWorkClick={(slug) => setActivePortfolio(slug)} />

        {/* 06 — Final call to action */}
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
        onOpenPortfolio={(slug) => {
          setActiveService(null);
          setActivePortfolio(slug);
        }}
        onOpenCaseStudy={(slug) => {
          setActiveService(null);
          setActiveCaseStudy(slug);
        }}
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
        onOpenCaseStudy={(slug) => {
          setActivePortfolio(null);
          setActiveCaseStudy(slug);
        }}
      />

      {/* Case study detail page — opens when "Read the full case study" is clicked */}
      <CaseStudyModal
        slug={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onSwitchCaseStudy={(slug) => setActiveCaseStudy(slug)}
        onOpenService={(slug) => {
          setActiveCaseStudy(null);
          setActiveService(slug);
        }}
        onOpenPortfolio={(slug) => {
          setActiveCaseStudy(null);
          setActivePortfolio(slug);
        }}
      />
    </div>
  );
}
