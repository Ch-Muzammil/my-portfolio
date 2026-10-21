import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/content";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";

interface ProjectCardProps {
  project: Project;
  size?: "lg" | "md";
  badge?: string;
}

const imageSizes = {
  lg: "(max-width: 40rem) 100vw, (max-width: 80rem) 50vw, 38rem",
  md: "(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 25rem",
};

export function ProjectCard({ project, size = "md", badge }: ProjectCardProps) {
  const large = size === "lg";
  const visibleTags = project.tags.slice(0, large ? 3 : 2);
  const extra = project.tags.length - visibleTags.length;

  return (
    <article className="project-card" data-size={size} data-spotlight>
      <div className="project-image-wrap">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          quality={90}
          sizes={imageSizes[size]}
          className="project-image"
        />
        <Badge>{badge ?? project.kind}</Badge>
        <span className="project-arrow" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </div>
      <div className="project-info">
        <p className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </p>
        <h3>
          <Link href={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="project-subtitle">{project.subtitle}</p>
        {large ? <p className="project-description">{project.description}</p> : null}
      </div>
      <div className="project-foot">
        <div className="tags">
          {visibleTags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
          {extra > 0 ? <Chip>+{extra}</Chip> : null}
        </div>
        {large ? <p className="project-metric">{project.metric}</p> : null}
      </div>
    </article>
  );
}
