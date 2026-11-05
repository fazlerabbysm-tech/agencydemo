"use client";

import { useEffect, useRef } from "react";

/**
 * Particle System — Katella Digital
 *
 * Particles follow the mouse cursor in real-time (swirl + gravity orbit).
 * No fixed shapes — the particles are ALWAYS dynamic, always reacting to mouse.
 * As you scroll from hero to footer, the particle field moves with you.
 * Motion trails, speed-based teal color, additive glow.
 */

export default function ParticleRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Mobile = fewer particles for performance
    const COUNT = window.matchMedia("(max-width:700px)").matches ? 800 : 1800;
    const SPRING = 0.008;       // How hard particles return to rest position
    const DAMPING = 0.92;       // Friction
    const MOUSE_RADIUS = 200;   // Mouse influence radius
    const GRAVITY = 0.8;        // Pull toward cursor
    const SWIRL = 1.2;          // Perpendicular push = orbit effect

    let W = 0, H = 0, DPR = 1;
    const mouse = { x: -9999, y: -9999, active: false };

    // Each particle has a "home" position (spread across screen) and
    // reacts to mouse in real-time. When mouse moves, particles follow.
    interface P {
      x: number; y: number;     // current position
      hx: number; hy: number;   // home position (rest)
      vx: number; vy: number;   // velocity
      k: number;                // per-particle spring stiffness
      s: number;                // size
    }

    let particles: P[] = [];

    const initParticles = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        hx: Math.random() * W,
        hy: Math.random() * H,
        vx: 0,
        vy: 0,
        k: SPRING * (0.5 + Math.random() * 1.0),
        s: 0.6 + Math.random() * 1.8,
      }));
    };

    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      if (!particles.length) initParticles();
      else {
        // Re-spread home positions on resize
        for (const p of particles) {
          p.hx = Math.random() * W;
          p.hy = Math.random() * H;
        }
      }
    };

    // Color palette — teal/cyan, brighter = faster
    const palette = Array.from({ length: 12 }, (_, i) =>
      `hsla(${175 + i * 4}, ${85 - i * 2}%, ${50 + i * 4}%, ${0.35 + i * 0.055})`
    );

    const frame = () => {
      // Motion trail — translucent fill instead of clear
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(7,10,18,0.22)";
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter"; // additive = glow

      const R = MOUSE_RADIUS, R2 = R * R;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1) Spring back toward home position (so they don't drift away forever)
        p.vx += (p.hx - p.x) * p.k;
        p.vy += (p.hy - p.y) * p.k;

        // 2) Mouse interaction — gravity pull + swirl orbit
        // This is the KEY: particles ALWAYS react to mouse in real-time
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d2 = dx * dx + dy * dy;

          if (d2 < R2 && d2 > 1) {
            const d = Math.sqrt(d2);
            const f = 1 - d / R;     // 1 at cursor → 0 at edge
            const nx = dx / d;        // normalized direction
            const ny = dy / d;

            // Gravity: pull toward cursor
            // Swirl: perpendicular push → particles orbit the cursor
            p.vx += (nx * GRAVITY - ny * SWIRL) * f;
            p.vy += (ny * GRAVITY + nx * SWIRL) * f;
          }
        }

        // 3) Integrate with friction
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x += p.vx;
        p.y += p.vy;

        // 4) Draw — color based on speed (fast = bright cyan, slow = deep teal)
        const speed = Math.hypot(p.vx, p.vy);
        const c = Math.min(11, (speed * 2.5) | 0);
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

    const onPointerLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(resize, 150);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
    window.addEventListener("pointerup", (e: PointerEvent) => {
      if (e.pointerType === "touch") onPointerLeave();
    });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", onResize);

    resize();
    const rafId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
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
