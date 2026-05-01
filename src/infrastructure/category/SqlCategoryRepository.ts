import { Pool } from "pg";
import { CategoryRepository } from "../../domain/category/CategoryRepository.js";
import { Category } from "../../domain/category/Category.js";
import { Slug } from "../../domain/value-objects/Slug.js";

/**
 * SqlCategoryRepository
 *
 * Concrete PostgreSQL implementation of CategoryRepository.
 *
 * RESPONSIBILITIES:
 * - Persist Category aggregate state
 * - Rehydrate Category aggregate from database rows
 *
 * NON-RESPONSIBILITIES:
 * - No domain validation
 * - No business rules
 * - No slug normalization
 * - No duplicate handling logic (DB handles UNIQUE)
 *
 * This class is pure infrastructure.
 */
export class SqlCategoryRepository implements CategoryRepository {
  constructor(private readonly pool: Pool) {}

  /**
   * Persists a Category aggregate.
   *
   * Strategy:
   * - Single UPSERT operation.
   * - id is PRIMARY KEY.
   * - slug has UNIQUE constraint (DB enforced).
   *
   * created_at and updated_at are always provided by the aggregate.
   */
  async save(category: Category): Promise<void> {
    await this.pool.query(
      `
      INSERT INTO categories (
        id,
        name,
        slug,
        description,
        created_at,
        updated_at
      )
      VALUES ($1,$2,$3,$4,$5,$6)
      ON CONFLICT (id)
      DO UPDATE SET
        name = EXCLUDED.name,
        slug = EXCLUDED.slug,
        description = EXCLUDED.description,
        updated_at = EXCLUDED.updated_at
      `,
      [
        category.id,
        category.getName(),
        category.getSlug().toString(),
        category.getDescription() ?? null,
        category.getCreatedAt(),
        category.getUpdatedAt(),
      ]
    );
  }

  /**
   * Finds a Category by id.
   *
   * Returns:
   * - Category aggregate if found
   * - null otherwise
   */
  async findById(id: string): Promise<Category | null> {
    const result = await this.pool.query(
      `SELECT * FROM categories WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return null;
    }

    return this.mapRowToDomain(result.rows[0]);
  }

  /**
   * Finds a Category by Slug value object.
   *
   * Returns:
   * - Category aggregate if found
   * - null otherwise
   */
  async findBySlug(slug: Slug): Promise<Category | null> {
    const result = await this.pool.query(
      `SELECT * FROM categories WHERE slug = $1`,
      [slug.toString()]
    );

    if (result.rows.length === 0) {
      return null;
    }

    return this.mapRowToDomain(result.rows[0]);
  }

  /**
   * Returns all categories.
   *
   * No ordering rules defined at domain level,
   * so repository returns natural DB order.
   *
   * (Ordering can be added later if application requires.)
   */
  async findAll(): Promise<Category[]> {
    const result = await this.pool.query(
      `SELECT * FROM categories`
    );

    return result.rows.map((row) => this.mapRowToDomain(row));
  }

  /**
   * Physically deletes a category.
   *
   * Due to ON DELETE CASCADE in post_categories,
   * related rows will be automatically removed.
   */
  async delete(id: string): Promise<void> {
    await this.pool.query(
      `DELETE FROM categories WHERE id = $1`,
      [id]
    );
  }

  /**
   * Maps a raw database row into a Category aggregate.
   *
   * This method performs:
   * - Primitive → ValueObject conversion (slug)
   * - Snake_case → camelCase mapping
   *
   * No validation logic is introduced here.
   */
  private mapRowToDomain(row: any): Category {
    return new Category({
      id: row.id,
      name: row.name,
      slug: new Slug(row.slug),
      description: row.description ?? undefined,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    });
  }
}