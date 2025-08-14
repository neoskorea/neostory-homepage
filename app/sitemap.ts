import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  let origin = "http://localhost:3000";
  try {
    const parsed = new URL(envUrl);
    origin = parsed.origin;
  } catch {
    // keep default
  }
  const now = new Date().toISOString();
  // 단일 랜딩 페이지 사이트맵
  return [
    {
      url: `${origin}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}


