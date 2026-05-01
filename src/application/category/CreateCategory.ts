import { Category } from "../../domain/category/Category.js";
import { CategoryRepository } from "../../domain/category/CategoryRepository.js";
import { Slug } from "../../domain/value-objects/Slug.js";
import {
  CategorySlugAlreadyExistsError,
  CategoryNameAlreadyExistsError,
} from "../errors/CategoryErrors.js";

export interface CreateCategoryInput {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export class CreateCategory {
  constructor(private readonly repository: CategoryRepository) {}

  async execute(input: CreateCategoryInput): Promise<Category> {
    const slug = new Slug(input.slug);

    const existingBySlug = await this.repository.findBySlug(slug);
    if (existingBySlug) {
      throw new CategorySlugAlreadyExistsError(input.slug);
    }

    const all = await this.repository.findAll();
    const nameExists = all.some(
      c => c.getName().toLowerCase() === input.name.toLowerCase()
    );

    if (nameExists) {
      throw new CategoryNameAlreadyExistsError(input.name);
    }

    const category = new Category({
      id: input.id,
      name: input.name,
      slug,
      description: input.description,
    });

    await this.repository.save(category);

    return category;
  }
}