import { CategoryRepository } from "../../domain/category/CategoryRepository.js";
import { Slug } from "../../domain/value-objects/Slug.js";

export interface UpdateCategoryInput {
  id: string;
  name?: string;
  slug?: string;
  description?: string;
}

export class UpdateCategory {
  constructor(private readonly repository: CategoryRepository) {}

  async execute(input: UpdateCategoryInput): Promise<void> {
    const category = await this.repository.findById(input.id);

    if (!category) {
      throw new Error("Category not found");
    }

    const all = await this.repository.findAll();

    if (input.name) {
      const nameExists = all.some(
        c =>
          c.id !== category.id &&
          c.getName().toLowerCase() === input.name!.toLowerCase()
      );

      if (nameExists) {
        throw new Error("Category name already exists");
      }

      category.updateName(input.name);
    }

    if (input.slug) {
      const slug = new Slug(input.slug);

      const slugExists = all.some(
        c =>
          c.id !== category.id &&
          c.getSlug().toString() === slug.toString()
      );

      if (slugExists) {
        throw new Error("Category slug already exists");
      }

      category.updateSlug(slug);
    }

    if (input.description !== undefined) {
      category.updateDescription(input.description);
    }

    await this.repository.save(category);
  }
}