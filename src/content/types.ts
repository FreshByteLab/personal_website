export type NavItem = {
  label: string;
  href: string;
  id: string;
};

export type Metric = {
  label: string;
  value: string;
  helper?: string;
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  dates: string;
  location?: string;
  bullets: string[];
  skills?: string[];
  achievements?: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Strength = {
  title: string;
  description: string;
  icon: string;
};

export type LanguageSkill = {
  name: string;
  level: string;
  proficiency: number;
};

export type CertificationItem = {
  short: string;
  full?: string;
  url?: string;
  logoStyle?: "light" | "dark-center";
  logo?: {
    src: string;
    alt: string;
  };
};

export type AboutHighlight = {
  title?: string;
  text: string;
  logo?: {
    src: string;
    alt: string;
  };
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  cta?: string;
  featured?: boolean;
};

export type MilestoneItem = {
  period: string;
  title: string;
  description: string;
  targetId?: string;
  category?: "bank" | "education" | "tech" | "certification";
  topics?: string[];
  bullets?: string[];
  url?: string;
  logo?: {
    src: string;
    alt: string;
  };
};

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  year: string;
  topics?: string[];
  logo?: {
    src: string;
    alt: string;
  };
  url?: string;
};
