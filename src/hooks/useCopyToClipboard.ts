"use client";

import { useState } from "react";

type CopyState = "idle" | "copied" | "failed";

// Client hook: the Clipboard API is only available in the browser.
export function useCopyToClipboard(resetMs = 2000) {
  const [state, setState] = useState<CopyState>("idle");

  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
      window.setTimeout(() => setState("idle"), resetMs);
    } catch {
      setState("failed");
    }
  }

  return { state, copy };
}
