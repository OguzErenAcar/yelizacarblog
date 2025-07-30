// app/robots.txt/route.ts
export function GET() {
  return new Response(`User-agent: *
Allow: /`, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
