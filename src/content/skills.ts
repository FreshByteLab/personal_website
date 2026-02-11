import type { Strength, SkillGroup, LanguageSkill } from "./types";

export const skillsSection = {
  title: "Skills",
  subtitle: "Cross-asset advisory with quantitative depth and technical fluency.",

  strengths: [
    {
      icon: "\u{1F4C8}",
      title: "Broad Investment Know-how",
      description:
        "Skill-set covering the whole asset management value chain: trading, strategy, and portfolio management."
    },
    {
      icon: "\u{1F4BB}",
      title: "IT & Programming",
      description:
        "Adept in manifold software applications and scripting languages with proven implementation experience."
    },
    {
      icon: "\u{1F6E1}\uFE0F",
      title: "Risk Modelling & Management",
      description:
        "Building pricing and risk models for single securities, portfolios, and asset classes."
    },
    {
      icon: "\u{1F4DD}",
      title: "Writing & Communication",
      description:
        "Creating publications in English and German including presentations to clients and advisors."
    },
    {
      icon: "\u{1F393}",
      title: "Passionate Learner",
      description:
        "Various professional designations and certifications as a passionate life-long learner."
    }
  ] satisfies Strength[],

  groups: [
    {
      label: "Markets",
      items: [
        "Fixed Income",
        "Credit",
        "Multi-Asset",
        "Derivatives",
        "Structured Solutions"
      ]
    },
    {
      label: "Quant",
      items: [
        "Macroeconomic Analysis",
        "Portfolio Construction",
        "Risk Management",
        "Security Selection",
        "Financial Modeling",
        "Relative-Value Analysis",
        "Performance Attribution"
      ]
    }
  ] satisfies SkillGroup[],

  technologies: [
    "R/Python",
    "VBA",
    "Access/SQL",
    "JavaScript",
    "MySQL",
    "PostgreSQL",
    "Bloomberg (BQL/BQNT)",
    "MS Office",
    "VS Code",
    "EViews",
    "Avaloq",
    "Git",
    "Confluence"
  ],

  languages: [
    { name: "German", level: "Native (C2)", proficiency: 100 },
    { name: "English", level: "Proficient (C2)", proficiency: 95 },
    { name: "Spanish", level: "Intermediate (B1)", proficiency: 40 },
    { name: "French", level: "Intermediate (B1)", proficiency: 40 },
    { name: "Italian", level: "Basic (A1)", proficiency: 15 }
  ] satisfies LanguageSkill[]
};
