import type { ProjectItem } from "./types";

export const projectsSection = {
  title: "Projects",
  subtitle: "Selected builds that connect risk signals to faster decisions.",
  items: [
    {
      title: "CrashO'Clock",
      description:
        "Featured risk intelligence console that flags regime shifts using volatility, spreads, and liquidity stress indicators.",
      tags: ["Risk", "Alerts", "Macro", "Python"],
      href: "#contact",
      cta: "Request Demo",
      featured: true
    },
    {
      title: "Credit Signal Stack",
      description:
        "Unified pipeline that blends issuer fundamentals, ratings momentum, and pricing anomalies into daily signals.",
      tags: ["Credit", "Signals", "Automation"]
    },
    {
      title: "Portfolio Risk Lens",
      description:
        "Scenario engine for curve shifts, spread shocks, and liquidity drawdowns with instant attribution.",
      tags: ["Risk", "Stress Testing", "Attribution"]
    },
    {
      title: "AI Research Assistant",
      description:
        "Domain-tuned retrieval workflows that shorten research cycles and improve issuer coverage.",
      tags: ["AI", "Research", "Productivity"]
    },
    {
      title: "Liquidity Drilldown",
      description:
        "Dashboard tracking dealer depth, bid-ask dispersion, and selloff sensitivity across sectors.",
      tags: ["Liquidity", "Markets", "Monitoring"]
    }
  ] satisfies ProjectItem[]
};
