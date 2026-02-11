import type { AboutHighlight, Metric, NavItem } from "./types";

export const site = {
  name: "Sandro Zwyssig",
  displayName: "Dr. Sandro Zwyssig, RAI, FRM, ERP, CFTe, PCAP",
  role: "Financial Markets Expert",
  domain: "sandrozwyssig.ch",
  url: "https://sandrozwyssig.ch",
  hosting: {
    registrar: "Hostpoint AG",
    dnssec: "DNSSEC enabled"
  },
  meta: {
    title: "Sandro Zwyssig | Portfolio & CV",
    description:
      "Financial Markets Expert with a strong quantitative background in fixed income, CHF investment-grade credit research, portfolio analytics, and risk-aware portfolio implementation."
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
      "Bridging financial markets expertise with quantitative analysis and technology to deliver clarity, impact, and results.",
    ctaPrimary: { label: "View Projects", href: "#projects" },
    ctaSecondary: { label: "Contact", href: "#contact" }
  },
  careerStart: "2007-05-01",
  metrics: [
    {
      value: "dynamic",
      label: "Years of Experience",
      helper: "Swiss wealth management & cross-asset advisory"
    },
    {
      value: "10 +",
      label: "Certifications",
      helper: "CFA, FRM, CAIA, PRM, CFTe, and more"
    },
    {
      value: "5",
      label: "Languages",
      helper: "German, English, Spanish, French, Italian"
    },
    {
      value: "6",
      label: "Asset Classes",
      helper: "FI, Credit, Equities, FX, Commodities, Derivatives"
    }
  ] satisfies Metric[],
  about: {
    title: "About",
    subtitle: "Multi-asset expertise meets quantitative rigour and modern technology.",
    paragraph:
      "I am an experienced multi-asset expert with a strong focus on fixed income and financial modelling. My structured and systematic approach has been instrumental in identifying financial opportunities and mitigating financial risks, enabling me to effectively design, conceptualize, and optimize new and existing business projects and processes. Additionally, I excel in deconstructing complex financial topics, making them accessible to both individual clients and larger audiences through clear, concise written and verbal communication.",
    highlights: [
      { text: "Quantitative research combining fixed income expertise with AI/ML applications" },
      { text: "Cross-asset advisory spanning macro analysis, derivatives, and structured products" },
      { text: "Strong IT foundation: Python, databases, Bloomberg API, and GenAI tooling" },
      { text: "Published DBA research on CoCo bonds, wavelets, and Bayesian networks" }
    ] as AboutHighlight[]
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
