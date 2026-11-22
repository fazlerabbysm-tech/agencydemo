import type { ServiceFaqItem } from "@/components/services/service-shell";

export const DIGITAL_MARKETING_FAQS: ServiceFaqItem[] = [
  {
    q: "How much does digital marketing cost with Katella Digital?",
    a: "It depends on how many channels you run, your monthly creative volume, and the depth of analytics required. After an audit we propose a written scope and fixed monthly retainer — always quoted on a separate line from your ad spend, so scaling your media budget never quietly inflates our agency fee.",
  },
  {
    q: "Which channels do you manage?",
    a: "Technical & organic SEO, Local SEO (Google Maps), Google Ads, Paid Social (Meta, TikTok, LinkedIn, YouTube), Content Marketing, AI Search Optimization (GEO), and Conversion Rate Optimization — sequenced around your buying cycle rather than turned on all at once.",
  },
  {
    q: "How soon will we see measurable pipeline results?",
    a: "Paid search and paid social generate qualified leads within the first 2 to 4 weeks once tracking and landing pages are live. Organic SEO, Local SEO, and AI Search (GEO) compound meaningfully between months 3 and 6. We report monthly against qualified leads, CAC, and revenue.",
  },
  {
    q: "What do we receive every month, and how do you report?",
    a: "A prioritized monthly sprint plan, full execution across campaigns, landing pages, creative testing, and technical fixes, plus one consolidated executive report judging paid, organic, and content on the same unit economics: cost per qualified opportunity and return on spend.",
  },
  {
    q: "Who owns our ad accounts, analytics, domains, and creative assets?",
    a: "You do — 100% from day one. Every Google Ads, Meta, GA4, Tag Manager, and CRM account sits under your company billing and legal ownership. We work on delegated partner access, and every landing page, creative asset, and data pipeline stays yours permanently.",
  },
  {
    q: "Is there a long-term lock-in contract?",
    a: "No rigid 12-month lock-ins. We agree on a realistic initial window matched to the channels we are running (shorter for paid media, a fair compounding window for SEO), with clear notice terms in writing and zero silent auto-renewals.",
  },
  {
    q: "Can Katella Digital work alongside our internal marketing team?",
    a: "Yes — that is often our strongest partnership model. We can own specialized tracks like paid media, technical SEO, and server-side attribution while your internal team owns brand voice and product launches, with clear swimlanes and one unified dashboard.",
  },
  {
    q: "Why combine SEO, Paid Media, and AI Search (GEO) under one agency?",
    a: "Because buyers don't stay inside one channel. Search query data from Google Ads reveals the exact commercial keywords your SEO pages should own; winning landing pages lift Quality Score and organic conversion rates simultaneously; and consistent authority signals earn citations inside ChatGPT and Google AI Overviews.",
  },
  {
    q: "Which cities and industries do you serve?",
    a: "We are headquartered in Anaheim, Orange County, serving B2B, healthcare, home services, hospitality, SaaS, and e-commerce brands across Irvine, Newport Beach, Costa Mesa, Los Angeles, San Diego, and nationwide across the United States.",
  },
];

export const LOCAL_SEO_FAQS: ServiceFaqItem[] = [
  {
    q: "We appear on Google Maps when we search inside our office, but not 3 miles away — why?",
    a: "Because proximity is a core ranking factor in Google's local algorithm: Google answers from where the searcher is standing, not from your front door. Checking once from your desk tells you almost nothing. We measure across a multi-point geo-grid covering your whole catchment so you see the exact radius each branch holds and where it fades — then widen it with category optimization, review velocity, and neighborhood pages.",
  },
  {
    q: "How long before a new location shows up in the Google Map Pack?",
    a: "Verification sets the floor: video or phone verification typically clears within days to two weeks. Once live, primary/secondary category, service list, and photo fixes are re-evaluated quickly, while sustained Map Pack rank is driven by steady real review velocity, consistent NAP citations, and removing competing duplicate listings.",
  },
  {
    q: "We have offices in Anaheim, Irvine, and Newport Beach — one Google Business Profile or one per location?",
    a: "Always one verified profile per physical location, each backed by its own dedicated branch landing page, local phone number, address, and LocalBusiness schema. A single listing stretched across three cities only earns proximity near one of them and cannot accumulate branch-specific reviews.",
  },
  {
    q: "We are a service-area business (no walk-in showroom) — can we still rank on Google Maps?",
    a: "Yes. You verify a real staffed address, hide the street address on the public profile, and define the exact cities or ZIP codes you genuinely serve. Avoid drawing an oversized territory — overly wide service areas dilute relevance instead of expanding reach.",
  },
  {
    q: "Can you remove an unfair or fake 1-star Google review?",
    a: "When a review violates Google policy (spam, fake competitor attack, off-topic abuse), we document evidence, flag it, and escalate through Google Business Profile support. Genuine customer complaints cannot be deleted — the winning play is a calm, constructive public response plus a steady stream of authentic 5-star reviews that outranks it.",
  },
];

