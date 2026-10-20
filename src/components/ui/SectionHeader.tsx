import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

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
    <Reveal className="section-heading">
      <div>
        <p className="eyebrow">
          <span className="eyebrow-index">{number}</span>
          {label}
        </p>
        <h2 id={headingId}>
          {title} {muted ? <span className="text-muted">{muted}</span> : null}
        </h2>
      </div>
      {href && linkLabel ? (
        <Link href={href} className="section-link">
          {linkLabel}
          <span className="section-link-icon" aria-hidden="true">
            <ArrowUpRight />
          </span>
        </Link>
      ) : null}
    </Reveal>
  );
}
