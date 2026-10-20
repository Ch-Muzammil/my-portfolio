import type { Project } from "@/types/content";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/features/projects/components/ProjectCard";

interface ProjectGridProps {
  projects: readonly Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <Reveal key={project.slug}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
