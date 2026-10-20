import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/content";
import { Chip } from "@/components/ui/Chip";

interface FeaturedProjectProps {
  project: Project;
  indexLabel: string;
}

export function FeaturedProject({ project, indexLabel }: FeaturedProjectProps) {
  return (
    <article className="featured-card">
      <div className="project-image-wrap">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 48rem) 100vw, 58vw"
          className="project-image"
        />
      </div>
      <div className="featured-body">
        <p className="featured-index">{indexLabel}</p>
        <h3>
          <Link href={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.slice(0, 3).map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        <p className="featured-metric">{project.metric}</p>
      </div>
    </article>
  );
}
