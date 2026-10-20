import type { Project } from "@/types/content";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/features/projects/components/ProjectCard";

interface ProjectGridProps {
  projects: readonly Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index % 3}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
