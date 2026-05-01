import { PostRepository } from "../../domain/post/PostRepository.js";
import { ContentDocument } from "../../domain/content/ContentDocument.js";

export interface UpdatePostContentInput {
  id: string;
  content: ContentDocument;
}

export class UpdatePostContent {
  constructor(private readonly repository: PostRepository) {}

  async execute(input: UpdatePostContentInput): Promise<void> {
    const post = await this.repository.findById(input.id);

    if (!post) {
      throw new Error("Post not found");
    }

    post.updateContent(input.content);

    await this.repository.save(post);
  }
}
