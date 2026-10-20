import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  label?: string;
  labelledBy?: string;
  variant?: "compact" | "full";
}

export function Section({
  id,
  children,
  className,
  bordered = false,
  label,
  labelledBy,
  variant = "compact",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      aria-labelledby={labelledBy}
      data-variant={variant}
      className={cn("section", bordered && "section-bordered", className)}
    >
      {children}
    </section>
  );
}
