import type { Metric, NavItem } from "./types";

export const site = {
  name: "Sandro Zwyssig",
  role: "Fixed Income & Credit Portfolio Manager",
  domain: "sandrozwyssig.ch",
  url: "https://sandrozwyssig.ch",
  hosting: {
    registrar: "Hostpoint AG",
    dnssec: "DNSSEC enabled"
  },
  meta: {
    title: "Sandro Zwyssig | Portfolio & CV",
    description:
      "Personal brand and CV for Sandro Zwyssig, focused on fixed income, credit, portfolio management, risk, and AI-driven research."
  },
  nav: [
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Certifications", href: "#certifications", id: "certifications" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" }
  ] satisfies NavItem[],
  hero: {
    headline: "Welcome!",
    subheadline:
      "I manage credit portfolios and build research workflows that connect macro signals, issuer fundamentals, and disciplined risk controls.",
    ctaPrimary: { label: "View Projects", href: "#projects" },
    ctaSecondary: { label: "Contact", href: "#contact" }
  },
  metrics: [
    {
      value: "16+",
      label: "Years of Experience",
      helper: "Portfolio management & research"
    }
  ] satisfies Metric[],
  about: {
    title: "About",
    subtitle: "Focused on resilient credit portfolios and pragmatic automation.",
    paragraph:
      "Sandro Zwyssig blends fixed income investing with applied quantitative research. He focuses on building resilient credit portfolios, sharpening relative-value insights, and automating decision support for investment teams.",
    highlights: [
      "Investment-grade and high-yield credit focus",
      "Portfolio construction, risk budgeting, and relative value",
      "Python automation for research, reporting, and monitoring"
    ]
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
    email: "sandro@sandrozwyssig.ch"
  },
  portrait: {
    src: "/portrait.png",
    alt: "Portrait of Sandro Zwyssig"
  }
};
