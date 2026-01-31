import type { ExperienceItem } from "./types";

export const experienceSection = {
  title: "Experience",
  subtitle: "Fixed income strategy, cross-asset advisory, and quantitative portfolio work.",
  items: [
    {
      role: "Senior Technical Consultant",
      company: "bmpi AG",
      dates: "Apr 2025 - Oct 2025",
      bullets: [
        "Developed software for data migration and synthetic data generation projects.",
        "Built Python and JavaScript tooling integrated with MySQL and PostgreSQL.",
        "Implemented GenAI API workflows to accelerate data preparation and testing."
      ]
    },
    {
      role: "Educational Career Break",
      company: "Professional Certifications",
      dates: "Aug 2024 - Mar 2025",
      bullets: [
        "Completed PCEP, PCAP, and Responsible AI (RAI) certifications.",
        "Focused on OOP, Python, machine learning, and applied risk management."
      ]
    },
    {
      role: "Senior Fixed Income Portfolio Manager",
      company: "LGT Private Bank (Switzerland)",
      dates: "Jul 2022 - Jul 2024",
      bullets: [
        "Managed credit-opportunity fixed-income portfolios across CHF, USD, EUR, and GBP markets, including hybrids, HY/EM, and special situations.",
        "Built proprietary ex-ante and ex-post analytics with Bloomberg API for attribution and scenario testing.",
        "Presented investment views and performance reviews to senior management, clients, and investment committees.",
        "Mentored analysts in credit selection, modelling, and portfolio construction."
      ]
    },
    {
      role: "Senior Fixed Income Strategist",
      company: "LGT Private Bank (Switzerland)",
      dates: "Apr 2019 - Jun 2022",
      bullets: [
        "Led sector coverage and thematic and commodity strategy across high-beta fixed income segments.",
        "Formulated and presented strategy and credit recommendations to investment committees and clients.",
        "Enhanced data infrastructure and reporting for transparency of performance and recommendations."
      ]
    },
    {
      role: "Credit Analyst",
      company: "LGT Private Bank (Switzerland)",
      dates: "Feb 2015 - Mar 2019",
      bullets: [
        "Covered capital structures and hybrid instruments across financial, insurance, and telecommunications sectors.",
        "Performed credit and valuation analysis supporting EM and HY recommendations and investment committee discussions.",
        "Built and maintained databases, bond-finder tools, and risk monitoring interfaces.",
        "Improved analytical workflows and supported research and IT initiatives."
      ]
    },
    {
      role: "Fixed Income Investment Specialist",
      company: "Bank Julius Baer & Co. Ltd.",
      dates: "Jun 2013 - Jan 2015",
      bullets: [
        "Authored investment ideas and provided consulting for fixed income markets.",
        "Developed a toolbox for new bond issues, delivering 60-80 client-ready publications annually."
      ]
    },
    {
      role: "Software/Database Developer",
      company: "Eawag (ETH Institute)",
      dates: "Jul 2012 - May 2013",
      bullets: [
        "Built a research SQL database for Project Lac and Access-based data management tools.",
        "Automated reporting with MS SQL, Access VBA, and Excel VBA."
      ]
    },
    {
      role: "Multi-Asset Portfolio Manager",
      company: "UBS Global Asset Management AG",
      dates: "May 2007 - Jun 2011",
      bullets: [
        "Managed fund-of-fund mandates and USD IG bond portfolios across mandates exceeding $50bn.",
        "Implemented derivatives overlays for hedging with credit, interest-rate, and FX instruments."
      ]
    }
  ] satisfies ExperienceItem[]
};