export const SEO_FAQS: ServiceFaqItem[] = [
  {
    q: "What does an SEO agency actually do every month?",
    a: "Three compounding tracks: fix technical blockers so Google can crawl, render, and index every revenue page cleanly; publish and optimize commercial and informational pages mapped to real buyer queries; and build credible digital PR and internal link authority so your pages outrank equally relevant competitors.",
  },
  {
    q: "How long does SEO take to show measurable results?",
    a: "Technical crawl, indexation, and Core Web Vitals fixes typically lift impressions within weeks. Meaningful non-branded ranking and inbound lead gains compound between months 3 and 6, while highly contested national commercial terms continue compounding through months 6 to 12. If you need immediate volume this quarter, we pair SEO with Google Ads so paid search carries the first 90 days.",
  },
  {
    q: "What is the difference between national SEO, Local SEO, and Google Ads?",
    a: "National organic SEO (this page) earns the unpaid blue-link results anyone searches across California and the US. Local SEO competes specifically for Google Maps and near-me 3-pack visibility for physical branches. Google Ads purchases the sponsored slots above both — separate budget, separate playbook.",
  },
  {
    q: "Why do URL hierarchy and internal linking matter so much for SEO?",
    a: "Search engines determine topical authority from site structure, not isolated blog posts. Organizing services into clean parent-to-child silos (for example /digital-marketing/seo and /digital-marketing/local-seo) with intentional internal links prevents keyword cannibalization and channels link equity directly to your highest-converting commercial pages.",
  },
  {
    q: "How much does SEO cost, and can anyone guarantee #1 rankings?",
    a: "Retainers depend on site size, technical debt, content velocity, and keyword competition — quoted as a clear fixed monthly scope after an audit. No ethical agency guarantees a specific #1 spot because nobody controls Google's algorithm; what we commit to is transparent monthly execution, Search Console and GA4 attribution, and a direct line from shipped work to organic pipeline.",
  },
];

export const GOOGLE_ADS_FAQS: ServiceFaqItem[] = [
  {
    q: "Why do most Google Ads accounts waste 30–50% of their budget?",
    a: "Three common leaks: broad-match keywords left unguarded without aggressive negative keyword lists, Performance Max campaigns quietly cannibalizing branded searches you already own organically, and conversion tracking counting low-value pageviews instead of qualified calls and CRM opportunities.",
  },
  {
    q: "How much monthly ad spend do we need for Google Ads to work?",
    a: "It depends on your industry's cost-per-click and close rate. We reverse-engineer a realistic starting budget from your average CPC and target lead volume so campaigns collect enough conversion signals to optimize cleanly — rather than starving the algorithm.",
  },
  {
    q: "Should we run Google Ads or SEO first?",
    a: "If you need qualified pipeline this month and buyers already search for your service, start with Google Ads to capture existing demand and validate offer messaging immediately — then feed those winning search terms directly into your SEO roadmap so you stop paying for every click long-term.",
  },
  {
    q: "Do you build dedicated landing pages for Google Ads?",
    a: "Yes. Sending paid clicks to a generic homepage destroys Quality Score and inflates CPC. We design fast, message-matched landing pages aligned to each ad group so conversion rates double while cost per click drops.",
  },
  {
    q: "Do we keep ownership of our Google Ads account and conversion history?",
    a: "Always 100%. Your Google Ads account, billing profile, negative keyword libraries, and historical conversion data remain strictly in your company's name.",
  },
];

