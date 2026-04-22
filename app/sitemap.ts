import { MetadataRoute } from "next";
import { products, categories } from "@/lib/products";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "http://85.239.34.21:3001";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/catalog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/contacts`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${SITE}/catalog?category=${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${SITE}/catalog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
