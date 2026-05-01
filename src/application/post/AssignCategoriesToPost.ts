import { PostRepository } from "../../domain/post/PostRepository.js";
import { CategoryRepository } from "../../domain/category/CategoryRepository.js";
import { PostNotFoundError } from "../errors/PostErrors.js";
import { CategoryNotFoundError } from "../errors/CategoryErrors.js";

export interface AssignCategoriesToPostInput {
  postId: string;
  categoryIds: string[];
}

export class AssignCategoriesToPost {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly categoryRepository: CategoryRepository
  ) {}

  async execute(input: AssignCategoriesToPostInput): Promise<void> {
    const post = await this.postRepository.findById(input.postId);

    if (!post) {
      throw new PostNotFoundError(input.postId);
    }

    for (const categoryId of input.categoryIds) {
      const category = await this.categoryRepository.findById(categoryId);
      if (!category) {
        throw new CategoryNotFoundError(categoryId);
      }
    }

    post.setCategories(input.categoryIds);

    await this.postRepository.save(post);
  }
}