export const PERFORMANCE_MARKETING_FAQS: ServiceFaqItem[] = [
  {
    q: "How is performance marketing different from running Google Ads alone?",
    a: "Google Ads is one channel capturing existing search demand. Performance marketing manages one unified acquisition budget across Google, Meta, TikTok, YouTube, and LinkedIn — reallocating dollars weekly to whichever channel delivers the lowest deduplicated customer acquisition cost.",
  },
  {
    q: "How do you decide when to scale a channel and when to cap it?",
    a: "Pure unit economics, never hype. We calculate your target CPA from gross margin and the payback period your cash flow supports, then compare each channel against that ceiling once it has exited its learning phase. Repeat-purchase segments support a higher ceiling; one-time purchase segments stay strictly capped.",
  },
  {
    q: "Our ad platforms report different conversion totals — which dashboard is right?",
    a: "None of them in isolation. Every platform claims credit for any conversion it touched, so four dashboards routinely double- or quadruple-count the exact same order. We wire server-side CAPI tracking deduplicated against your CRM or order ledger, and run holdout lift checks to prove real incrementality.",
  },
  {
    q: "How much creative testing is required to keep paid social profitable?",
    a: "Creative fatigue kills Meta and TikTok performance faster than bidding tweaks ever will. We ship fresh hooks, UGC angles, static comparison cards, and short vertical video variations every week so winning angles scale while fatigued ads rotate out smoothly.",
  },
  {
    q: "How soon will we know whether performance campaigns are working?",
    a: "Paid channels return directional signal within days and actionable acquisition metrics within 2 to 4 weeks once learning windows stabilize. You get a short weekly pacing note plus a revenue-back executive report every month.",
  },
];

export const CONTENT_MARKETING_FAQS: ServiceFaqItem[] = [
  {
    q: "What does a content marketing agency actually deliver each month?",
    a: "A prioritized topic map, editorial briefs, and published revenue-focused assets — pillar pages, cluster guides, comparison pieces, lead magnets, and conversion landing pages — complete with schema, internal linking, and monthly refresh cycles. Never a dusty PDF strategy folder with nothing shipped.",
  },
  {
    q: "Why do you build topic clusters instead of standalone blog posts?",
    a: "Search engines and AI answer engines reward topical depth, not random disconnected posts. Mapping one pillar page surrounded by supporting sub-questions, comparisons, objections, and case proof with clean bidirectional internal links prevents keyword cannibalization and builds unmistakable authority.",
  },
  {
    q: "How much of our internal team's time does content production take?",
    a: "Roughly two hours a month. We run one focused 40-minute subject-matter interview per cluster with your founder, strategist, or sales lead, then handle briefing, writing, editing, design, internal linking, and publishing end to end.",
  },
  {
    q: "How long before content marketing generates inbound pipeline?",
    a: "Early cluster pages index within weeks, while organic search compounding accelerates once a full cluster of 8 to 12 interconnected pieces is live. Sales enablement guides, comparisons, and lead magnets pay back immediately because your paid ads and sales reps can deploy them from day one.",
  },
  {
    q: "How do you avoid generic AI-sounding filler copy?",
    a: "Every piece starts from real sales-call objections, customer search phrasing, and expert interviews — never recycled top-10 search summaries. Every draft goes through a human editor checking voice, commercial specificity, and proof before it ever ships.",
  },
];

export const AI_SEARCH_GEO_FAQS: ServiceFaqItem[] = [
  {
    q: "What is Generative Engine Optimization (GEO) and how is it different from traditional SEO?",
    a: "Traditional SEO focuses on ranking web pages in Google's classic blue-link list. GEO structures your brand entity, crawler accessibility, schema graph, direct-answer content, and third-party corroboration so AI answer engines — ChatGPT, Perplexity, Claude, and Google AI Overviews — accurately cite and recommend your company when buyers ask for solutions.",
  },
  {
    q: "How do I check whether my business currently appears in ChatGPT or Perplexity?",
    a: "We benchmark 30+ high-intent buyer prompts across ChatGPT, Perplexity, and Google AI Overviews — measuring brand mention share, citation accuracy, competitor recommendations, and where AI models pull outdated or missing facts about your services.",
  },
  {
    q: "Do we need to abandon traditional SEO to invest in AI Search (GEO)?",
    a: "No — GEO builds directly on top of clean technical SEO. AI retrieval models rely heavily on crawlable server-rendered HTML, clear hierarchical URLs, authoritative content clusters, and high-trust external citations. Doing both together compounds visibility across Google Search and AI assistants.",
  },
  {
    q: "Why do some well-designed websites remain invisible to AI crawlers?",
    a: "Common technical blockers include robots.txt rules accidentally disallowing OAI-SearchBot or PerplexityBot, heavy client-side JavaScript that hides core copy from non-rendering bots, inconsistent business names across directories, and marketing pages filled with vague slogans instead of verifiable facts and pricing criteria.",
  },
  {
    q: "How quickly can GEO improvements change AI recommendations?",
    a: "Real-time search-grounded engines like Perplexity, ChatGPT Search, and Google AI Overviews re-crawl clean pages and structured data within days to weeks. Broader brand authority and third-party citation consensus compound steadily over 60 to 120 days.",
  },
];

