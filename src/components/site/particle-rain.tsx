"use client";

import { useEffect, useRef } from "react";

export default function ParticleRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    // Mouse position
    let mouseX = -1000;
    let mouseY = -1000;
    const REPEL_RADIUS = 120;
    const REPEL_STRENGTH = 0.6;

    // Particle config
    const PARTICLE_COUNT = Math.min(200, Math.floor((W * H) / 8000));
    const particles: Particle[] = [];

    interface Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = Math.random() * W;
        const y = Math.random() * H;
        const size = 1 + Math.random() * 3;
        const opacity = 0.1 + Math.random() * 0.5;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          size,
          opacity,
          color: `rgba(70, 226, 226, ${opacity})`,
        });
      }
    };

    initParticles();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initParticles();
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    // Scroll offset for parallax
    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      // Parallax offset — particles move slower than scroll
      const parallaxOffset = scrollY * 0.3;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Calculate distance to mouse
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repel from mouse
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * REPEL_STRENGTH;
          p.vy += Math.sin(angle) * force * REPEL_STRENGTH;
        }

        // Return to base position (spring back)
        const homeX = p.baseX;
        const homeY = p.baseY - parallaxOffset;
        p.vx += (homeX - p.x) * 0.01;
        p.vy += (homeY - p.y) * 0.01;

        // Apply friction
        p.vx *= 0.92;
        p.vy *= 0.92;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        // Brighter when near mouse
        let drawOpacity = p.opacity;
        if (dist < REPEL_RADIUS) {
          drawOpacity = Math.min(1, p.opacity + (1 - dist / REPEL_RADIUS) * 0.4);
        }

        ctx.fillStyle = `rgba(70, 226, 226, ${drawOpacity})`;
        ctx.fill();

        // Glow effect for larger particles
        if (p.size > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(70, 226, 226, ${drawOpacity * 0.08})`;
          ctx.fill();
        }
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            const opacity = (1 - dist / 80) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(70, 226, 226, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationId);
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
