import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/content";
import { Chip } from "@/components/ui/Chip";

interface FeaturedProjectProps {
  project: Project;
  indexLabel: string;
}

export function FeaturedProject({ project, indexLabel }: FeaturedProjectProps) {
  return (
    <article className="featured-card" data-spotlight>
      <div className="project-image-wrap">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 64rem) 100vw, 60vw"
          className="project-image"
        />
      </div>
      <div className="featured-body">
        <div className="featured-meta">
          <span className="featured-index">
            <span className="status-dot" aria-hidden="true" />
            {indexLabel}
          </span>
          <span className="featured-year">{project.year}</span>
        </div>
        <h3>
          <Link href={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="featured-subtitle">{project.subtitle}</p>
        <p className="body-copy">{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        <div className="featured-footer">
          <p className="featured-metric">{project.metric}</p>
          <span className="project-arrow" aria-hidden="true">
            <ArrowUpRight />
          </span>
        </div>
      </div>
    </article>
  );
}