export const SOCIAL_MEDIA_FAQS: ServiceFaqItem[] = [
  {
    q: "Do you handle everything from strategy and Reels production to daily posting?",
    a: "Yes — A to Z. We build the monthly editorial calendar, script and produce short-form video, carousels, and motion assets, design a cohesive grid, schedule across platforms, manage daily comments and DMs, and report monthly against reach, saves, and inbound inquiries.",
  },
  {
    q: "Which social platforms should our business focus on?",
    a: "Two or three channels done with real creative craft beat five neglected accounts every time. Consumer, hospitality, and lifestyle brands thrive on Instagram, TikTok, and YouTube Shorts; B2B, healthcare, and high-ticket services win on LinkedIn, Instagram, and YouTube.",
  },
  {
    q: "How do you turn social followers into actual leads or customers?",
    a: "We balance trust-building authority and short-form reach with clear conversion pathways — DM keyword triggers, optimized link-in-bio landing pages, retargeting pools piped directly into paid social, and social proof highlights that close hesitant buyers checking your profile before booking.",
  },
  {
    q: "How far in advance do we review and approve the content calendar?",
    a: "You review a complete visual grid, video cuts, and captions 10 to 14 days ahead of each month in one clean approval workspace — leaving 20% flexible room for timely industry trends and behind-the-scenes moments.",
  },
  {
    q: "Can you pair organic social management with paid social amplification?",
    a: "Absolutely. Organic creative tests tell us which hooks and Reels stop the scroll for free — then our Performance Marketing team puts paid budget directly behind your proven top 10% posts.",
  },
];

export const BRANDING_FAQS: ServiceFaqItem[] = [
  {
    q: "How much does a full branding or rebranding project cost?",
    a: "It depends on scope — a focused logo system, a complete visual identity + brand book, or end-to-end positioning, naming, and rollout. After a brief alignment call we deliver a fixed-scope quote with clear milestones and zero hourly surprises.",
  },
  {
    q: "What does a complete brand identity engagement include?",
    a: "Positioning and verbal messaging, logo lockups, color system with accessible contrast pairings, typography hierarchy, iconography, photography & motion direction, editable templates (pitch decks, social, stationery), and a comprehensive brand guidelines book.",
  },
  {
    q: "How long does a branding project take from kickoff to handover?",
    a: "Focused logo and visual refresh projects run 3 to 4 weeks; comprehensive brand strategy, identity systems, and multi-channel rollout toolkits typically run 6 to 8 weeks.",
  },
  {
    q: "Do we receive all editable source files and full copyright ownership?",
    a: "Yes — 100% full ownership upon final handover, including vector master files (SVG, AI, EPS, PDF), Figma UI design systems, editable presentation & social templates, and complete digital brand guidelines.",
  },
  {
    q: "Can you rebrand an established business without losing existing equity?",
    a: "Yes. Every rebrand begins by auditing what customers already recognize and trust so we preserve equity while modernizing clarity, visual hierarchy, and digital legibility — rolling out cleanly across web, ads, signage, and print.",
  },
  {
    q: "Why invest in brand positioning before scaling paid ads?",
    a: "Because weak, generic branding forces you to bid harder for every click. Distinctive positioning and visual authority lift ad CTR, raise landing-page trust, justify stronger margins, and lower blended CAC across every marketing channel.",
  },
];

