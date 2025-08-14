import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  let origin = "http://localhost:3000";
  let host = "localhost:3000";
  try {
    const parsed = new URL(envUrl);
    origin = parsed.origin;
    host = parsed.host;
  } catch {
    // Fallbacks already set
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${origin}/sitemap.xml`,
    host,
  };
}


