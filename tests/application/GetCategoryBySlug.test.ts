import { describe, it, expect } from "vitest";
import { GetCategoryBySlug } from "../../src/application/category/GetCategoryBySlug.js";
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

describe("GetCategoryBySlug Use Case", () => {
  it("should return category by slug", async () => {
    const repo = new InMemoryCategoryRepository();

    const category = new Category({
      id: "c1",
      name: "Ansiedad",
      slug: new Slug("ansiedad"),
    });

    await repo.save(category);

    const useCase = new GetCategoryBySlug(repo);

    const result = await useCase.execute({ slug: "ansiedad" });

    expect(result?.getName()).toBe("Ansiedad");
  });

  it("should return null if not found", async () => {
    const repo = new InMemoryCategoryRepository();
    const useCase = new GetCategoryBySlug(repo);

    const result = await useCase.execute({ slug: "no-existe" });

    expect(result).toBeNull();
  });
});