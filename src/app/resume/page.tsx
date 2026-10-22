import { Experience } from "@/features/experience/components/Experience";
import { ResumeDownloads } from "@/features/experience/components/ResumeDownloads";
import { Skills } from "@/features/skills/components/Skills";
import { PageIntro } from "@/components/ui/PageIntro";
import { experience } from "@/content/experience";
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
        <ResumeDownloads resume={experience.resume} />
      </PageIntro>
      <Experience content={experience} variant="full" />
      <Skills content={skills} variant="full" />
    </>
  );
}
