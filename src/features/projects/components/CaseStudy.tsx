import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project, ProjectsContent } from "@/types/content";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";

interface CaseStudyProps {
  project: Project;
  content: ProjectsContent["caseStudy"];
  backHref: string;
}

export function CaseStudy({ project, content, backHref }: CaseStudyProps) {
  return (
    <Container className="page-intro">
      <Link href={backHref} className="section-link">
        <ArrowLeft aria-hidden="true" />
        {content.back}
      </Link>
      <p className="eyebrow case-eyebrow">
        {project.category} / {content.concept} / {project.year}
      </p>
      <h1>{project.title}</h1>
      <p className="body-copy">{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
      <Image
        src={project.image.src}
        alt={project.caseImageAlt}
        width={project.image.width}
        height={project.image.height}
        sizes="(max-width: 80rem) 100vw, 74rem"
        className="case-cover"
      />
      <div className="case-grid">
        <div>
          <p className="eyebrow">{content.overview}</p>
          <p className="body-copy case-facts">
            {content.role}
            <br />
            {content.type}
            <br />
            {content.focus}
          </p>
        </div>
        <div>
          <h2>{content.challenge}</h2>
          <p className="body-copy">{project.challenge}</p>
          <h2>{content.approach}</h2>
          <p className="body-copy">{project.solution}</p>
          <h2>{content.highlights}</h2>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>
                <ArrowUpRight aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
