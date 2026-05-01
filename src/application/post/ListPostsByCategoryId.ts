import { PostRepository } from "../../domain/post/PostRepository.js";

export interface ListPostsByCategoryIdInput {
  categoryId: string;
}

export class ListPostsByCategoryId {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(input: ListPostsByCategoryIdInput) {
    const publishedPosts = await this.postRepository.findPublished();

    return publishedPosts.filter(post =>
      post.getCategoryIds().includes(input.categoryId)
    );
  }
}