"use client";

import { useEffect, useRef } from "react";

/**
 * Morphing Particle System
 *
 * Particles form growth-themed shapes that morph as you scroll between sections.
 * Mouse interaction: particles are attracted to cursor but repel when very close.
 * Shapes: upward arrow (hero), bar chart (services), target (work), rocket (CTA), etc.
 */

// ===== Shape definitions — each is a function that returns target positions =====
// All shapes are normalized to a 0-1 coordinate space, then scaled to screen

type Point = { x: number; y: number };

function shapeUpwardArrow(count: number): Point[] {
  // Growth arrow — a thick upward arrow shape
  const points: Point[] = [];
  for (let i = 0; i < count; i++) {
    const t = i / count;
    if (t < 0.15) {
      // Arrowhead — left diagonal
      const s = t / 0.15;
      points.push({ x: 0.3 + s * 0.2, y: 0.25 + s * 0.15 });
    } else if (t < 0.3) {
      // Arrowhead — right diagonal
      const s = (t - 0.15) / 0.15;
      points.push({ x: 0.5 + s * 0.2, y: 0.4 - s * 0.15 });
    } else if (t < 0.4) {
      // Arrowhead top
      const s = (t - 0.3) / 0.1;
      points.push({ x: 0.5, y: 0.25 - s * 0.05 });
    } else {
      // Arrow shaft — thick rectangle going down
      const s = (t - 0.4) / 0.6;
      const w = 0.06;
      const offset = ((i % 5) - 2) * (w / 5);
      points.push({ x: 0.5 + offset, y: 0.4 + s * 0.35 });
    }
  }
  return points;
}

function shapeBarChart(count: number): Point[] {
  // Bar chart — ascending bars representing growth
  const points: Point[] = [];
  const bars = 5;
  const barWidth = 0.08;
  const gap = 0.03;
  const startX = 0.25;
  for (let i = 0; i < count; i++) {
    const barIndex = Math.floor((i / count) * bars);
    const inBar = (i / count) * bars - barIndex;
    const barHeight = 0.15 + (barIndex / bars) * 0.25;
    const x = startX + barIndex * (barWidth + gap) + (inBar * barWidth);
    const y = 0.7 - inBar * barHeight;
    points.push({ x, y });
  }
  return points;
}

function shapeTarget(count: number): Point[] {
  // Concentric circles — target/bullseye
  const points: Point[] = [];
  for (let i = 0; i < count; i++) {
    const t = i / count;
    const ring = Math.floor(t * 4) / 4;
    const angle = (t * 4 - Math.floor(t * 4)) * Math.PI * 2;
    const radius = 0.05 + ring * 0.06;
    points.push({
      x: 0.5 + Math.cos(angle) * radius,
      y: 0.45 + Math.sin(angle) * radius * 0.8,
    });
  }
  return points;
}

function shapeRocket(count: number): Point[] {
  // Rocket shape — pointing up-right
  const points: Point[] = [];
  for (let i = 0; i < count; i++) {
    const t = i / count;
    if (t < 0.3) {
      // Rocket body — diagonal line
      const s = t / 0.3;
      points.push({ x: 0.3 + s * 0.3, y: 0.65 - s * 0.35 });
    } else if (t < 0.45) {
      // Nose cone
      const s = (t - 0.3) / 0.15;
      points.push({ x: 0.6 + s * 0.08, y: 0.3 - s * 0.08 });
    } else if (t < 0.6) {
      // Fins
      const s = (t - 0.45) / 0.15;
      const fin = i % 2 === 0 ? 1 : -1;
      points.push({ x: 0.35 + s * 0.05, y: 0.6 + fin * s * 0.06 });
    } else {
      // Exhaust trail
      const s = (t - 0.6) / 0.4;
      const wobble = Math.sin(s * 10) * 0.01;
      points.push({ x: 0.3 - s * 0.12 + wobble, y: 0.65 + s * 0.12 });
    }
  }
  return points;
}

function shapeWave(count: number): Point[] {
  // Growth wave — sine wave going up
  const points: Point[] = [];
  for (let i = 0; i < count; i++) {
    const t = i / count;
    const x = 0.15 + t * 0.7;
    const y = 0.5 - Math.sin(t * Math.PI * 2) * 0.12 - t * 0.15;
    points.push({ x, y });
  }
  return points;
}

