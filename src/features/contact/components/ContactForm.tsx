"use client";

import { useEffect, useState, type BaseSyntheticEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import type { ContactContent } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { notify } from "@/components/ui/Toaster";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";

interface ContactFormProps {
  content: ContactContent;
  email: string;
}

type FormStatus = "idle" | "sending" | "sent" | "limited" | "error";

const HOLD_SECONDS = 60;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <span id={id} className="field-error">
      {message}
    </span>
  );
}

// Client leaf: validates with the shared schema, then posts and holds the button.
export function ContactForm({ content, email }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [holdFor, setHoldFor] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (holdFor <= 0) return;
    const id = window.setTimeout(() => {
      setHoldFor(0);
      setStatus("idle");
    }, holdFor * 1000);
    return () => window.clearTimeout(id);
  }, [holdFor]);

  async function submit(values: ContactValues, event?: BaseSyntheticEvent) {
    if (status === "sending" || status === "sent" || status === "limited") return;
    const form = event?.target instanceof HTMLFormElement ? event.target : null;
    const website = form ? String(new FormData(form).get("website") ?? "") : "";
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website }),
      });
      if (response.status === 429) {
        const body = (await response.json().catch(() => null)) as { retryAfter?: number } | null;
        const retryAfter =
          body && typeof body.retryAfter === "number" ? body.retryAfter : HOLD_SECONDS;
        setStatus("limited");
        setHoldFor(retryAfter);
        notify("notice", content.limitTitle, content.rateLimitNote);
        return;
      }
      if (!response.ok) {
        setStatus("error");
        notify("error", content.errorTitle, `${content.errorNote} ${email}.`);
        return;
      }
      form?.reset();
      reset();
      setStatus("sent");
      setHoldFor(HOLD_SECONDS);
      notify("success", content.sentTitle, content.sentNote);
    } catch {
      setStatus("error");
      notify("error", content.errorTitle, `${content.errorNote} ${email}.`);
    }
  }

  const held = status === "sending" || status === "sent" || status === "limited";

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit(submit)}>
      <label>
        {content.nameLabel}
        <input
          autoComplete="name"
          placeholder={content.namePlaceholder}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          {...register("name")}
        />
        <FieldError id="contact-name-error" message={errors.name?.message} />
      </label>
      <label>
        {content.emailLabel}
        <input
          type="email"
          autoComplete="email"
          placeholder={content.emailPlaceholder}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          {...register("email")}
        />
        <FieldError id="contact-email-error" message={errors.email?.message} />
      </label>
      <label>
        {content.messageLabel}
        <textarea
          placeholder={content.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          {...register("message")}
        />
        <FieldError id="contact-message-error" message={errors.message?.message} />
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
      <p className="form-note">{content.idleNote}</p>
    </form>
  );
}
