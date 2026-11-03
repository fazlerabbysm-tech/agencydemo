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

    const RES = 3; // Pixel resolution — lower = more detail but slower
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
    const dropRipple = (px: number, py: number, strength: number = 80) => {
      const gx = Math.floor(px / RES);
      const gy = Math.floor(py / RES);
      const radius = 3; // Splash radius in grid cells

      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const x = gx + dx;
          const y = gy + dy;
          if (x < 1 || x >= W - 1 || y < 1 || y >= H - 1) continue;

          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > radius) continue;

          const falloff = 1 - dist / radius;
          const idx = y * W + x;
          previous[idx] = strength * falloff;
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
      // Hero is fixed height, check if we're in the visible hero area
      return clientY >= rect.top && clientY <= rect.bottom;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isInHero(e.clientX, e.clientY)) return;

      const now = Date.now();
      const dx = e.clientX - lastDropX;
      const dy = e.clientY - lastDropY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Drop ripples as mouse moves — natural spacing
      if (dist > 15 && now - lastDropTime > 40) {
        dropRipple(e.clientX, e.clientY, 60 + Math.random() * 40);
        lastDropX = e.clientX;
        lastDropY = e.clientY;
        lastDropTime = now;
      }
    };

    const onClick = (e: MouseEvent) => {
      if (!isInHero(e.clientX, e.clientY)) return;
      // Big splash on click
      dropRipple(e.clientX, e.clientY, 200);
      // Secondary smaller ripples for natural feel
      setTimeout(() => dropRipple(e.clientX + 5, e.clientY + 3, 50), 80);
      setTimeout(() => dropRipple(e.clientX - 3, e.clientY - 2, 30), 160);
    };

    // === Main simulation + render loop ===
    const DAMPING = 0.985; // How fast ripples fade — lower = faster fade

    const update = () => {
      // Propagate waves: new height = average of neighbors - previous height
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
      // Swap buffers
      const temp = previous;
      previous = current;
      current = temp;
    };

    const render = () => {
      const data = imgData.data;

      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const idx = y * W + x;

          // Calculate gradient (slope) of the wave surface for refraction effect
          const xGrad =
            (x > 0 && x < W - 1)
              ? (previous[idx + 1] - previous[idx - 1]) / 2
              : 0;
          const yGrad =
            (y > 0 && y < H - 1)
              ? (previous[idx + W] - previous[idx - W]) / 2
              : 0;

          // Height at this point
          const height = previous[idx];

          // Create a visual based on the wave surface:
          // - Wave crests (positive height) = lighter (white-ish, like light catching on water)
          // - Wave troughs (negative height) = darker
          // - Gradient creates a "shimmer" effect like water surface

          const baseAlpha = Math.min(1, Math.abs(height) / 60);
          const gradMag = Math.min(1, Math.sqrt(xGrad * xGrad + yGrad * yGrad) / 15);

          // Blend: where waves are active, show light/dark variation
          // Positive height = light highlight (water catching light)
          // Negative height = dark shadow (water trough)
          let r = 128;
          let g = 128;
          let b = 128;
          let a = 0;

          if (baseAlpha > 0.01 || gradMag > 0.01) {
            // Highlight on crests
            const highlight = Math.max(0, height) / 60;
            // Shadow in troughs
            const shadow = Math.max(0, -height) / 60;

            r = 128 + highlight * 127 - shadow * 60;
            g = 128 + highlight * 127 - shadow * 60;
            b = 128 + highlight * 127 - shadow * 60;
            a = Math.min(180, (baseAlpha + gradMag) * 120);
          }

          const pixelIdx = (y * W + x) * 4;
          data[pixelIdx] = r;
          data[pixelIdx + 1] = g;
          data[pixelIdx + 2] = b;
          data[pixelIdx + 3] = a;
        }
      }

      offCtx!.putImageData(imgData, 0, 0);
      // Scale up to full canvas size with smoothing for a fluid look
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
