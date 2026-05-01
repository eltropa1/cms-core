import { describe, it, expect, beforeEach } from "vitest";
import { randomUUID } from "crypto";
import { getPool } from "../../../src/infrastructure/db/connection.js";
import { truncateAllTables } from "../dbTestHelper.js";
import { SqlPostRepository } from "../../../src/infrastructure/persistence/post/SqlPostRepository.js";

import { Post } from "../../../src/domain/post/Post.js";
import { Slug } from "../../../src/domain/value-objects/Slug.js";
import { ContentDocument } from "../../../src/domain/content/ContentDocument.js";
import { ParagraphData } from "../../../src/domain/content/editorial/ParagraphData.js";
import { SqlCategoryRepository } from "../../../src/infrastructure/category/SqlCategoryRepository.js";
import { Category } from "../../../src/domain/category/Category.js";

function createValidContent(): ContentDocument {
  return new ContentDocument({
    schemaVersion: 1,
    blocks: [
      {
        id: randomUUID(),
        type: "paragraph",
        data: new ParagraphData({ text: "Valid paragraph" }),
      },
    ],
  });
}

describe("SqlPostRepository (integration)", () => {
  const pool = getPool();
  const repository = new SqlPostRepository(pool);

  beforeEach(async () => {
    await truncateAllTables();
  });

  it("save → insert", async () => {
    const post = new Post({
      id: randomUUID(),
      slug: new Slug("post-1"),
      title: "Post 1",
      content: createValidContent(),
    });

    await repository.save(post);

    const result = await pool.query("SELECT * FROM posts");
    expect(result.rows.length).toBe(1);
    expect(result.rows[0].title).toBe("Post 1");
  });

  it("N↔N synchronization replaces categories correctly", async () => {
  const post = new Post({
    id: randomUUID(),
    slug: new Slug("post-nn"),
    title: "Post NN",
    content: createValidContent(),
  });

  const categoryRepository = new SqlCategoryRepository(pool);

  const category1 = new Category({
    id: randomUUID(),
    name: "Category 1",
    slug: new Slug("category-1"),
  });

  const category2 = new Category({
    id: randomUUID(),
    name: "Category 2",
    slug: new Slug("category-2"),
  });

  await categoryRepository.save(category1);
  await categoryRepository.save(category2);

  /* persistimos primero el post */
await repository.save(post);

/* luego asignamos categorías */
post.setCategories([category1.id, category2.id]);
await repository.save(post);

  let result = await pool.query(
    "SELECT * FROM post_categories WHERE post_id = $1",
    [post.id]
  );

  expect(result.rows.length).toBe(2);

  post.setCategories([category2.id]);
  await repository.save(post);

  result = await pool.query(
    "SELECT * FROM post_categories WHERE post_id = $1",
    [post.id]
  );

  expect(result.rows.length).toBe(1);
  expect(result.rows[0].category_id).toBe(category2.id);
});

  it("findById rehydrates full aggregate", async () => {
    const post = new Post({
      id: randomUUID(),
      slug: new Slug("rehydrate"),
      title: "Rehydrate",
      content: createValidContent(),
    });

    const categoryRepository = new SqlCategoryRepository(pool);

const category = new Category({
  id: randomUUID(),
  name: "Category Rehydrate",
  slug: new Slug("category-rehydrate"),
  createdAt: new Date(),
  updatedAt: new Date(),
});

await categoryRepository.save(category);

await repository.save(post);

post.setCategories([category.id]);
await repository.save(post);

    const found = await repository.findById(post.id);

    expect(found).not.toBeNull();
    expect(found?.getTitle()).toBe("Rehydrate");
    expect(found?.getCategoryIds()).toContain(category.id);
  });

  it("findBySlug", async () => {
    const post = new Post({
      id: randomUUID(),
      slug: new Slug("slug-test"),
      title: "Slug Test",
      content: createValidContent(),
    });

    await repository.save(post);

    const found = await repository.findBySlug(new Slug("slug-test"));

    expect(found).not.toBeNull();
    expect(found?.getTitle()).toBe("Slug Test");
  });

  it("findPublished returns only published ordered DESC", async () => {
    const post1 = new Post({
      id: randomUUID(),
      slug: new Slug("published-1"),
      title: "Published 1",
      content: createValidContent(),
    });

    const post2 = new Post({
      id: randomUUID(),
      slug: new Slug("published-2"),
      title: "Published 2",
      content: createValidContent(),
    });

    post1.publish();
    await repository.save(post1);

    // Small delay to ensure different publishedAt
    await new Promise((r) => setTimeout(r, 10));

    post2.publish();
    await repository.save(post2);

    const published = await repository.findPublished();

    expect(published.length).toBe(2);
    expect(published[0].getTitle()).toBe("Published 2");
    expect(published[1].getTitle()).toBe("Published 1");
  });

  it("ON DELETE CASCADE when post is deleted physically", async () => {
    const post = new Post({
      id: randomUUID(),
      slug: new Slug("cascade-test"),
      title: "Cascade Test",
      content: createValidContent(),
    });

    const categoryRepository = new SqlCategoryRepository(pool);

const category = new Category({
  id: randomUUID(),
  name: "Cascade Category",
  slug: new Slug("cascade-category"),
  createdAt: new Date(),
  updatedAt: new Date(),
});

await categoryRepository.save(category);

post.setCategories([category.id]);
await repository.save(post);

    await pool.query("DELETE FROM posts WHERE id = $1", [post.id]);

    const result = await pool.query(
      "SELECT * FROM post_categories WHERE post_id = $1",
      [post.id]
    );

    expect(result.rows.length).toBe(0);
  });
});