import type { Metadata } from "next";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Yeliz Acar Mimar Blog sayfası";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yelizacar.com.tr";
 
export function generateSeoMetadata({ title, description, path = "" }: SeoProps): Metadata {
  const fullTitle = `Yeliz Acar | ${title}`;
  const url = `${siteUrl}${path}`;



  return {
    title: fullTitle,
    description: description  ,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: "NEXT_PUBLIC_TITTLE_ICON",
          width: 800,
          height: 600,
          alt: "Site icon",
        },
      ],
    },
    icons: {
      icon: "NEXT_PUBLIC_TITTLE_ICON",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
