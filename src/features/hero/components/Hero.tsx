import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import type { HeroContent, SiteContent } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface HeroProps {
  hero: HeroContent;
  location: SiteContent["location"];
}

export function Hero({ hero, location }: HeroProps) {
  const headingId = "hero-heading";

  return (
    <section className="hero" aria-labelledby={headingId}>
      <div className="hero-glow" aria-hidden="true" />
      <Image
        className="hero-art"
        src={hero.image.src}
        alt={hero.image.alt}
        width={hero.image.width}
        height={hero.image.height}
        priority
        sizes="(max-width: 40rem) 100vw, 39rem"
      />
      <Container className="hero-inner">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {hero.availability}
          </p>
          <h1 id={headingId} className="hero-heading">
            {hero.lines.map((line) => (
              <span key={line.text} className={line.accent ? "line hero-name" : "line"}>
                {line.text}
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
          </div>
          <dl className="hero-stats">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
          <p className="hero-meta">
            <MapPin aria-hidden="true" />
            {location}
          </p>
        </div>
        <p className="hero-caption">{hero.caption}</p>
      </Container>
    </section>
  );
}
