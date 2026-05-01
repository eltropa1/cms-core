import { CategoryRepository } from "../../domain/category/CategoryRepository.js";
import { Slug } from "../../domain/value-objects/Slug.js";
import { Category } from "../../domain/category/Category.js";

export interface GetCategoryBySlugInput {
  slug: string;
}

export class GetCategoryBySlug {
  constructor(private readonly repository: CategoryRepository) {}

  async execute(input: GetCategoryBySlugInput): Promise<Category | null> {
    const slug = new Slug(input.slug);
    return this.repository.findBySlug(slug);
  }
}