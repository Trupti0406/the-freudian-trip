import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "";
  const routes: { path: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/therapy", changeFrequency: "monthly", priority: 0.8 },
    { path: "/assessment", changeFrequency: "monthly", priority: 0.7 },
    { path: "/workshops", changeFrequency: "monthly", priority: 0.7 },
    { path: "/populations", changeFrequency: "monthly", priority: 0.7 },
    { path: "/crocus-diaries", changeFrequency: "weekly", priority: 0.6 },
    { path: "/about", changeFrequency: "monthly", priority: 0.6 },
    { path: "/enquiry", changeFrequency: "monthly", priority: 0.5 },
  ];
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
