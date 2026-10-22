import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import type { Project, ProjectsContent } from "@/types/content";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { isPublishableHref } from "@/lib/links";
import { CaseGallery } from "./CaseGallery";

interface CaseStudyProps {
  project: Project;
  moreProjects?: readonly Project[];
  content: ProjectsContent["caseStudy"];
  backHref: string;
}

const pad = (value: number) => String(value).padStart(2, "0");

export function CaseStudy({ project, moreProjects = [], content, backHref }: CaseStudyProps) {
  const role = project.role ?? content.defaultRole;
  const type = project.type ?? content.defaultType;
  const facts = [
    { label: content.role, value: role },
    { label: content.type, value: type },
    { label: content.focus, value: project.focus ?? content.defaultFocus },
    { label: content.year, value: project.year },
  ];
  const heroMeta = [
    { label: content.role, value: role },
    { label: content.year, value: project.year },
    { label: content.type, value: type },
  ];
  const gallery = project.gallery ?? [];
  const { architecture, outcomes, highlights } = project;
  const sections = [
    { title: content.challenge, body: project.challenge },
    { title: content.approach, body: project.solution },
  ];

  return (
    <Container className="page-intro case-study">
      <Link href={backHref} className="back-link">
        <ArrowLeft aria-hidden="true" />
        {content.back}
      </Link>

      <header className="case-hero">
        <p className="pill case-eyebrow">
          {project.category} · {content.concept}
        </p>
        <h1>{project.title}</h1>
        <p className="case-subtitle">{project.subtitle}</p>
        <ul className="case-hero-meta">
          {heroMeta.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              {item.value}
            </li>
          ))}
        </ul>
        <p className="body-copy case-intro">{project.description}</p>
        {project.liveUrl && isPublishableHref(project.liveUrl) ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-button btn-primary case-live"
          >
            {content.visitLive}
            <ArrowUpRight aria-hidden="true" />
          </a>
        ) : null}
      </header>

      <Reveal variant="scale">
        <div className="case-cover-wrap" data-spotlight>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            quality={90}
            sizes="(max-width: 80rem) 100vw, 74rem"
            className="case-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </Reveal>

      <div className="case-grid">
        <aside className="case-rail">
          <div className="case-facts">
            <p className="eyebrow">{content.overview}</p>
            <dl>
              {facts.map((fact) => (
                <div key={fact.label} className="case-fact">
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
              {architecture ? null : (
                <div className="case-fact">
                  <dt>{content.stack}</dt>
                  <dd className="tags">
                    {project.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
            <p className="case-metric">{project.metric}</p>
          </div>
        </aside>

        <div className="case-body">
          {sections.map((section, index) => (
            <Reveal key={section.title}>
              <section className="case-section">
                <span className="case-section-index">{pad(index + 1)}</span>
                <h2>{section.title}</h2>
                <p className="body-copy">{section.body}</p>
              </section>
            </Reveal>
          ))}
          <Reveal>
            <section className="case-section">
              <span className="case-section-index">{pad(sections.length + 1)}</span>
              <h2>{content.highlights}</h2>
              {highlights && highlights.length > 0 ? (
                <ul className="case-cards">
                  {highlights.map((item) => (
                    <li key={item.title} className="case-card">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </li>
                  ))}
                </ul>
              ) : (
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
              )}
            </section>
          </Reveal>
        </div>
      </div>

      {gallery.length > 0 ? (
        <section className="case-block" aria-labelledby="case-gallery-title">
          <Reveal>
            <div className="case-head">
              <div>
                <p className="eyebrow">{content.galleryEyebrow}</p>
                <h2 id="case-gallery-title">{content.galleryTitle}</h2>
              </div>
              <p className="case-head-hint">{content.galleryHint}</p>
            </div>
          </Reveal>
          <Reveal variant="scale">
            <CaseGallery shots={gallery} viewLabel={content.viewScreen} />
          </Reveal>
        </section>
      ) : null}

      {architecture ? (
        <section className="case-block" aria-labelledby="case-architecture-title">
          <Reveal>
            <div className="case-head">
              <div>
                <p className="eyebrow">{content.architectureEyebrow}</p>
                <h2 id="case-architecture-title">{content.architectureTitle}</h2>
              </div>
            </div>
          </Reveal>
          <div className="case-arch">
            <Reveal>
              <dl className="case-stack">
                {architecture.stack.map((group) => (
                  <div key={group.label} className="case-stack-group">
                    <dt>{group.label}</dt>
                    <dd className="tags">
                      {group.items.map((item) => (
                        <Chip key={item}>{item}</Chip>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={1}>
              <div>
                <p className="case-label">{content.decisionsLabel}</p>
                <ol className="case-decisions">
                  {architecture.decisions.map((decision, index) => (
                    <li key={decision.title}>
                      <span className="case-section-index">{pad(index + 1)}</span>
                      <div>
                        <h3>{decision.title}</h3>
                        <p>{decision.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {outcomes ? (
        <section className="case-block" aria-labelledby="case-outcomes-title">
          <Reveal>
            <div className="case-head">
              <div>
                <p className="eyebrow">{content.outcomesEyebrow}</p>
                <h2 id="case-outcomes-title">{content.outcomesTitle}</h2>
              </div>
            </div>
          </Reveal>
          <div className="case-outcomes">
            <Reveal>
              <div>
                <p className="case-label">{content.deliveredLabel}</p>
                <ul className="case-delivered">
                  {outcomes.delivered.map((item) => (
                    <li key={item}>
                      <span className="feature-check" aria-hidden="true">
                        <Check />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            {outcomes.lesson ? (
              <Reveal delay={1}>
                <figure className="case-lesson">
                  <p className="case-label">{content.lessonLabel}</p>
                  <blockquote>{outcomes.lesson}</blockquote>
                </figure>
              </Reveal>
            ) : null}
          </div>
        </section>
      ) : null}

      {moreProjects.length > 0 ? (
        <section className="case-block" aria-labelledby="case-more-title">
          <Reveal>
            <div className="case-head">
              <div>
                <p className="eyebrow">{content.nextProject}</p>
                <h2 id="case-more-title">{content.moreTitle}</h2>
              </div>
              <Link href={backHref} className="case-more-all">
                {content.viewAll}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <ul className="case-more">
            {moreProjects.map((item, index) => (
              <li key={item.slug}>
                <Reveal delay={index}>
                  <Link href={`/work/${item.slug}`} className="case-next">
                    <div className="case-next-media">
                      <Image
                        src={item.image.src}
                        alt=""
                        width={item.image.width}
                        height={item.image.height}
                        sizes="(max-width: 40rem) 90vw, (max-width: 80rem) 45vw, 36rem"
                        className="case-next-image"
                      />
                    </div>
                    <div className="case-next-copy">
                      <p className="case-label">
                        {item.category} · {item.year}
                      </p>
                      <h3>{item.title}</h3>
                      <p className="body-copy">{item.subtitle}</p>
                    </div>
                    <span className="case-next-arrow" aria-hidden="true">
                      <ArrowUpRight />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </Container>
  );
}
