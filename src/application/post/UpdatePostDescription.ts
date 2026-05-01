import { PostRepository } from "../../domain/post/PostRepository.js";

export interface UpdatePostDescriptionInput {
  id: string;
  description: string;
}

export class UpdatePostDescription {
  constructor(private readonly repository: PostRepository) {}

  async execute(input: UpdatePostDescriptionInput): Promise<void> {
    const post = await this.repository.findById(input.id);

    if (!post) {
      throw new Error("Post not found");
    }

    post.updateDescription(input.description);

    await this.repository.save(post);
  }
}