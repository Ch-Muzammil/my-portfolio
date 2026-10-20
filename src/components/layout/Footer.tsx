import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { FooterContent, SocialLink } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { isPublishableHref } from "@/lib/links";

interface FooterProps {
  footer: FooterContent;
  social: readonly SocialLink[];
}

export function Footer({ footer, social }: FooterProps) {
  const links = social.filter((item) => isPublishableHref(item.href));

  return (
    <footer className="site-footer">
      <Container className="footer-inner">
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
        </div>
      </Container>
    </footer>
  );
}
