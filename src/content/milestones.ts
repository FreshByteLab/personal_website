import type { MilestoneItem } from "./types";

export const milestonesSection = {
  title: "Milestones",
  subtitle: "Major academic and professional markers across the CV.",
  items: [
    {
      period: "2007\u20132011",
      title: "UBS Global Asset Management",
      description:
        "Multi-asset portfolio management for fund-of-funds and USD IG mandates.",
      targetId: "ubs"
    },
    {
      period: "2012\u20132013",
      title: "Eawag (ETH Institute)",
      description:
        "Built SQL databases and automation tooling for research operations.",
      targetId: "eawag"
    },
    {
      period: "2013\u20132015",
      title: "Bank Julius Baer & Co. Ltd.",
      description:
        "Fixed income investment specialist; bond-issue toolbox and client publications.",
      targetId: "julius-baer"
    },
    {
      period: "2015\u20132019",
      title: "LGT Private Bank",
      description:
        "Credit analyst covering hybrids, financials, telecoms, and capital structures.",
      targetId: "lgt-analyst"
    },
    {
      period: "2019\u20132022",
      title: "LGT Private Bank",
      description:
        "Senior fixed income strategist leading sector coverage and thematic strategy.",
      targetId: "lgt-strategist"
    },
    {
      period: "2022\u20132024",
      title: "LGT Private Bank",
      description:
        "Senior fixed income portfolio manager across multi-currency credit portfolios.",
      targetId: "lgt-pm"
    },
    {
      period: "2023",
      title: "Doctor of Business Administration",
      description: "Middlesex University London."
    },
    {
      period: "2024\u20132025",
      title: "Professional Certifications",
      description: "PCEP, PCAP, and Responsible AI (RAI).",
      targetId: "career-break"
    },
    {
      period: "2025",
      title: "bmpi AG",
      description:
        "Senior technical consultant focused on data migration and synthetic data.",
      targetId: "bmpi"
    }
  ] satisfies MilestoneItem[]
};
