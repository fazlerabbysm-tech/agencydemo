"use client";

import { useEffect, useRef } from "react";

/**
 * Particle Ring System — Katella Digital
 *
 * Particles form a ring/vortex shape (like ltsthink.com) on the right side of the screen.
 * The ring rotates slowly. When mouse approaches, particles swirl around the cursor.
 * Particles always return to the ring formation — it's a living, breathing shape.
 * Works from hero to footer (fixed canvas).
 */

export default function ParticleRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const COUNT = window.matchMedia("(max-width:700px)").matches ? 600 : 1200;
    const DAMPING = 0.92;
    const MOUSE_RADIUS = 180;
    const MOUSE_GRAVITY = 0.6;
    const MOUSE_SWIRL = 1.0;
    const RING_SPRING = 0.015;

    let W = 0, H = 0, DPR = 1;
    let time = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    interface P {
      x: number; y: number;
      vx: number; vy: number;
      baseAngle: number;    // angle on the ring
      baseRadius: number;   // distance from ring center
      ringCx: number;       // ring center X (recomputed each frame)
      ringCy: number;       // ring center Y
      tx: number; ty: number; // target position (on the ring, rotating)
      k: number;            // spring stiffness
      s: number;            // particle size
      brightness: number;   // base opacity
    }

    let particles: P[] = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < COUNT; i++) {
        const angle = (i / COUNT) * Math.PI * 2;
        // Vary radius slightly for organic feel — some inside, some outside the ring
        const radiusVar = 0.85 + Math.random() * 0.3;
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: 0,
          vy: 0,
          baseAngle: angle,
          baseRadius: radiusVar,
          ringCx: 0,
          ringCy: 0,
          tx: 0,
          ty: 0,
          k: RING_SPRING * (0.6 + Math.random() * 0.8),
          s: 0.6 + Math.random() * 1.6,
          brightness: 0.2 + Math.random() * 0.5,
        });
      }
    };

    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      if (!particles.length) initParticles();
    };

    // Color palette — teal/cyan
    const palette = Array.from({ length: 12 }, (_, i) =>
      `hsla(${175 + i * 4}, ${85 - i * 2}%, ${50 + i * 4}%, ${0.3 + i * 0.058})`
    );

    const frame = () => {
      time += 0.003; // slow rotation speed

      // Motion trail
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(7,10,18,0.18)";
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";

      // Ring center — positioned on right side of screen (like ltsthink.com)
      // But shifts based on scroll so it's always visible
      const ringCx = W * 0.68;
      const ringCy = H * 0.5;
      const ringR = Math.min(W, H) * 0.22;

      const R = MOUSE_RADIUS, R2 = R * R;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1) Compute target position on the rotating ring
        // Each particle has a base angle + slow rotation
        const angle = p.baseAngle + time;
        const r = ringR * p.baseRadius;
        p.tx = ringCx + Math.cos(angle) * r;
        p.ty = ringCy + Math.sin(angle) * r * 0.85; // slightly elliptical

        // Spring toward ring target
        p.vx += (p.tx - p.x) * p.k;
        p.vy += (p.ty - p.y) * p.k;

        // 2) Mouse interaction — swirl + gravity orbit
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d2 = dx * dx + dy * dy;

          if (d2 < R2 && d2 > 1) {
            const d = Math.sqrt(d2);
            const f = 1 - d / R;
            const nx = dx / d;
            const ny = dy / d;
            // Gravity pulls toward cursor, swirl pushes perpendicular = orbit
            p.vx += (nx * MOUSE_GRAVITY - ny * MOUSE_SWIRL) * f;
            p.vy += (ny * MOUSE_GRAVITY + nx * MOUSE_SWIRL) * f;
          }
        }

        // 3) Integrate
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x += p.vx;
        p.y += p.vy;

        // 4) Draw — color by speed
        const speed = Math.hypot(p.vx, p.vy);
        const c = Math.min(11, (speed * 2.5) | 0);
        ctx.fillStyle = palette[c];
        ctx.fillRect(p.x, p.y, p.s, p.s);
      }

      // Draw faint connection lines between nearby particles on the ring
      for (let i = 0; i < particles.length; i += 2) {
        for (let j = i + 1; j < Math.min(i + 8, particles.length); j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 2500) {
            const opacity = (1 - Math.sqrt(d2) / 50) * 0.06;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(70, 226, 226, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
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
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
    window.addEventListener("pointerup", (e: PointerEvent) => {
      if (e.pointerType === "touch") onPointerLeave();
    });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(resize, 150);
    });

    resize();
    const rafId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
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
