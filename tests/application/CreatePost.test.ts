import { describe, it, expect } from "vitest";
import { CreatePost } from "../../src/application/post/CreatePost.js";
import { PostRepository } from "../../src/domain/post/PostRepository.js";
import { Slug } from "../../src/domain/value-objects/Slug.js";
import { ContentDocument } from "../../src/domain/content/ContentDocument.js";
import { ParagraphData } from "../../src/domain/content/editorial/ParagraphData.js";
import type { ParagraphBlock } from "../../src/domain/content/Block.js";
import { Post } from "../../src/domain/post/Post.js";

class InMemoryPostRepository implements PostRepository {
  private posts: Post[] = [];

  async save(post: Post): Promise<void> {
    this.posts.push(post);
  }

  async findById(id: string) {
    return this.posts.find(p => p.id === id) ?? null;
  }

  async findBySlug(slug: Slug) {
    return this.posts.find(p => p.slug.toString() === slug.toString()) ?? null;
  }

  async findPublished(): Promise<Post[]> {
  return this.posts.filter(p => p.getPublicationState().isPublished());
}

}

describe("CreatePost Use Case", () => {
  it("should create a post successfully", async () => {
    const repo = new InMemoryPostRepository();
    const useCase = new CreatePost(repo);

    const block: ParagraphBlock = {
      id: "b1",
      type: "paragraph",
      data: new ParagraphData({ text: "Contenido" }),
    };

    const content = new ContentDocument({
      schemaVersion: 1,
      blocks: [block],
    });

    const post = await useCase.execute({
      id: "p1",
      slug: "mi-post",
      title: "Mi título",
      content,
    });

    expect(post.getTitle()).toBe("Mi título");
  });

  it("should not allow duplicate slug", async () => {
    const repo = new InMemoryPostRepository();
    const useCase = new CreatePost(repo);

    const block: ParagraphBlock = {
      id: "b1",
      type: "paragraph",
      data: new ParagraphData({ text: "Contenido" }),
    };

    const content = new ContentDocument({
      schemaVersion: 1,
      blocks: [block],
    });

    await useCase.execute({
      id: "p1",
      slug: "mi-post",
      title: "Título",
      content,
    });

    await expect(
      useCase.execute({
        id: "p2",
        slug: "mi-post",
        title: "Otro título",
        content,
      })
    ).rejects.toThrow();
  });
});
