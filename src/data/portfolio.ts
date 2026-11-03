export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Credit {
  role: string;
  name: string;
}

export interface PortfolioDetail {
  slug: string;
  no: string;
  title: string;
  subtitle: string;
  heroImage: string;
  client: string;
  industry: string;
  year: string;
  services: string[];
  serviceSlug: string;
  overviewTitle: string;
  overviewText: string[];
  gallery: GalleryImage[];
  credits: Credit[];
  caseStudyLink: string;
  relatedTitle: string;
  ctaTitle: string;
}

export const portfolioDetails: PortfolioDetail[] = [
  {
    slug: "aurora-goods",
    no: "01",
    title: "Aurora Goods",
    subtitle: "Catalog system for 500 SKUs of D2C skincare",
    heroImage: "/images/portfolio-aurora-1.jpg",
    client: "Aurora Goods",
    industry: "D2C Skincare",
    year: "2025",
    services: ["E-commerce Catalog Optimization", "Color Standardization Protocol"],
    serviceSlug: "ecommerce",
    overviewTitle: "A catalog that scaled with the brand",
    overviewText: [
      "Aurora Goods came to us with a catalog of 500 SKUs spread across three marketplaces and their own DTC store. Every product photo was shot by a different photographer, in different lighting, with different backgrounds. The result was a catalog that looked chaotic and converted poorly — customers couldn't tell if two products were from the same brand.",
      "We rebuilt the entire catalog from scratch. A 200-square-meter studio was set up with locked lighting, a consistent style guide, and a retouching pipeline that could handle 50 SKUs per week. Every product was re-photographed on white, lifestyle, and detail angles, then retouched to a single color standard.",
      "Within two months of launch, Aurora's conversion rate was up 34%, their ad spend was working harder, and their customer service tickets about 'product doesn't match photo' had dropped to near zero. The catalog system we built is now used for every new product launch — no photographer or retoucher needed from their side.",
    ],
    gallery: [
      { src: "/images/portfolio-aurora-2.jpg", alt: "Aurora Goods product photography studio setup", caption: "Studio setup — locked lighting for 500 SKUs" },
      { src: "/images/portfolio-aurora-3.jpg", alt: "Aurora Goods white background product shots", caption: "White background shots — consistent across every SKU" },
      { src: "/images/portfolio-aurora-4.jpg", alt: "Aurora Goods lifestyle product photography", caption: "Lifestyle shots — bathroom and vanity scenes" },
      { src: "/images/portfolio-aurora-5.jpg", alt: "Aurora Goods detail and macro photography", caption: "Detail shots — texture and packaging close-ups" },
      { src: "/images/portfolio-aurora-6.jpg", alt: "Aurora Goods catalog layout and listing design", caption: "Catalog layout — optimized for mobile scroll" },
      { src: "/images/portfolio-aurora-7.jpg", alt: "Aurora Goods color correction and retouching workflow", caption: "Retouching workflow — one click, 500 SKUs" },
      { src: "/images/portfolio-aurora-8.jpg", alt: "Aurora Goods final marketplace listing", caption: "Final listing — Amazon, Shopify, and DTC synced" },
    ],
    credits: [
      { role: "Creative Director", name: "Maria Chen" },
      { role: "Lead Photographer", name: "David Park" },
      { role: "Retoucher", name: "Lena Voss" },
      { role: "Copywriter", name: "James Holloway" },
    ],
    caseStudyLink: "#contact-page",
    relatedTitle: "Related projects",
    ctaTitle: "Want a catalog that sells like this?",
  },

  {
    slug: "maison-noir",
    no: "02",
    title: "Maison Noir",
    subtitle: "Color protocol across 12 touchpoints for luxury fashion",
    heroImage: "/images/portfolio-maison-1.jpg",
    client: "Maison Noir",
    industry: "Luxury Fashion",
    year: "2025",
    services: ["Color Standardization Protocol", "E-commerce Catalog Optimization"],
    serviceSlug: "color",
    overviewTitle: "One black, every surface",
    overviewText: [
      "Maison Noir is a luxury fashion house where black isn't just a color — it's the brand. But their black looked different on Instagram, in their print lookbook, on their e-commerce store, and on the physical product. Customers were returning items because 'the color doesn't match the photo.' For a brand built on a single color, this was an existential problem.",
      "We audited every place the brand color appeared — 12 touchpoints from social media to packaging to in-store displays. We built a master palette with Pantone references, ICC profiles for every output, and calibrated every monitor, printer, and photographer in the supply chain.",
      "The result: color-related returns dropped 92% in the first quarter. The print lookbook now matches the website, which matches the product, which matches the packaging. Maison Noir's black is now the same black everywhere — exactly what a luxury brand demands.",
    ],
    gallery: [
      { src: "/images/portfolio-maison-2.jpg", alt: "Maison Noir color audit across touchpoints", caption: "Color audit — 12 touchpoints mapped" },
      { src: "/images/portfolio-maison-3.jpg", alt: "Maison Noir Pantone color swatches", caption: "Master palette — Pantone-locked black" },
      { src: "/images/portfolio-maison-4.jpg", alt: "Maison Noir ICC profile calibration", caption: "ICC profiles — screen to print to product" },
      { src: "/images/portfolio-maison-5.jpg", alt: "Maison Noir monitor calibration setup", caption: "Calibration — every monitor, every printer" },
      { src: "/images/portfolio-maison-6.jpg", alt: "Maison Noir print lookbook color matching", caption: "Print lookbook — matching the screen exactly" },
      { src: "/images/portfolio-maison-7.jpg", alt: "Maison Noir e-commerce color consistency", caption: "E-commerce — product matches the physical item" },
      { src: "/images/portfolio-maison-8.jpg", alt: "Maison Noir packaging color verification", caption: "Packaging — verified on the actual material" },
    ],
    credits: [
      { role: "Color Director", name: "James Voss" },
      { role: "Color Scientist", name: "Dr. Anika Patel" },
      { role: "Print Specialist", name: "Tomas Reinhardt" },
      { role: "Photographer", name: "Sofia Lindgren" },
    ],
    caseStudyLink: "#contact-page",
    relatedTitle: "Related projects",
    ctaTitle: "Want color that's consistent everywhere?",
  },

  {
    slug: "echo-motors",
    no: "03",
    title: "ECHO Motors",
    subtitle: "CGI launch film for an EV that didn't exist yet",
    heroImage: "/images/portfolio-echo-1.jpg",
    client: "ECHO Motors",
    industry: "Automotive / EV",
    year: "2024",
    services: ["Virtual Production & CGI Studio", "Color Standardization Protocol"],
    serviceSlug: "cgi",
    overviewTitle: "A car launch with no physical car",
    overviewText: [
      "ECHO Motors was launching their first electric vehicle, but the physical prototype wasn't ready. The marketing team had 8 weeks to produce a launch film, and there was no car to film. Traditional production would have meant waiting months for the prototype, then scheduling a shoot with a crew, location, and weather risk.",
      "We built the entire car in CGI — a photoreal 3D model with every detail, from the headlights to the stitching on the seats. Using our LED volume virtual production stage, we shot real-time environments: desert highways, city nights, mountain passes. The car was composited into every scene in real-time.",
      "The launch film was delivered on time, at 60% of the cost of a physical shoot, with zero weather risk. When the physical car was finally revealed at the auto show, customers said the CGI looked 'exactly like the real thing' — which was the point. ECHO now uses the 3D assets for every campaign, AR experiences, and their website configurator.",
    ],
    gallery: [
      { src: "/images/portfolio-echo-2.jpg", alt: "ECHO Motors CGI car 3D model wireframe", caption: "3D model — wireframe to photoreal" },
      { src: "/images/portfolio-echo-3.jpg", alt: "ECHO Motors virtual production LED volume stage", caption: "LED volume — real-time environments" },
      { src: "/images/portfolio-echo-4.jpg", alt: "ECHO Motors CGI desert highway scene", caption: "Desert highway — composited in real-time" },
      { src: "/images/portfolio-echo-5.jpg", alt: "ECHO Motors CGI city night scene", caption: "City night — neon reflections on the car" },
      { src: "/images/portfolio-echo-6.jpg", alt: "ECHO Motors CGI detail shots", caption: "Detail shots — headlights, wheels, interior" },
      { src: "/images/portfolio-echo-7.jpg", alt: "ECHO Motors color grading suite", caption: "Color grade — matching the brand palette" },
      { src: "/images/portfolio-echo-8.jpg", alt: "ECHO Motors final launch film frame", caption: "Final frame — launched on time, under budget" },
    ],
    credits: [
      { role: "CGI Director", name: "Daniel Park" },
      { role: "3D Lead", name: "Yuki Tanaka" },
      { role: "Virtual Production", name: "Marcus Brandt" },
      { role: "Colorist", name: "Elena Rossi" },
    ],
    caseStudyLink: "#contact-page",
    relatedTitle: "Related projects",
    ctaTitle: "Want to launch without a physical product?",
  },

  {
    slug: "agency-collective",
    no: "04",
    title: "Agency Collective",
    subtitle: "Embedded white-label team for 200+ assets across 6 clients",
    heroImage: "/images/portfolio-agency-1.jpg",
    client: "Agency Collective",
    industry: "Creative Agency",
    year: "2024",
    services: ["White-Label Agency Extension", "E-commerce Catalog Optimization"],
    serviceSlug: "whitelabel",
    overviewTitle: "An invisible studio behind a growing agency",
    overviewText: [
      "Agency Collective was winning more pitches than they could staff. They had a small core team of strategists and creatives, but couldn't handle the production volume — design, development, and motion work for 6 concurrent clients. Hiring full-time senior staff was too risky with fluctuating project flow, and freelancers were inconsistent.",
      "We embedded as their white-label production team. A dedicated producer learned their clients, their standards, and their workflow. We started with a 4-week pilot project, then scaled to handle design production, web development, and motion graphics across all 6 clients. Every deliverable shipped under Agency Collective's brand — their clients never knew we existed.",
      "In 12 months, Agency Collective doubled their client base without hiring a single full-time person. They shipped 200+ assets through our team, won 3 new retainer clients, and their profit margins improved because they weren't carrying idle capacity between projects. We're now their permanent production backend.",
    ],
    gallery: [
      { src: "/images/portfolio-agency-2.jpg", alt: "Agency Collective design production workspace", caption: "Design production — brand systems and collateral" },
      { src: "/images/portfolio-agency-3.jpg", alt: "Agency Collective web development builds", caption: "Web development — Next.js and Webflow builds" },
      { src: "/images/portfolio-agency-4.jpg", alt: "Agency Collective motion graphics work", caption: "Motion graphics — social cutdowns and brand films" },
      { src: "/images/portfolio-agency-5.jpg", alt: "Agency Collective client dashboard and workflow", caption: "Workflow — integrated into their PM tools" },
      { src: "/images/portfolio-agency-6.jpg", alt: "Agency Collective multi-client asset management", caption: "Asset management — 6 clients, one system" },
      { src: "/images/portfolio-agency-7.jpg", alt: "Agency Collective quality assurance process", caption: "Quality assurance — calibrated to their standards" },
      { src: "/images/portfolio-agency-8.jpg", alt: "Agency Collective final client deliverables", caption: "Final delivery — under their brand, not ours" },
    ],
    credits: [
      { role: "Producer", name: "Sarah Lindgren" },
      { role: "Design Lead", name: "Alex Morgan" },
      { role: "Dev Lead", name: "Raj Kumar" },
      { role: "Motion Lead", name: "Nina Petrov" },
    ],
    caseStudyLink: "#contact-page",
    relatedTitle: "Related projects",
    ctaTitle: "Want production capacity without the overhead?",
  },
];
