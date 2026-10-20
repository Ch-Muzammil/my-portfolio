import { Contact } from "@/features/contact/components/Contact";
import { Experience } from "@/features/experience/components/Experience";
import { Button } from "@/components/ui/Button";
import { PageIntro } from "@/components/ui/PageIntro";
import { contact } from "@/content/contact";
import { experience } from "@/content/experience";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";
import { Download } from "lucide-react";

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
        <Button href={site.resumePath} download>
          {experience.downloadLabel}
          <Download aria-hidden="true" />
        </Button>
      </PageIntro>
      <Experience content={experience} variant="full" />
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
