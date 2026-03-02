export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  learning: string;
  githubUrl: string;
};

export type PlatformCard = {
  title: string;
  points: string[];
  link: string;
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  summary: string;
};

export type BlogItem = {
  title: string;
  href: string;
};

export type ContactLink = {
  label: string;
  href: string;
};