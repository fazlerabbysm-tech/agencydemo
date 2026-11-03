"use client";

import { useEffect, useRef } from "react";

export default function WaterEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const RES = 3;
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

    // Gentle drop — subtle, not aggressive
    const dropRipple = (px: number, py: number, strength: number = 50) => {
      const gx = Math.floor(px / RES);
      const gy = Math.floor(py / RES);
      const radius = 5;

      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const x = gx + dx;
          const y = gy + dy;
          if (x < 1 || x >= W - 1 || y < 1 || y >= H - 1) continue;

          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > radius) continue;

          const falloff = Math.cos((dist / radius) * (Math.PI / 2));
          const idx = y * W + x;
          previous[idx] = -strength * falloff;
        }
      }
    };

    let lastDropX = -100;
    let lastDropY = -100;
    let lastDropTime = 0;
    let animationId: number;

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

      if (dist > 25 && now - lastDropTime > 60) {
        dropRipple(e.clientX, e.clientY, 40 + Math.random() * 30);
        lastDropX = e.clientX;
        lastDropY = e.clientY;
        lastDropTime = now;
      }
    };

    const onClick = (e: MouseEvent) => {
      if (!isInHero(e.clientX, e.clientY)) return;
      // Single clean splash — no secondary ripples spreading around
      dropRipple(e.clientX, e.clientY, 150);
    };

    // Moderate damping — waves last but don't linger too long
    const DAMPING = 0.988;

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

      // Get hero bounds to clip rendering to hero only
      const hero = document.getElementById("top");
      const heroRect = hero ? hero.getBoundingClientRect() : null;
      const heroTopY = heroRect ? Math.floor(heroRect.top / RES) : 0;
      const heroBottomY = heroRect ? Math.ceil(heroRect.bottom / RES) : H;

      for (let y = 0; y < H; y++) {
        // Skip pixels outside hero section
        if (y < heroTopY || y > heroBottomY) continue;

        for (let x = 0; x < W; x++) {
          const idx = y * W + x;

          const xGrad =
            x > 0 && x < W - 1
              ? (previous[idx + 1] - previous[idx - 1]) / 2
              : 0;
          const yGrad =
            y > 0 && y < H - 1
              ? (previous[idx + W] - previous[idx - W]) / 2
              : 0;

          const height = previous[idx];

          // Subtle — only show where there's actual wave activity
          const waveMag = Math.abs(height);
          const gradMag = Math.sqrt(xGrad * xGrad + yGrad * yGrad);

          let a = 0;

          if (waveMag > 0.5 || gradMag > 0.5) {
            // Only white light on crests — NO black shadows
            // The gradient creates natural light/shimmer on water surface
            const light = Math.max(0, height) / 50;
            const shimmer = gradMag / 8;

            // Pure white highlight — subtle, beautiful
            // No dark/black — just light catching on water
            const intensity = Math.min(1, light * 0.6 + shimmer * 0.4);
            a = Math.min(100, intensity * 80);
          }

          const pixelIdx = (y * W + x) * 4;
          data[pixelIdx] = 255;     // R — white
          data[pixelIdx + 1] = 255; // G — white
          data[pixelIdx + 2] = 255; // B — white
          data[pixelIdx + 3] = a;   // Alpha — subtle
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
      style={{ mixBlendMode: "screen" }}
    />
  );
}