export const BRAND_STRATEGY_FAQS: ServiceFaqItem[] = [
  {
    q: "What concrete deliverables do we get from a brand strategy engagement?",
    a: "A crisp, operational Brand Strategy Playbook covering Ideal Customer Profiles (ICPs), competitive whitespace mapping, single-minded positioning statement, value proposition architecture, messaging matrix by buyer objection, verbal tone of voice, and ready-to-deploy website & ad copy angles.",
  },
  {
    q: "Why do brand strategy before redesigning a website or running paid ads?",
    a: "Design and media amplify whatever message you put into them. If your positioning sounds identical to every competitor, a prettier website or larger ad budget only buys more price-shopping. Locking sharp positioning first multiplies conversion across SEO, landing pages, and paid social.",
  },
  {
    q: "How long does brand strategy take?",
    a: "A focused positioning sprint runs 2 to 3 weeks from stakeholder & customer discovery to signed-off messaging architecture — fast enough to unblock upcoming website builds or campaign launches.",
  },
  {
    q: "Do you interview our real customers or just internal executives?",
    a: "Both. Internal teams often describe features; customers describe the exact frustration that triggered their search and why they chose you. Real buyer language becomes your highest-converting headline copy.",
  },
  {
    q: "Can brand strategy transition directly into visual identity and web design?",
    a: "Yes — our strategists work directly beside our Brand Identity, Logo Design, and Web Engineering leads so zero strategic nuance gets lost in handoff.",
  },
];

export const BRAND_IDENTITY_FAQS: ServiceFaqItem[] = [
  {
    q: "What makes a full brand identity system different from buying just a logo?",
    a: "A logo is one signature; a brand identity is the complete visual operating system — accessible color pairings, typography scale, spacing grid, photography art direction, iconography, social & pitch deck templates, and documented guidelines so your brand looks unmistakable even when the logo isn't in frame.",
  },
  {
    q: "How do you present visual directions during the project?",
    a: "We show 2 to 3 distinct visual directions applied to real touchpoints — a website hero, a social post, a pitch slide, and a signage/collateral mockup — never abstract moodboards of random color chips. You choose a living system, not a favorite swatch.",
  },
  {
    q: "Are the collateral templates editable by our internal marketing team?",
    a: "Yes. Every pitch deck, social template, proposal, and letterhead ships as clean, editable Figma, Canva, PowerPoint/Google Slides, or Adobe master templates — never locked flattened images.",
  },
  {
    q: "Do you stay involved during real-world rollout after guidelines are delivered?",
    a: "Yes — rollout support is built into step 5 of our method. Real-world edge cases appear during your first signage print, trade show booth, or web release, and staying beside your team ensures zero brand drift.",
  },
  {
    q: "Can your identity system be wired straight into a Figma UI kit for web development?",
    a: "Absolutely. Our identity designers build WCAG-accessible color tokens, type scales, and spacing variables that drop seamlessly into our UI/UX and Next.js engineering workflows.",
  },
];

export const LOGO_DESIGN_FAQS: ServiceFaqItem[] = [
  {
    q: "Why do you test every logo down to 16 pixels?",
    a: "Because your logo spends most of its modern life tiny — inside a browser favicon, a mobile app icon, an Instagram avatar, or embroidered onto a uniform. Intricate marks that only look good on a giant slide deck collapse into an unreadable smudge at 16px.",
  },
  {
    q: "How many logo concepts and revision rounds are included?",
    a: "We present 2 to 3 genuinely distinct strategic directions — never 12 rushed clip-art variations — shown in context across dark/light surfaces, favicons, and real touchpoints, followed by focused refinement rounds until every curve and optical spacing detail is locked.",
  },
  {
    q: "Which file formats do we receive upon completion?",
    a: "Every production format you'll ever need: editable master vector files (SVG, AI, EPS), print-ready CMYK/Pantone PDFs, transparent web PNGs, dark/light/monochrome lockups (horizontal, stacked, icon-only), favicon kit, and a concise logo usage guide.",
  },
  {
    q: "Can you modernize our existing logo without losing brand recognition?",
    a: "Yes. Logo evolutions refine geometry, balance stroke weights, fix legibility at small sizes, and pair sharper custom typography while keeping the unmistakable equity your customers already trust.",
  },
  {
    q: "What if we also need colors, typography, and templates around the logo?",
    a: "You can pair Logo Design directly with our full Brand Identity System so your new mark ships with accessible color palettes, type scales, and editable pitch/social templates.",
  },
];

