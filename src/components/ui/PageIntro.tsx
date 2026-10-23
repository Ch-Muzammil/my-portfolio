import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  suffix?: string;
  description?: string | readonly string[];
  status?: boolean;
  children?: ReactNode;
}

export function PageIntro({
  eyebrow,
  title,
  accent,
  suffix,
  description,
  status = false,
  children,
}: PageIntroProps) {
  return (
    <Container className="page-intro">
      <p className="pill">
        {status ? <span className="status-dot" aria-hidden="true" /> : null}
        {eyebrow}
      </p>
      <h1>
        <span className="line">
          <span className="line-inner">
            {title}
            {suffix ? <span className="text-primary">{suffix}</span> : null}
          </span>
        </span>
        {accent ? (
          <span className="line">
            <span className="line-inner text-primary" style={{ animationDelay: "0.12s" }}>
              {accent}
            </span>
          </span>
        ) : null}
      </h1>
      <div className="page-intro-body">
        {description
          ? (Array.isArray(description) ? description : [description]).map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))
          : null}
        {children}
      </div>
    </Container>
  );
}
