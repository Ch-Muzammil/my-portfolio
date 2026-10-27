"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import type { ContactContent } from "@/types/content";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "mh.visit-prompt";
const DELAY_MS = 30_000;
const DISMISSED = "dismissed";
const SESSION_SNOOZE = "1";

/** Covers this tab when storage is blocked (private mode). */
let suppressed = false;

function isSuppressed() {
  if (suppressed) return true;
  try {
    if (window.sessionStorage.getItem(STORAGE_KEY) === SESSION_SNOOZE) return true;
  } catch {
    // Fall through to permanent storage.
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    // Permanent mute: current value, or the previous always-on flag.
    if (raw === DISMISSED || raw === "1") return true;
    // Drop the old 7-day snooze timestamps so soft dismiss is session-only again.
    if (Number.isFinite(Number(raw))) window.localStorage.removeItem(STORAGE_KEY);
    return false;
  } catch {
    return false;
  }
}

function dismissHard() {
  suppressed = true;
  try {
    window.localStorage.setItem(STORAGE_KEY, DISMISSED);
  } catch {
    // In-memory flag still covers this visit.
  }
}

function dismissSoft() {
  suppressed = true;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, SESSION_SNOOZE);
  } catch {
    // In-memory flag still covers this visit.
  }
}

interface VisitPromptProps {
  content: ContactContent;
}

// Soft close is session-only. Hard close (CTA, /contact, mute) is permanent.
export function VisitPrompt({ content }: VisitPromptProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const bodyId = useId();

  useEffect(() => {
    if (pathname !== "/contact") return;
    dismissHard();
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isSuppressed()) return;

    const timer = window.setTimeout(() => {
      if (isSuppressed() || window.location.pathname === "/contact") return;
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
        dismissSoft();
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

  function softClose() {
    dismissSoft();
    setOpen(false);
  }

  function hardClose() {
    dismissHard();
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="visit-prompt"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) softClose();
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
        <button type="button" className="visit-prompt-close" aria-label={content.promptClose} onClick={softClose}>
          <X aria-hidden="true" />
        </button>
        <p className="pill">{content.promptEyebrow}</p>
        <h2 id={titleId}>{content.promptTitle}</h2>
        <p id={bodyId}>{content.promptBody}</p>
        <div className="visit-prompt-actions">
          <span onClick={dismissHard}>
            <Button href={content.primaryHref}>
              {content.promptAction}
              <ArrowUpRight aria-hidden="true" />
            </Button>
          </span>
          <Button type="button" variant="quiet" onClick={softClose}>
            {content.promptDismiss}
          </Button>
        </div>
        <button type="button" className="visit-prompt-mute" onClick={hardClose}>
          {content.promptMute}
        </button>
      </div>
    </div>
  );
}