export const MOTION_GRAPHICS_FAQS: ServiceFaqItem[] = [
  {
    q: "What types of motion graphics convert best for digital marketing?",
    a: "Hook-engineered 15–30 second paid social ad variations, crisp SaaS/product UI explainers, kinetic typography highlights, and modular logo stingers — designed to communicate value inside the first 2 seconds even with sound muted.",
  },
  {
    q: "Do you deliver vertical, square, and widescreen cuts from the same project?",
    a: "Yes. Every campaign motion package is designed with safe-zone framing from the storyboard up so you receive 9:16 vertical (Reels/TikTok/Shorts), 1:1/4:5 feed, and 16:9 web/YouTube masters without awkward cropping.",
  },
  {
    q: "Can you build lightweight Lottie or SVG animations for our website?",
    a: "Yes. For web and mobile apps, we export ultra-lightweight Lottie JSON and vector micro-interactions that stay silky at 60fps without hurting Core Web Vitals or page speed.",
  },
  {
    q: "How long does a typical motion graphics explainer or ad pack take?",
    a: "Paid social motion packs ship in 7 to 10 business days; bespoke 60-second product explainers and full brand motion toolkits typically run 2 to 4 weeks from script to sound-mixed master.",
  },
  {
    q: "Do you handle scripting, storyboarding, voiceover, and sound design?",
    a: "Yes — complete end-to-end production. You approve the script and styleframes before animation begins, so pacing, visual language, and brand voice are locked with zero surprises.",
  },
];

export const WEB_DEV_FAQS: ServiceFaqItem[] = [
  {
    q: "Why do you build marketing sites on Next.js instead of bloated page-builder themes?",
    a: "Page-builder themes load megabytes of unused JavaScript and fragile plugins that tank mobile Core Web Vitals, hurt SEO rankings, and break after updates. Static & server-rendered Next.js sites load in under a second, score 95–100 on Lighthouse, host for near-zero on Vercel Edge CDN, and convert significantly more paid traffic.",
  },
  {
    q: "Do we own the code, domain, hosting, and CMS accounts at launch?",
    a: "100% yes. Your GitHub repository, domain registrar, Vercel/cloud hosting, and analytics properties stay strictly under your company's ownership — zero proprietary agency lock-in.",
  },
  {
    q: "Is technical SEO built in from day one, or billed as an add-on later?",
    a: "Built in from the first wireframe. Every site ships with semantic headings, hierarchical URLs, structured JSON-LD schema, XML sitemaps, 301 redirect maps from your legacy URLs, and clean OpenGraph metadata.",
  },
  {
    q: "How long does a custom website or web app take to ship?",
    a: "High-converting marketing websites typically launch in 4 to 6 weeks; custom e-commerce storefronts and interactive web applications run 6 to 10 weeks with weekly staging previews.",
  },
  {
    q: "Can you integrate our website directly with HubSpot, Salesforce, Stripe, or Brevo?",
    a: "Yes. Forms, quote calculators, booking flows, UTM attribution, server-side GA4 events, and CRM webhooks are wired and end-to-end tested before launch day.",
  },
];

export const UI_UX_FAQS: ServiceFaqItem[] = [
  {
    q: "What makes conversion-focused UI/UX different from standard visual web design?",
    a: "Pretty layouts that bury the offer or confuse mobile users lose half your ad spend. We design every screen from funnel analytics, user-flow friction audits, visual hierarchy, and thumb-zone mobile usability so clarity drives measurable conversion lift.",
  },
  {
    q: "Do we get an interactive Figma prototype before engineering starts?",
    a: "Always. You click through every key desktop and mobile screen, navigation flow, form state, and edge case in Figma so feedback happens when changes take minutes — not mid-code.",
  },
  {
    q: "Do you deliver a reusable design system or just one-off pages?",
    a: "Every project includes a clean Figma component library with color variables, typography tokens, responsive grid rules, and interactive hover/focus/error states so your developers can ship future pages effortlessly.",
  },
  {
    q: "Can you redesign just our high-spend paid ad landing pages?",
    a: "Yes. Focused CRO landing page sprints typically ship in 1 to 2 weeks and pair directly with our Google Ads and Performance Marketing programs.",
  },
  {
    q: "Do you handle the frontend development after UI/UX approval?",
    a: "Yes — our in-house Next.js and React engineers work directly inside the same Figma workspace, or we can hand off developer-ready specs cleanly to your internal engineering team.",
  },
];

