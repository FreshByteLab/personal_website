import type { ExperienceItem } from "./types";

export const experienceSection = {
  title: "Experience",
  subtitle: "Credit strategy, portfolio construction, and research automation.",
  items: [
    {
      role: "Head of Credit Strategy",
      company: "Global Asset Manager",
      dates: "2018 - Present",
      bullets: [
        "Lead multi-sector credit allocation across investment-grade and high-yield mandates.",
        "Built a regime-aware risk dashboard tying macro signals to issuer-level spread decisions.",
        "Introduced Python-based automation that reduced weekly reporting cycles by 60%.",
        "Partnered with portfolio managers to refine downside protection and liquidity buffers."
      ]
    },
    {
      role: "Senior Credit Portfolio Manager",
      company: "European Investment Firm",
      dates: "2013 - 2018",
      bullets: [
        "Managed relative-value strategies across corporate bonds and credit derivatives.",
        "Implemented sector-tilt frameworks to control beta and capture carry opportunities.",
        "Developed issuer-scoring models that blended fundamentals, ESG, and market signals.",
        "Mentored analysts on scenario analysis, stress testing, and risk attribution."
      ]
    },
    {
      role: "Credit & Risk Analyst",
      company: "Investment Bank",
      dates: "2008 - 2013",
      bullets: [
        "Delivered issuer deep-dives and cash-flow models for investment committees.",
        "Supported portfolio construction with duration, curve, and spread risk analytics.",
        "Automated data pipelines for rating migration and default-loss monitoring."
      ]
    }
  ] satisfies ExperienceItem[]
};
