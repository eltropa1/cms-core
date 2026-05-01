import { PostRepository } from "../../domain/post/PostRepository.js";
import { Slug } from "../../domain/value-objects/Slug.js";

export interface UpdatePostTitleInput {
  id: string;
  title: string;
}

export class UpdatePostTitle {
  constructor(private readonly repository: PostRepository) {}

  async execute(input: UpdatePostTitleInput): Promise<void> {
    const post = await this.repository.findById(input.id);

    if (!post) {
      throw new Error("Post not found");
    }

    const previousSlug = post.getSlug().toString();

    post.updateTitle(input.title);

    const currentSlug = post.getSlug();

    if (currentSlug.toString() === previousSlug) {
      await this.repository.save(post);
      return;
    }

    const baseSlug = currentSlug;

    let finalSlug = baseSlug;
    let counter = 1;

    while (true) {
      const existing = await this.repository.findBySlug(finalSlug);

      if (!existing || existing.id === post.id) break;

      finalSlug = new Slug(`${baseSlug.toString()}-${counter}`);
      counter++;
    }

    post.overrideSlug(finalSlug);

    await this.repository.save(post);
  }
}