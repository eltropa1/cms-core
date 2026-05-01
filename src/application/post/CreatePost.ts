import { Post } from "../../domain/post/Post.js";
import { PostRepository } from "../../domain/post/PostRepository.js";
import { Slug } from "../../domain/value-objects/Slug.js";
import { ContentDocument } from "../../domain/content/ContentDocument.js";

export interface CreatePostInput {
  id: string;
  title: string;
  description: string;
  content: ContentDocument;
}

export class CreatePost {
  constructor(private readonly repository: PostRepository) {}

  async execute(input: CreatePostInput): Promise<Post> {
    const post = new Post({
      id: input.id,
      title: input.title,
      description: input.description,
      content: input.content,
    });

    const baseSlug = post.getSlug();

    let finalSlug = baseSlug;
    let counter = 1;

    while (true) {
      const existing = await this.repository.findBySlug(finalSlug);
      if (!existing) break;

      finalSlug = new Slug(`${baseSlug.toString()}-${counter}`);
      counter++;
    }

    post.overrideSlug(finalSlug);

    await this.repository.save(post);

    return post;
  }
}