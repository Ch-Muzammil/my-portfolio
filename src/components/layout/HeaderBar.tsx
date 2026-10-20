"use client";

import { useEffect, useState, type ReactNode } from "react";

interface HeaderBarProps {
  children: ReactNode;
}

const SCROLL_OFFSET = 24;

// Client leaf: toggles the scrolled header treatment from the window scroll position.
export function HeaderBar({ children }: HeaderBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => setScrolled(window.scrollY > SCROLL_OFFSET);
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      {children}
    </header>
  );
}
