"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor Glow — interactive mouse-follow effect.
 *
 * - Small dot exactly on cursor
 * - Soft glow that follows with lag
 * - Trailing particles that fall behind when mouse moves fast
 * - Glow expands/pulses on click
 * - Velocity-based scale + opacity (motion feel)
 */

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;
    const ring = ringRef.current;
    const trail = trailRef.current;
    if (!dot || !glow || !ring || !trail) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let lastX = mouseX;
    let lastY = mouseY;
    let velocity = 0;
    let rafId: number;
    let clickPulse = 0;

    // Trail points
    interface TrailPoint { x: number; y: number; life: number; el: HTMLSpanElement }
    const trailPoints: TrailPoint[] = [];
    const maxTrail = 12;

    // Create trail elements
    for (let i = 0; i < maxTrail; i++) {
      const el = document.createElement("span");
      el.style.cssText = `
        position: fixed; top: 0; left: 0;
        width: 4px; height: 4px; border-radius: 50%;
        background: #C71F42; pointer-events: none;
        opacity: 0; will-change: transform, opacity;
        z-index: 54;
      `;
      document.body.appendChild(el);
      trailPoints.push({ x: 0, y: 0, life: 0, el });
    }

    let trailIdx = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    };

    const onClick = () => {
      clickPulse = 1;
    };

    const animate = () => {
      // Velocity
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);
      velocity = velocity * 0.88 + Math.min(1, speed / 40) * 0.12;
      lastX = mouseX;
      lastY = mouseY;

      // Glow follows with lag
      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;

      // Ring follows slower
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;

      // Click pulse decay
      clickPulse *= 0.92;

      // Glow: scale + blur based on velocity + click
      const glowScale = 1 + velocity * 0.5 + clickPulse * 0.8;
      const glowBlur = 15 + velocity * 20;
      const glowOpacity = 0.2 + velocity * 0.15 + clickPulse * 0.3;

      glow.style.transform = `translate(${glowX - 50}px, ${glowY - 50}px) scale(${glowScale})`;
      glow.style.filter = `blur(${glowBlur}px)`;
      glow.style.opacity = glowOpacity.toString();

      // Ring: rotates + scales with velocity
      const ringScale = 1 + velocity * 0.3 + clickPulse * 0.5;
      const ringOpacity = 0.3 + velocity * 0.2 + clickPulse * 0.3;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px) scale(${ringScale}) rotate(${Date.now() / 20}deg)`;
      ring.style.opacity = ringOpacity.toString();

      // Trail: spawn point when moving fast
      if (speed > 5 && trailRef.current) {
        const tp = trailPoints[trailIdx];
        tp.x = mouseX;
        tp.y = mouseY;
        tp.life = 1;
        trailIdx = (trailIdx + 1) % maxTrail;
      }

      // Update trail points
      trailPoints.forEach((tp) => {
        if (tp.life > 0) {
          tp.life -= 0.04;
          const size = 4 * tp.life;
          tp.el.style.transform = `translate(${tp.x - size/2}px, ${tp.y - size/2}px) scale(${tp.life})`;
          tp.el.style.opacity = (tp.life * 0.4).toString();
        }
      });

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      trailPoints.forEach((tp) => tp.el.remove());
    };
  }, []);

  return (
    <>
      {/* Soft glow — lags behind cursor */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[100px] h-[100px] rounded-full pointer-events-none z-[55]"
        style={{
          background: "radial-gradient(circle, rgba(199,31,66,0.5) 0%, rgba(199,31,66,0) 70%)",
          willChange: "transform, filter, opacity",
        }}
        aria-hidden="true"
      />
      {/* Ring — rotates, lags more */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[56]"
        style={{
          border: "1.5px solid #C71F42",
          willChange: "transform, opacity",
        }}
        aria-hidden="true"
      />
      {/* Dot — exactly on cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[57]"
        style={{
          background: "#C71F42",
          boxShadow: "0 0 6px rgba(199,31,66,0.8)",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
      {/* Trail container (not used directly, trail elements added to body) */}
      <div ref={trailRef} className="hidden" aria-hidden="true" />
    </>
  );
}
