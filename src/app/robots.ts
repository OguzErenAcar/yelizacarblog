// app/robots.ts
import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"], // gerekirse düzenle/sil
    },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
