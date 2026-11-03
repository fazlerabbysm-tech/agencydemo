"use client";

import { useEffect, useRef } from "react";

export default function WaterEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Get hero section to constrain effect
    const getHeroBounds = () => {
      const hero = document.getElementById("top");
      if (!hero) return null;
      const rect = hero.getBoundingClientRect();
      return {
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY,
        left: 0,
        right: width,
      };
    };

    interface Drop {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      opacity: number;
      speed: number;
      rings: number;
    }

    const drops: Drop[] = [];
    const maxDrops = 40;

    let mouseX = -100;
    let mouseY = -100;
    let lastDropTime = 0;
    let animationId: number;

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      const bounds = getHeroBounds();
      if (!bounds) return;

      // Check if mouse is within hero section (accounting for scroll)
      const scrollY = window.scrollY;
      const mouseInHero =
        e.clientY + scrollY >= bounds.top &&
        e.clientY + scrollY <= bounds.bottom &&
        e.clientX >= bounds.left &&
        e.clientX <= bounds.right;

      if (!mouseInHero) {
        mouseX = -100;
        mouseY = -100;
        return;
      }

      mouseX = e.clientX;
      mouseY = e.clientY - bounds.top + scrollY > bounds.top ? e.clientY : e.clientY;

      // Create drops at intervals — granular, not continuous
      const now = Date.now();
      if (now - lastDropTime > 60 && drops.length < maxDrops) {
        // Random offset for organic feel
        const offsetX = (Math.random() - 0.5) * 30;
        const offsetY = (Math.random() - 0.5) * 30;

        drops.push({
          x: mouseX + offsetX,
          y: mouseY + offsetY,
          radius: 0,
          maxRadius: 60 + Math.random() * 80, // Big drops
          opacity: 0.3 + Math.random() * 0.2,
          speed: 1 + Math.random() * 1.5,
          rings: 3 + Math.floor(Math.random() * 2), // Multiple rings per drop
        });
        lastDropTime = now;
      }
    };

    const onClick = (e: MouseEvent) => {
      const bounds = getHeroBounds();
      if (!bounds) return;

      const scrollY = window.scrollY;
      const mouseInHero =
        e.clientY + scrollY >= bounds.top &&
        e.clientY + scrollY <= bounds.bottom;

      if (mouseInHero && drops.length < maxDrops) {
        // Big splash on click
        drops.push({
          x: e.clientX,
          y: e.clientY,
          radius: 0,
          maxRadius: 150,
          opacity: 0.4,
          speed: 2,
          rings: 5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const bounds = getHeroBounds();
      if (!bounds) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      // Draw and update drops
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.radius += d.speed;
        d.opacity *= 0.97;

        if (d.opacity < 0.01 || d.radius > d.maxRadius) {
          drops.splice(i, 1);
          continue;
        }

        // Draw multiple concentric rings — like water ripples spreading
        for (let r = 0; r < d.rings; r++) {
          const ringRadius = d.radius - r * 12;
          if (ringRadius <= 0) continue;

          const ringOpacity = d.opacity * (1 - r * 0.25);

          ctx.beginPath();
          ctx.arc(d.x, d.y, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${ringOpacity})`;
          ctx.lineWidth = 1.5 - r * 0.3;
          ctx.stroke();
        }

        // Add a filled circle at center for impact
        if (d.radius < 20) {
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.radius * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${d.opacity * 0.3})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[55]"
      style={{ mixBlendMode: "overlay" }}
    />
  );
}
