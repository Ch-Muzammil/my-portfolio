"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ContactContent } from "@/types/content";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  content: ContactContent;
  email: string;
}

type FormStatus = "idle" | "sending" | "sent" | "limited" | "error";

const HOLD_SECONDS = 60;

// Client leaf: posts the message, holds a steady button, and reports the result.
export function ContactForm({ content, email }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [holdFor, setHoldFor] = useState(0);

  useEffect(() => {
    if (holdFor <= 0) return;
    const id = window.setTimeout(() => {
      setHoldFor(0);
      setStatus("idle");
    }, holdFor * 1000);
    return () => window.clearTimeout(id);
  }, [holdFor]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || status === "sent" || status === "limited") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      if (response.status === 429) {
        const body = (await response.json().catch(() => null)) as { retryAfter?: number } | null;
        const retryAfter =
          body && typeof body.retryAfter === "number" ? body.retryAfter : HOLD_SECONDS;
        setStatus("limited");
        setHoldFor(retryAfter);
        return;
      }
      if (!response.ok) {
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
      setHoldFor(HOLD_SECONDS);
    } catch {
      setStatus("error");
    }
  }

  const feedback =
    status === "limited"
      ? content.rateLimitNote
      : status === "error"
        ? `${content.errorNote} ${email}.`
        : status === "sent"
          ? content.sentNote
          : content.idleNote;

  const held = status === "sending" || status === "sent" || status === "limited";

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        {content.nameLabel}
        <input name="name" autoComplete="name" required minLength={2} placeholder={content.namePlaceholder} />
      </label>
      <label>
        {content.emailLabel}
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder={content.emailPlaceholder}
        />
      </label>
      <label>
        {content.messageLabel}
        <textarea name="message" required minLength={10} placeholder={content.messagePlaceholder} />
      </label>
      <input
        name="website"
        className="contact-honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <Button
        type="submit"
        className="form-submit"
        data-state={status}
        disabled={held}
        aria-busy={status === "sending"}
      >
        <span className="form-submit-faces">
          <span data-face="idle">
            {content.submitLabel}
            <ArrowUpRight aria-hidden="true" />
          </span>
          <span data-face="sending">
            <span className="form-dots" aria-label={content.sendingLabel}>
              <i />
              <i />
              <i />
            </span>
          </span>
          <span data-face="sent">Sent</span>
        </span>
      </Button>
      <p className="form-note" role="status">
        {feedback}
      </p>
    </form>
  );
}
