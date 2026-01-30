import "./globals.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
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
        url: site.portrait.src,
        width: 1200,
        height: 630,
        alt: site.portrait.alt
      }
    ],
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} bg-midnight font-sans text-platinum antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
