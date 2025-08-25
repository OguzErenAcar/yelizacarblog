// app/sitemap.ts
import { MetadataRoute } from "next";

const SITE = "https://yelizacar.vercel.app";
const now = new Date().toISOString();

// Blog linklerinin tipi
interface BlogUrl {
  url: string;
  lastModified?: string | Date;
}

// Blog URL'lerini dinamik olarak getiren fonksiyon
async function getBlogUrls(): Promise<BlogUrl[]> {
  // Burada API'den ya da DB'den veri çekebilirsin
  return [
    { url: `${SITE}/Blog/slug-1`, lastModified: "2025-08-12" },
    { url: `${SITE}/Blog/slug-2` }
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blog = await getBlogUrls();

  const staticUrls: MetadataRoute.Sitemap = [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/About`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/Contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const blogUrls: MetadataRoute.Sitemap = blog.map((b) => ({
    url: b.url,
    lastModified: b.lastModified ?? now,
    changeFrequency: "weekly",
    priority: 0.8
  }));

  return [...staticUrls, ...blogUrls];
}
