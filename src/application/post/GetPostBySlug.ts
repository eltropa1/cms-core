import { PostRepository } from "../../domain/post/PostRepository.js";
import { Slug } from "../../domain/value-objects/Slug.js";
import { Post } from "../../domain/post/Post.js";

export interface GetPostBySlugInput {
  slug: string;
}

export class GetPostBySlug {
  constructor(private readonly repository: PostRepository) {}

  async execute(input: GetPostBySlugInput): Promise<Post | null> {
    const slug = new Slug(input.slug);
    return this.repository.findBySlug(slug);
  }
}
