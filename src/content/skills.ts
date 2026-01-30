import type { SkillGroup } from "./types";

export const skillsSection = {
  title: "Skills",
  subtitle: "Markets expertise paired with quant, tech, and tooling depth.",
  groups: [
    {
      label: "Markets",
      items: [
        "Investment Grade",
        "High Yield",
        "Credit Derivatives",
        "Rates & Curves",
        "Liquidity Management"
      ]
    },
    {
      label: "Quant",
      items: [
        "Relative-Value Modeling",
        "Scenario Analysis",
        "Stress Testing",
        "Risk Attribution",
        "Portfolio Optimization"
      ]
    },
    {
      label: "Tech",
      items: ["Python", "Pandas", "NumPy", "SQL", "APIs"]
    },
    {
      label: "Tools",
      items: ["Bloomberg", "FactSet", "Jupyter", "Git", "Power BI"]
    }
  ] satisfies SkillGroup[]
};
