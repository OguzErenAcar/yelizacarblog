import { ThemeProvider } from "@/context/ThemeContext";
import React from "react";
import "./global.css";
import Head from "next/head";
import type { Metadata } from "next";
import JsonLd from "./utils/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "Architect Yeliz Acar", // varsayılan
    template: "%s | Architect Yeliz Acar Blog", // dinamik başlık formatı
  },
  description: "Mimar Yeliz Acar blog sitesi projelerini içerir ",
  openGraph: {
    type: "website",
    title: "Yeliz Acar",
    description: "Mimar Yeliz Acar Blog Sitesi",
    url: "https://yelizacar.vercel.app",
    siteName: "Yeliz Acar Blog",
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
    url: "https://site.com",
    name: "Site Adı",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://site.com/search?q={query}",
      "query-input": "required name=query",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Firma Adı",
    url: "https://site.com",
    logo: "https://site.com/logo.png",
    sameAs: [
      "https://www.instagram.com/hesap",
      "https://www.linkedin.com/company/hesap",
    ],
  };

  return (
    <html lang="tr">
      <Head>
        <title>Blog</title>
      </Head>
      <JsonLd data={website}/>
      <JsonLd data={organization}/>
        <body>{children}</body>
    </html>
  );
}
