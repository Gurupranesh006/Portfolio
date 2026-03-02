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
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
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
    title: "Active Directory Lab Setup",
    description:
      "Engineered an AD lab with attacker and victim machines to simulate post-exploitation paths and privilege escalation chains.",
    technologies: ["Windows Server", "PowerShell", "BloodHound", "Kali Linux"],
    learning:
      "Mapped attack paths and hardened weak privilege boundaries in domain environments.",
    githubUrl: "https://github.com"
  },
  {
    title: "Custom Netcat Tool (Python)",
    description:
      "Built a lightweight Python utility for secure listener/client interactions during internal red team simulation workflows.",
    technologies: ["Python", "Sockets", "CLI"],
    learning:
      "Improved low-level understanding of network I/O, packet flow, and operational scripting.",
    githubUrl: "https://github.com"
  },
  {
    title: "Web App VAPT Sample Assessment",
    description:
      "Performed a structured VAPT workflow against a test web application and documented findings with risk-prioritized recommendations.",
    technologies: ["Burp Suite", "OWASP Top 10", "Nmap"],
    learning:
      "Strengthened reporting discipline and remediation-focused offensive testing.",
    githubUrl: "https://github.com"
  },
  {
    title: "AI-based Intrusion Detection Mini Project",
    description:
      "Trained a small anomaly-detection pipeline for suspicious traffic classification using curated network telemetry.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    learning:
      "Bridged detection engineering with model behavior analysis for security use-cases.",
    githubUrl: "https://github.com"
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
    link: "https://www.hackthebox.com"
  },
  {
    title: "TryHackMe",
    points: [
      "Learning paths across offensive and defensive security",
      "Blue/Red fundamentals and practical scenarios",
      "Hands-on certifications and guided rooms"
    ],
    link: "https://tryhackme.com"
  }
];

export const experiences: ExperienceItem[] = [
  {
    role: "AI Intern",
    org: "Emberquest",
    period: "2025 - Present",
    summary:
      "Building ML-backed workflows for security-oriented use cases and applied automation tasks."
  },
  {
    role: "Member",
    org: "Accelerate RVCE",
    period: "2024 - Present",
    summary:
      "Contributing to technical initiatives and peer-led engineering activities."
  },
  {
    role: "Member",
    org: "Rotaract RVCE",
    period: "2024 - Present",
    summary:
      "Participating in community-facing projects with structured team execution."
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
    href: "/blog-active-directory-attack-chains"
  },
  {
    title: "Methodology for Solving HTB Machines",
    href: "/blog-htb-methodology"
  },
  {
    title: "AI in Offensive Security",
    href: "/blog-ai-offensive-security"
  }
];

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:gurupranesh@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "HackTheBox", href: "https://www.hackthebox.com" },
  { label: "TryHackMe", href: "https://tryhackme.com" }
];