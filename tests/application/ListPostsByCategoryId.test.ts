import { describe, it, expect } from "vitest";
import { ListPostsByCategoryId } from "../../src/application/post/ListPostsByCategoryId.js";
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
    if (index >= 0) this.posts[index] = post;
    else this.posts.push(post);
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

describe("ListPostsByCategoryId", () => {
  const block: ParagraphBlock = {
    id: "b1",
    type: "paragraph",
    data: new ParagraphData({ text: "Contenido" }),
  };

  const content = new ContentDocument({
    schemaVersion: 1,
    blocks: [block],
  });

  it("should return only published posts for the given category", async () => {
    const repo = new InMemoryPostRepository();

    const post1 = new Post({
      id: "p1",
      slug: new Slug("post-1"),
      title: "Post 1",
      content,
    });

    post1.setCategories(["c1"]);
    post1.publish();

    const post2 = new Post({
      id: "p2",
      slug: new Slug("post-2"),
      title: "Post 2",
      content,
    });

    post2.setCategories(["c2"]);
    post2.publish();

    await repo.save(post1);
    await repo.save(post2);

    const useCase = new ListPostsByCategoryId(repo);

    const result = await useCase.execute({ categoryId: "c1" });

    expect(result.length).toBe(1);
    expect(result[0].id).toBe("p1");
  });
});