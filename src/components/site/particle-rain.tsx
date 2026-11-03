"use client";

import { useEffect, useRef } from "react";

export default function ParticleRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Generate 40 falling particle streaks
    const particles: HTMLDivElement[] = [];
    const count = 40;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "kd-particle";

      // Random properties
      const left = Math.random() * 100; // % horizontal position
      const duration = 3 + Math.random() * 5; // 3-8s fall time
      const delay = Math.random() * 8; // 0-8s delay
      const height = 20 + Math.random() * 60; // 20-80px streak length
      const opacity = 0.1 + Math.random() * 0.3; // 0.1-0.4 opacity

      p.style.left = left + "%";
      p.style.height = height + "px";
      p.style.animationDuration = duration + "s";
      p.style.animationDelay = delay + "s";
      p.style.opacity = opacity.toString();

      container.appendChild(p);
      particles.push(p);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return <div ref={containerRef} className="kd-particles" aria-hidden="true" />;
}
