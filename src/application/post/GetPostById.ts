import { PostRepository } from "../../domain/post/PostRepository.js";
import { Post } from "../../domain/post/Post.js";

export interface GetPostByIdInput {
  id: string;
}

export class GetPostById {
  constructor(private readonly repository: PostRepository) {}

  async execute(input: GetPostByIdInput): Promise<Post | null> {
    return this.repository.findById(input.id);
  }
}
