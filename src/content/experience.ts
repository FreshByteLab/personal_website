import type { ExperienceItem } from "./types";

export const experienceSection = {
  title: "Experience",
  subtitle: "CHF IG credit research, cross-asset advisory, and quantitative portfolio management.",
  items: [
    {
      id: "bmpi",
      role: "Senior Technical Consultant",
      company: "bmpi AG",
      dates: "Apr 2025 - Oct 2025",
      location: "Zurich",
      bullets: [
        "Developed software for data migration and synthetic data generation projects.",
        "Built Python and JavaScript tooling integrated with MySQL and PostgreSQL.",
        "Implemented GenAI API workflows to accelerate data preparation and testing."
      ],
      skills: ["Python", "JavaScript", "Git", "VS Code", "MySQL", "PostgreSQL", "GenAI APIs"]
    },
    {
      id: "career-break",
      role: "Educational Career Break",
      company: "Professional Certifications",
      dates: "Aug 2024 - Mar 2025",
      bullets: [
        "Completed PCEP, PCAP, and Responsible AI (RAI) certifications.",
        "Focused on OOP, Python, machine learning, and applied risk management."
      ],
      skills: ["OOP", "Python", "VS Code", "ML", "GenAI", "Risk Management"]
    },
    {
      id: "lgt-pm",
      role: "Senior Fixed Income Portfolio Manager",
      company: "LGT Private Bank (Switzerland)",
      dates: "Jul 2022 - Jul 2024",
      location: "Zurich",
      bullets: [
        "Managed fixed-income single-line portfolios for UHNWI clients with elevated risk profiles, focusing on CHF IG credit alongside global credit-opportunity mandates across CHF, USD, EUR, and GBP (hybrids, HY, EM, special situations).",
        "Full performance responsibility for all managed mandates; proposed tactical allocation changes to the LGT PB Europe Investment Committee.",
        "Built proprietary ex-ante and ex-post portfolio analytics and performance attribution tools (Bloomberg API/BQL) for signal extraction, risk monitoring, and scenario analysis.",
        "Conducted marketing activities including creation of marketing documents and client presentations; supported Relationship Managers in sales and client relationships.",
        "Mentored junior analysts in credit research, issuer analysis, and portfolio construction."
      ],
      skills: ["Security Selection", "Relative-Value Analysis", "Portfolio Construction", "Credit Modelling", "Scenario Analysis", "Client Communication", "Python", "Bloomberg BQL/BQNT"],
      achievements: [
        "Annualized 2023 CreditOpps performance of 14.3% in EUR and 15.1% in USD.",
        "Reference: \"performed very well and met our high expectations\" with \"excellent technological and technical skills.\""
      ]
    },
    {
      id: "lgt-strategist",
      role: "Senior Fixed Income Strategist",
      company: "LGT Private Bank (Switzerland)",
      dates: "Apr 2019 - Jun 2022",
      location: "Zurich",
      bullets: [
        "Led sector coverage and thematic strategy across CoCos, financial hybrids, corporate hybrids, and higher-beta fixed-income segments.",
        "Formulated and presented strategy and credit recommendations (single securities) to Investment Committees and clients; contributed to flagship full-year and mid-year outlooks.",
        "Developed a duration strategy and built commodity research offering with focus on oil and gas.",
        "Built and documented FICC database, valuation models, and research recommendation tracking system (IT audit compliant).",
        "Led Project Dolphin — efficiency and productivity gains for the FICC/ISE platform."
      ],
      skills: ["Macroeconomic Analysis", "Bond/Sector/Commodity Strategy", "Duration Strategy", "Client Reporting Optimization", "Senior-Level Investment Communication", "FICC Database", "Valuation Models"],
      achievements: [
        "Investment performance rated A+ — \"exceptionally strong, comparable to dedicated bank capital security funds.\"",
        "Generated ~CHF 106m in client book initiative turnover on hybrids.",
        "Technical skills described as \"unprecedented in the team\" with A+ for problem solving.",
        "Promoted to Senior Strategist effective 1 April 2019."
      ]
    },
    {
      id: "lgt-analyst",
      role: "Credit Analyst",
      company: "LGT Private Bank (Switzerland)",
      dates: "Feb 2015 - Mar 2019",
      location: "Zurich",
      bullets: [
        "Covered full capital structures and hybrid instruments (CoCos, AT1, financial & corporate hybrids) across financials, utilities, and telecommunications sectors.",
        "Developed valuation models and conducted credit analysis to support official recommendations and Investment Committee discussions.",
        "Built the LGT Bondfinder Tool — enabling Relationship Managers to perform individual bond searches and create client-ready documents (highlighted as a standout contribution).",
        "Designed and led database implementations for factsheets across all Fixed Income Research areas; improved risk-monitoring processes.",
        "Contributed to platform projects (Eden, Pollux/ESG, myLGT) and supported colleagues in research and IT-related initiatives."
      ],
      skills: ["Hybrid Capital & Capital-Structure Analysis", "Commodity Research", "Credit Risk & Valuation Modelling", "Financial Data Engineering (ETL)", "Risk Monitoring", "LGT Bondfinder Tool", "R", "Access VBA", "SQL"],
      achievements: [
        "Average performance of 5% p.a. in USD/EUR for bonds on the High Conviction list.",
        "Built-up hybrid bonds capabilities, increasing client holdings from $300m to almost $2bn in the EMEA region.",
        "2017 performance rated A+ — \"clearly ahead of relevant benchmarks\"; ISE Offering rated A+ for research/valuation standard.",
        "Reference: \"sehr gute Leistungen\" (very good performance) with \"exemplary\" conduct rating."
      ]
    },
    {
      id: "julius-baer",
      role: "Investment Writer / Fixed Income Specialist",
      company: "Bank Julius Baer & Co. Ltd.",
      dates: "Jun 2013 - Jan 2015",
      location: "Zurich",
      bullets: [
        "Generated investment ideas covering Fixed Income and Alternative Investments along the entire value chain — research, article writing, and product selection for client advisors.",
        "Developed the Fixed Income New Issue Monitor and toolbox for bond issues, delivering 60-80 client-ready publications annually.",
        "Built a performance monitoring system for all proposed investment ideas in collaboration with product specialists.",
        "Exclusively assigned to the Products & Services Portal (PSP) IT project — a 3-month initiative to increase efficiency and quality of the advisory platform.",
        "Optimized internal processes for graphic templates, Top Pick Lists, product lists, and daily communication flows."
      ],
      skills: ["Investment Writing/Consulting", "Portfolio Strategy", "Risk Control", "MS SQL", "Access", "Bond Selection", "Process Optimization"],
      achievements: [
        "Described as having \"exceptionally good technical skills\" with \"extremely analytical and interconnected thinking.\"",
        "Completed CFTe Level 1 and Level 2 certifications during tenure."
      ]
    },
    {
      id: "eawag",
      role: "Software/Database Developer",
      company: "Eawag (ETH Institute)",
      dates: "Jul 2012 - May 2013",
      location: "Lucerne",
      bullets: [
        "Built a research SQL database for Project Lac and developed Access-based front-end tools for data management.",
        "Increased operational efficiency substantially for all stakeholders through automated reporting with MS SQL, Access VBA, and Excel VBA."
      ],
      skills: ["Access VBA", "SQL", "Excel VBA"]
    },
    {
      id: "ubs",
      role: "Portfolio Manager",
      company: "UBS Global Asset Management AG",
      dates: "May 2007 - Jun 2011",
      location: "Zurich",
      bullets: [
        "Portfolio Manager of institutional client portfolios and Deputy PM of a large fund-of-funds pension product (> $50bn AuM across team mandates).",
        "Sole specialist for all USD bond trade execution — US Treasuries, Agencies, and USD Eurobonds — directly with investment banks.",
        "Implemented equity country allocations via futures overlay; managed rolling of OTC and ETD positions; cash & FX management via UBS FX Trader.",
        "Programmed Excel and Access VBA tools for cash management, duration management, and pre-trading analysis; specialist for performance measurement and quantitative analysis.",
        "Led specification and management of the Asset Rebalancing Tool — an IT project for managing multi-asset mixed mandates."
      ],
      skills: ["Security Analysis", "Risk Modelling", "Asset Allocation", "Portfolio Management", "Risk Control", "Excel VBA", "Access VBA", "Longview", "UBS FX Trader", "Futures Overlay"],
      achievements: [
        "Lipper Fund Award 2009: UBS (CH) STRATEGY FUND - YIELD (USD).",
        "Promoted to Associate Director (March 2011) for performance and dedication.",
        "Go-to person for colleagues in quantitative finance; zero defaults during the GFC."
      ]
    }
  ] satisfies ExperienceItem[]
};
