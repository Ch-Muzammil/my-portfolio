"use client";

import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface CopyEmailButtonProps {
  email: string;
  copyLabel: string;
  copiedLabel: string;
  copyAria: string;
  fallback: string;
}

// Client leaf: writing to the clipboard needs a click handler in the browser.
export function CopyEmailButton({
  email,
  copyLabel,
  copiedLabel,
  copyAria,
  fallback,
}: CopyEmailButtonProps) {
  const { state, copy } = useCopyToClipboard();

  return (
    <div className="copy-email">
      <Button
        type="button"
        variant="quiet"
        aria-label={copyAria}
        onClick={() => {
          void copy(email);
        }}
      >
        {state === "copied" ? (
          <>
            <Check className="text-primary" aria-hidden="true" />
            {copiedLabel}
          </>
        ) : (
          <>
            <Copy aria-hidden="true" />
            {copyLabel}
          </>
        )}
      </Button>
      {state === "failed" ? (
        <p className="form-note" role="status">
          {fallback} {email}
        </p>
      ) : null}
    </div>
  );
}
