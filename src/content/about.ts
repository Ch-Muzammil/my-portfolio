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
  accent: "Product-minded by nature.",
  paragraphs: [
    "I’m Muzammal, a software engineer based in Lahore, Pakistan. I build web applications that bring together thoughtful design, solid engineering, and real business needs. I enjoy turning complex requirements into intuitive experiences backed by reliable logic.",
    "For me, good engineering goes beyond writing code. It means understanding the problem, thinking through edge cases, making deliberate trade-offs, and building products I can stand behind. Whether I’m developing a new feature or refining an existing workflow, I care about the details that make a product genuinely useful.",
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
    { value: "10", label: "Projects shipped" },
    { value: "98", label: "Lighthouse score" },
  ],
  quote: "“Great software doesn’t just solve problems. It makes the solution feel effortless.”",
  page: {
    eyebrow: "A little more about me",
    title: "Thoughtful engineering.",
    accent: "Meaningful impact.",
    description: [
      "I believe great software starts with understanding people. The best solutions come from listening carefully, asking the right questions, and understanding the problem before jumping into code.",
      "I enjoy exploring ideas, thinking through product flows, and finding the balance between a smooth user experience and reliable engineering. I pay attention to the details, consider edge cases, and care about building products that work as well in practice as they look on screen.",
      "Outside of work, you’ll usually find me exploring new ideas, appreciating good design, or enjoying a cup of coffee.",
    ],
  },
};
