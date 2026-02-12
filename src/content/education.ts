import type { EducationItem } from "./types";

export const educationSection = {
  title: "Education",
  subtitle: "Academic foundations and credentials.",
  items: [
    {
      degree: "Doctor of Business Administration (DBA)",
      institution: "Middlesex University London",
      location: "London",
      year: "2023",
      topics: [
        "Bank Capital Structure",
        "Portfolio Optimization",
        "Wavelet Analysis",
        "Bayesian Networks",
        "Robust Correlation Analysis"
      ],
      logo: {
        src: "/institutions/mdx-logo.svg",
        alt: "Middlesex University London logo"
      },
      url: "https://www.mdx.ac.uk"
    },
    {
      degree: "Master of Arts (MA) in Quantitative Economics & Finance",
      institution: "University of St. Gallen",
      location: "St. Gallen",
      year: "2006",
      topics: [
        "Asset Pricing",
        "Credit Migration Modelling",
        "Derivative Markets",
        "Econometrics"
      ],
      logo: {
        src: "/institutions/hsg-logo.svg",
        alt: "University of St. Gallen logo"
      },
      url: "https://www.unisg.ch"
    },
    {
      degree: "Bachelor of Arts (BA) in Economics",
      institution: "University of St. Gallen",
      location: "St. Gallen",
      year: "2004",
      topics: [
        "Macroeconomics & Financial Forecasting",
        "Capital Market Theory",
        "Empirical Finance"
      ],
      logo: {
        src: "/institutions/hsg-logo.svg",
        alt: "University of St. Gallen logo"
      },
      url: "https://www.unisg.ch"
    }
  ] as EducationItem[]
};
