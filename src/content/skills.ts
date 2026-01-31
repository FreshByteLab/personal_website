import type { SkillGroup } from "./types";

export const skillsSection = {
  title: "Skills",
  subtitle: "Cross-asset advisory with quantitative depth and technical fluency.",
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
        "Financial Modeling"
      ]
    },
    {
      label: "Tech",
      items: ["Python", "R", "Access/SQL", "VBA", "JavaScript"]
    },
    {
      label: "Tools",
      items: [
        "Bloomberg",
        "Avaloq",
        "MS Office",
        "Eviews",
        "VS Code",
        "Git",
        "Confluence"
      ]
    },
    {
      label: "Languages",
      items: ["German (native)", "English (C2)", "Spanish (B2)", "French (B1)"]
    }
  ] satisfies SkillGroup[]
};
