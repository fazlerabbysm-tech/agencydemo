"use client";

import { useEffect, useRef } from "react";

export default function WaterEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Ripple storage
    const ripples: Ripple[] = [];
    const maxRipples = 30;

    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      opacity: number;
      lineWidth: number;
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let lastX = mouseX;
    let lastY = mouseY;
    let animationId: number;

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Calculate distance moved
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Create ripple if moved enough
      if (dist > 8 && ripples.length < maxRipples) {
        ripples.push({
          x: mouseX,
          y: mouseY,
          radius: 0,
          maxRadius: 40 + Math.random() * 30,
          opacity: 0.15,
          lineWidth: 1,
        });
        lastX = mouseX;
        lastY = mouseY;
      }
    };

    // Also create ripple on click
    const onClick = (e: MouseEvent) => {
      if (ripples.length < maxRipples) {
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 0,
          maxRadius: 80,
          opacity: 0.25,
          lineWidth: 1.5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 1.5;
        r.opacity *= 0.96;

        if (r.opacity < 0.01 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        // Draw ripple as concentric circles (water wave effect)
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(128, 128, 128, ${r.opacity})`;
        ctx.lineWidth = r.lineWidth;
        ctx.stroke();

        // Inner ripple
        if (r.radius > 8) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius - 8, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(128, 128, 128, ${r.opacity * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
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
      className="fixed inset-0 pointer-events-none z-[60]"
      style={{ mixBlendMode: "difference" }}
    />
  );
}
