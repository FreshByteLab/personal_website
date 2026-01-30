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
  role: string;
  company: string;
  dates: string;
  location?: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type CertificationItem = {
  short: string;
  full?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  cta?: string;
  featured?: boolean;
};
