import type { HeroContent } from "@/types/content";

export const hero: HeroContent = {
  meta: {
    title: "Thoughtful interfaces. Beautiful experiences.",
    description:
      "Muzammal Hussain is a software engineer building web products with React and Next.js, from the interface through to APIs and data.",
  },
  availability: "Available for new opportunities",
  lines: [
    { text: "Hey, I’m Muzammal", accent: false },
    { text: "Software Engineer.", accent: true },
  ],
  description:
    "I build web products with React and Next.js, from the interface through to APIs, realtime, and the data layer.",
  primaryAction: "Explore my work",
  primaryHref: "/work",
  secondaryAction: "Let’s talk",
  secondaryHref: "/contact",
  stats: [
    { label: "Years", value: "3+" },
    { label: "Projects", value: "10" },
    { label: "Remote · Onsite", value: "Full-time" },
  ],
  caption: "A little design. A lot of intention.",
  image: {
    src: "/images/hero-portrait.webp",
    width: 1024,
    height: 1536,
    alt: "Portrait of Muzammal Hussain in a navy sweater, arms crossed",
  },
};
