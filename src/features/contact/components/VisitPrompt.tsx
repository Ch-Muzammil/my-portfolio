"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import type { ContactContent } from "@/types/content";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "mh.visit-prompt";
const DELAY_MS = 30_000;

let remembered = false;

function hasSeen() {
  if (remembered) return true;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function remember() {
  remembered = true;
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Private browsing can block storage. The in-memory flag still covers this visit.
  }
}

interface VisitPromptProps {
  content: ContactContent;
}

// Client leaf: one delayed invite for a first visit, then it stays dismissed.
export function VisitPrompt({ content }: VisitPromptProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const bodyId = useId();

  useEffect(() => {
    if (pathname !== "/contact") return;
    remember();
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (hasSeen()) return;

    const timer = window.setTimeout(() => {
      if (hasSeen() || window.location.pathname === "/contact") return;
      setOpen(true);
    }, DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previouslyFocused = document.activeElement;
    panel?.focus();
    document.body.style.overflow = "hidden";

    const focusable = () => {
      if (!panel) return [];
      return [...panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")];
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        remember();
        setOpen(false);
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
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open]);

  function dismiss() {
    remember();
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="visit-prompt"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <div
        ref={panelRef}
        className="visit-prompt-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        tabIndex={-1}
      >
        <button type="button" className="visit-prompt-close" aria-label={content.promptClose} onClick={dismiss}>
          <X aria-hidden="true" />
        </button>
        <p className="pill">{content.promptEyebrow}</p>
        <h2 id={titleId}>{content.promptTitle}</h2>
        <p id={bodyId}>{content.promptBody}</p>
        <div className="visit-prompt-actions">
          <span onClick={remember}>
            <Button href={content.primaryHref}>
              {content.promptAction}
              <ArrowUpRight aria-hidden="true" />
            </Button>
          </span>
          <Button type="button" variant="quiet" onClick={dismiss}>
            {content.promptDismiss}
          </Button>
        </div>
      </div>
    </div>
  );
}
