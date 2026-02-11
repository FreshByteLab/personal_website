import type { ProjectItem } from "./types";

export const projectsSection = {
  title: "Projects",
  subtitle: "Applied tools and workflows built across strategy, analytics, and data.",
  items: [
    {
      title: "Ex-Ante / Ex-Post Analytics",
      description:
        "Proprietary portfolio analytics and performance attribution tools built with Bloomberg API to strengthen signal extraction, risk monitoring, and scenario analysis for multi-currency credit portfolios.",
      tags: ["Bloomberg API", "Attribution", "Scenario Analysis", "Risk Monitoring"]
    },
    {
      title: "Fixed Income Optimization Toolset",
      description:
        "Institutional-grade toolset for portfolio optimization across fixed income sub-segments, integrating relative-value analysis, security selection, and asset allocation workflows.",
      tags: ["Portfolio Optimization", "Asset Allocation", "Relative-Value Analysis"]
    },
    {
      title: "Bond Issue Coverage Toolbox",
      description:
        "End-to-end workflow for new bond issue coverage and publication production, delivering 60-80 client-ready and investment-committee-ready publications annually.",
      tags: ["Fixed Income", "Content Creation", "MS SQL", "Access"]
    },
    {
      title: "Risk Monitoring Interfaces",
      description:
        "Databases, bond-finder tools, and risk-monitoring interfaces built to enhance research efficiency across credit capital structures and hybrid instruments.",
      tags: ["Financial Data Engineering", "ETL", "Credit", "Risk Monitoring"]
    },
    {
      title: "Synthetic Data Generation",
      description:
        "Synthetic data generation and data migration tooling with implementation into securities accounting systems using Python, MySQL, PostgreSQL, and GenAI APIs.",
      tags: ["Data Engineering", "Python", "GenAI", "MySQL", "PostgreSQL"]
    }
  ] as ProjectItem[]
};
