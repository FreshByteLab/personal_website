import type { ProjectItem } from "./types";

export const projectsSection = {
  title: "Projects",
  subtitle: "Applied tools and workflows built across strategy, analytics, and data.",
  items: [
    {
      title: "Ex-Ante / Ex-Post Analytics",
      description:
        "Portfolio analytics toolkit built with Bloomberg API to strengthen attribution, scenario testing, and signal extraction.",
      tags: ["Bloomberg API", "Attribution", "Scenario Analysis"]
    },
    {
      title: "Fixed Income Optimization Toolset",
      description:
        "Toolset for portfolio optimization across fixed income sub-segments and asset allocation.",
      tags: ["Portfolio Optimization", "Asset Allocation", "Fixed Income"]
    },
    {
      title: "Bond Issue Coverage Toolbox",
      description:
        "Workflow for new issue coverage and publication production, supporting 60-80 client-ready pieces per year.",
      tags: ["Fixed Income", "Research", "Publishing"]
    },
    {
      title: "Risk Monitoring Interfaces",
      description:
        "Databases and bond-finder tooling to streamline coverage across credit capital structures.",
      tags: ["Databases", "Credit", "Monitoring"]
    },
    {
      title: "Synthetic Data Generation",
      description:
        "Synthetic data generation with implementation into securities accounting systems.",
      tags: ["Data Engineering", "Python", "GenAI"]
    }
  ] satisfies ProjectItem[]
};
