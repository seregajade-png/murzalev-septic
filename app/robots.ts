import { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "http://85.239.34.21:3001";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/design-system"],
    },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
