import type { AboutHighlight, Metric, NavItem } from "./types";

export const site = {
  name: "Sandro Zwyssig",
  displayName: "Dr. Sandro Zwyssig, RAI, FRM, ERP, CFTe, PCAP",
  role: "",
  domain: "sandrozwyssig.ch",
  url: "https://sandrozwyssig.ch",
  hosting: {
    registrar: "Hostpoint AG",
    dnssec: "DNSSEC enabled"
  },
  meta: {
    title: "Sandro Zwyssig | Portfolio & CV",
    description:
      "Senior Investment Advisor with a strong quantitative background in fixed income, macro analysis, and risk-aware portfolio implementation."
  },
  nav: [
    { label: "About", href: "#about", id: "about" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Certifications", href: "#certifications", id: "certifications" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" }
  ] satisfies NavItem[],
  hero: {
    headline: "Welcome",
    subheadline:
      "I'm a seasoned multi-asset expert with a passion for financial innovation. My expertise spans fixed-income securities, financial modeling, and leveraging artificial intelligence to uncover opportunities, manage risks, and optimize processes. With a strong foundation in IT - ranging from programming to database management and AI applications - I thrive on creating innovative solutions that drive value in the financial sector. Whether it's simplifying complex financial concepts or developing transformative strategies, my goal is to deliver clarity, impact, and results.",
    ctaPrimary: { label: "View Projects", href: "#projects" },
    ctaSecondary: { label: "Contact", href: "#contact" }
  },
  metrics: [
    {
      value: "16 +",
      label: "Years of Experience",
      helper: "Swiss wealth management & cross-asset advisory"
    }
  ] satisfies Metric[],
  about: {
    title: "About",
    subtitle: "Quantitative, cross-asset advisory with a Swiss wealth focus.",
    paragraph:
      "Expertise spans macro analysis, investment strategy, security selection, and ongoing advisory portfolio monitoring, including derivatives and structured solutions. Sandro presents market views and CIO perspectives with clarity, supporting client decisions through disciplined, risk-aware portfolio implementation.",
    highlights: [
      { text: "Quantitative research combining fixed income expertise with AI/ML applications" },
      { text: "Cross-asset advisory spanning macro analysis, derivatives, and structured products" },
      { text: "Strong IT foundation: Python, databases, Bloomberg API, and GenAI tooling" },
      { text: "Published DBA research on CoCo bonds, wavelets, and Bayesian networks" }
    ] satisfies AboutHighlight[]
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/sandro-zwyssig-7814858/",
    github: "https://github.com/FreshByteLab",
    email: "sandro@zwyssig.info"
  },
  portrait: {
    src: "/portrait.jpg",
    alt: "Portrait of Sandro Zwyssig"
  }
};
