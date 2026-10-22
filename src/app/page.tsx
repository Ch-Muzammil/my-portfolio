import { About } from "@/features/about/components/About";
import { Contact } from "@/features/contact/components/Contact";
import { Experience } from "@/features/experience/components/Experience";
import { Hero } from "@/features/hero/components/Hero";
import { TechStrip } from "@/features/hero/components/TechStrip";
import { SelectedWork } from "@/features/projects/components/SelectedWork";
import { Skills } from "@/features/skills/components/Skills";
import { about } from "@/content/about";
import { contact } from "@/content/contact";
import { experience } from "@/content/experience";
import { hero } from "@/content/hero";
import { projects, projectsContent } from "@/content/projects";
import { site } from "@/content/site";
import { skills } from "@/content/skills";
import { techStrip } from "@/content/tech-strip";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: hero.meta.title,
  description: hero.meta.description,
  path: "/",
});

export default function HomePage() {
  const featured = projects.slice(0, 2);
  const more = projects.slice(2, 5);

  return (
    <>
      <Hero hero={hero} location={site.location} social={site.social} />
      <TechStrip content={techStrip} />
      <SelectedWork content={projectsContent} featured={featured} projects={more} />
      <Skills content={skills} variant="compact" />
      <About content={about} variant="compact" />
      <Experience content={experience} variant="compact" />
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
