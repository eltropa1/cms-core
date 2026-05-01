import { describe, it, expect } from "vitest";
import { CreateCategory } from "../../src/application/category/CreateCategory.js";
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
    return this.categories.find(c => c.getSlug().toString() === slug.toString()) ?? null;
  }

  async findAll(): Promise<Category[]> {
    return [...this.categories];
  }

  async delete(id: string): Promise<void> {
  this.categories = this.categories.filter(c => c.id !== id);
}
}

describe("CreateCategory Use Case", () => {
  it("should create category successfully", async () => {
    const repo = new InMemoryCategoryRepository();
    const useCase = new CreateCategory(repo);

    const category = await useCase.execute({
      id: "c1",
      name: "Ansiedad",
      slug: "ansiedad",
    });

    expect(category.getName()).toBe("Ansiedad");
  });

  it("should not allow duplicate slug", async () => {
    const repo = new InMemoryCategoryRepository();
    const useCase = new CreateCategory(repo);

    await useCase.execute({
      id: "c1",
      name: "Ansiedad",
      slug: "ansiedad",
    });

    await expect(
      useCase.execute({
        id: "c2",
        name: "Otra",
        slug: "ansiedad",
      })
    ).rejects.toThrow();
  });

  it("should not allow duplicate name", async () => {
    const repo = new InMemoryCategoryRepository();
    const useCase = new CreateCategory(repo);

    await useCase.execute({
      id: "c1",
      name: "Ansiedad",
      slug: "ansiedad",
    });

    await expect(
      useCase.execute({
        id: "c2",
        name: "Ansiedad",
        slug: "ansiedad-2",
      })
    ).rejects.toThrow();
  });
});