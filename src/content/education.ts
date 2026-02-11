import type { EducationItem } from "./types";

export const educationSection = {
  title: "Education",
  subtitle: "Academic foundations and credentials.",
  items: [
    {
      text: "Doctor of Business Administration (Middlesex University London, 2023).",
      topics: [
        "CoCo Bond Capital Structures",
        "Portfolio Optimization",
        "Wavelet Analysis",
        "Bayesian Networks",
        "Robust Correlation Analysis"
      ],
      logo: {
        src: "/institutions/mdx-logo.svg",
        alt: "Middlesex University London logo"
      }
    },
    {
      text:
        "Master of Arts (MA) in Quantitative Economics & Finance (University of St. Gallen, 2006).",
      topics: [
        "Asset Pricing",
        "Credit Migration Modelling"
      ],
      logo: {
        src: "/institutions/hsg-logo.svg",
        alt: "University of St. Gallen logo"
      }
    },
    {
      text:
        "Bachelor of Arts (BA) in Economics (University of St. Gallen, 2004).",
      topics: [
        "Macro Modelling"
      ],
      logo: {
        src: "/institutions/hsg-logo.svg",
        alt: "University of St. Gallen logo"
      }
    }
  ] satisfies EducationItem[]
};