export const ECOMMERCE_FAQS: ServiceFaqItem[] = [
  {
    q: "How do you decide between Shopify, Headless Next.js, and WooCommerce?",
    a: "We choose strictly against SKU count, custom bundling/pricing logic, ERP integration needs, and who manages day-to-day merchandising — explaining both launch cost and 3-year maintenance cost honestly before writing code.",
  },
  {
    q: "How do you increase Average Order Value (AOV) and checkout conversion?",
    a: "Slide-out carts with smart free-shipping progress bars, one-click bundle/addon upsells, sticky mobile Add-to-Cart bars, Apple Pay / Shop Pay express checkout, sub-second product images, and clear shipping & return guarantees right beside the buy button.",
  },
  {
    q: "Can you migrate our existing store without losing SEO rankings or order history?",
    a: "Yes. We map every product, collection, and blog URL with strict 301 redirects, preserve structured Product & Review schema, and verify Google Merchant Center feeds so organic and Shopping revenue transition seamlessly.",
  },
  {
    q: "Do you integrate Klaviyo, email/SMS retention flows, and ad pixels?",
    a: "Yes — server-side Meta CAPI, Google Enhanced Conversions, GA4 e-commerce events (view_item → add_to_cart → purchase), and Klaviyo abandoned-cart/post-purchase flows are wired before launch.",
  },
  {
    q: "Can you scale our storefront traffic once it launches?",
    a: "Yes — our Performance Marketing and SEO teams work inside the exact same agency, syncing Shopping feeds, collection SEO, and paid social creative directly to your top-margin SKUs.",
  },
];

export const WEB_APPS_FAQS: ServiceFaqItem[] = [
  {
    q: "What kinds of custom web applications does Katella Digital engineer?",
    a: "Four high-ROI categories: interactive lead-generating ROI & quote calculators embedded right into your marketing funnel, branded client portals with role-based permissions, internal ops/CRM dashboards replacing messy spreadsheets, and lean B2B SaaS MVPs.",
  },
  {
    q: "What tech stack do you recommend for modern web apps?",
    a: "TypeScript end-to-end with Next.js App Router, PostgreSQL or Redis cloud storage, clean REST/webhook integrations (Stripe, HubSpot, Brevo, Salesforce), and automated CI/CD on Vercel or AWS — chosen for speed, maintainability, and easy handoff to any future engineer.",
  },
  {
    q: "How do you keep a web application project on budget and on schedule?",
    a: "We scope v1 strictly around the core user workflows that generate value first, validate every screen via clickable Figma prototypes before coding, and ship weekly staging previews so you inspect real working software every Friday.",
  },
  {
    q: "Do we own 100% of the source code and cloud accounts?",
    a: "Yes — full GitHub repository ownership, documented environment variables, database schema migrations, and zero licensing lock-in.",
  },
  {
    q: "Can you connect our web application directly to our marketing CRM and billing?",
    a: "Yes. Every calculator submission, client onboarding step, or subscription upgrade can sync directly into Stripe, HubSpot, Salesforce, or your custom admin dashboard.",
  },
];

export const MOBILE_APPS_FAQS: ServiceFaqItem[] = [
  {
    q: "Should we build Cross-Platform (React Native / Flutter) or Native (Swift / Kotlin)?",
    a: "For 90% of commercial, loyalty, booking, and e-commerce apps, React Native or Flutter delivers native 60fps performance on both iOS and Android from one shared codebase — cutting build and ongoing maintenance costs nearly in half. We recommend separate Native codebases only for heavy 3D/AR, custom low-level hardware, or extreme OS-specific workloads.",
  },
  {
    q: "What actually drives the cost of building a mobile app?",
    a: "Five transparent levers: total screens and user roles, whether a custom backend/admin panel is required, third-party integrations (payments, maps, ERP/POS, SMS), single vs dual platform, and bespoke UI animation depth.",
  },
  {
    q: "Do you handle Apple App Store and Google Play Store submission and approval?",
    a: "Yes — complete compliance checklists, TestFlight & Play Console beta testing, App Store Optimization (ASO) screenshots, privacy declarations, and submission management through final approval.",
  },
  {
    q: "Can our mobile app connect to our existing website, Shopify store, or CRM?",
    a: "Yes. We wire shared authentication, real-time order sync, Apple Pay / Google Pay, push notifications, and analytics directly into your existing web or CRM infrastructure.",
  },
  {
    q: "How do we acquire users once the app launches?",
    a: "Launching in the stores is half the job — our Performance Marketing and ASO teams run targeted app install campaigns across Apple Search Ads, Meta, TikTok, and Google App Campaigns tied directly to in-app retention and LTV.",
  },
];

