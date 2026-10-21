import type { Project } from "@/types/content";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/features/projects/components/ProjectCard";

interface ProjectGridProps {
  projects: readonly Project[];
  size?: "lg" | "md";
  badge?: string;
}

export function ProjectGrid({ projects, size = "md", badge }: ProjectGridProps) {
  const columns = size === "lg" ? 2 : 3;

  return (
    <div className="project-grid" data-size={size}>
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index % columns}>
          <ProjectCard project={project} size={size} badge={badge} />
        </Reveal>
      ))}
    </div>
  );
}
