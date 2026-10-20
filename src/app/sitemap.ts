import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/work",
    "/about",
    "/experience",
    "/contact",
    "/resume",
    ...projects.map((project) => `/work/${project.slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
  }));
}
