import type { SkillsContent } from "@/types/content";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CoreTile } from "@/features/skills/components/CoreTile";
import { SkillGroup } from "@/features/skills/components/SkillGroup";

interface SkillsProps {
  content: SkillsContent;
  variant?: "compact" | "full";
}

export function Skills({ content, variant = "compact" }: SkillsProps) {
  const headingId = "toolkit";
  const [titleLead, titleRest] = content.title.split("\n");

  return (
    <Section id="skills" labelledBy={headingId} variant={variant}>
      <Container>
        <div className="ink-panel skills-layout">
          <span className="ink-glow" aria-hidden="true" />
          <Reveal className="skills-intro" variant="left">
            <p className="eyebrow">
              <span className="eyebrow-index">{content.number}</span>
              {content.label}
            </p>
            <h2 id={headingId} className="section-title">
              {titleLead}
              {titleRest ? <span className="text-accent">{titleRest}</span> : null}
            </h2>
            <p className="body-copy">{content.description}</p>
            <div className="tags">
              {content.traits.map((trait) => (
                <Chip key={trait}>{trait}</Chip>
              ))}
            </div>
          </Reveal>
          <div className="skills-body">
            <div className="core-tiles">
              {content.core.map((skill, index) => (
                <Reveal key={skill.name} variant="scale" delay={index}>
                  <CoreTile skill={skill} />
                </Reveal>
              ))}
            </div>
            <div className="skill-groups">
              {content.groups.map((group, index) => (
                <Reveal key={group.label} delay={index}>
                  <SkillGroup group={group} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
