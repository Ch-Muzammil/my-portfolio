import type { Project, ProjectsContent } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectGrid } from "@/features/projects/components/ProjectGrid";

interface SelectedWorkProps {
  content: ProjectsContent;
  featured: readonly Project[];
  projects: readonly Project[];
}

export function SelectedWork({ content, featured, projects }: SelectedWorkProps) {
  return (
    <Section id="work" label={content.label}>
      <Container>
        <SectionHeader
          number={content.number}
          label={content.label}
          title={content.title}
          muted={content.muted}
          href={content.linkHref}
          linkLabel={content.linkLabel}
        />
        <div className="selected-work">
          <ProjectGrid projects={featured} size="lg" badge={content.featuredLabel} />
          <ProjectGrid projects={projects} />
        </div>
      </Container>
    </Section>
  );
}
