import { ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";
import type { AboutContent } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

interface AboutProps {
  content: AboutContent;
  variant?: "compact" | "full";
}

export function About({ content, variant = "compact" }: AboutProps) {
  const headingId = "about-heading";
  const { portrait } = content;

  return (
    <Section id="about" labelledBy={headingId} variant={variant}>
      <Container>
        <div className="about-bento">
          <Reveal className="about-portrait" variant="scale">
            {portrait.image ? (
              <figure className="tile tile-ink portrait portrait-photo" data-spotlight>
                <Image
                  src={portrait.image.src}
                  alt={portrait.alt}
                  width={portrait.image.width}
                  height={portrait.image.height}
                  quality={90}
                  sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 34vw, 26rem"
                />
                <figcaption className="portrait-caption">{portrait.caption}</figcaption>
              </figure>
            ) : (
              <div
                className="tile tile-ink portrait"
                role="img"
                aria-label={portrait.alt}
                data-spotlight
              >
                <span className="portrait-ring" aria-hidden="true" />
                <span className="portrait-initials">{portrait.initials}</span>
                <small>{portrait.note}</small>
                <p className="portrait-caption">{portrait.caption}</p>
              </div>
            )}
          </Reveal>
          <Reveal className="about-copy" delay={1}>
            <div className="tile about-text" data-spotlight>
              <p className="eyebrow">
                <span className="eyebrow-index">{content.number}</span>
                {content.label}
              </p>
              <h2 id={headingId} className="section-title">
                {content.title} <span className="text-primary">{content.accent}</span>
              </h2>
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph} className="body-copy">
                  {paragraph}
                </p>
              ))}
              {variant === "compact" ? (
                <Button href={content.moreHref} variant="quiet" className="about-more">
                  {content.moreLabel}
                  <ArrowUpRight aria-hidden="true" />
                </Button>
              ) : null}
            </div>
          </Reveal>
          <Reveal className="about-quote" delay={2}>
            <blockquote className="tile tile-accent pull-quote" data-spotlight>
              <Quote aria-hidden="true" />
              <p>{content.quote}</p>
            </blockquote>
          </Reveal>
          {content.stats.map((stat, index) => (
            <Reveal key={stat.label} className="about-stat" delay={index + 1}>
              <div className="tile stat-card" data-spotlight>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
