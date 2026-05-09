// next
import { notFound } from "next/navigation";

// api
import { cmsFetch } from "@/api/cmsClient";
import { siteConfig } from "@/config/site.config";

// types
import type { PostResponse } from "@/types/post";

// components
import { ContentRenderer } from "@/components/content/ContentRenderer";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * SEO metadata
 */
export async function generateMetadata({ params }: PageProps) {
  if (!siteConfig.modules.blog) {
    return {
      title: "Contenido no disponible",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { slug } = await params;

  try {
    const post = await cmsFetch<PostResponse>(`/posts/slug/${slug}`);

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.site.url;

    return {
      title: post.title,

      description: post.description,

      alternates: {
        canonical: `${baseUrl}/posts/${post.slug}`,
      },

      openGraph: {
        title: post.title,
        description: post.description,
        url: `${baseUrl}/posts/${post.slug}`,
        type: "article",
        locale: "es_ES",
        publishedTime: post.publishedAt || undefined,
      },
    };
  } catch {
    return {
      title: "Post no encontrado",
      description: "Contenido no disponible",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

/**
 * Post page
 */
export default async function PostPage({ params }: PageProps) {
  if (!siteConfig.modules.blog) {
    notFound();
  }

  const { slug } = await params;

  let post: PostResponse;

  try {
    post = await cmsFetch<PostResponse>(`/posts/slug/${slug}`);
  } catch {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.site.url;

  const postUrl = `${baseUrl}/posts/${post.slug}`;

  /**
   * ✅ STRUCTURED DATA (JSON-LD)
   * Solo si hay datos completos
   */
  const structuredData =
    post.publishedAt && post.description
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.publishedAt,
          mainEntityOfPage: postUrl,
          url: postUrl,
        }
      : null;

  return (
    <article className="mx-auto max-w-3xl">
      {/* ✅ JSON-LD */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}

      <h1>{post.title}</h1>

      <ContentRenderer content={post.content} />
    </article>
  );
}
