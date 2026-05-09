import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

/**
 * Robots.txt
 *
 * Permite indexación completa y referencia al sitemap
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.site.url;

  

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
