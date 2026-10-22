import { Contact } from "@/features/contact/components/Contact";
import { Experience } from "@/features/experience/components/Experience";
import { ResumeDownloads } from "@/features/experience/components/ResumeDownloads";
import { PageIntro } from "@/components/ui/PageIntro";
import { contact } from "@/content/contact";
import { experience } from "@/content/experience";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: experience.meta.title,
  description: experience.meta.description,
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow={experience.page.eyebrow}
        title={experience.page.title}
        description={experience.page.description}
      >
        <ResumeDownloads resume={experience.resume} />
      </PageIntro>
      <Experience content={experience} variant="full" />
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
