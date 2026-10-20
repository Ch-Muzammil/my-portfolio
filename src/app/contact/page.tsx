import { Contact } from "@/features/contact/components/Contact";
import { PageIntro } from "@/components/ui/PageIntro";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: contact.meta.title,
  description: contact.meta.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow={contact.pageEyebrow}
        title={contact.pageTitle}
        accent={contact.pageAccent}
        status
      />
      <Contact
        content={contact}
        email={site.email}
        location={site.location}
        social={site.social}
        variant="page"
      />
    </>
  );
}
