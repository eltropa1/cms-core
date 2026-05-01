import { PostRepository } from "../../domain/post/PostRepository.js";
import { Post } from "../../domain/post/Post.js";

export class ListPublishedPosts {
  constructor(private readonly repository: PostRepository) {}

  async execute(): Promise<Post[]> {
    return this.repository.findPublished();
  }
}
