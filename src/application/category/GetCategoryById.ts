import { CategoryRepository } from "../../domain/category/CategoryRepository.js";
import { Category } from "../../domain/category/Category.js";

export interface GetCategoryByIdInput {
  id: string;
}

export class GetCategoryById {
  constructor(private readonly repository: CategoryRepository) {}

  async execute(input: GetCategoryByIdInput): Promise<Category | null> {
    return this.repository.findById(input.id);
  }
}