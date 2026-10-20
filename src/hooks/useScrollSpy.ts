"use client";

import { useEffect, useState } from "react";

const VISIBLE_RATIO = 0.4;
const TOP_OFFSET = 24;

// Client hook: reads layout and listens to scroll. Updates are batched with requestAnimationFrame.
export function useScrollSpy(ids: readonly string[], enabled: boolean): string {
  const [activeId, setActiveId] = useState("");
  const idKey = ids.join("|");

  useEffect(() => {
    if (!enabled) return;

    const sectionIds = idKey.length > 0 ? idKey.split("|") : [];
    let frame = 0;

    const update = () => {
      const viewport = window.innerHeight;
      let bestId = "";
      let bestRatio = 0;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        const visible = Math.max(0, Math.min(rect.bottom, viewport) - Math.max(rect.top, 0));
        const ratio = visible / Math.min(rect.height, viewport);
        if (ratio >= VISIBLE_RATIO && ratio > bestRatio) {
          bestId = id;
          bestRatio = ratio;
        }
      }

      setActiveId(window.scrollY < TOP_OFFSET ? "" : bestId);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled, idKey]);

  return enabled ? activeId : "";
}
