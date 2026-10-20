import { ArrowRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import type { HeroContent, SiteContent, SocialLink } from "@/types/content";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { isPublishableHref } from "@/lib/links";

interface HeroProps {
  hero: HeroContent;
  location: SiteContent["location"];
  social: readonly SocialLink[];
}

export function Hero({ hero, location, social }: HeroProps) {
  const headingId = "hero-heading";
  const links = social.filter((item) => isPublishableHref(item.href));

  return (
    <section className="hero" aria-labelledby={headingId}>
      <div className="hero-backdrop" aria-hidden="true">
        <span className="hero-orb hero-orb-a" />
        <span className="hero-orb hero-orb-b" />
      </div>
      <Container className="hero-shell">
        <div className="hero-top">
          <p className="pill">
            <span className="status-dot" aria-hidden="true" />
            {hero.availability}
          </p>
          <p className="hero-meta">
            <MapPin aria-hidden="true" />
            {location}
          </p>
        </div>
        <div className="hero-layout">
          <div className="hero-copy">
            <h1 id={headingId} className="hero-heading">
              {hero.lines.map((line, index) => (
                <span key={line.text} className="line">
                  <span className="line-inner" style={{ animationDelay: `${0.1 + index * 0.12}s` }}>
                    {line.accent ? <span className="hero-name">{line.text}</span> : line.text}
                  </span>
                </span>
              ))}
            </h1>
            <p className="hero-description">{hero.description}</p>
            <div className="hero-actions">
              <Button href={hero.primaryHref}>
                {hero.primaryAction}
                <ArrowUpRight aria-hidden="true" />
              </Button>
              <Button href={hero.secondaryHref} variant="quiet">
                {hero.secondaryAction}
                <ArrowRight aria-hidden="true" />
              </Button>
              {links.length > 0 ? (
                <div className="hero-socials">
                  {links.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="icon-button"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                    >
                      <BrandIcon name={item.icon} />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
            <dl className="hero-stats">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="hero-portrait" data-spotlight>
            <span className="hero-disc" aria-hidden="true" />
            <span className="hero-ring" aria-hidden="true" />
            <Image
              className="hero-photo"
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              priority
              sizes="(max-width: 40rem) 80vw, (max-width: 64rem) 45vw, 34rem"
            />
            <figcaption className="hero-caption">
              <Sparkles aria-hidden="true" />
              {hero.caption}
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
