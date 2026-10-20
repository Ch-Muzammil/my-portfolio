export interface MetaContent {
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteContent {
  name: string;
  fullName: string;
  role: string;
  email: string;
  location: string;
  resumePath: string;
  url: string;
  title: string;
  description: string;
  skipToContent: string;
  social: readonly SocialLink[];
  notFound: {
    code: string;
    title: string;
    body: string;
    home: string;
  };
  error: {
    title: string;
    body: string;
    retry: string;
    home: string;
  };
}

export interface NavItem {
  name: string;
  id: string;
}

export interface NavContent {
  label: string;
  mobileLabel: string;
  open: string;
  close: string;
  brandLabel: string;
  talk: string;
  talkHref: string;
  resume: string;
  resumeHref: string;
  viewResume: string;
  items: readonly NavItem[];
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroLine {
  text: string;
  accent: boolean;
}

export interface HeroContent {
  meta: MetaContent;
  availability: string;
  lines: readonly HeroLine[];
  description: string;
  primaryAction: string;
  primaryHref: string;
  secondaryAction: string;
  secondaryHref: string;
  stats: readonly HeroStat[];
  caption: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

export interface TechStripContent {
  label: string;
  accessibleName: string;
  items: readonly string[];
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  kind: string;
  category: string;
  year: string;
  image: ProjectImage;
  caseImageAlt: string;
  metric: string;
  tags: readonly string[];
  description: string;
  challenge: string;
  solution: string;
  features: readonly string[];
}

export interface ProjectsContent {
  meta: MetaContent;
  number: string;
  label: string;
  title: string;
  muted: string;
  linkLabel: string;
  linkHref: string;
  featuredLabel: string;
  pageEyebrow: string;
  pageTitle: string;
  pageDescription: string;
  filters: readonly string[];
  filterLabel: string;
  allFilter: string;
  caseStudy: {
    back: string;
    concept: string;
    overview: string;
    role: string;
    type: string;
    focus: string;
    challenge: string;
    approach: string;
    highlights: string;
    unavailableTitle: string;
    unavailableDescription: string;
  };
}

export interface SkillItem {
  name: string;
  level: string;
}

export interface SkillGroup {
  label: string;
  skills: readonly string[];
}

export interface SkillsContent {
  number: string;
  label: string;
  title: string;
  description: string;
  traits: readonly string[];
  core: readonly SkillItem[];
  groups: readonly SkillGroup[];
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutContent {
  meta: MetaContent;
  number: string;
  label: string;
  title: string;
  accent: string;
  paragraphs: readonly string[];
  moreLabel: string;
  moreHref: string;
  portrait: {
    initials: string;
    note: string;
    alt: string;
    caption: string;
    image?: {
      src: string;
      width: number;
      height: number;
    };
  };
  stats: readonly AboutStat[];
  quote: string;
  page: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
  };
}

export interface ExperienceItem {
  date: string;
  title: string;
  employment: string;
  company: string;
  description: string;
  tags: readonly string[];
  current: boolean;
}

export interface ExperienceContent {
  meta: MetaContent;
  number: string;
  label: string;
  title: string;
  muted: string;
  linkLabel: string;
  linkHref: string;
  downloadLabel: string;
  items: readonly ExperienceItem[];
  page: {
    eyebrow: string;
    title: string;
    description: string;
  };
  resume: {
    meta: MetaContent;
    eyebrow: string;
    title: string;
    summary: string;
    skills: string;
    note: string;
  };
}

export interface ContactContent {
  meta: MetaContent;
  panelEyebrow: string;
  panelTitle: string;
  panelAccent: string;
  panelDescription: string;
  primaryAction: string;
  primaryHref: string;
  copyLabel: string;
  copiedLabel: string;
  copyAria: string;
  clipboardFallback: string;
  emailAria: string;
  pageEyebrow: string;
  pageTitle: string;
  pageAccent: string;
  pageDescription: string;
  sampleNote: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  idleNote: string;
  sentNote: string;
  subjectPrefix: string;
  bodyFrom: string;
  bodyEmail: string;
}

export interface FooterContent {
  copyright: string;
  talk: string;
  talkHref: string;
  backToTop: string;
}
