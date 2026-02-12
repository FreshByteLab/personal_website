import type { MilestoneItem } from "./types";

export const milestonesSection = {
  title: "Milestones",
  subtitle: "Major academic and professional markers across the CV",
  items: [
    {
      period: "2001\u20132004",
      title: "Bachelor of Arts in Economics",
      description: "University of St. Gallen (HSG)",
      category: "education",
      topics: ["Macroeconomics & Financial Forecasting", "Capital Market Theory", "Empirical Finance"]
    },
    {
      period: "2004\u20132006",
      title: "Master of Arts in Quantitative Economics & Finance",
      description: "University of St. Gallen (HSG)",
      category: "education",
      topics: ["Asset Pricing", "Credit Migration Modelling", "Derivative Markets", "Econometrics"]
    },
    {
      period: "2006",
      title: "UBS Investment Bank",
      description: "Trading floor internship in economic research and interest rate modelling",
      targetId: "ubs-ib",
      category: "bank"
    },
    {
      period: "2007\u20132011",
      title: "UBS Global Asset Management",
      description:
        "Multi-asset portfolio management for fund-of-funds and USD IG mandates",
      targetId: "ubs",
      category: "bank"
    },
    {
      period: "2008",
      title: "CAIA",
      description: "Chartered Alternative Investment Analyst",
      category: "certification",
      url: "https://caia.org/",
      bullets: [
        "Analysis of alternative investments (private equity, hedge funds, real assets)",
        "Due diligence frameworks for illiquid and structured investments",
        "Portfolio construction incorporating alternative risk premia"
      ]
    },
    {
      period: "2009",
      title: "FRM",
      description: "Financial Risk Manager",
      category: "certification",
      url: "https://www.garp.org/",
      bullets: [
        "Quantitative modeling of market, credit and liquidity risks",
        "Application of Value at Risk (VaR), Expected Shortfall and stress testing",
        "Integrated risk oversight within institutional portfolios"
      ]
    },
    {
      period: "2012\u20132013",
      title: "Eawag (ETH Institute)",
      description:
        "Built SQL databases and automation tooling for research operations",
      targetId: "eawag",
      category: "tech"
    },
    {
      period: "2013",
      title: "CFA",
      description: "Chartered Financial Analyst",
      category: "certification",
      url: "https://www.cfainstitute.org/",
      bullets: [
        "Advanced expertise in portfolio management, equity, fixed income and derivatives",
        "Valuation of complex capital structures across global financial markets",
        "Strong adherence to ethics and governance standards under CFA Institute framework"
      ]
    },
    {
      period: "2013",
      title: "PRM",
      description: "Professional Risk Manager",
      category: "certification",
      url: "https://www.prmia.org/",
      bullets: [
        "Credit and counterparty risk assessment including LGD and ECL frameworks",
        "Quantitative valuation of complex OTC instruments",
        "Senior-level risk reporting and governance"
      ]
    },
    {
      period: "2013\u20132015",
      title: "Bank Julius Baer & Co. Ltd",
      description:
        "Fixed income investment specialist; bond-issue toolbox and client publications",
      targetId: "julius-baer",
      category: "bank"
    },
    {
      period: "2014",
      title: "CFTe",
      description: "Certified Financial Technician",
      category: "certification",
      url: "https://www.ifta.org/",
      bullets: [
        "Technical market analysis and cycle identification",
        "Application of trend, momentum and volatility indicators",
        "Systematic market timing and risk signal analysis"
      ]
    },
    {
      period: "2015\u20132019",
      title: "LGT Private Bank",
      description:
        "Credit analyst covering hybrids, financials, telecoms, and capital structures",
      targetId: "lgt-analyst",
      category: "bank"
    },
    {
      period: "2017",
      title: "ERP",
      description: "Energy Risk Professional",
      category: "certification",
      url: "https://www.garp.org/",
      bullets: [
        "Valuation of energy and commodity derivatives",
        "Risk hedging strategies in volatile commodity markets",
        "Term structure and market microstructure analysis"
      ]
    },
    {
      period: "2019\u20132022",
      title: "LGT Private Bank",
      description:
        "Senior fixed income strategist leading sector coverage and thematic strategy",
      targetId: "lgt-strategist",
      category: "bank"
    },
    {
      period: "2021",
      title: "CFA ESG",
      description: "Certificate in ESG Investing",
      category: "certification",
      url: "https://www.cfainstitute.org/",
      bullets: [
        "Integration of ESG factors into valuation and portfolio frameworks",
        "Assessment of sustainability risks and regulatory requirements",
        "Quantitative ESG scoring methodologies for institutional mandates"
      ]
    },
    {
      period: "2022\u20132024",
      title: "LGT Private Bank",
      description:
        "Senior fixed income portfolio manager across multi-currency credit portfolios",
      targetId: "lgt-pm",
      category: "bank"
    },
    {
      period: "2023",
      title: "Doctor of Business Administration",
      description: "Middlesex University London",
      category: "education",
      topics: ["Bank Capital Structure", "Portfolio Optimization", "Wavelet Analysis", "Bayesian Networks", "Robust Correlation Analysis"]
    },
    {
      period: "2024",
      title: "PCEP & PCAP",
      description: "Python Certified Entry-Level & Associate Programmer",
      category: "certification",
      url: "https://pythoninstitute.org/",
      bullets: [
        "Object-oriented programming and modular architecture",
        "Data analysis using Pandas and NumPy",
        "API integration and data pipeline implementation"
      ]
    },
    {
      period: "2024\u20132025",
      title: "Educational Career Break",
      description: "",
      targetId: "career-break",
      category: "education"
    },
    {
      period: "2025",
      title: "RAI",
      description: "Risk & AI",
      category: "certification",
      url: "https://www.garp.org/",
      bullets: [
        "Application of machine learning in risk and investment contexts",
        "Model validation and governance for AI-driven decision frameworks",
        "Integration of artificial intelligence into institutional investment processes"
      ]
    },
    {
      period: "2025",
      title: "bmpi AG",
      description:
        "Senior technical consultant focused on data migration and synthetic data",
      targetId: "bmpi",
      category: "tech"
    }
  ] as MilestoneItem[]
};
