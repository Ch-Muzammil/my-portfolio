import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { NavContent, SiteContent } from "@/types/content";
import { Button } from "@/components/ui/Button";
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
      <div className="page-container header-wrap">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label={nav.brandLabel}>
            <span className="brand-mark" aria-hidden="true">
              MH
            </span>
            <span className="brand-name">{site.name}</span>
          </Link>
          <ScrollSpyNav items={nav.items} label={nav.label} />
          <div className="header-actions">
            <Link href={nav.resumeHref} className="header-link">
              {nav.resume}
            </Link>
            <Button href={nav.talkHref} variant="primary" className="header-cta">
              {nav.talk}
              <ArrowUpRight aria-hidden="true" />
            </Button>
          </div>
          <MobileMenu nav={nav} />
        </div>
      </div>
    </HeaderBar>
  );
}
