import { describe, it, expect } from "vitest";
import { PublishPost } from "../../src/application/post/PublishPost.js";
import { PostRepository } from "../../src/domain/post/PostRepository.js";
import { Post } from "../../src/domain/post/Post.js";
import { Slug } from "../../src/domain/value-objects/Slug.js";
import { ContentDocument } from "../../src/domain/content/ContentDocument.js";
import { ParagraphData } from "../../src/domain/content/editorial/ParagraphData.js";
import type { ParagraphBlock } from "../../src/domain/content/Block.js";

class InMemoryPostRepository implements PostRepository {
  private posts: Post[] = [];

  async save(post: Post): Promise<void> {
    const index = this.posts.findIndex((p) => p.id === post.id);

    if (index >= 0) {
      this.posts[index] = post;
    } else {
      this.posts.push(post);
    }
  }

  async findById(id: string): Promise<Post | null> {
    return this.posts.find((p) => p.id === id) ?? null;
  }

  async findBySlug(slug: Slug): Promise<Post | null> {
    return (
      this.posts.find((p) => p.slug.toString() === slug.toString()) ?? null
    );
  }

  async findPublished(): Promise<Post[]> {
    return this.posts
      .filter((p) => p.getPublicationState().isPublished())
      .sort((a, b) => {
        const aTime = a.getPublishedAt()?.getTime() ?? 0;
        const bTime = b.getPublishedAt()?.getTime() ?? 0;
        return bTime - aTime;
      });
  }
}

describe("PublishPost Use Case", () => {
  it("should publish an existing post", async () => {
    const repo = new InMemoryPostRepository();

    const block: ParagraphBlock = {
      id: "b1",
      type: "paragraph",
      data: new ParagraphData({ text: "Contenido" }),
    };

    const content = new ContentDocument({
      schemaVersion: 1,
      blocks: [block],
    });

    const post = new Post({
      id: "p1",
      slug: new Slug("mi-post"),
      title: "Título",
      content,
    });

    await repo.save(post);

    const useCase = new PublishPost(repo);

    await useCase.execute({ id: "p1" });

    const updated = await repo.findById("p1");

    expect(updated?.getPublicationState().isPublished()).toBe(true);
  });

  it("should throw if post does not exist", async () => {
    const repo = new InMemoryPostRepository();
    const useCase = new PublishPost(repo);

    await expect(useCase.execute({ id: "no-existe" })).rejects.toThrow();
  });
});
