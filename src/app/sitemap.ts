import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const staticRoutes: Array<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.8 },
  { path: "/request-tutor", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/ib", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/igcse", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/ib/subjects/math", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/ib/subjects/physics", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/ib/subjects/chemistry", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/igcse/subjects/math", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/igcse/subjects/physics", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/igcse/subjects/chemistry", changeFrequency: "monthly", priority: 0.8 },
  { path: "/tutors", changeFrequency: "monthly", priority: 0.8 },
  { path: "/online-tuition", changeFrequency: "monthly", priority: 0.8 },
  { path: "/math-tuition", changeFrequency: "monthly", priority: 0.8 },
  { path: "/physics-tuition", changeFrequency: "monthly", priority: 0.8 },
  { path: "/chemistry-tuition", changeFrequency: "monthly", priority: 0.8 },
  { path: "/biology-tuition", changeFrequency: "monthly", priority: 0.8 },
  { path: "/english-tuition", changeFrequency: "monthly", priority: 0.8 },
  { path: "/economics-tuition", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ib-tuition", changeFrequency: "monthly", priority: 0.8 },
  { path: "/igcse-tuition", changeFrequency: "monthly", priority: 0.8 },
];

const blogRoutes = [
  "/blog/choosing-international-school-singapore-2025",
  "/blog/do-international-schools-care-about-exam-scores",
  "/blog/the-hidden-truth-about-one-on-one-tuition",
  "/blog/will-gen-ai-kill-ib-extended-essay",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
