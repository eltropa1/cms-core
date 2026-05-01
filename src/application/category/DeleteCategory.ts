import { CategoryRepository } from "../../domain/category/CategoryRepository.js";

export interface DeleteCategoryInput {
  id: string;
}

export class DeleteCategory {
  constructor(private readonly repository: CategoryRepository) {}

  async execute(input: DeleteCategoryInput): Promise<void> {
    const category = await this.repository.findById(input.id);

    if (!category) {
      throw new Error("Category not found");
    }

    await this.repository.delete(input.id);
  }
}