import { Download } from "lucide-react";
import { Experience } from "@/features/experience/components/Experience";
import { Skills } from "@/features/skills/components/Skills";
import { Button } from "@/components/ui/Button";
import { PageIntro } from "@/components/ui/PageIntro";
import { experience } from "@/content/experience";
import { site } from "@/content/site";
import { skills } from "@/content/skills";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: experience.resume.meta.title,
  description: experience.resume.meta.description,
  path: "/resume",
});

export default function ResumePage() {
  return (
    <>
      <PageIntro eyebrow={experience.resume.eyebrow} title={experience.resume.title} suffix=".">
        <p className="body-copy">
          {experience.resume.summary}
          <br />
          {experience.resume.skills}
        </p>
        <Button href={site.resumePath} download>
          {experience.downloadLabel}
          <Download aria-hidden="true" />
        </Button>
        <p className="form-note">{experience.resume.note}</p>
      </PageIntro>
      <Experience content={experience} variant="full" />
      <Skills content={skills} variant="full" />
    </>
  );
}
