import type { NavContent } from "@/types/content";

export const nav: NavContent = {
  label: "Main navigation",
  mobileLabel: "Mobile navigation",
  open: "Open navigation",
  close: "Close navigation",
  brandLabel: "Muzammal Hussain home",
  talk: "Let’s talk",
  talkHref: "/#contact",
  resume: "Résumé",
  resumeHref: "/resume",
  viewResume: "View résumé",
  items: [
    { name: "Work", id: "work" },
    { name: "Skills", id: "skills" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ],
};
