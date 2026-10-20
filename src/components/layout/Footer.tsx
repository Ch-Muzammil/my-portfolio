import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import type { FooterContent, SocialLink } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { isPublishableHref } from "@/lib/links";

interface FooterProps {
  footer: FooterContent;
  social: readonly SocialLink[];
  name: string;
}

export function Footer({ footer, social, name }: FooterProps) {
  const links = social.filter((item) => isPublishableHref(item.href));

  return (
    <footer className="site-footer">
      <Container>
        <p className="footer-word" aria-hidden="true">
          {name.split(" ").map((word) => (
            <span key={word}>{word}</span>
          ))}
        </p>
        <div className="footer-inner">
          <p>{footer.copyright}</p>
          <div className="footer-links">
            {links.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
            <Link href={footer.talkHref}>
              {footer.talk}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <a href="#main-content" className="footer-top" aria-label={footer.backToTop}>
              <ArrowUp aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
