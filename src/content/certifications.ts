import type { CertificationItem } from "./types";

export const certificationsSection = {
  title: "Certifications",
  subtitle: "Credentials across portfolio management, risk, and applied AI.",
  intro:
    "Credentials include Chartered Financial Analyst (CFA), Financial Risk Manager (FRM), Chartered Alternative Investment Analyst (CAIA), Energy Risk Professional (ERP), Professional Risk Manager (PRM), Certified Financial Technician (CFTe), CFA Institute Certificate in ESG Investing (CFA-ESG), Python Certified Entry-Level Programmer (PCEP), Python Certified Associate Programmer (PCAP), and Responsible AI (RAI).",
  items: [
    { short: "Doctor", full: "Doctorate" },
    { short: "CFA" },
    { short: "FRM" },
    { short: "CAIA" },
    { short: "ERP" },
    { short: "PRM" },
    { short: "CFTe" },
    { short: "CFA-ESG" },
    { short: "PCEP/PCAP" },
    { short: "RAI" }
  ] satisfies CertificationItem[]
};
