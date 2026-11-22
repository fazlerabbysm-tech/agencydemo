"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Guarantees every route navigation lands cleanly at the top Hero section (y = 0)
 * instead of inheriting the previous page's scroll offset (a common Next.js App Router
 * issue when fixed headers/canvases appear at the top of layouts).
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPathnameRef = useRef<string | null>(null);

  useIsomorphicLayoutEffect(() => {
    const isRouteChange =
      prevPathnameRef.current !== null && prevPathnameRef.current !== pathname;
    prevPathnameRef.current = pathname;

    // Respect explicit in-page #hash anchors when navigating to a specific section
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    const forceTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    if (isRouteChange) {
      forceTop();
      // Guard against late layout shifts / browser scroll restoration on mobile & desktop
      const raf1 = requestAnimationFrame(() => {
        if (!window.location.hash) forceTop();
      });
      const timer = window.setTimeout(() => {
        if (!window.location.hash && window.scrollY > 0) forceTop();
      }, 60);

      return () => {
        cancelAnimationFrame(raf1);
        window.clearTimeout(timer);
      };
    }
  }, [pathname]);

  return null;
}
