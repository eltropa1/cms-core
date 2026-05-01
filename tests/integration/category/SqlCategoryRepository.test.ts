import { describe, it, expect, beforeEach } from "vitest";
import { getPool } from "../../../src/infrastructure/db/connection.js";
import { SqlCategoryRepository } from "../../../src/infrastructure/category/SqlCategoryRepository.js";
import { Category } from "../../../src/domain/category/Category.js";
import { Slug } from "../../../src/domain/value-objects/Slug.js";
import { truncateAllTables } from "../dbTestHelper.js";
import { randomUUID } from "crypto";

describe("SqlCategoryRepository (integration)", () => {
  const pool = getPool();
  const repository = new SqlCategoryRepository(pool);

  beforeEach(async () => {
    await truncateAllTables();
  });

  it("save → insert", async () => {
    const category = new Category({
      id: randomUUID(),
      name: "Tech",
      slug: new Slug("tech"),
      description: "Technology",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await repository.save(category);

    const result = await pool.query("SELECT * FROM categories");
    expect(result.rows.length).toBe(1);
    expect(result.rows[0].name).toBe("Tech");
  });

  it("save → update (UPSERT)", async () => {
    const id = randomUUID();

    const category = new Category({
      id,
      name: "Tech",
      slug: new Slug("tech"),
      description: "Technology",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await repository.save(category);

    const updated = new Category({
      id,
      name: "Technology Updated",
      slug: new Slug("tech"),
      description: "Updated",
      createdAt: new Date(), // no accedemos a privado
      updatedAt: new Date(),
    });

    await repository.save(updated);

    const result = await pool.query("SELECT * FROM categories WHERE id = $1", [
      id,
    ]);

    expect(result.rows.length).toBe(1);
    expect(result.rows[0].name).toBe("Technology Updated");
  });

  it("findById", async () => {
    const id = randomUUID();

    const category = new Category({
      id,
      name: "Tech",
      slug: new Slug("tech"),
      description: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await repository.save(category);

    const found = await repository.findById(id);

    expect(found).not.toBeNull();
    expect(found?.id).toBe(id);
    expect(found?.getName()).toBe("Tech");
  });

  it("findBySlug", async () => {
    const category = new Category({
      id: randomUUID(),
      name: "Tech",
      slug: new Slug("tech"),
      description: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await repository.save(category);

    const found = await repository.findBySlug(new Slug("tech"));

    expect(found).not.toBeNull();
    expect(found?.getSlug().toString()).toBe("tech");
    expect(found?.getName()).toBe("Tech");
  });


it("findAll", async () => {
  const categoryA = new Category({
    id: randomUUID(),
    name: "A",
    slug: new Slug("a"),
  });

  const categoryB = new Category({
    id: randomUUID(),
    name: "B",
    slug: new Slug("b"),
  });

  await repository.save(categoryA);
  await repository.save(categoryB);

  const all = await repository.findAll();
  const names = all.map((c) => c.getName());

  expect(names).toContain("A");
  expect(names).toContain("B");
  expect(all.length).toBe(2);
});

  it("delete físico", async () => {
    const id = randomUUID();

    const category = new Category({
      id,
      name: "DeleteMe",
      slug: new Slug("deleteme"),
      description: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await repository.save(category);

    await repository.delete(id);

    const result = await pool.query("SELECT * FROM categories WHERE id = $1", [
      id,
    ]);

    expect(result.rows.length).toBe(0);
  });

  it("UNIQUE slug conflict", async () => {
    const cat1 = new Category({
      id: randomUUID(),
      name: "Tech",
      slug: new Slug("tech"),
      description: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const cat2 = new Category({
      id: randomUUID(),
      name: "Another",
      slug: new Slug("tech"),
      description: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await repository.save(cat1);

    await expect(repository.save(cat2)).rejects.toThrow();
  });
});
