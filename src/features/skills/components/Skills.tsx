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
    <Section id="skills" labelledBy={headingId} bordered variant={variant}>
      <Container>
        <div className="skills-layout">
          <div className="skills-sticky">
            <p className="eyebrow">
              <span className="text-primary">{content.number} /</span>
              {content.label}
            </p>
            <h2 id={headingId} className="section-title">
              {titleLead}
              {titleRest ? (
                <>
                  <br />
                  {titleRest}
                </>
              ) : null}
            </h2>
            <p className="body-copy">{content.description}</p>
            <div className="tags">
              {content.traits.map((trait) => (
                <Chip key={trait}>{trait}</Chip>
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <div className="core-tiles">
                {content.core.map((skill) => (
                  <CoreTile key={skill.name} skill={skill} />
                ))}
              </div>
            </Reveal>
            <div className="skill-groups">
              {content.groups.map((group) => (
                <Reveal key={group.label}>
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
