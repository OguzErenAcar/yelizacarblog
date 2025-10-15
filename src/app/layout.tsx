import React from "react";
import "./global.css";
import type { Metadata } from "next";
import JsonLd from "./utils/JsonLd";
import Head from "next/head";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Architect Yeliz Acar Blog";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/Blog`,
      },
    ],
  };

  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  );
}
