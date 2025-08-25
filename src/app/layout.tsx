import React from "react";
import "./global.css";
import type { Metadata } from "next";
import JsonLd from "./utils/JsonLd";
import Head from "next/head";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Architect Yeliz Acar Blog";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "";

export const metadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_SITE_NAME||"",
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
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": `${siteUrl}/` },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteUrl}/Blog` }
    ]
  };

  return (
    <html lang="tr">
      <body>
       <JsonLd data={breadcrumb} />
        {children}
        </body>
    </html>
  );
}