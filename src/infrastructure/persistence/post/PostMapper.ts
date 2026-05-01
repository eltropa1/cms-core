import { Post, PostPrimitives } from "../../../domain/post/Post.js";
import { PublicationState } from "../../../domain/value-objects/PublicationState.js";
import { ContentMapper } from "../../../application/content/ContentMapper.js";

export interface PostRow {
  id: string;
  slug: string;
  title: string;
  description: string; // ✅ NUEVO
  content: unknown;
  status: string;
  published_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

export class PostMapper {
  static toDomain(row: PostRow, categoryIds: string[]): Post {
    const publicationState = PublicationState.fromPersistence(
      row.status as any,
    );

    const content = ContentMapper.fromPersistence(row.content);

    const primitives: PostPrimitives = {
      id: row.id,
      slug: row.slug,
      title: row.title,
      description: row.description, // ✅ NUEVO
      content,
      publicationState,
      publishedAt: row.published_at,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      categoryIds,
    };

    return Post.rehydrate(primitives);
  }

  static toPersistence(post: Post) {
    const primitives = post.toPrimitives();

    return {
      id: primitives.id,
      slug: primitives.slug,
      title: primitives.title,
      description: primitives.description, // ✅ NUEVO
      content: primitives.content.toPersistence(),
      status: primitives.publicationState.toString(),
      published_at: primitives.publishedAt,
      created_at: primitives.createdAt,
      updated_at: primitives.updatedAt,
      categoryIds: primitives.categoryIds,
    };
  }
}