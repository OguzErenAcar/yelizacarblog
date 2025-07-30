// app/sitemap.xml/route.ts
export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://yelizacar.vercel.app/</loc>
    </url>
    <url>
      <loc>https://yelizacar.vercel.app/projects</loc>
    </url>
  </urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
