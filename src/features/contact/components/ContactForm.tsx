"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ContactContent } from "@/types/content";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  content: ContactContent;
  email: string;
}

// Client leaf: the form opens the visitor's mail app and reports that status.
export function ContactForm({ content, email }: ContactFormProps) {
  const [feedback, setFeedback] = useState(content.idleNote);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`${content.subjectPrefix}${name}`);
    const body = encodeURIComponent(
      `${content.bodyFrom}${name}\n${content.bodyEmail}${from}\n\n${message}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setFeedback(content.sentNote);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        {content.nameLabel}
        <input name="name" autoComplete="name" required placeholder={content.namePlaceholder} />
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
        <textarea name="message" required placeholder={content.messagePlaceholder} />
      </label>
      <Button type="submit" className="form-submit">
        {content.submitLabel}
        <ArrowUpRight aria-hidden="true" />
      </Button>
      <p className="form-note" role="status">
        {feedback}
      </p>
    </form>
  );
}
