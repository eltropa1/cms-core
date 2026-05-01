import { CategoryRepository } from "../../domain/category/CategoryRepository.js";
import { Category } from "../../domain/category/Category.js";

export class ListCategories {
  constructor(private readonly repository: CategoryRepository) {}

  async execute(): Promise<Category[]> {
    return this.repository.findAll();
  }
}