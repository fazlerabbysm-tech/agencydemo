"use client";

import { useEffect, useRef } from "react";

export default function WaterEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // === Ripple simulation using height-map buffers ===
    // Classic water ripple algorithm: two buffers store wave heights,
    // each frame propagates waves to neighbors and applies damping.

    const RES = 3; // Pixel resolution
    let W = 0;
    let H = 0;
    let current: Float32Array;
    let previous: Float32Array;
    let imgData: ImageData;

    const initBuffers = () => {
      W = Math.ceil(window.innerWidth / RES);
      H = Math.ceil(window.innerHeight / RES);
      current = new Float32Array(W * H);
      previous = new Float32Array(W * H);
    };

    initBuffers();

    let canvasW = (canvas.width = window.innerWidth);
    let canvasH = (canvas.height = window.innerHeight);
    let offscreen = document.createElement("canvas");
    let offCtx = offscreen.getContext("2d");
    offscreen.width = W;
    offscreen.height = H;
    imgData = offCtx!.createImageData(W, H);

    const onResize = () => {
      canvasW = canvas.width = window.innerWidth;
      canvasH = canvas.height = window.innerHeight;
      initBuffers();
      offscreen.width = W;
      offscreen.height = H;
      imgData = offCtx!.createImageData(W, H);
    };

    // Drop a "splash" into the ripple buffer at (x, y)
    // Bigger radius + deeper strength = bigger, deeper drops
    const dropRipple = (px: number, py: number, strength: number = 150) => {
      const gx = Math.floor(px / RES);
      const gy = Math.floor(py / RES);
      const radius = 7; // Bigger splash radius

      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const x = gx + dx;
          const y = gy + dy;
          if (x < 1 || x >= W - 1 || y < 1 || y >= H - 1) continue;

          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > radius) continue;

          // Smooth falloff for natural deep splash
          const falloff = Math.cos((dist / radius) * (Math.PI / 2));
          const idx = y * W + x;
          // Negative = depression (water pushed down = deep splash)
          previous[idx] = -strength * falloff;
        }
      }
    };

    let lastDropX = -100;
    let lastDropY = -100;
    let lastDropTime = 0;
    let animationId: number;

    // Check if mouse is within hero section
    const isInHero = (clientX: number, clientY: number) => {
      const hero = document.getElementById("top");
      if (!hero) return false;
      const rect = hero.getBoundingClientRect();
      return clientY >= rect.top && clientY <= rect.bottom;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isInHero(e.clientX, e.clientY)) return;

      const now = Date.now();
      const dx = e.clientX - lastDropX;
      const dy = e.clientY - lastDropY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Drop ripples as mouse moves — bigger, deeper
      if (dist > 20 && now - lastDropTime > 50) {
        dropRipple(e.clientX, e.clientY, 120 + Math.random() * 80);
        lastDropX = e.clientX;
        lastDropY = e.clientY;
        lastDropTime = now;
      }
    };

    const onClick = (e: MouseEvent) => {
      if (!isInHero(e.clientX, e.clientY)) return;
      // Big deep splash on click
      dropRipple(e.clientX, e.clientY, 400);
      // Secondary ripples for natural splash
      setTimeout(() => dropRipple(e.clientX + 8, e.clientY + 5, 120), 100);
      setTimeout(() => dropRipple(e.clientX - 5, e.clientY - 3, 80), 200);
      setTimeout(() => dropRipple(e.clientX + 3, e.clientY - 4, 50), 320);
    };

    // === Main simulation + render loop ===
    // Lower damping = waves last longer = deeper water feel
    const DAMPING = 0.992;

    const update = () => {
      for (let y = 1; y < H - 1; y++) {
        for (let x = 1; x < W - 1; x++) {
          const idx = y * W + x;
          const val =
            (previous[idx - 1] +
              previous[idx + 1] +
              previous[idx - W] +
              previous[idx + W]) /
              2 -
            current[idx];
          current[idx] = val * DAMPING;
        }
      }
      const temp = previous;
      previous = current;
      current = temp;
    };

    const render = () => {
      const data = imgData.data;

      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const idx = y * W + x;

          // Gradient (slope) of wave surface — creates refraction/shimmer
          const xGrad =
            x > 0 && x < W - 1
              ? (previous[idx + 1] - previous[idx - 1]) / 2
              : 0;
          const yGrad =
            y > 0 && y < H - 1
              ? (previous[idx + W] - previous[idx - W]) / 2
              : 0;

          const height = previous[idx];

          // Deeper visual: stronger contrast for more depth
          const baseAlpha = Math.min(1, Math.abs(height) / 40);
          const gradMag = Math.min(1, Math.sqrt(xGrad * xGrad + yGrad * yGrad) / 10);

          let r = 128;
          let g = 128;
          let b = 128;
          let a = 0;

          if (baseAlpha > 0.01 || gradMag > 0.01) {
            // Crests = bright white highlight (light on water surface)
            const highlight = Math.max(0, height) / 40;
            // Troughs = deep dark shadow (water depth)
            const shadow = Math.max(0, -height) / 40;

            // Stronger contrast = deeper water feel
            r = 128 + highlight * 127 - shadow * 100;
            g = 128 + highlight * 127 - shadow * 100;
            b = 128 + highlight * 127 - shadow * 100;

            // Higher max alpha = more visible/deeper
            a = Math.min(220, (baseAlpha + gradMag) * 150);
          }

          const pixelIdx = (y * W + x) * 4;
          data[pixelIdx] = r;
          data[pixelIdx + 1] = g;
          data[pixelIdx + 2] = b;
          data[pixelIdx + 3] = a;
        }
      }

      offCtx!.putImageData(imgData, 0, 0);
      ctx.clearRect(0, 0, canvasW, canvasH);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(offscreen, 0, 0, canvasW, canvasH);
    };

    const animate = () => {
      update();
      render();
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
