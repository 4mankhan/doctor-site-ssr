const SITE_URL = "https://dr-sunil-kohli.vercel.app";

/**
 * Next.js App Router robots generator.
 * Served at /robots.txt automatically.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
