import { describe, it, expect } from "vitest";
import { UpdatePostContent } from "../../src/application/post/UpdatePostContent.js";
import { PostRepository } from "../../src/domain/post/PostRepository.js";
import { Post } from "../../src/domain/post/Post.js";
import { Slug } from "../../src/domain/value-objects/Slug.js";
import { ContentDocument } from "../../src/domain/content/ContentDocument.js";
import { ParagraphData } from "../../src/domain/content/editorial/ParagraphData.js";
import type { ParagraphBlock } from "../../src/domain/content/Block.js";

class InMemoryPostRepository implements PostRepository {
  private posts: Post[] = [];

  async save(post: Post): Promise<void> {
    const index = this.posts.findIndex(p => p.id === post.id);
    if (index >= 0) {
      this.posts[index] = post;
    } else {
      this.posts.push(post);
    }
  }

  async findById(id: string): Promise<Post | null> {
    return this.posts.find(p => p.id === id) ?? null;
  }

  async findBySlug(slug: Slug): Promise<Post | null> {
    return this.posts.find(p => p.slug.toString() === slug.toString()) ?? null;
  }

  async findPublished(): Promise<Post[]> {
  return this.posts.filter(p => p.getPublicationState().isPublished());
}

}

describe("UpdatePostContent Use Case", () => {
  it("should update content of an existing post", async () => {
    const repo = new InMemoryPostRepository();

    const originalBlock: ParagraphBlock = {
      id: "b1",
      type: "paragraph",
      data: new ParagraphData({ text: "Contenido original" }),
    };

    const originalContent = new ContentDocument({
      schemaVersion: 1,
      blocks: [originalBlock],
    });

    const post = new Post({
      id: "p1",
      slug: new Slug("mi-post"),
      title: "Título",
      content: originalContent,
    });

    await repo.save(post);

    const newBlock: ParagraphBlock = {
      id: "b2",
      type: "paragraph",
      data: new ParagraphData({ text: "Contenido nuevo" }),
    };

    const newContent = new ContentDocument({
      schemaVersion: 1,
      blocks: [newBlock],
    });

    const useCase = new UpdatePostContent(repo);

    await useCase.execute({
      id: "p1",
      content: newContent,
    });

    const updated = await repo.findById("p1");

    expect(updated?.getContent().getBlocks()[0].id).toBe("b2");
  });

  it("should throw if post does not exist", async () => {
    const repo = new InMemoryPostRepository();
    const useCase = new UpdatePostContent(repo);

    const block: ParagraphBlock = {
      id: "b1",
      type: "paragraph",
      data: new ParagraphData({ text: "Algo" }),
    };

    const content = new ContentDocument({
      schemaVersion: 1,
      blocks: [block],
    });

    await expect(
      useCase.execute({ id: "no-existe", content })
    ).rejects.toThrow();
  });
});
