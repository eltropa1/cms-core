import { Post } from "../../../domain/post/Post.js";
import { ContentSerializer } from "./contentSerializer.js";
import { ContentResponse } from "./contentSerializer.js";

/**
 * HTTP representation of a Post.
 *
 * This is the DTO exposed by the API.
 * Domain entities must never be returned directly
 * to the HTTP layer.
 */
export interface PostResponse {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: ContentResponse;
  publicationState: "draft" | "published" | "archived" | "deleted";
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  categoryIds: string[];
}

/**
 * Converts a Post domain entity into a HTTP-safe response object.
 */
export function serializePost(post: Post): PostResponse {
  const primitives = post.toPrimitives();

  return {
  id: primitives.id,
  slug: primitives.slug,
  title: primitives.title,

  // ✅ SEO description (temporal)
  description: primitives.title,

  content: ContentSerializer.toResponse(primitives.content),

  publicationState: primitives.publicationState.toString(),

  publishedAt: primitives.publishedAt
    ? primitives.publishedAt.toISOString()
    : null,

  createdAt: primitives.createdAt.toISOString(),
  updatedAt: primitives.updatedAt.toISOString(),

  categoryIds: primitives.categoryIds,
};
}

/**
 * Serializes a list of Post entities.
 */


export type PostListResponse = {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
};

export function serializePostList(posts: Post[]): PostListResponse[] {
  return posts.map((post) => {
    const primitives = post.toPrimitives();

    if (!primitives.publishedAt) {
      throw new Error("Post in list is not published");
    }

    return {
      id: primitives.id,
      title: primitives.title,
      slug: primitives.slug,
      publishedAt: primitives.publishedAt.toISOString(),
    };
  });
}