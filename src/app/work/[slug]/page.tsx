import { notFound } from "next/navigation";
import { Contact } from "@/features/contact/components/Contact";
import { CaseStudy } from "@/features/projects/components/CaseStudy";
import { contact } from "@/content/contact";
import { projects, projectsContent } from "@/content/projects";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

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
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <CaseStudy
        project={project}
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
