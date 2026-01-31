import type { EducationItem } from "./types";

export const educationSection = {
  title: "Education",
  subtitle: "Academic foundations and credentials.",
  items: [
    {
      text: "Doctor of Business Administration (Middlesex University London, 2023).",
      topics: [
        "CoCo bonds (contingent convertibles) in European banking",
        "Robust correlation analysis for financial data",
        "Portfolio optimization",
        "Wavelet analysis for multi-scale time-frequency decomposition",
        "Bayesian networks for probabilistic modeling"
      ],
      logo: {
        src: "/institutions/mdx-logo.svg",
        alt: "Middlesex University London logo"
      }
    },
    {
      text:
        "Master of Arts (MA) in Quantitative Economics & Finance and Bachelor of Arts (BA) in Economics (University of St. Gallen).",
      logo: {
        src: "/institutions/hsg-logo.svg",
        alt: "University of St. Gallen logo"
      }
    }
  ] satisfies EducationItem[]
};