export const CAMPAIGNS_FAQS: ServiceFaqItem[] = [
  {
    q: "When should a brand run an integrated advertising campaign instead of always-on ads?",
    a: "Integrated campaigns shine around high-stakes moments — product launches, seasonal peaks, regional expansion into Orange County or Los Angeles, rebrand rollouts, or major commercial offers where coordinated video, search, social, and landing pages create unmistakable market momentum.",
  },
  {
    q: "Do you handle both the big creative concept and the media buying?",
    a: "Yes — under one roof. Separating creative agencies from media buyers creates slow handoffs and ads that win awards but fail to convert. Our creative directors and performance buyers build concepts, landing pages, and channel plans together from day one.",
  },
  {
    q: "Which advertising channels can be included in one launch campaign?",
    a: "YouTube, Meta (Instagram/Facebook), TikTok, LinkedIn, Google Search, Connected TV (CTV), programmatic display, and regional outdoor/OOH — sequenced around awareness, retargeting, and bottom-funnel conversion capture.",
  },
  {
    q: "How do you measure an integrated launch campaign's real ROI?",
    a: "Dedicated campaign landing pages, unique UTM taxonomy, branded search lift, direct pipeline attribution inside your CRM, and post-campaign executive wrap-ups separating awareness lift from net closed revenue.",
  },
  {
    q: "How far ahead of a product or seasonal launch should we start?",
    a: "Ideally 4 to 6 weeks ahead — giving enough room for concepting, modular video/motion production, landing page QA, and clean pixel/CRM setup before launch day.",
  },
];

export const VIDEO_PRODUCTION_FAQS: ServiceFaqItem[] = [
  {
    q: "How do you get 20+ ad and social assets out of one single shoot day?",
    a: "Modular pre-production. Before cameras roll, we script a hero narrative plus multiple alternate 3-second opening hooks, objection-answering soundbites, and clean B-roll framed simultaneously for 16:9 widescreen and 9:16 vertical crops — maximizing ROI per production dollar.",
  },
  {
    q: "Are you a traditional film studio, or a marketing-led video production partner?",
    a: "We are a digital marketing agency first. That means every script, hook, pacing cut, and end-card CTA is engineered to lower paid ad CPA, lift landing-page trust, and close sales — not just win film-festival cinematography awards.",
  },
  {
    q: "What types of business videos deliver the fastest sales impact?",
    a: "Three formats consistently outperform everything else: 60-second homepage hero explainers, authentic customer case-study stories that shorten B2B sales cycles, and modular 15–30 second vertical paid ad suites.",
  },
  {
    q: "Do you handle remote founder interviews or on-site shoots across Southern California?",
    a: "Both. We coordinate on-site commercial shoots across Orange County, Los Angeles, and San Diego, plus studio-grade remote executive & client proof productions nationwide.",
  },
  {
    q: "Are captions, color grading, sound mixing, and motion graphics overlays included?",
    a: "Yes — every finished cut ships color-graded, broadcast sound-mixed, styled with crisp motion-graphic callouts, and delivered with both burned-in and SRT captions.",
  },
];

export const CRM_AUTOMATION_FAQS: ServiceFaqItem[] = [
  {
    q: "Why does 5-minute speed-to-lead matter so much for marketing ROI?",
    a: "Lead qualification odds drop dramatically after the first 5 to 15 minutes because buyers submit quotes to 2 or 3 providers at once. Instant CRM routing, SMS/Slack rep alerts, and automated personalized confirmation with a booking link let you win the conversation while competitors are still checking their inbox tomorrow.",
  },
  {
    q: "Which CRMs and email/SMS platforms do you set up and integrate?",
    a: "HubSpot, Salesforce, Pipedrive, GoHighLevel, Klaviyo, Brevo, Resend, and custom Next.js/API lead pipelines — always configured around your actual sales stages rather than bloated default templates.",
  },
  {
    q: "What is closed-loop revenue attribution and why do ad algorithms need it?",
    a: "When a lead enters via Google Ads or Meta, we capture their click ID (GCLID/FBCLID) and UTMs inside your CRM. Once your sales team marks that deal Qualified or Closed-Won, we automatically push that revenue signal back to Google & Meta so Smart Bidding finds more buyers who actually pay — not cheap tire-kickers.",
  },
  {
    q: "Can you automate personalized multi-step follow-ups that stop when someone replies?",
    a: "Yes. We build clean 3- to 5-step email and SMS follow-up workflows that trigger on form submission, missed calls, or unbooked proposals — and automatically halt the moment a prospect replies or books a meeting.",
  },
  {
    q: "Will our team actually understand how to use the CRM after handoff?",
    a: "Yes. Simplicity drives adoption. We strip unused fields, automate manual data entry, build one clean executive pipeline dashboard, and run hands-on training with your sales reps.",
  },
];

