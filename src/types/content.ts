export interface MetaContent {
  title: string;
  description: string;
}

export type BrandName =
  | "github"
  | "linkedin"
  | "react"
  | "nextjs"
  | "typescript"
  | "javascript"
  | "tailwind"
  | "figma"
  | "supabase"
  | "firebase";

export interface SocialLink {
  label: string;
  href: string;
  icon: Extract<BrandName, "github" | "linkedin">;
}

export interface SiteContent {
  name: string;
  initials: string;
  fullName: string;
  role: string;
  email: string;
  phone: string;
  whatsappHref: string;
  location: string;
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
  items: readonly { name: string; icon: BrandName }[];
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Gallery tile label and lightbox caption */
  title?: string;
  caption?: string;
}

export interface ProjectNote {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  kind: string;
  category: string;
  year: string;
  /** Public product URL; prefix with "TODO" to hide until it is live */
  liveUrl?: string;
  /** Card thumbnail — 1600×1000 */
  image: ProjectImage;
  /** Detail page cover — 2000×1250 */
  cover: ProjectImage;
  /** Extra case-study screens (dashboard, flow) — optional for now */
  gallery?: readonly ProjectImage[];
  caseImageAlt: string;
  metric: string;
  tags: readonly string[];
  description: string;
  challenge: string;
  solution: string;
  features: readonly string[];
  /** Grouped "What I built" cards; falls back to `features` when absent */
  highlights?: readonly ProjectNote[];
  architecture?: {
    stack: readonly { label: string; items: readonly string[] }[];
    decisions: readonly ProjectNote[];
  };
  outcomes?: {
    delivered: readonly string[];
    lesson?: string;
  };
  /** Optional overrides for the case-study facts rail */
  role?: string;
  type?: string;
  focus?: string;
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
    defaultRole: string;
    defaultType: string;
    defaultFocus: string;
    challenge: string;
    approach: string;
    highlights: string;
    year: string;
    stack: string;
    galleryEyebrow: string;
    galleryTitle: string;
    galleryHint: string;
    viewScreen: string;
    architectureEyebrow: string;
    architectureTitle: string;
    decisionsLabel: string;
    outcomesEyebrow: string;
    outcomesTitle: string;
    deliveredLabel: string;
    lessonLabel: string;
    nextProject: string;
    moreTitle: string;
    viewAll: string;
    visitLive: string;
    unavailableTitle: string;
    unavailableDescription: string;
  };
}

export interface SkillItem {
  name: string;
  level: string;
  icon: BrandName;
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
  employment?: string;
  company: string;
  location: string;
  highlights: readonly string[];
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
    downloads: readonly {
      label: string;
      href: string;
    }[];
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
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  sendingLabel: string;
  idleNote: string;
  sentNote: string;
  errorNote: string;
  rateLimitNote: string;
  subjectPrefix: string;
  bodyFrom: string;
  bodyEmail: string;
}

export interface FooterContent {
  tagline: string;
  availability: string;
  navigateLabel: string;
  connectLabel: string;
  resume: string;
  copyright: string;
  talk: string;
  talkHref: string;
  backToTop: string;
}
