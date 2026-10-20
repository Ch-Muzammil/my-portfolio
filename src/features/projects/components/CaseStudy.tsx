import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import type { Project, ProjectsContent } from "@/types/content";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

interface CaseStudyProps {
  project: Project;
  content: ProjectsContent["caseStudy"];
  backHref: string;
}

export function CaseStudy({ project, content, backHref }: CaseStudyProps) {
  return (
    <Container className="page-intro case-study">
      <Link href={backHref} className="back-link">
        <ArrowLeft aria-hidden="true" />
        {content.back}
      </Link>
      <p className="pill case-eyebrow">
        {project.category} · {content.concept} · {project.year}
      </p>
      <h1>
        <span className="line">
          <span className="line-inner">{project.title}</span>
        </span>
      </h1>
      <div className="page-intro-body">
        <p className="body-copy">{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      </div>
      <Reveal variant="scale">
        <div className="case-cover-wrap" data-spotlight>
          <Image
            src={project.image.src}
            alt={project.caseImageAlt}
            width={project.image.width}
            height={project.image.height}
            sizes="(max-width: 80rem) 100vw, 74rem"
            className="case-cover"
            priority
          />
        </div>
      </Reveal>
      <div className="case-grid">
        <Reveal variant="left">
          <aside className="tile case-facts">
            <p className="eyebrow">{content.overview}</p>
            <ul>
              <li>{content.role}</li>
              <li>{content.type}</li>
              <li>{content.focus}</li>
            </ul>
            <p className="featured-metric">{project.metric}</p>
          </aside>
        </Reveal>
        <div className="case-body">
          <Reveal>
            <section className="case-section">
              <h2>{content.challenge}</h2>
              <p className="body-copy">{project.challenge}</p>
            </section>
          </Reveal>
          <Reveal>
            <section className="case-section">
              <h2>{content.approach}</h2>
              <p className="body-copy">{project.solution}</p>
            </section>
          </Reveal>
          <Reveal>
            <section className="case-section">
              <h2>{content.highlights}</h2>
              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <span className="feature-check" aria-hidden="true">
                      <Check />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </div>
    </Container>
  );
}
