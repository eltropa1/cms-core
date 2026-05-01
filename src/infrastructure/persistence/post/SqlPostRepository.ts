import { Pool } from "pg";
import { PostRepository } from "../../../domain/post/PostRepository.js";
import { Post } from "../../../domain/post/Post.js";
import { Slug } from "../../../domain/value-objects/Slug.js";
import { PostMapper } from "./PostMapper.js";

export class SqlPostRepository implements PostRepository {
  constructor(private readonly pool: Pool) {}

  async save(post: Post): Promise<void> {
    const client = await this.pool.connect();

    try {
      await client.query("BEGIN");

      const persistence = PostMapper.toPersistence(post);

      await client.query(
        `
        INSERT INTO posts (
          id,
          slug,
          title,
          description,
          content_document,
          status,
          created_at,
          updated_at,
          published_at
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
        ON CONFLICT (id)
        DO UPDATE SET
          slug = EXCLUDED.slug,
          title = EXCLUDED.title,
          description = EXCLUDED.description,
          content_document = EXCLUDED.content_document,
          status = EXCLUDED.status,
          updated_at = EXCLUDED.updated_at,
          published_at = EXCLUDED.published_at
        `,
        [
          persistence.id,
          persistence.slug,
          persistence.title,
          persistence.description,
          persistence.content,
          persistence.status,
          persistence.created_at,
          persistence.updated_at,
          persistence.published_at,
        ]
      );

      await client.query(
        `DELETE FROM post_categories WHERE post_id = $1`,
        [persistence.id]
      );

      for (const categoryId of persistence.categoryIds) {
        await client.query(
          `
          INSERT INTO post_categories (post_id, category_id)
          VALUES ($1,$2)
          `,
          [persistence.id, categoryId]
        );
      }

      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }

  async findById(id: string): Promise<Post | null> {
    const result = await this.pool.query(
      `SELECT * FROM posts WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) return null;

    const row = result.rows[0];

    const categories = await this.pool.query(
      `SELECT category_id FROM post_categories WHERE post_id = $1`,
      [id]
    );

    const persistence = {
      id: row.id,
      slug: row.slug,
      title: row.title,
      description: row.description,
      content: row.content_document,
      status: row.status,
      published_at: row.published_at,
      created_at: row.created_at,
      updated_at: row.updated_at,
    };

    const categoryIds = categories.rows.map((r) => r.category_id);

    return PostMapper.toDomain(persistence, categoryIds);
  }

  async findBySlug(slug: Slug): Promise<Post | null> {
    const result = await this.pool.query(
      `SELECT * FROM posts WHERE slug = $1`,
      [slug.toString()]
    );

    if (result.rows.length === 0) return null;

    const row = result.rows[0];

    const categories = await this.pool.query(
      `SELECT category_id FROM post_categories WHERE post_id = $1`,
      [row.id]
    );

    const persistence = {
      id: row.id,
      slug: row.slug,
      title: row.title,
      description: row.description,
      content: row.content_document,
      status: row.status,
      published_at: row.published_at,
      created_at: row.created_at,
      updated_at: row.updated_at,
    };

    const categoryIds = categories.rows.map((r) => r.category_id);

    return PostMapper.toDomain(persistence, categoryIds);
  }

  async findPublished(): Promise<Post[]> {
    const result = await this.pool.query(`
      SELECT * FROM posts
      WHERE status = 'published'
      ORDER BY published_at DESC
    `);

    const posts: Post[] = [];

    for (const row of result.rows) {
      const categories = await this.pool.query(
        `SELECT category_id FROM post_categories WHERE post_id = $1`,
        [row.id]
      );

      const persistence = {
        id: row.id,
        slug: row.slug,
        title: row.title,
        description: row.description,
        content: row.content_document,
        status: row.status,
        published_at: row.published_at,
        created_at: row.created_at,
        updated_at: row.updated_at,
      };

      const categoryIds = categories.rows.map((r) => r.category_id);

      posts.push(PostMapper.toDomain(persistence, categoryIds));
    }

    return posts;
  }
}