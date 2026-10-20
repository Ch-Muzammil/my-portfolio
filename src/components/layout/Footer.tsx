import Link from "next/link";
import { ArrowUp, ArrowUpRight, FileText, Mail } from "lucide-react";
import type { FooterContent, NavContent, SiteContent } from "@/types/content";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Container } from "@/components/ui/Container";
import { isPublishableHref } from "@/lib/links";

interface FooterProps {
  footer: FooterContent;
  site: SiteContent;
  nav: NavContent;
}

export function Footer({ footer, site, nav }: FooterProps) {
  const links = site.social.filter((item) => isPublishableHref(item.href));

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div className="footer-intro">
            <p className="footer-tagline">{footer.tagline}</p>
            <p className="pill">
              <span className="status-dot" aria-hidden="true" />
              {footer.availability}
            </p>
          </div>
          <nav className="footer-column" aria-label={footer.navigateLabel}>
            <p className="footer-heading">{footer.navigateLabel}</p>
            <ul>
              {nav.items.map((item) => (
                <li key={item.id}>
                  <Link href={`/#${item.id}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-column">
            <p className="footer-heading">{footer.connectLabel}</p>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>
                  <Mail aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              {links.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <BrandIcon name={item.icon} />
                    {item.label}
                    <ArrowUpRight className="footer-external" aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li>
                <Link href={nav.resumeHref}>
                  <FileText aria-hidden="true" />
                  {footer.resume}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-word" aria-hidden="true">
          {site.name.split(" ").map((word) => (
            <span key={word}>{word}</span>
          ))}
        </p>
        <div className="footer-inner">
          <p>{footer.copyright}</p>
          <div className="footer-links">
            <span className="footer-location">{site.location}</span>
            <Link href={footer.talkHref}>
              {footer.talk}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <a href="#main-content" className="footer-top-link" aria-label={footer.backToTop}>
              <ArrowUp aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
