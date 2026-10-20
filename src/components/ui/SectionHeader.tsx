import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  muted?: string;
  href?: string;
  linkLabel?: string;
  headingId?: string;
}

export function SectionHeader({
  number,
  label,
  title,
  muted,
  href,
  linkLabel,
  headingId,
}: SectionHeaderProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span className="text-primary">{number} /</span>
          {label}
        </p>
        <h2 id={headingId}>
          {title} {muted ? <span className="text-muted">{muted}</span> : null}
        </h2>
      </div>
      {href && linkLabel ? (
        <Link href={href} className="section-link">
          {linkLabel}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
