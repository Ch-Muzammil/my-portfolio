"use client";

import { Check, Clock, MailWarning, X } from "lucide-react";
import { Toaster as Sonner, toast as sonner } from "sonner";

type ToastTone = "success" | "error" | "notice";

const icons = {
  success: Check,
  error: MailWarning,
  notice: Clock,
} as const;

function ToastCard({
  id,
  tone,
  title,
  description,
}: {
  id: string | number;
  tone: ToastTone;
  title: string;
  description?: string;
}) {
  const Icon = icons[tone];

  return (
    <div className={`app-toast app-toast-${tone}`}>
      <span className="app-toast-icon" aria-hidden="true">
        <Icon />
      </span>
      <div className="app-toast-copy">
        <p className="app-toast-title">{title}</p>
        {description ? <p className="app-toast-body">{description}</p> : null}
      </div>
      <button type="button" className="app-toast-close" aria-label="Dismiss" onClick={() => sonner.dismiss(id)}>
        <X aria-hidden="true" />
      </button>
    </div>
  );
}

export function notify(tone: ToastTone, title: string, description?: string) {
  sonner.custom((id) => <ToastCard id={id} tone={tone} title={title} description={description} />, {
    duration: tone === "error" ? 7000 : 5200,
  });
}

export function Toaster() {
  return (
    <Sonner
      position="top-center"
      offset={{ top: "6.25rem" }}
      mobileOffset={{ top: "5.5rem" }}
      gap={10}
      visibleToasts={3}
      toastOptions={{ unstyled: true }}
    />
  );
}
