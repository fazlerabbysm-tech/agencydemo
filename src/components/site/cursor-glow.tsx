"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor Glow — small, elegant mouse-follow effect.
 *
 * - A soft red glow that follows the cursor with slight lag
 * - A small dot that stays exactly on the cursor
 * - When mouse moves fast, the glow stretches slightly (motion feel)
 * - When mouse stops, the glow settles back to a calm circle
 * - Very lightweight — just 2 elements, no canvas
 */

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const dot = dotRef.current;
    if (!glow || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let lastX = mouseX;
    let lastY = mouseY;
    let velocity = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      // Calculate velocity (how fast mouse is moving)
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const speed = Math.min(1, Math.sqrt(dx * dx + dy * dy) / 30);
      velocity = velocity * 0.85 + speed * 0.15;
      lastX = mouseX;
      lastY = mouseY;

      // Glow follows with lag (lerp)
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;

      // Scale glow based on velocity (motion feel)
      const scale = 1 + velocity * 0.4;
      const blur = 20 + velocity * 15;
      const opacity = 0.15 + velocity * 0.15;

      glow.style.transform = `translate(${glowX - 40}px, ${glowY - 40}px) scale(${scale})`;
      glow.style.filter = `blur(${blur}px)`;
      glow.style.opacity = opacity.toString();

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Soft glow — follows cursor with lag, reacts to speed */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-[55]"
        style={{
          background: "radial-gradient(circle, rgba(199,31,66,0.4) 0%, rgba(199,31,66,0) 70%)",
          willChange: "transform, filter, opacity",
          transition: "opacity 0.3s ease",
        }}
        aria-hidden="true"
      />
      {/* Small dot — exactly on cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[56]"
        style={{
          background: "#C71F42",
          boxShadow: "0 0 8px rgba(199,31,66,0.6)",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
    </>
  );
}
