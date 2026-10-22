import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { ContactContent, SiteContent, SocialLink } from "@/types/content";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
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
  phone: SiteContent["phone"];
  whatsappHref: SiteContent["whatsappHref"];
  location: SiteContent["location"];
  social: readonly SocialLink[];
  variant?: "panel" | "page";
}

export function Contact({
  content,
  email,
  phone,
  whatsappHref,
  location,
  social,
  variant = "panel",
}: ContactProps) {
  const links = social.filter((item) => isPublishableHref(item.href));

  if (variant === "page") {
    return (
      <Container className="contact-layout">
        <Reveal variant="left">
          <div className="tile contact-details">
            <p className="body-copy">{content.pageDescription}</p>
            <div className="contact-email">
              <span className="contact-icon" aria-hidden="true">
                <Mail />
              </span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className="contact-phone">
              <span className="contact-icon" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                {phone}
              </a>
            </div>
            <CopyEmailButton
              email={email}
              copyLabel={content.copyLabel}
              copiedLabel={content.copiedLabel}
              copyAria={content.copyAria}
              fallback={content.clipboardFallback}
            />
            <p className="contact-location">
              <span className="contact-icon" aria-hidden="true">
                <MapPin />
              </span>
              {location}
            </p>
            {links.length > 0 ? (
              <div className="contact-socials">
                {links.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                    <BrandIcon name={item.icon} />
                    {item.label}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>
        <Reveal variant="right" delay={1}>
          <ContactForm content={content} email={email} />
        </Reveal>
      </Container>
    );
  }

  return (
    <Section id="contact" labelledBy="contact-cta">
      <Container>
        <Reveal variant="scale">
          <div className="ink-panel contact-panel" data-spotlight>
            <span className="contact-orb" aria-hidden="true" />
            <div className="contact-main">
              <p className="pill pill-ink">
                <span className="status-dot" aria-hidden="true" />
                {content.panelEyebrow}
              </p>
              <h2 id="contact-cta" className="contact-heading">
                {content.panelTitle} <span className="text-accent">{content.panelAccent}</span>
              </h2>
              <p className="body-copy">{content.panelDescription}</p>
            </div>
            <div className="contact-side">
              <div className="contact-actions">
                <Button href={content.primaryHref}>
                  {content.primaryAction}
                  <ArrowUpRight aria-hidden="true" />
                </Button>
              </div>
              <ul className="contact-links">
                <li>
                  <a href={`mailto:${email}`} aria-label={content.emailAria}>
                    <Mail aria-hidden="true" />
                    <span>{email}</span>
                    <ArrowUpRight className="contact-link-arrow" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${phone}`}>
                    <WhatsAppIcon />
                    <span>{phone}</span>
                    <ArrowUpRight className="contact-link-arrow" aria-hidden="true" />
                  </a>
                </li>
                {links.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <BrandIcon name={item.icon} />
                      <span>{item.label}</span>
                      <ArrowUpRight className="contact-link-arrow" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
