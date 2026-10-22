import { Contact } from "@/features/contact/components/Contact";
import { ProjectFilters } from "@/features/projects/components/ProjectFilters";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";
import { contact } from "@/content/contact";
import { projects, projectsContent } from "@/content/projects";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: projectsContent.meta.title,
  description: projectsContent.meta.description,
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow={`${projectsContent.number} / ${projectsContent.pageEyebrow}`}
        title={projectsContent.pageTitle}
        description={projectsContent.pageDescription}
      />
      <Section variant="full">
        <Container>
          <ProjectFilters
            projects={projects}
            filters={projectsContent.filters}
            allFilter={projectsContent.allFilter}
            label={projectsContent.filterLabel}
          />
        </Container>
      </Section>
      <Contact
        content={contact}
        email={site.email}
        phone={site.phone}
        whatsappHref={site.whatsappHref}
        location={site.location}
        social={site.social}
        variant="panel"
      />
    </>
  );
}
