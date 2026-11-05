"use client";

import { useEffect, useRef } from "react";

/**
 * Morphing Particle System — Katella Digital
 *
 * No text shapes. Particles form geometric/iconic shapes that change per section.
 * Mouse: swirl + gravity (particles orbit the cursor).
 * Scroll: each section triggers a new shape morph.
 * Motion trails, speed-based teal color, additive blending.
 */

export default function ParticleRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CONFIG = {
      count: window.matchMedia("(max-width:700px)").matches ? 1800 : 3500,
      spring: 0.01,
      damping: 0.9,
      mouseRadius: 170,
      gravity: 1.0,
      swirl: 1.4,
    };

    let W = 0, H = 0, DPR = 1;
    let particles: any[] = [];
    let currentTargets: any[] = [];
    const mouse = { x: 0, y: 0, active: false };

    // ===== Shape generators — return CONFIG.count points in screen coords =====

    // 1. Upward arrow (growth) — Hero
    const shapeArrow = () => {
      const cx = W / 2, cy = H / 2;
      const s = Math.min(W, H) * 0.25;
      const pts: any[] = [];
      for (let i = 0; i < CONFIG.count; i++) {
        const t = i / CONFIG.count;
        if (t < 0.2) {
          // Arrowhead left
          const f = t / 0.2;
          pts.push({ x: cx - s * 0.5 + f * s * 0.5, y: cy + s * 0.2 - f * s * 0.5 });
        } else if (t < 0.4) {
          // Arrowhead right
          const f = (t - 0.2) / 0.2;
          pts.push({ x: cx + f * s * 0.5, y: cy - s * 0.3 + f * s * 0.5 });
        } else {
          // Shaft — thick line going down
          const f = (t - 0.4) / 0.6;
          const w = s * 0.06;
          const off = ((i % 5) - 2) * (w / 4);
          pts.push({ x: cx + off, y: cy - s * 0.1 + f * s * 0.7 });
        }
      }
      return pts;
    };

    // 2. Bar chart (ascending bars) — Stats
    const shapeBars = () => {
      const cx = W / 2, cy = H / 2;
      const s = Math.min(W, H) * 0.3;
      const pts: any[] = [];
      const bars = 5;
      const barW = s * 0.12;
      const gap = s * 0.04;
      for (let i = 0; i < CONFIG.count; i++) {
        const t = i / CONFIG.count;
        const barIdx = Math.floor(t * bars);
        const inBar = t * bars - barIdx;
        const barH = s * 0.2 + (barIdx / bars) * s * 0.5;
        const x = cx - s * 0.4 + barIdx * (barW + gap) + (inBar % 1) * barW;
        const y = cy + s * 0.3 - (inBar % 1) * barH;
        pts.push({ x, y });
      }
      return pts;
    };

    // 3. Concentric circles (target) — Work
    const shapeTarget = () => {
      const cx = W / 2, cy = H / 2;
      const s = Math.min(W, H) * 0.25;
      const pts: any[] = [];
      for (let i = 0; i < CONFIG.count; i++) {
        const t = i / CONFIG.count;
        const ring = Math.floor(t * 4);
        const angle = (t * 4 - ring) * Math.PI * 2;
        const r = s * (0.15 + ring * 0.08);
        pts.push({ x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r * 0.85 });
      }
      return pts;
    };

    // 4. Spiral galaxy — Services
    const shapeGalaxy = () => {
      const cx = W / 2, cy = H / 2;
      const R = Math.min(W, H) * 0.35;
      const arms = 3;
      const pts: any[] = [];
      for (let i = 0; i < CONFIG.count; i++) {
        const t = Math.pow(i / CONFIG.count, 0.6);
        const a = (i % arms) * ((Math.PI * 2) / arms) + t * 4 + (Math.random() - 0.5) * 0.5;
        pts.push({ x: cx + Math.cos(a) * t * R, y: cy + Math.sin(a) * t * R * 0.7 });
      }
      return pts;
    };

    // 5. Wave (growth curve) — Values
    const shapeWave = () => {
      const cx = W / 2, cy = H / 2;
      const s = Math.min(W, H) * 0.35;
      const pts: any[] = [];
      for (let i = 0; i < CONFIG.count; i++) {
        const t = i / CONFIG.count;
        const x = cx - s + t * s * 2;
        const y = cy + s * 0.2 - Math.sin(t * Math.PI * 2.5) * s * 0.15 - t * s * 0.3;
        const jitter = (Math.random() - 0.5) * 6;
        pts.push({ x: x + jitter, y: y + jitter });
      }
      return pts;
    };

    // 6. Rocket — CTA
    const shapeRocket = () => {
      const cx = W / 2, cy = H / 2;
      const s = Math.min(W, H) * 0.25;
      const pts: any[] = [];
      for (let i = 0; i < CONFIG.count; i++) {
        const t = i / CONFIG.count;
        if (t < 0.3) {
          // Body
          const f = t / 0.3;
          pts.push({ x: cx - s * 0.3 + f * s * 0.5, y: cy + s * 0.35 - f * s * 0.55 });
        } else if (t < 0.45) {
          // Nose
          const f = (t - 0.3) / 0.15;
          pts.push({ x: cx + s * 0.2 + f * s * 0.12, y: cy - s * 0.2 - f * s * 0.1 });
        } else if (t < 0.6) {
          // Fins
          const f = (t - 0.45) / 0.15;
          const side = i % 2 === 0 ? 1 : -1;
          pts.push({ x: cx - s * 0.25 + f * s * 0.08, y: cy + s * 0.25 + side * f * s * 0.1 });
        } else {
          // Exhaust
          const f = (t - 0.6) / 0.4;
          const wob = Math.sin(f * 12) * s * 0.02;
          pts.push({ x: cx - s * 0.3 - f * s * 0.2 + wob, y: cy + s * 0.35 + f * s * 0.2 });
        }
      }
      return pts;
    };

    // 7. Network cluster — FAQ
    const shapeNetwork = () => {
      const cx = W / 2, cy = H / 2;
      const s = Math.min(W, H) * 0.3;
      const pts: any[] = [];
      let seed = 42;
      for (let i = 0; i < CONFIG.count; i++) {
        seed = (seed * 9301 + 49297) % 233280;
        const r1 = seed / 233280;
        seed = (seed * 9301 + 49297) % 233280;
        const r2 = seed / 233280;
        const angle = r1 * Math.PI * 2;
        const dist = s * (0.05 + r2 * 0.25);
        pts.push({ x: cx + Math.cos(angle) * dist, y: cy + Math.sin(angle) * dist * 0.8 });
      }
      return pts;
    };

    // All shapes in section order
    const SHAPES = [shapeArrow, shapeBars, shapeWave, shapeGalaxy, shapeTarget, shapeRocket, shapeNetwork];

    // ===== Setup =====
    const assign = (pts: any[]) => {
      for (let i = 0; i < particles.length; i++) {
        particles[i].tx = pts[i] ? pts[i].x : W / 2;
        particles[i].ty = pts[i] ? pts[i].y : H / 2;
      }
    };

    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      if (!particles.length) {
        particles = Array.from({ length: CONFIG.count }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: 0,
          vy: 0,
          tx: 0,
          ty: 0,
          k: CONFIG.spring * (0.6 + Math.random() * 0.8),
          s: 0.8 + Math.random() * 1.4,
        }));
      }
      // Rebuild current shape with new dimensions
      const shapeIdx = getCurrentShapeIdx();
      currentTargets = SHAPES[shapeIdx]();
      assign(currentTargets);
    };

    // Determine which section is visible
    const getCurrentShapeIdx = () => {
      const scrollY = window.scrollY;
      const sectionH = window.innerHeight;
      const idx = Math.floor(scrollY / sectionH);
      return Math.min(idx, SHAPES.length - 1);
    };

    // Color palette — teal/cyan (Katella Digital)
    const palette = Array.from({ length: 12 }, (_, i) =>
      `hsla(${175 + i * 4}, ${85 - i * 2}%, ${50 + i * 4}%, ${0.4 + i * 0.05})`
    );

    // ===== Main loop =====
    const frame = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(7,10,18,0.28)";
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";

      const R = CONFIG.mouseRadius, R2 = R * R;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1) Spring toward shape target
        p.vx += (p.tx - p.x) * p.k;
        p.vy += (p.ty - p.y) * p.k;

        // 2) Mouse: gravity pull + swirl orbit
        if (mouse.active) {
          const dx = mouse.x - p.x, dy = mouse.y - p.y, d2 = dx * dx + dy * dy;
          if (d2 < R2 && d2 > 1) {
            const d = Math.sqrt(d2), f = 1 - d / R;
            const nx = dx / d, ny = dy / d;
            p.vx += (nx * CONFIG.gravity - ny * CONFIG.swirl) * f;
            p.vy += (ny * CONFIG.gravity + nx * CONFIG.swirl) * f;
          }
        }

        // 3) Integrate
        p.vx *= CONFIG.damping;
        p.vy *= CONFIG.damping;
        p.x += p.vx;
        p.y += p.vy;

        // 4) Draw — color by speed
        const c = Math.min(11, (Math.hypot(p.vx, p.vy) * 2) | 0);
        ctx.fillStyle = palette[c];
        ctx.fillRect(p.x, p.y, p.s, p.s);
      }
      requestAnimationFrame(frame);
    };

    // ===== Events =====
    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onPointerLeave = () => { mouse.active = false; };

    // Scroll — morph to new shape based on section
    let lastShape = -1;
    let scrollTimer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const idx = getCurrentShapeIdx();
        if (idx !== lastShape) {
          lastShape = idx;
          currentTargets = SHAPES[idx]();
          assign(currentTargets);
        }
      }, 100);
    };

    let rt: ReturnType<typeof setTimeout>;
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(resize, 150);
    });
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerMove);
    window.addEventListener("pointerup", (e: PointerEvent) => {
      if (e.pointerType === "touch") mouse.active = false;
    });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    resize();
    lastShape = getCurrentShapeIdx();
    const rafId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      clearTimeout(rt);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
      style={{ mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  );
}
