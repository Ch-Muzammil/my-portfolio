import { ArrowUpRight } from "lucide-react";
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

  return (
    <Section id="about" labelledBy={headingId} bordered variant={variant}>
      <Container>
        <div className="about-layout">
          <Reveal>
            <div className="portrait-wrap">
              <div
                className="portrait portrait-placeholder"
                role="img"
                aria-label={content.portrait.alt}
              >
                <span>{content.portrait.initials}</span>
                <small>{content.portrait.note}</small>
              </div>
              <p className="portrait-caption">{content.portrait.caption}</p>
            </div>
          </Reveal>
          <div>
            <p className="eyebrow">
              <span className="text-primary">{content.number} /</span>
              {content.label}
            </p>
            <h2 id={headingId} className="section-title">
              {content.title}
              <br />
              <span className="text-primary">{content.accent}</span>
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
        </div>
        <Reveal>
          <div className="stats">
            {content.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <blockquote className="pull-quote">{content.quote}</blockquote>
        </Reveal>
      </Container>
    </Section>
  );
}
