import type { CertificationItem } from "./types";

export const certificationsSection = {
  title: "Certifications",
  subtitle: "Professional credentials across investment, risk, and applied AI.",
  intro:
    "Credentials include Chartered Financial Analyst (CFA), Financial Risk Manager (FRM), Chartered Alternative Investment Analyst (CAIA), Professional Risk Manager (PRM), Certified Financial Technician (CFTe), Energy Risk Professional (ERP), Responsible AI (RAI), Python Certified Entry-Level Programmer (PCEP), Python Certified Associate Programmer (PCAP), and the CFA Institute Certificate in ESG Investing.",
  items: [
    {
      short: "CFA",
      full: "Chartered Financial Analyst",
      url: "https://www.cfainstitute.org/",
      logo: {
        src: "/certifications/cfa-institute.svg",
        alt: "CFA Institute logo"
      }
    },
    {
      short: "FRM",
      full: "Financial Risk Manager",
      url: "https://www.garp.org/",
      logo: {
        src: "/certifications/garp.svg",
        alt: "GARP logo"
      }
    },
    {
      short: "CAIA",
      full: "Chartered Alternative Investment Analyst",
      url: "https://caia.org/",
      logoStyle: "dark-center",
      logo: {
        src: "/certifications/caia.png",
        alt: "CAIA Association logo"
      }
    },
    {
      short: "PRM",
      full: "Professional Risk Manager",
      url: "https://www.prmia.org/",
      logoStyle: "dark-center",
      logo: {
        src: "/certifications/prmia.png",
        alt: "PRMIA logo"
      }
    },
    {
      short: "CFTe",
      full: "Certified Financial Technician",
      url: "https://www.ifta.org/",
      logoStyle: "dark-center",
      logo: {
        src: "/certifications/ifta.png",
        alt: "IFTA logo"
      }
    },
    {
      short: "ERP",
      full: "Energy Risk Professional",
      url: "https://www.garp.org/",
      logo: {
        src: "/certifications/garp.svg",
        alt: "GARP logo"
      }
    },
    {
      short: "RAI",
      full: "Responsible AI",
      url: "https://www.garp.org/",
      logo: {
        src: "/certifications/garp.svg",
        alt: "GARP logo"
      }
    },
    {
      short: "PCEP",
      full: "Python Certified Entry-Level Programmer",
      url: "https://pythoninstitute.org/",
      logo: {
        src: "/certifications/python-institute.png",
        alt: "Python Institute logo"
      }
    },
    {
      short: "PCAP",
      full: "Python Certified Associate Programmer",
      url: "https://pythoninstitute.org/",
      logo: {
        src: "/certifications/python-institute.png",
        alt: "Python Institute logo"
      }
    },
    {
      short: "CFA ESG",
      full: "ESG Investing",
      url: "https://www.cfainstitute.org/",
      logo: {
        src: "/certifications/cfa-institute.svg",
        alt: "CFA Institute logo"
      }
    }
  ] satisfies CertificationItem[]
};
