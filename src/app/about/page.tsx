import { About } from "@/features/about/components/About";
import { Contact } from "@/features/contact/components/Contact";
import { Skills } from "@/features/skills/components/Skills";
import { PageIntro } from "@/components/ui/PageIntro";
import { about } from "@/content/about";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { skills } from "@/content/skills";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: about.meta.title,
  description: about.meta.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow={about.page.eyebrow}
        title={about.page.title}
        accent={about.page.accent}
        description={about.page.description}
      />
      <About content={about} variant="full" />
      <Skills content={skills} variant="full" />
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
