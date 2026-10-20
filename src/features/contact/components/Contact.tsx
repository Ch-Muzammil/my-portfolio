import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { ContactContent, SiteContent, SocialLink } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { isPublishableHref } from "@/lib/links";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { CopyEmailButton } from "@/features/contact/components/CopyEmailButton";

interface ContactProps {
  content: ContactContent;
  email: SiteContent["email"];
  location: SiteContent["location"];
  social: readonly SocialLink[];
  variant?: "panel" | "page";
}

export function Contact({ content, email, location, social, variant = "panel" }: ContactProps) {
  const links = social.filter((item) => isPublishableHref(item.href));

  if (variant === "page") {
    return (
      <Container className="contact-layout">
        <div>
          <p className="body-copy">{content.pageDescription}</p>
          <p className="contact-email">
            <Mail aria-hidden="true" />
            <a href={`mailto:${email}`}>{email}</a>
            <CopyEmailButton
              email={email}
              copyLabel={content.copyLabel}
              copiedLabel={content.copiedLabel}
              copyAria={content.copyAria}
              fallback={content.clipboardFallback}
            />
          </p>
          <p className="body-copy contact-location">
            <MapPin aria-hidden="true" />
            {location}
          </p>
          <p className="form-note">{content.sampleNote}</p>
        </div>
        <ContactForm content={content} email={email} />
      </Container>
    );
  }

  return (
    <Section id="contact" labelledBy="contact-cta">
      <Container>
        <Reveal>
          <div className="contact-panel">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              {content.panelEyebrow}
            </p>
            <h2 id="contact-cta" className="contact-heading">
              {content.panelTitle}
              <br />
              <span className="text-primary">{content.panelAccent}</span>
            </h2>
            <p className="body-copy">{content.panelDescription}</p>
            <div className="contact-actions">
              <Button href={content.primaryHref}>
                {content.primaryAction}
                <ArrowUpRight aria-hidden="true" />
              </Button>
              <CopyEmailButton
                email={email}
                copyLabel={content.copyLabel}
                copiedLabel={content.copiedLabel}
                copyAria={content.copyAria}
                fallback={content.clipboardFallback}
              />
              {links.map((item) => (
                <a
                  key={item.label}
                  className="icon-button"
                  href={item.href}
                  aria-label={item.label}
                >
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
              <a className="icon-button" href={`mailto:${email}`} aria-label={content.emailAria}>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
