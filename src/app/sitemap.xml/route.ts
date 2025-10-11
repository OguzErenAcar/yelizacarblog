// app/sitemap.xml/route.ts
export const runtime = "edge";

const SITE = process.env.NEXT_PUBLIC_SITE_URL||"";
const now = new Date().toISOString();

export async function GET() {
  const urls = [
    { loc: `${SITE}/`, lastmod: now },
    { loc: `${SITE}/blog/about`, lastmod: now },
    { loc: `${SITE}/blog/contact`, lastmod: now },
    { loc: `${SITE}/blog`, lastmod: now },  
    { loc: `${SITE}/blog/projects`, lastmod: now },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("")}
</urlset>`.trim();

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
