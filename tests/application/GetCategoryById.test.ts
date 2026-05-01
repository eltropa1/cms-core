import { describe, it, expect } from "vitest";
import { GetCategoryById } from "../../src/application/category/GetCategoryById.js";
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

describe("GetCategoryById Use Case", () => {
  it("should return category if exists", async () => {
    const repo = new InMemoryCategoryRepository();

    const category = new Category({
      id: "c1",
      name: "Ansiedad",
      slug: new Slug("ansiedad"),
    });

    await repo.save(category);

    const useCase = new GetCategoryById(repo);

    const result = await useCase.execute({ id: "c1" });

    expect(result?.getName()).toBe("Ansiedad");
  });

  it("should return null if not found", async () => {
    const repo = new InMemoryCategoryRepository();
    const useCase = new GetCategoryById(repo);

    const result = await useCase.execute({ id: "no-existe" });

    expect(result).toBeNull();
  });
});