"use client";

import { useEffect } from "react";

// Client leaf: one delegated pointer listener feeds cursor position to every [data-spotlight] element.
export function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let target: HTMLElement | null = null;
    let clientX = 0;
    let clientY = 0;

    const update = () => {
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      target.style.setProperty("--mx", `${x}px`);
      target.style.setProperty("--my", `${y}px`);
      target.style.setProperty("--px", (x / rect.width - 0.5).toFixed(3));
      target.style.setProperty("--py", (y / rect.height - 0.5).toFixed(3));
    };

    const onMove = (event: PointerEvent) => {
      const node = event.target instanceof Element ? event.target : null;
      const next = node?.closest<HTMLElement>("[data-spotlight]") ?? null;
      if (target && target !== next) {
        target.style.removeProperty("--px");
        target.style.removeProperty("--py");
      }
      target = next;
      clientX = event.clientX;
      clientY = event.clientY;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
