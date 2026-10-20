import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
}

export function createPageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const canonical = new URL(path, site.url).toString();
  const documentTitle = `${title} | ${site.name} — ${site.role}`;
  const socialTitle = `${title} | ${site.name}`;

  return {
    title: { absolute: documentTitle },
    description,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
