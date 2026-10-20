import type { AboutContent } from "@/types/content";

export const about: AboutContent = {
  meta: {
    title: "About me",
    description:
      "Meet Muzammal, a software engineer based in Lahore with a passion for accessible interfaces, design systems, and thoughtful experiences.",
  },
  number: "03",
  label: "The human behind the code",
  title: "Engineer by trade.",
  accent: "Curious by nature.",
  paragraphs: [
    "I’m Muzammal, a software engineer based in Lahore. I enjoy connecting the dots between design and development, creating experiences that are as thoughtful under the hood as they are on the screen.",
    "Away from the keyboard, I’m usually exploring a new idea, appreciating good design, or finding my next favorite cup of coffee.",
  ],
  moreLabel: "A little more about me",
  moreHref: "/about",
  portrait: {
    initials: "MH",
    note: "Photo coming soon",
    alt: "Muzammal Hussain at his desk holding a cup of coffee",
    caption: "Muzammal Hussain — Lahore, PK",
    image: {
      src: "/images/about-portrait.webp",
      width: 1024,
      height: 1536,
    },
  },
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "6+", label: "Projects shipped" },
    { value: "98", label: "Lighthouse score" },
  ],
  quote: "“The best interfaces don’t just look good. They make life a little easier.”",
  page: {
    eyebrow: "A little more about me",
    title: "People first.",
    accent: "Pixels second.",
    description:
      "I believe great software begins with empathy. Understanding the person on the other side of the screen is what makes the work meaningful.",
  },
};
