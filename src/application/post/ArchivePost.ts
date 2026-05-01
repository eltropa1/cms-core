import { PostRepository } from "../../domain/post/PostRepository.js";

export interface ArchivePostInput {
  id: string;
}

export class ArchivePost {
  constructor(private readonly repository: PostRepository) {}

  async execute(input: ArchivePostInput): Promise<void> {
    const post = await this.repository.findById(input.id);

    if (!post) {
      throw new Error("Post not found");
    }

    post.archive();

    await this.repository.save(post);
  }
}
