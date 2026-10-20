import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  suffix?: string;
  description?: string;
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
      <p className="eyebrow">
        {status ? <span className="status-dot" aria-hidden="true" /> : null}
        {eyebrow}
      </p>
      <h1>
        {title}
        {suffix ? <span className="text-primary">{suffix}</span> : null}
        {accent ? (
          <>
            <br />
            <span className="text-primary">{accent}</span>
          </>
        ) : null}
      </h1>
      {description ? <p className="body-copy">{description}</p> : null}
      {children}
    </Container>
  );
}
