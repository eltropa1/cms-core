import { Post } from "./Post.js";
import { Slug } from "../value-objects/Slug.js";

export interface PostRepository {
  save(post: Post): Promise<void>;

  findById(id: string): Promise<Post | null>;

  findBySlug(slug: Slug): Promise<Post | null>;

  /**
   * Returns all published posts ordered by publishedAt DESC.
   *
   * IMPORTANT:
   * - Ordering is responsibility of the repository implementation.
   * - Application layer relies on this ordering.
   */
  findPublished(): Promise<Post[]>;
}