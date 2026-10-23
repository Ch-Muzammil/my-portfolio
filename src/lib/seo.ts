import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  /** Homepage only. The tab and Google title lead with the name, not the page line. */
  nameFirst?: boolean;
}

export function createPageMetadata({ title, description, path, nameFirst = false }: PageMetaInput): Metadata {
  const canonical = new URL(path, site.url).toString();
  const documentTitle = nameFirst ? site.title : `${title} | ${site.name} — ${site.role}`;
  const socialTitle = nameFirst ? site.title : `${title} | ${site.name}`;

  return {
    title: { absolute: documentTitle },
    description,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      type: "website",
      url: canonical,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

export function siteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: site.name,
        jobTitle: site.role,
        url: site.url,
        email: `mailto:${site.email}`,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
        sameAs: site.social.map((item) => item.href),
      },
      {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        description: site.description,
      },
    ],
  };
}
