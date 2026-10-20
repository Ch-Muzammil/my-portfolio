import type { Project, ProjectsContent } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeaturedProject } from "@/features/projects/components/FeaturedProject";
import { ProjectGrid } from "@/features/projects/components/ProjectGrid";

interface SelectedWorkProps {
  content: ProjectsContent;
  featured: Project;
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
        <Reveal>
          <FeaturedProject
            project={featured}
            indexLabel={`${content.number} / ${content.featuredLabel}`}
          />
        </Reveal>
        <ProjectGrid projects={projects} />
      </Container>
    </Section>
  );
}
