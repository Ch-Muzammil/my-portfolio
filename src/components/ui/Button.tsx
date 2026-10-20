import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "quiet" | "ghost";

interface ButtonBase {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = ButtonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

interface ButtonAsLink extends ButtonBase {
  href: string;
  download?: boolean;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  quiet: "border border-border-strong bg-transparent text-foreground hover:bg-secondary",
  ghost: "bg-transparent text-foreground hover:bg-secondary",
};

function buttonClass(variant: ButtonVariant, className?: string) {
  return cn("ui-button", variantClass[variant], className);
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? "primary";

  if (props.href !== undefined) {
    const className = buttonClass(variant, props.className);
    if (props.download || props.href.startsWith("mailto:") || props.href.startsWith("http")) {
      return (
        <a href={props.href} className={className} download={props.download ? "" : undefined}>
          {props.children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  const { className, children, ...rest } = props;
  delete rest.variant;
  return (
    <button className={buttonClass(variant, className)} {...rest}>
      {children}
    </button>
  );
}
