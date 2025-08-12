import React from "react";
import "./global.css";
import type { Metadata } from "next";
import JsonLd from "./utils/JsonLd";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Architect Yeliz Acar Blog";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: siteName,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={query}`,
      "query-input": "required name=query",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      "https://www.instagram.com/hesap",
      "https://www.linkedin.com/company/hesap",
    ],
  };

  return (
    <html lang="tr">
      <JsonLd data={website} />
      <JsonLd data={organization} />
      <body>{children}</body>
    </html>
  );
}
