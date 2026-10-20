import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/content";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const visibleTags = project.tags.slice(0, 3);
  const extra = project.tags.length - visibleTags.length;

  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 33vw"
          className="project-image"
        />
      </div>
      <div className="project-info">
        <div>
          <h3>
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
          <p>{project.subtitle}</p>
        </div>
        <span className="project-arrow" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </div>
      <Badge>{project.kind}</Badge>
      <div className="tags">
        {visibleTags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
        {extra > 0 ? <Chip>+{extra}</Chip> : null}
      </div>
    </article>
  );
}
