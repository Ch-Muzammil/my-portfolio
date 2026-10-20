import type { HeroContent } from "@/types/content";

export const hero: HeroContent = {
  meta: {
    title: "Thoughtful interfaces. Beautiful experiences.",
    description:
      "Muzammal Hussain is a software engineer with 3+ years of experience crafting accessible, polished web experiences with React, Next.js, and TypeScript.",
  },
  availability: "Available for new opportunities",
  lines: [
    { text: "Hey, I’m Muzammal", accent: false },
    { text: "Software Engineer.", accent: true },
  ],
  description:
    "I turn ideas into thoughtful digital experiences. 3+ years of building interfaces that look beautiful, feel intuitive, and work for everyone.",
  primaryAction: "Explore my work",
  primaryHref: "/work",
  secondaryAction: "Let’s talk",
  secondaryHref: "/contact",
  stats: [
    { label: "Years", value: "3+" },
    { label: "Projects", value: "6+" },
    { label: "Open to", value: "Remote" },
  ],
  caption: "A little design. A lot of intention.",
  image: {
    src: "/images/hero-sculpture.webp",
    width: 1536,
    height: 1024,
    alt: "",
  },
};
