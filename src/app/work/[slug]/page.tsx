import { notFound } from "next/navigation";
import { Contact } from "@/features/contact/components/Contact";
import { CaseStudy } from "@/features/projects/components/CaseStudy";
import { contact } from "@/content/contact";
import { projects, projectsContent } from "@/content/projects";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";
import type { Project } from "@/types/content";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return createPageMetadata({
      title: projectsContent.caseStudy.unavailableTitle,
      description: projectsContent.caseStudy.unavailableDescription,
      path: `/work/${slug}`,
    });
  }
  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  if (!project) notFound();
  const moreProjects = Array.from(
    { length: Math.min(2, projects.length - 1) },
    (_, offset) => projects[(projectIndex + offset + 1) % projects.length],
  ).filter((item): item is Project => item !== undefined);

  return (
    <>
      <CaseStudy
        project={project}
        moreProjects={moreProjects}
        content={projectsContent.caseStudy}
        backHref={projectsContent.linkHref}
      />
      <Contact
        content={contact}
        email={site.email}
        location={site.location}
        social={site.social}
        variant="panel"
      />
    </>
  );
}
