"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type ShapeName =
  | "growth-arrow"
  | "target"
  | "bars"
  | "spark"
  | "orbit"
  | "prism"
  | "rocket"
  | "network"
  | "bolt"
  | "globe";

const DEFAULT_SHAPE_CYCLE: ShapeName[] = [
  "growth-arrow",
  "target",
  "bars",
  "spark",
  "orbit",
  "prism",
  "rocket",
  "network",
  "bolt",
  "globe",
];

// Katella Digital luminous particle palette (crimson, rose, warm coral, pearl white)
const PARTICLE_COLORS = [
  "rgba(255, 255, 255, 0.92)",
  "rgba(255, 214, 224, 0.88)",
  "rgba(255, 77, 115, 0.92)",
  "rgba(232, 28, 73, 0.9)",
  "rgba(199, 31, 66, 0.86)",
];

function drawVectorShape(ctx: CanvasRenderingContext2D, shape: ShapeName) {
  ctx.clearRect(0, 0, 320, 320);
  ctx.save();
  ctx.translate(160, 160);
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#ffffff";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  switch (shape) {
    case "growth-arrow": {
      // Bold ascending arrow + base trend curve
      ctx.lineWidth = 22;
      ctx.beginPath();
      ctx.moveTo(-92, 86);
      ctx.lineTo(-22, 18);
      ctx.lineTo(18, 44);
      ctx.lineTo(86, -72);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(28, -76);
      ctx.lineTo(92, -78);
      ctx.lineTo(86, -14);
      ctx.stroke();

      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.arc(0, 0, 124, 0, Math.PI * 2);
      ctx.stroke();
      break;
    }

    case "target": {
      // Concentric strategy rings + bullseye
      [118, 78, 40].forEach((r, idx) => {
        ctx.lineWidth = idx === 2 ? 14 : 16;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(-132, 0);
      ctx.lineTo(-96, 0);
      ctx.moveTo(96, 0);
      ctx.lineTo(132, 0);
      ctx.moveTo(0, -132);
      ctx.lineTo(0, -96);
      ctx.moveTo(0, 96);
      ctx.lineTo(0, 132);
      ctx.stroke();
      break;
    }

    case "bars": {
      // Ascending performance bars + growth baseline
      const bars = [
        { x: -88, h: 66 },
        { x: -34, h: 108 },
        { x: 20, h: 150 },
        { x: 74, h: 196 },
      ];
      bars.forEach((b) => {
        ctx.beginPath();
        ctx.roundRect(b.x - 16, 98 - b.h, 32, b.h, 8);
        ctx.fill();
      });
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.moveTo(-116, 108);
      ctx.lineTo(116, 108);
      ctx.stroke();
      break;
    }

    case "spark": {
      // Sculptural 4-point creative starburst + outer ring
      ctx.beginPath();
      ctx.moveTo(0, -124);
      ctx.quadraticCurveTo(18, -18, 124, 0);
      ctx.quadraticCurveTo(18, 18, 0, 124);
      ctx.quadraticCurveTo(-18, 18, -124, 0);
      ctx.quadraticCurveTo(-18, -18, 0, -124);
      ctx.closePath();
      ctx.fill();

      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.arc(0, 0, 92, 0, Math.PI * 2);
      ctx.stroke();
      break;
    }

    case "orbit": {
      // Interlocking orbital ellipses + core
      ctx.lineWidth = 15;
      [-0.55, 0.55].forEach((rot) => {
        ctx.save();
        ctx.rotate(rot);
        ctx.beginPath();
        ctx.ellipse(0, 0, 122, 48, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });
      ctx.beginPath();
      ctx.arc(0, 0, 26, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case "prism": {
      // Faceted diamond / brand craft crystal
      ctx.lineWidth = 16;
      ctx.beginPath();
      ctx.moveTo(0, -122);
      ctx.lineTo(108, -16);
      ctx.lineTo(0, 124);
      ctx.lineTo(-108, -16);
      ctx.closePath();
      ctx.stroke();

      ctx.lineWidth = 11;
      ctx.beginPath();
      ctx.moveTo(-104, -16);
      ctx.lineTo(104, -16);
      ctx.moveTo(0, -122);
      ctx.lineTo(-42, -16);
      ctx.lineTo(0, 124);
      ctx.lineTo(42, -16);
      ctx.closePath();
      ctx.stroke();
      break;
    }

    case "rocket": {
      // Sleek launch rocket angled 45 degrees
      ctx.rotate(Math.PI / 4);
      ctx.beginPath();
      ctx.moveTo(0, -122);
      ctx.quadraticCurveTo(54, -46, 44, 52);
      ctx.lineTo(-44, 52);
      ctx.quadraticCurveTo(-54, -46, 0, -122);
      ctx.closePath();
      ctx.fill();

      // Fins
      ctx.beginPath();
      ctx.moveTo(-42, 16);
      ctx.lineTo(-82, 74);
      ctx.lineTo(-34, 64);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(42, 16);
      ctx.lineTo(82, 74);
      ctx.lineTo(34, 64);
      ctx.closePath();
      ctx.fill();

      // Exhaust flame
      ctx.beginPath();
      ctx.moveTo(-22, 68);
      ctx.lineTo(0, 124);
      ctx.lineTo(22, 68);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case "network": {
      // AI Search / Knowledge-graph constellation
      const nodes: [number, number, number][] = [
        [0, 0, 26],
        [-94, -56, 18],
        [92, -62, 18],
        [-84, 72, 18],
        [94, 66, 18],
        [0, -112, 16],
        [0, 110, 16],
      ];
      ctx.lineWidth = 10;
      const edges: [number, number][] = [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
        [0, 6],
        [1, 5],
        [2, 5],
        [3, 6],
        [4, 6],
        [1, 3],
        [2, 4],
      ];
      edges.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(nodes[a][0], nodes[a][1]);
        ctx.lineTo(nodes[b][0], nodes[b][1]);
        ctx.stroke();
      });
      nodes.forEach(([x, y, r]) => {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      });
      break;
    }

    case "bolt": {
      // High-velocity conversion bolt
      ctx.beginPath();
      ctx.moveTo(18, -124);
      ctx.lineTo(-76, 14);
      ctx.lineTo(-6, 14);
      ctx.lineTo(-22, 124);
      ctx.lineTo(78, -16);
      ctx.lineTo(8, -16);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case "globe": {
      // Regional & global meridian sphere
      ctx.lineWidth = 15;
      ctx.beginPath();
      ctx.arc(0, 0, 114, 0, Math.PI * 2);
      ctx.stroke();
      ctx.lineWidth = 11;
      ctx.beginPath();
      ctx.ellipse(0, 0, 54, 114, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-114, 0);
      ctx.lineTo(114, 0);
      ctx.moveTo(-98, -56);
      ctx.lineTo(98, -56);
      ctx.moveTo(-98, 56);
      ctx.lineTo(98, 56);
      ctx.stroke();
      break;
    }
  }

  ctx.restore();
}

function sampleShapePoints(
  shape: ShapeName,
  count: number
): [number, number][] {
  const off = document.createElement("canvas");
  off.width = 320;
  off.height = 320;
  const ctx = off.getContext("2d");
  if (!ctx) return Array.from({ length: count }, () => [0, 0]);

  drawVectorShape(ctx, shape);
  const data = ctx.getImageData(0, 0, 320, 320).data;
  const pts: [number, number][] = [];

  for (let y = 0; y < 320; y += 3) {
    for (let x = 0; x < 320; x += 3) {
      if (data[(y * 320 + x) * 4 + 3] > 60) {
        pts.push([(x - 160) / 320, (y - 160) / 320]);
      }
    }
  }

  if (!pts.length) return Array.from({ length: count }, () => [0, 0]);

  // Fisher-Yates shuffle for organic particle morph transitions
  for (let i = pts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = pts[i];
    pts[i] = pts[j];
    pts[j] = tmp;
  }

  const out: [number, number][] = new Array(count);
  for (let i = 0; i < count; i++) {
    out[i] = pts[i % pts.length];
  }
  return out;
}

interface SectionTarget {
  el: HTMLElement;
  ax: number;
  ay: number;
  pts: [number, number][];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  col: string;
  ph: number;
  sp: number;
  amp: number;
}

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  tw: number;
  ph: number;
}

export default function CursorGlow() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 480 : 1050;

    // Collect every <section> inside <main> so particles morph section by section on every page
    const sectionEls = Array.from(
      document.querySelectorAll<HTMLElement>("main section")
    );
    if (!sectionEls.length) return;

    const shapeCache = new Map<ShapeName, [number, number][]>();
    const getPts = (shape: ShapeName) => {
      let cached = shapeCache.get(shape);
      if (!cached) {
        cached = sampleShapePoints(shape, particleCount);
        shapeCache.set(shape, cached);
      }
      return cached;
    };

    const targets: SectionTarget[] = sectionEls.map((el, idx) => {
      const attrShape = el.dataset.shape as ShapeName | undefined;
      const shape =
        attrShape && DEFAULT_SHAPE_CYCLE.includes(attrShape)
          ? attrShape
          : DEFAULT_SHAPE_CYCLE[idx % DEFAULT_SHAPE_CYCLE.length];

      // Alternate left & right anchors across sections so the sculpture glides organically
      const defaultAx = isMobile ? 0.5 : idx % 2 === 0 ? 0.78 : 0.22;
      const ax = el.dataset.ax ? parseFloat(el.dataset.ax) : defaultAx;
      const ay = el.dataset.ay ? parseFloat(el.dataset.ay) : 0.52;

      return { el, ax, ay, pts: getPts(shape) };
    });

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;
    let time = 0;

    let particles: Particle[] = [];
    let stars: Star[] = [];

    const pointer = { x: -9999, y: -9999, active: false, hoveringInteractive: false };
    const ringPos = { x: -100, y: -100 };

    let curAx = targets[0].ax;
    let curAy = targets[0].ay;

    const getIsLight = () =>
      document.documentElement.getAttribute("data-theme") === "light";
    let isLightMode = getIsLight();

    const LIGHT_PARTICLE_COLORS = [
      "rgba(199, 31, 66, 0.72)",
      "rgba(154, 14, 40, 0.64)",
      "rgba(232, 28, 73, 0.68)",
      "rgba(90, 10, 26, 0.52)",
    ];

    const getPalette = () =>
      isLightMode ? LIGHT_PARTICLE_COLORS : PARTICLE_COLORS;

    const getScale = () => Math.min(Math.min(width, height) * 0.78, 620);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      if (!width || !height) return;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const scale = getScale();
      const first = targets[0];
      const palette = getPalette();

      particles = Array.from({ length: particleCount }, (_, i) => {
        const pt = first.pts[i];
        return {
          x: width * first.ax + pt[0] * scale + (Math.random() - 0.5) * 80,
          y: height * first.ay + pt[1] * scale + (Math.random() - 0.5) * 80,
          vx: 0,
          vy: 0,
          r: Math.random() * 1.65 + 0.7,
          col: palette[Math.floor(Math.random() * palette.length)],
          ph: Math.random() * Math.PI * 2,
          sp: 0.5 + Math.random() * 0.9,
          amp: 2.5 + Math.random() * 5,
        };
      });

      const starCount = Math.min(Math.round((width * height) / 14000), 110);
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.15 + 0.25,
        a: Math.random() * 0.42 + 0.12,
        tw: Math.random() * 2 + 0.6,
        ph: Math.random() * Math.PI * 2,
      }));
    };

    const getScrollBlend = () => {
      const midY = window.scrollY + window.innerHeight * 0.5;
      const centers = targets.map((t) => {
        const rect = t.el.getBoundingClientRect();
        return window.scrollY + rect.top + rect.height * 0.5;
      });

      if (midY <= centers[0]) return { a: 0, b: 0, k: 0 };
      const last = centers.length - 1;
      if (midY >= centers[last]) return { a: last, b: last, k: 0 };

      let idx = 0;
      while (idx < last - 1 && midY > centers[idx + 1]) idx++;

      const span = centers[idx + 1] - centers[idx] || 1;
      const raw = Math.max(0, Math.min(1, (midY - centers[idx]) / span));
      const k = raw * raw * (3 - 2 * raw);
      return { a: idx, b: idx + 1, k };
    };

    const drawStars = () => {
      for (const s of stars) {
        const alpha = reducedMotion
          ? s.a
          : Math.max(0, s.a + 0.16 * Math.sin(time * s.tw + s.ph));
        ctx.globalAlpha = isLightMode ? alpha * 0.45 : alpha;
        ctx.fillStyle = isLightMode
          ? "rgb(154, 14, 40)"
          : "rgb(255, 224, 232)";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const tick = () => {
      if (!width || !height) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Strictly stop animation BEFORE the footer begins (never render on or over footer)
      const footerEl = document.querySelector("footer");
      const footerTop = footerEl
        ? footerEl.getBoundingClientRect().top
        : height + 100;
      const clipBottom = Math.max(0, Math.min(height, footerTop));

      if (clipBottom > 10) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, width, clipBottom);
        ctx.clip();

        drawStars();

        const { a, b, k } = getScrollBlend();
        const tA = targets[a];
        const tB = targets[b];
        const scale = getScale();

        const targetAx = tA.ax + (tB.ax - tA.ax) * k;
        const targetAy = tA.ay + (tB.ay - tA.ay) * k;
        curAx += (targetAx - curAx) * 0.075;
        curAy += (targetAy - curAy) * 0.075;

        const cx = width * curAx;
        const cy = Math.min(height * curAy, Math.max(120, clipBottom - 160));

        if (pointer.active && isFinePointer && pointer.y < clipBottom) {
          const grad = ctx.createRadialGradient(
            pointer.x,
            pointer.y,
            0,
            pointer.x,
            pointer.y,
            210
          );
          grad.addColorStop(
            0,
            isLightMode ? "rgba(232, 28, 73, 0.14)" : "rgba(232, 28, 73, 0.22)"
          );
          grad.addColorStop(
            0.45,
            isLightMode ? "rgba(199, 31, 66, 0.05)" : "rgba(199, 31, 66, 0.08)"
          );
          grad.addColorStop(1, "rgba(199, 31, 66, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(pointer.x, pointer.y, 210, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalCompositeOperation = isLightMode ? "source-over" : "lighter";

        const repulseRadiusSq = 24000;
        const repulseRadius = Math.sqrt(repulseRadiusSq);

        for (let i = 0; i < particleCount; i++) {
          const p = particles[i];
          const ptA = tA.pts[i];
          const ptB = tB.pts[i];

          const mx = ptA[0] + (ptB[0] - ptA[0]) * k;
          const my = ptA[1] + (ptB[1] - ptA[1]) * k;

          let destX = cx + mx * scale;
          let destY = cy + my * scale;

          if (!reducedMotion) {
            destX += Math.cos(time * p.sp + p.ph) * p.amp * 0.35;
            destY += Math.sin(time * p.sp + p.ph) * p.amp * 0.35;
          }

          let fx = (destX - p.x) * 0.022;
          let fy = (destY - p.y) * 0.022;

          if (pointer.active && pointer.y < clipBottom) {
            const dx = p.x - pointer.x;
            const dy = p.y - pointer.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < repulseRadiusSq) {
              const dist = Math.sqrt(distSq) || 1;
              const force = (1 - dist / repulseRadius) * 6.2;
              const nx = dx / dist;
              const ny = dy / dist;
              fx += (nx - ny * 0.35) * force;
              fy += (ny + nx * 0.35) * force;
            }
          }

          p.vx = (p.vx + fx) * 0.85;
          p.vy = (p.vy + fy) * 0.85;
          p.x += p.vx;
          p.y += p.vy;

          // Gracefully fade particles in the last 100px above the footer edge
          const edgeFade =
            clipBottom < height
              ? Math.max(0, Math.min(1, (clipBottom - p.y) / 100))
              : 1;
          if (edgeFade <= 0.01) continue;

          ctx.globalAlpha = edgeFade;
          ctx.fillStyle = p.col;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
        ctx.restore();
      }

      if (isFinePointer && ringRef.current && dotRef.current) {
        if (pointer.active) {
          ringPos.x += (pointer.x - ringPos.x) * 0.16;
          ringPos.y += (pointer.y - ringPos.y) * 0.16;
          const ringScale = pointer.hoveringInteractive ? 1.55 : 1;
          ringRef.current.style.opacity = "1";
          ringRef.current.style.transform = `translate3d(${ringPos.x - 18}px, ${ringPos.y - 18}px, 0) scale(${ringScale})`;
          dotRef.current.style.opacity = "1";
          dotRef.current.style.transform = `translate3d(${pointer.x - 3}px, ${pointer.y - 3}px, 0)`;
        } else {
          ringRef.current.style.opacity = "0";
          dotRef.current.style.opacity = "0";
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      const target = e.target as HTMLElement | null;
      pointer.hoveringInteractive = Boolean(
        target?.closest("a, button, input, textarea, select, [role='button']")
      );

      // Update cursor-following spotlight coordinates on hovered glass cards
      const hoverCard = target?.closest<HTMLElement>(".kd-obsidian-card-hover");
      if (hoverCard) {
        const rect = hoverCard.getBoundingClientRect();
        hoverCard.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        hoverCard.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    const themeObserver = new MutationObserver(() => {
      const nextLight = getIsLight();
      if (nextLight !== isLightMode) {
        isLightMode = nextLight;
        const palette = getPalette();
        particles.forEach((p) => {
          p.col = palette[Math.floor(Math.random() * palette.length)];
        });
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", resize);

    resize();

    if (reducedMotion) {
      ctx.clearRect(0, 0, width, height);
      drawStars();
      ctx.globalCompositeOperation = isLightMode ? "source-over" : "lighter";
      for (const p of particles) {
        ctx.fillStyle = p.col;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    } else {
      rafId = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(rafId);
      themeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", resize);
    };
  }, [pathname]);

  return (
    <>
      {/* Full-viewport section-morphing interactive particle canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 h-full w-full pointer-events-none z-[2] opacity-90"
      />

      {/* Sleek tactile desktop cursor ring + crimson core dot */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="hidden lg:block fixed top-0 left-0 h-9 w-9 rounded-full border border-white/45 bg-[#E81C49]/10 backdrop-blur-[1px] pointer-events-none z-[70] opacity-0 transition-[opacity,border-color] duration-200 will-change-transform"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="hidden lg:block fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-[#FF4D73] shadow-[0_0_10px_#E81C49] pointer-events-none z-[70] opacity-0 transition-opacity duration-150 will-change-transform"
      />
    </>
  );
}
