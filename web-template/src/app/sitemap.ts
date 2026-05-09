import { MetadataRoute } from "next";
import { cmsFetch } from "@/api/cmsClient";
import type { PostListItem } from "@/types/post";
import { siteConfig } from "@/config/site.config";

/**
 * Sitemap dinámico
 *
 * Genera todas las URLs indexables del sitio:
 * - Home
 * - Listado de posts
 * - Posts individuales
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.site.url;

  const now = new Date();

  // URLs estáticas
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/aviso-legal`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  if (!siteConfig.modules.blog) {
    return staticUrls;
  }

  let posts: PostListItem[] = [];

  try {
    posts = await cmsFetch<PostListItem[]>("/posts");
  } catch {
    posts = [];
  }

  const blogUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/posts`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // URLs dinámicas (posts)
  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticUrls, ...blogUrls, ...postUrls];
}
