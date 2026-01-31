import "./globals.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Open_Sans, Orbitron, Space_Grotesk } from "next/font/google";

import { site } from "@/content/site";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-blade",
  display: "swap"
});

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Sandro Zwyssig - Financial Markets Expert"
      }
    ],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
    images: ["/hero-banner.png"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  image: `${site.url}${site.portrait.src}`,
  sameAs: [site.socials.linkedin, site.socials.github],
  knowsAbout: [
    "Fixed Income Securities",
    "Portfolio Optimization",
    "Financial Modeling",
    "Risk Management",
    "Artificial Intelligence",
    "Quantitative Finance"
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Middlesex University London"
    },
    {
      "@type": "EducationalOrganization",
      name: "University of St. Gallen"
    }
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "Doctor of Business Administration" },
    { "@type": "EducationalOccupationalCredential", name: "Financial Risk Manager (FRM)" },
    { "@type": "EducationalOccupationalCredential", name: "Certified Financial Technician (CFTe)" }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${openSans.variable} ${spaceGrotesk.variable} ${orbitron.variable} bg-midnight font-sans text-platinum antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
