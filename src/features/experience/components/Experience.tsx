import type { ExperienceContent } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/features/experience/components/Timeline";

interface ExperienceProps {
  content: ExperienceContent;
  variant?: "compact" | "full";
}

export function Experience({ content, variant = "compact" }: ExperienceProps) {
  return (
    <Section id="experience" label={content.label} variant={variant}>
      <Container>
        <SectionHeader
          number={content.number}
          label={content.label}
          title={content.title}
          muted={content.muted}
          href={content.linkHref}
          linkLabel={content.linkLabel}
        />
        <Timeline items={content.items} />
      </Container>
    </Section>
  );
}
