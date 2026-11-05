"use client";

import { useEffect, useRef } from "react";

/**
 * Morphing Particle System — Katella Digital
 *
 * Based on the provided morphing particle code, adapted for our dark+teal theme.
 * Features:
 * - Text shapes ("KATELLA", "GROW") formed by 4500 particles
 * - Ring + Galaxy shapes
 * - Swirl mouse interaction (orbit + gravity pull)
 * - Motion trails (translucent fill)
 * - Speed-based color (slow = deep teal, fast = bright cyan)
 * - Click to morph + auto-morph every 5s
 * - mix-blend-mode: screen for glow on dark backgrounds
 */

export default function ParticleRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CONFIG = {
      count: window.matchMedia("(max-width:700px)").matches ? 2200 : 4500,
      spring: 0.012,
      damping: 0.9,
      mouseRadius: 170,
      gravity: 1.1,
      swirl: 1.6,
      morphEvery: 5000,
      words: ["KATELLA", "GROW"],
    };

    let W = 0,
      H = 0,
      DPR = 1,
      current = 0;
    let particles: any[] = [],
      shapes: any[] = [];
    const mouse = { x: 0, y: 0, active: false };

    const shuffle = (a: any[]) => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    const fit = (pts: any[], n: number) => {
      shuffle(pts);
      const out = new Array(n);
      for (let i = 0; i < n; i++) {
        const p = pts[i % pts.length];
        const j = i >= pts.length ? 3 : 0;
        out[i] = {
          x: p.x + (Math.random() - 0.5) * j,
          y: p.y + (Math.random() - 0.5) * j,
        };
      }
      return out;
    };

    // ---- Shape generators ----
    const textShape = (text: string) => {
      const off = document.createElement("canvas");
      off.width = W;
      off.height = H;
      const o = off.getContext("2d")!;
      const size = Math.min(W / (text.length * 0.62), H * 0.38);
      o.fillStyle = "#fff";
      o.font = `800 ${size}px system-ui, Arial, sans-serif`;
      o.textAlign = "center";
      o.textBaseline = "middle";
      o.fillText(text, W / 2, H / 2);
      const data = o.getImageData(0, 0, W, H).data;
      const pts: any[] = [],
        step = 4;
      for (let y = 0; y < H; y += step)
        for (let x = 0; x < W; x += step)
          if (data[(y * W + x) * 4 + 3] > 128) pts.push({ x, y });
      return fit(pts, CONFIG.count);
    };

    const ringShape = () => {
      const r = Math.min(W, H) * 0.28;
      const pts: any[] = [];
      for (let i = 0; i < CONFIG.count; i++) {
        const a = Math.random() * Math.PI * 2;
        const rr = r + (Math.random() - 0.5) * 18;
        pts.push({ x: W / 2 + Math.cos(a) * rr, y: H / 2 + Math.sin(a) * rr });
      }
      return pts;
    };

    const galaxyShape = () => {
      const R = Math.min(W, H) * 0.4,
        arms = 3,
        pts: any[] = [];
      for (let i = 0; i < CONFIG.count; i++) {
        const t = Math.pow(Math.random(), 0.65);
        const a =
          (i % arms) * ((Math.PI * 2) / arms) +
          t * 4.5 +
          (Math.random() - 0.5) * 0.6;
        pts.push({
          x: W / 2 + Math.cos(a) * t * R,
          y: H / 2 + Math.sin(a) * t * R * 0.7,
        });
      }
      return pts;
    };

    const buildShapes = () => [
      textShape(CONFIG.words[0]),
      ringShape(),
      textShape(CONFIG.words[1]),
      galaxyShape(),
    ];

    // ---- Setup ----
    const assign = (idx: number) => {
      const pts = shapes[idx];
      for (let i = 0; i < particles.length; i++) {
        particles[i].tx = pts[i].x;
        particles[i].ty = pts[i].y;
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
      shapes = buildShapes();
      assign(current);
    };

    const next = () => {
      current = (current + 1) % shapes.length;
      assign(current);
    };

    // Color palette — teal/cyan range (Katella Digital theme)
    // slow = deep teal, fast = bright cyan/white
    const palette = Array.from({ length: 12 }, (_, i) =>
      `hsla(${175 + i * 4}, ${85 - i * 2}%, ${50 + i * 4}%, ${0.45 + i * 0.045})`
    );

    // ---- Main loop ----
    const frame = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(7,10,18,0.28)";
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";

      const R = CONFIG.mouseRadius,
        R2 = R * R;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1) spring toward current target shape
        p.vx += (p.tx - p.x) * p.k;
        p.vy += (p.ty - p.y) * p.k;

        // 2) cursor: radial pull + perpendicular swirl => orbit
        if (mouse.active) {
          const dx = mouse.x - p.x,
            dy = mouse.y - p.y,
            d2 = dx * dx + dy * dy;
          if (d2 < R2 && d2 > 1) {
            const d = Math.sqrt(d2),
              f = 1 - d / R;
            const nx = dx / d,
              ny = dy / d;
            p.vx += (nx * CONFIG.gravity - ny * CONFIG.swirl) * f;
            p.vy += (ny * CONFIG.gravity + nx * CONFIG.swirl) * f;
          }
        }

        // 3) integrate
        p.vx *= CONFIG.damping;
        p.vy *= CONFIG.damping;
        p.x += p.vx;
        p.y += p.vy;

        // 4) draw, colored by speed
        const c = Math.min(11, (Math.hypot(p.vx, p.vy) * 2) | 0);
        ctx.fillStyle = palette[c];
        ctx.fillRect(p.x, p.y, p.s, p.s);
      }
      requestAnimationFrame(frame);
    };

    // ---- Events ----
    const setMouse = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    window.addEventListener("pointermove", setMouse);
    window.addEventListener("pointerdown", setMouse);
    window.addEventListener("pointerup", (e: PointerEvent) => {
      if (e.pointerType === "touch") mouse.active = false;
    });
    document.documentElement.addEventListener("pointerleave", () => {
      mouse.active = false;
    });
    window.addEventListener("click", next);

    let rt: ReturnType<typeof setTimeout>;
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(resize, 150);
    });

    resize();
    const morphInterval = setInterval(next, CONFIG.morphEvery);
    const rafId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("pointermove", setMouse);
      window.removeEventListener("pointerdown", setMouse);
      clearInterval(morphInterval);
      cancelAnimationFrame(rafId);
      clearTimeout(rt);
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
