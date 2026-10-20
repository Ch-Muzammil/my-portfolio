"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import type { NavContent } from "@/types/content";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  nav: NavContent;
}

// Client leaf: open state, body scroll lock, Escape to close, and a Tab focus trap.
export function MobileMenu({ nav }: MobileMenuProps) {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const panelRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const pathname = usePathname();
  const open = openPath === pathname;
  const activeId = useScrollSpy(
    nav.items.map((item) => item.id),
    pathname === "/",
  );

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const toggle = toggleRef.current;
    const previouslyFocused = document.activeElement;

    const focusable = () => {
      if (!panel) return [];
      return [...panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")];
    };

    focusable()[0]?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        return;
      }
      if (event.key !== "Tab") return;
      const nodes = focusable();
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      } else {
        toggle?.focus();
      }
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        ref={toggleRef}
        type="button"
        className="icon-button"
        aria-label={open ? nav.close : nav.open}
        aria-expanded={open}
        aria-controls={open ? titleId : undefined}
        onClick={() => setOpenPath(open ? null : pathname)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open ? (
        <nav ref={panelRef} id={titleId} aria-label={nav.mobileLabel} className="mobile-sheet">
          {nav.items.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              data-active={activeId === item.id}
              onClick={() => setOpenPath(null)}
            >
              {item.name}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
          <Link href={nav.resumeHref} className="mobile-resume" onClick={() => setOpenPath(null)}>
            {nav.viewResume}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
