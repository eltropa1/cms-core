import { PostRepository } from "../../domain/post/PostRepository.js";
import { PostNotFoundError } from "../errors/PostErrors.js";

export interface DeletePostInput {
  id: string;
}

export class DeletePost {
  constructor(private readonly repository: PostRepository) {}

  async execute(input: DeletePostInput): Promise<void> {
    const post = await this.repository.findById(input.id);

    if (!post) {
      throw new PostNotFoundError(input.id);
    }

    post.delete();

    await this.repository.save(post);
  }
}
