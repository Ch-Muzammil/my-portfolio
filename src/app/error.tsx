"use client";

import Link from "next/link";
import { site } from "@/content/site";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// Client leaf: Next.js requires the root error boundary to be a Client Component.
export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <div className="status-page">
      <h1>{site.error.title}</h1>
      <p className="body-copy">{site.error.body}</p>
      <button type="button" className="ui-button btn-primary" onClick={reset}>
        {site.error.retry}
      </button>
      <Link href="/">{site.error.home}</Link>
    </div>
  );
}
