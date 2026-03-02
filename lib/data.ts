import {
  BlogItem,
  ContactLink,
  ExperienceItem,
  NavItem,
  PlatformCard,
  Project,
  SkillCategory
} from "@/types";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Labs", href: "#labs" },
  { label: "CTF", href: "#ctf" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const skills: SkillCategory[] = [
  {
    title: "Cybersecurity",
    skills: [
      "Active Directory Exploitation",
      "Web Application Pentesting",
      "Network Pentesting",
      "VAPT",
      "OSINT",
      "Red Team Methodologies"
    ]
  },
  {
    title: "Technical",
    skills: ["Python", "JavaScript", "SQL", "Linux", "Git", "PostgreSQL"]
  },
  {
    title: "AI / ML",
    skills: [
      "ML Fundamentals",
      "AI Security Applications",
      "Data Analysis Basics"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "AI-based-IDS",
    description:
      "AI-driven Network Intrusion Detection System using CNN and LSTM models on UNSW-NB15, with a web dashboard for real-time threat visibility.",
    technologies: ["Python", "TensorFlow", "LSTM", "CNN", "UNSW-NB15"],
    learning:
      "Engineered end-to-end detection pipelines and evaluated model behavior across binary and multi-class attack classification.",
    githubUrl: "https://github.com/Gurupranesh006/AI-based-IDS",
    status: "Research Project"
  },
  {
    title: "AI-Based-Mini-VCS",
    description:
      "AI-assisted mini version control system built with DAG commit architecture, content-addressable storage, commit intelligence, and offline fallback.",
    technologies: ["Python", "DAG", "Version Control", "AI Security Review"],
    learning:
      "Strengthened systems design around immutable object storage, commit lineage, and secure developer workflows.",
    githubUrl: "https://github.com/Gurupranesh006/AI-Based-Mini-VCS",
    status: "Core Build"
  },
  {
    title: "Assembly-based-Secure-Data-Transmitor",
    description:
      "Low-level secure data transmission implementation in Assembly, focused on controlled data movement and protocol-level behavior.",
    technologies: ["Assembly", "Secure Data Transfer", "Systems Programming"],
    learning:
      "Gained deep control over memory-level operations and precision in security-sensitive instruction flows.",
    githubUrl: "https://github.com/Gurupranesh006/Assembly-based-Secure-Data-Transmitor",
    status: "Systems Security"
  },
  {
    title: "Portfolio",
    description:
      "Production-ready cybersecurity portfolio engineered with Next.js 14, TypeScript, Tailwind, and subtle motion-driven UX.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    learning:
      "Translated personal technical narrative into a fast, scalable, and deployment-ready web experience.",
    githubUrl: "https://github.com/Gurupranesh006/Portfolio",
    status: "Live Showcase"
  }
];

export const platforms: PlatformCard[] = [
  {
    title: "HackTheBox",
    points: [
      "Platform focus: realistic offensive labs",
      "Red team workflows and adversary simulation",
      "Machine ownership progress tracking"
    ],
    link: "https://app.hackthebox.com/public/users/1197641"
  },
  {
    title: "TryHackMe",
    points: [
      "Learning paths across offensive and defensive security",
      "Blue/Red fundamentals and practical scenarios",
      "Hands-on certifications and guided rooms"
    ],
    link: "https://tryhackme.com/p/Velaryx"
  }
];

export const experiences: ExperienceItem[] = [
  {
    role: "AI Intern",
    org: "Emberquest",
    period: "2024 (Completed)",
    summary:
      "Built ML-backed workflows for security-oriented use cases and applied automation tasks."
  },
  {
    role: "Member",
    org: "Accelerate RVCE",
    period: "2025 - Present",
    summary:
      "Currently contributing to technical initiatives and peer-led engineering activities."
  },
  {
    role: "Member",
    org: "Rotaract RVCE",
    period: "2025 - Present",
    summary:
      "Currently participating in community-facing projects with structured team execution."
  }
];

export const certifications: string[] = [
  "Jr Penetration Tester",
  "DCJSP",
  "Certified Network Security Practitioner",
  "AI/ML Training"
];

export const blogs: BlogItem[] = [
  {
    title: "Understanding Active Directory Attack Chains",
    href: "#"
  },
  {
    title: "Methodology for Solving HTB Machines",
    href: "#"
  },
  {
    title: "AI in Offensive Security",
    href: "#"
  }
];

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:kulkarnigurupranesh1@gmail.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gurupranesh-j-kulkarni-327708362/"
  },
  { label: "GitHub", href: "https://github.com/Gurupranesh006" },
  {
    label: "HackTheBox",
    href: "https://app.hackthebox.com/public/users/1197641"
  },
  { label: "TryHackMe", href: "https://tryhackme.com/p/Velaryx" },
  { label: "X", href: "https://x.com/Velaryx__" }
];