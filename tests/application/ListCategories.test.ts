import { describe, it, expect } from "vitest";
import { ListCategories } from "../../src/application/category/ListCategories.js";
import { CategoryRepository } from "../../src/domain/category/CategoryRepository.js";
import { Category } from "../../src/domain/category/Category.js";
import { Slug } from "../../src/domain/value-objects/Slug.js";

class InMemoryCategoryRepository implements CategoryRepository {
  private categories: Category[] = [];

  async save(category: Category): Promise<void> {
    const index = this.categories.findIndex(c => c.id === category.id);
    if (index >= 0) this.categories[index] = category;
    else this.categories.push(category);
  }

  async findById(id: string): Promise<Category | null> {
    return this.categories.find(c => c.id === id) ?? null;
  }

  async findBySlug(slug: Slug): Promise<Category | null> {
    return this.categories.find(
      c => c.getSlug().toString() === slug.toString()
    ) ?? null;
  }

  async findAll(): Promise<Category[]> {
    return [...this.categories];
  }

  async delete(id: string): Promise<void> {
    this.categories = this.categories.filter(c => c.id !== id);
  }
}

describe("ListCategories Use Case", () => {
  it("should return all categories", async () => {
    const repo = new InMemoryCategoryRepository();

    const c1 = new Category({
      id: "c1",
      name: "Ansiedad",
      slug: new Slug("ansiedad"),
    });

    const c2 = new Category({
      id: "c2",
      name: "Depresión",
      slug: new Slug("depresion"),
    });

    await repo.save(c1);
    await repo.save(c2);

    const useCase = new ListCategories(repo);

    const result = await useCase.execute();

    expect(result.length).toBe(2);
  });
});