function shapeNetwork(count: number): Point[] {
  // Network/connections — scattered nodes in a cluster
  const points: Point[] = [];
  const seed = 42;
  let rng = seed;
  for (let i = 0; i < count; i++) {
    rng = (rng * 9301 + 49297) % 233280;
    const r1 = rng / 233280;
    rng = (rng * 9301 + 49297) % 233280;
    const r2 = rng / 233280;
    // Cluster around center with spread
    const angle = r1 * Math.PI * 2;
    const dist = 0.05 + r2 * 0.15;
    points.push({
      x: 0.5 + Math.cos(angle) * dist,
      y: 0.45 + Math.sin(angle) * dist * 0.8,
    });
  }
  return points;
}

// Section → shape mapping
const SHAPES = [
  shapeUpwardArrow,  // Hero — growth arrow
  shapeBarChart,     // Stats — bar chart
  shapeWave,         // Values — growth wave
  shapeBarChart,     // Services — bar chart
  shapeTarget,       // Work — target
  shapeRocket,       // CTA — rocket
  shapeNetwork,      // FAQ — network
];

const PARTICLE_COUNT = 180;

export default function ParticleRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    // Mouse state
    let mouseX = W / 2;
    let mouseY = H / 2;
    let targetMouseX = W / 2;
    let targetMouseY = H / 2;
    const MOUSE_ATTRACT = 0.02;  // How strongly particles follow mouse
    const REPEL_RADIUS = 80;     // Distance at which particles repel
    const REPEL_STRENGTH = 1.5;

    // Current shape index (based on scroll)
    let currentShape = 0;
    let targetShape = 0;

    // Particle interface
    interface Particle {
      x: number;
      y: number;
      tx: number; // target x (from shape)
      ty: number; // target y (from shape)
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }

    // Initialize particles randomly
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        tx: W / 2,
        ty: H / 2,
        vx: 0,
        vy: 0,
        size: 1.5 + Math.random() * 2.5,
        opacity: 0.2 + Math.random() * 0.5,
        hue: 0.85 + Math.random() * 0.15, // teal range
      });
    }

    // Update target positions based on current shape
    const updateShape = (shapeIndex: number) => {
      const shapeFn = SHAPES[shapeIndex % SHAPES.length];
      const points = shapeFn(PARTICLE_COUNT);

      // Scale shape to screen — center it, make it visible
      const shapeW = W * 0.5;
      const shapeH = H * 0.45;
      const offsetX = (W - shapeW) / 2;
      const offsetY = (H - shapeH) / 2;

      for (let i = 0; i < particles.length && i < points.length; i++) {
        particles[i].tx = offsetX + points[i].x * shapeW;
        particles[i].ty = offsetY + points[i].y * shapeH;
      }
    };

    updateShape(0);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      updateShape(currentShape);
    };

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    // Detect which section is in view and update shape
    const onScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = H;
      const sectionIndex = Math.floor(scrollY / sectionHeight);
      targetShape = Math.min(sectionIndex, SHAPES.length - 1);

      if (targetShape !== currentShape) {
        currentShape = targetShape;
        updateShape(currentShape);
      }
    };

    let animationId: number;

    const animate = () => {
      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Attract toward shape target position
        const dxShape = p.tx - p.x;
        const dyShape = p.ty - p.y;
        p.vx += dxShape * 0.008;
        p.vy += dyShape * 0.008;

        // 2. Mouse interaction — attract to mouse but repel when close
        const dxMouse = p.x - mouseX;
        const dyMouse = p.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < REPEL_RADIUS && distMouse > 0) {
          // Repel — push away from cursor
          const force = (REPEL_RADIUS - distMouse) / REPEL_RADIUS;
          const angle = Math.atan2(dyMouse, dxMouse);
          p.vx += Math.cos(angle) * force * REPEL_STRENGTH;
          p.vy += Math.sin(angle) * force * REPEL_STRENGTH;
        } else if (distMouse < 250) {
          // Gentle attract — follow cursor when in mid-range
          const force = (250 - distMouse) / 250 * MOUSE_ATTRACT;
          p.vx -= dxMouse * force;
          p.vy -= dyMouse * force;
        }

        // 3. Friction
        p.vx *= 0.88;
        p.vy *= 0.88;

        // 4. Update position
        p.x += p.vx;
        p.y += p.vy;

        // 5. Draw particle
        let drawOpacity = p.opacity;
        let drawSize = p.size;

        // Brighter and bigger near mouse
        if (distMouse < 150) {
          const boost = 1 - distMouse / 150;
          drawOpacity = Math.min(1, p.opacity + boost * 0.4);
          drawSize = p.size + boost * 1.5;
        }

        // Glow
        if (drawSize > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, drawSize * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(70, 226, 226, ${drawOpacity * 0.06})`;
          ctx.fill();
        }

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(70, 226, 226, ${drawOpacity})`;
        ctx.fill();
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 60) {
            const opacity = (1 - dist / 60) * 0.1;
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
    window.addEventListener("scroll", onScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
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
