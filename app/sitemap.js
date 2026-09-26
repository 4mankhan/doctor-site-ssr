const SITE_URL = "https://dr-sunil-kohli.vercel.app";

/**
 * Next.js App Router sitemap generator.
 * Served at /sitemap.xml automatically.
 */
export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-09-26"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
