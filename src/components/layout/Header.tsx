import Link from "next/link";
import type { NavContent, SiteContent } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ScrollSpyNav } from "@/components/layout/ScrollSpyNav";

interface HeaderProps {
  site: SiteContent;
  nav: NavContent;
}

export function Header({ site, nav }: HeaderProps) {
  return (
    <HeaderBar>
      <Container className="header-inner">
        <Link href="/" className="brand" aria-label={nav.brandLabel}>
          <span className="brand-mark">m.</span>
          <span className="brand-name">{site.name}</span>
        </Link>
        <ScrollSpyNav items={nav.items} label={nav.label} />
        <div className="header-actions">
          <Link href={nav.resumeHref} className="nav-link">
            {nav.resume}
          </Link>
          <Button href={nav.talkHref} variant="primary">
            {nav.talk}
          </Button>
        </div>
        <Button href={nav.talkHref} variant="primary" className="mobile-talk">
          {nav.talk}
        </Button>
        <MobileMenu nav={nav} />
      </Container>
    </HeaderBar>
  );
}
