module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/caseStudies.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "caseStudyDetails",
    ()=>caseStudyDetails
]);
const caseStudyDetails = [
    {
        slug: "aurora-goods",
        title: "Aurora Goods: +34% conversion in 8 weeks",
        clientLogo: "/images/casestudy-aurora-logo.png",
        clientName: "Aurora Goods",
        metrics: [
            {
                label: "Conversion rate",
                value: "+34%"
            },
            {
                label: "Page speed",
                value: "3.2s → 1.1s"
            },
            {
                label: "Color-related returns",
                value: "-98%"
            },
            {
                label: "SKUs optimized",
                value: "500"
            }
        ],
        ctaSticky: "Get results like this",
        snapshot: {
            client: "Aurora Goods",
            industry: "D2C Skincare",
            services: [
                "UI/UX Design",
                "Digital Marketing"
            ],
            timeline: "8 weeks · 2025"
        },
        serviceSlug: "ui-ux",
        challengeTitle: "A catalog that was actively losing revenue",
        challengeText: [
            "Aurora Goods had grown from 50 to 500 SKUs in two years, but their catalog hadn't grown with them. Every product had been photographed by a different freelancer, in different lighting, on different backgrounds. The result looked like a marketplace, not a brand.",
            "Their conversion rate had been declining for 6 months despite increasing ad spend. Customer service was fielding daily complaints about products not matching photos. Returns were up 22% year-over-year, with 'color mismatch' cited in 60% of cases.",
            "The team knew the catalog was the problem, but rebuilding 500 SKUs felt impossible. They'd been putting it off for a year."
        ],
        challengeImage: "/images/casestudy-aurora-challenge.jpg",
        approachTitle: "System first, scale second",
        approachText: [
            "We started with a 1-week audit of the top 50 SKUs — analyzing photography style, copy structure, page speed, and conversion data. The audit revealed that inconsistency, not quality, was the core issue. The photos weren't bad; they were just from 12 different photographers.",
            "We designed a single style guide — locked lighting, consistent angles, standardized retouching — and built a retouching pipeline that could handle 50 SKUs per week. Every product would be re-photographed on white, lifestyle, and detail angles.",
            "The key decision was to build the system before touching a single product. By week 2, the pipeline was ready. By week 8, all 500 SKUs were live."
        ],
        approachImage: "/images/casestudy-aurora-approach.jpg",
        shippedTitle: "What we shipped",
        shippedIntro: "A complete catalog system — photography, copy, architecture, and a reusable style guide the team can follow for every future product.",
        shipItems: [
            {
                title: "500 SKUs re-photographed",
                desc: "White background, lifestyle, and detail shots — all to a single locked style guide.",
                image: "/images/casestudy-aurora-ship-1.jpg"
            },
            {
                title: "Listing copy rewritten",
                desc: "Titles, bullets, and descriptions optimized for search and conversion across Amazon, Shopify, and DTC.",
                image: "/images/casestudy-aurora-ship-2.jpg"
            },
            {
                title: "Catalog architecture + PIM",
                desc: "Category structure, navigation, and a PIM system as a single source of truth for every asset.",
                image: "/images/casestudy-aurora-ship-3.jpg"
            }
        ],
        liveProjectUrl: "https://auroragoods.example.com",
        resultsTitle: "The numbers, before and after",
        resultsMetrics: [
            {
                label: "Conversion rate",
                value: "1.8% → 2.4%"
            },
            {
                label: "Page load time",
                value: "3.2s → 1.1s"
            },
            {
                label: "Color returns",
                value: "22% → 0.4%"
            },
            {
                label: "Ad ROAS",
                value: "2.1x → 3.4x"
            }
        ],
        resultsImage: "/images/casestudy-aurora-results.jpg",
        testimonial: {
            quote: "They rebuilt our entire catalog in 8 weeks. Within two months our conversion rate was up 34% and our ad spend was working harder than ever. The system they built is still running — we haven't needed a photographer since.",
            name: "Maria Chen",
            role: "Head of E-commerce, Aurora Goods"
        },
        learningsTitle: "What we'd repeat or change",
        learningsText: [
            "We'd repeat the system-first approach — building the pipeline before shooting a single product saved weeks. The style guide is now the single most valuable asset Aurora owns.",
            "We'd change the copywriting timeline. We wrote listing copy in parallel with photography, but the copy team needed the final retouched images to reference. Next time, we'd sequence copy after retouching."
        ],
        servicesUsed: [
            "UI/UX Design",
            "Digital Marketing"
        ],
        relatedTitle: "Related case studies",
        ctaTitle: "Want results like this?"
    },
    {
        slug: "maison-noir",
        title: "Maison Noir: 92% fewer color returns",
        clientLogo: "/images/casestudy-maison-logo.png",
        clientName: "Maison Noir",
        metrics: [
            {
                label: "Color returns",
                value: "-92%"
            },
            {
                label: "Touchpoints synced",
                value: "12"
            },
            {
                label: "Monitors calibrated",
                value: "14"
            },
            {
                label: "Brand consistency",
                value: "100%"
            }
        ],
        ctaSticky: "Get results like this",
        snapshot: {
            client: "Maison Noir",
            industry: "Luxury Fashion",
            services: [
                "Digital Marketing",
                "UI/UX Design"
            ],
            timeline: "3 weeks · 2025"
        },
        serviceSlug: "digital-marketing",
        challengeTitle: "A luxury brand built on one color — that looked different everywhere",
        challengeText: [
            "Maison Noir is a luxury fashion house where black isn't just a color — it's the entire brand identity. But their black looked different on Instagram, in their print lookbook, on their e-commerce store, and on the physical product.",
            "Customers were returning items because 'the color doesn't match the photo.' For a brand built on a single color, this was an existential problem. Their creative team was spending 15+ hours per week color-correcting images in Photoshop, trying to make everything match.",
            "They had 5 'official' brand color files, and no one on the team knew which one was current. Every new photographer and printer delivered a slightly different shade of black."
        ],
        challengeImage: "/images/casestudy-maison-challenge.jpg",
        approachTitle: "One source of truth, every surface",
        approachText: [
            "We audited every place the brand color appeared — 12 touchpoints from social media to packaging to in-store displays. We collected physical samples, print proofs, and digital files to map the full inconsistency.",
            "We built a master palette with Pantone references, ICC profiles for every output (screen, print, fabric, packaging), and calibrated every monitor, printer, and photographer in the supply chain.",
            "The key decision was to involve the print partner and the fabric supplier from day one. Color on recycled board behaves differently from color on silk — we tested the master palette on every material before locking it."
        ],
        approachImage: "/images/casestudy-maison-approach.jpg",
        shippedTitle: "What we shipped",
        shippedIntro: "A complete color standardization protocol — master palette, ICC profiles, calibrated hardware, and a living brand color guide.",
        shipItems: [
            {
                title: "Master color palette",
                desc: "Pantone-locked references for every brand color, with CMYK, RGB, and hex values for every output surface.",
                image: "/images/casestudy-maison-ship-1.jpg"
            },
            {
                title: "ICC profiles + calibration",
                desc: "14 monitors calibrated, ICC profiles for 3 printers, and a calibration schedule to prevent drift.",
                image: "/images/casestudy-maison-ship-2.jpg"
            },
            {
                title: "Brand color guide",
                desc: "A living document with usage rules, test files, and a verification workflow for every new asset.",
                image: "/images/casestudy-maison-ship-3.jpg"
            }
        ],
        liveProjectUrl: "https://maisonnoir.example.com",
        resultsTitle: "The numbers, before and after",
        resultsMetrics: [
            {
                label: "Color returns",
                value: "18% → 1.4%"
            },
            {
                label: "Color-correcting hours",
                value: "15h/wk → 0"
            },
            {
                label: "Touchpoints consistent",
                value: "3 / 12 → 12 / 12"
            },
            {
                label: "Customer complaints",
                value: "-94%"
            }
        ],
        resultsImage: "/images/casestudy-maison-results.jpg",
        testimonial: {
            quote: "Before, every product photo looked slightly different and customers complained. After the protocol, color-related returns dropped 92% in the first quarter. Our black is now the same black everywhere — exactly what a luxury brand demands.",
            name: "James Voss",
            role: "Creative Director, Maison Noir"
        },
        learningsTitle: "What we'd repeat or change",
        learningsText: [
            "We'd repeat involving the print partner and fabric supplier from day one. Testing the palette on actual materials — not just screens — was the difference between a protocol that works and one that doesn't.",
            "We'd add a quarterly re-calibration checkpoint sooner. Monitors drift faster than expected, and the first month had a few close calls before we set up the schedule."
        ],
        servicesUsed: [
            "Digital Marketing",
            "UI/UX Design"
        ],
        relatedTitle: "Related case studies",
        ctaTitle: "Want results like this?"
    },
    {
        slug: "echo-motors",
        title: "ECHO Motors: $280K saved with CGI launch",
        clientLogo: "/images/casestudy-echo-logo.png",
        clientName: "ECHO Motors",
        metrics: [
            {
                label: "Cost savings",
                value: "$280K"
            },
            {
                label: "Time to launch",
                value: "8 weeks"
            },
            {
                label: "Physical shoots",
                value: "0"
            },
            {
                label: "3D assets reusable",
                value: "100%"
            }
        ],
        ctaSticky: "Get results like this",
        snapshot: {
            client: "ECHO Motors",
            industry: "Automotive / EV",
            services: [
                "Motion Graphics",
                "Digital Marketing"
            ],
            timeline: "8 weeks · 2024"
        },
        serviceSlug: "motion-graphics",
        challengeTitle: "A car launch with no car to film",
        challengeText: [
            "ECHO Motors was launching their first electric vehicle, but the physical prototype wasn't ready. The marketing team had 8 weeks to produce a launch film, and there was no car to film.",
            "Traditional production would mean waiting months for the prototype, then scheduling a shoot with a crew, location, permits, and weather risk. The launch date was locked — there was no flexibility.",
            "Their competitor had just launched with a cinematic film shot in Iceland. ECHO needed something that looked just as premium, without the physical production."
        ],
        challengeImage: "/images/casestudy-echo-challenge.jpg",
        approachTitle: "Build the car in pixels, shoot in virtual",
        approachText: [
            "We built the entire car in CGI — a photoreal 3D model with every detail, from the headlights to the stitching on the seats. The model was based on CAD files from the engineering team, so it was dimensionally accurate.",
            "Using our LED volume virtual production stage, we shot real-time environments: desert highways, city nights, mountain passes. The car was composited into every scene in real-time, so the director could see the final shot on set.",
            "The key decision was to use Unreal Engine for real-time rendering instead of offline. This let us iterate on lighting and camera angles on the day of the shoot, instead of waiting for overnight renders."
        ],
        approachImage: "/images/casestudy-echo-approach.jpg",
        shippedTitle: "What we shipped",
        shippedIntro: "A full CGI launch film, virtual production day, and all 3D assets — reusable for future campaigns, AR, and the website configurator.",
        shipItems: [
            {
                title: "Photoreal CGI car",
                desc: "A 3D model built from CAD files — dimensionally accurate, with every material and texture.",
                image: "/images/casestudy-echo-ship-1.jpg"
            },
            {
                title: "Virtual production film",
                desc: "A 60-second launch film shot on our LED volume — desert, city, and mountain environments.",
                image: "/images/casestudy-echo-ship-2.jpg"
            },
            {
                title: "3D asset library",
                desc: "All models, textures, and scene files handed off for future campaigns and AR/VR experiences.",
                image: "/images/casestudy-echo-ship-3.jpg"
            }
        ],
        liveProjectUrl: "https://echomotors.example.com",
        resultsTitle: "The numbers, before and after",
        resultsMetrics: [
            {
                label: "Production cost",
                value: "$460K → $180K"
            },
            {
                label: "Time to launch",
                value: "16 wks → 8 wks"
            },
            {
                label: "Weather risk",
                value: "100% → 0%"
            },
            {
                label: "Asset reuse",
                value: "0 → 6 campaigns"
            }
        ],
        resultsImage: "/images/casestudy-echo-results.jpg",
        testimonial: {
            quote: "We launched the new EV with a full CGI film — no physical car, no location, no weather risk. It cost 60% less than the planned shoot and looked better than anything we could have filmed. The 3D assets are now used in every campaign.",
            name: "Daniel Park",
            role: "Marketing Director, ECHO Motors"
        },
        learningsTitle: "What we'd repeat or change",
        learningsText: [
            "We'd repeat the real-time Unreal Engine approach. Being able to iterate on lighting and camera angles on the day of the shoot — instead of waiting for overnight renders — saved at least a week.",
            "We'd involve the engineering team earlier. The CAD files were accurate but needed cleanup for CGI. A 2-day workshop with engineering before the build would have saved 4 days of rework."
        ],
        servicesUsed: [
            "Motion Graphics",
            "Digital Marketing"
        ],
        relatedTitle: "Related case studies",
        ctaTitle: "Want results like this?"
    },
    {
        slug: "agency-collective",
        title: "Agency Collective: 3x projects, 0 hires",
        clientLogo: "/images/casestudy-agency-logo.png",
        clientName: "Agency Collective",
        metrics: [
            {
                label: "Projects shipped",
                value: "3x"
            },
            {
                label: "New hires",
                value: "0"
            },
            {
                label: "Clients added",
                value: "6 → 12"
            },
            {
                label: "Margin improvement",
                value: "+22%"
            }
        ],
        ctaSticky: "Get results like this",
        snapshot: {
            client: "Agency Collective",
            industry: "Creative Agency",
            services: [
                "Web & App Development",
                "UI/UX Design"
            ],
            timeline: "12 months · 2024-2025"
        },
        serviceSlug: "web-app-dev",
        challengeTitle: "Winning more pitches than they could staff",
        challengeText: [
            "Agency Collective was winning more pitches than they could staff. They had a small core team of strategists and creatives, but couldn't handle the production volume — design, development, and motion work for 6 concurrent clients.",
            "Hiring full-time senior staff was too risky with fluctuating project flow. They'd tried freelancers, but the quality was inconsistent and managing them was a full-time job in itself.",
            "They were turning down work — 4 pitches in the last quarter were declined because they couldn't guarantee delivery. Their reputation was at risk."
        ],
        challengeImage: "/images/casestudy-agency-challenge.jpg",
        approachTitle: "Embed, don't outsource",
        approachText: [
            "We embedded as their white-label production team. A dedicated producer learned their clients, their standards, and their workflow. We started with a 4-week pilot project to calibrate quality and communication.",
            "The key decision was to act as an extension of their team, not a vendor. We used their project management tools, their templates, their review process. By the end of the pilot, we worked the way they worked.",
            "We scaled from 1 to 3 specialists (design, dev, motion) allocated to their projects, with the producer as the single point of contact. Every deliverable shipped under Agency Collective's brand."
        ],
        approachImage: "/images/casestudy-agency-approach.jpg",
        shippedTitle: "What we shipped",
        shippedIntro: "200+ assets across 6 clients — design, development, and motion work, all produced under Agency Collective's brand.",
        shipItems: [
            {
                title: "Design production",
                desc: "Brand systems, marketing collateral, and social assets for 6 concurrent clients.",
                image: "/images/casestudy-agency-ship-1.jpg"
            },
            {
                title: "Web development",
                desc: "Next.js and Webflow builds — responsive, accessible, ready to hand to clients.",
                image: "/images/casestudy-agency-ship-2.jpg"
            },
            {
                title: "Motion & video",
                desc: "Brand films, social cutdowns, and motion graphics — edited and color-graded.",
                image: "/images/casestudy-agency-ship-3.jpg"
            }
        ],
        liveProjectUrl: "https://agencycollective.example.com",
        resultsTitle: "The numbers, before and after",
        resultsMetrics: [
            {
                label: "Projects shipped",
                value: "68 → 204"
            },
            {
                label: "Active clients",
                value: "6 → 12"
            },
            {
                label: "Full-time hires",
                value: "0"
            },
            {
                label: "Profit margin",
                value: "34% → 56%"
            }
        ],
        resultsImage: "/images/casestudy-agency-results.jpg",
        testimonial: {
            quote: "We doubled our client base in a year without hiring a single full-time person. Their team is our team — our clients don't even know they exist. The margin improvement paid for the retainer in the first month.",
            name: "Sarah Lindgren",
            role: "Partner, Agency Collective"
        },
        learningsTitle: "What we'd repeat or change",
        learningsText: [
            "We'd repeat the pilot project approach. Calibrating to their standards before scaling was essential — by week 4, we were indistinguishable from their in-house team.",
            "We'd add a quarterly review process sooner. The first 6 months went well, but a formal check-in at month 3 would have caught a few workflow inefficiencies earlier."
        ],
        servicesUsed: [
            "Web & App Development",
            "UI/UX Design"
        ],
        relatedTitle: "Related case studies",
        ctaTitle: "Want results like this?"
    }
];
}),
"[project]/src/components/site/casestudy-detail-page.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/site/casestudy-detail-page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/site/casestudy-detail-page.tsx <module evaluation>", "default");
}),
"[project]/src/components/site/casestudy-detail-page.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/site/casestudy-detail-page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/site/casestudy-detail-page.tsx", "default");
}),
"[project]/src/components/site/casestudy-detail-page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$casestudy$2d$detail$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/site/casestudy-detail-page.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$casestudy$2d$detail$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/site/casestudy-detail-page.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$casestudy$2d$detail$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/site/page-shell.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/site/page-shell.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/site/page-shell.tsx <module evaluation>", "default");
}),
"[project]/src/components/site/page-shell.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/site/page-shell.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/site/page-shell.tsx", "default");
}),
"[project]/src/components/site/page-shell.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$page$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/site/page-shell.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$page$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/site/page-shell.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$page$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/case-studies/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseStudyPage,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$caseStudies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/caseStudies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$casestudy$2d$detail$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/casestudy-detail-page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$page$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/page-shell.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const dynamicParams = false;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$caseStudies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["caseStudyDetails"].map((c)=>({
            slug: c.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const caseStudy = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$caseStudies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["caseStudyDetails"].find((c)=>c.slug === slug);
    if (!caseStudy) return {
        title: "Case study not found — Katella Digital"
    };
    return {
        title: `${caseStudy.title} — Katella Digital`,
        description: caseStudy.testimonial.quote.slice(0, 160),
        openGraph: {
            title: `${caseStudy.title} — Katella Digital`,
            description: caseStudy.testimonial.quote.slice(0, 160),
            type: "website"
        }
    };
}
async function CaseStudyPage({ params }) {
    const { slug } = await params;
    const caseStudy = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$caseStudies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["caseStudyDetails"].find((c)=>c.slug === slug);
    if (!caseStudy) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$page$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$casestudy$2d$detail$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            caseStudy: caseStudy
        }, void 0, false, {
            fileName: "[project]/src/app/case-studies/[slug]/page.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/case-studies/[slug]/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/case-studies/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/case-studies/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7e4e0990._.js.map