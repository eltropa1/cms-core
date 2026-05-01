import { describe, it, expect } from "vitest";
import { ListPublishedPosts } from "../../src/application/post/ListPublishedPosts.js";
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
    if (index >= 0) this.posts[index] = post;
    else this.posts.push(post);
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

describe("ListPublishedPosts Use Case", () => {
  it("should return only published posts", async () => {
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

    const draftPost = new Post({
      id: "p1",
      slug: new Slug("draft-post"),
      title: "Draft",
      content,
    });

    const publishedPost = new Post({
      id: "p2",
      slug: new Slug("published-post"),
      title: "Published",
      content,
    });

    publishedPost.publish();

    await repo.save(draftPost);
    await repo.save(publishedPost);

    const useCase = new ListPublishedPosts(repo);

    const result = await useCase.execute();

    expect(result.length).toBe(1);
    expect(result[0].getTitle()).toBe("Published");
  });
  
  it("should return published posts ordered by publishedAt desc", async () => {
  const repo = new InMemoryPostRepository();
  const useCase = new ListPublishedPosts(repo);

  const block: ParagraphBlock = {
    id: "b1",
    type: "paragraph",
    data: new ParagraphData({ text: "Contenido" }),
  };

  const content = new ContentDocument({
    schemaVersion: 1,
    blocks: [block],
  });

  const post1 = new Post({
    id: "p1",
    slug: new Slug("post-1"),
    title: "Post 1",
    content,
  });

  post1.publish();
  await repo.save(post1);

  await new Promise((r) => setTimeout(r, 5));

  const post2 = new Post({
    id: "p2",
    slug: new Slug("post-2"),
    title: "Post 2",
    content,
  });

  post2.publish();
  await repo.save(post2);

  const result = await useCase.execute();

  expect(result[0].id).toBe("p2");
  expect(result[1].id).toBe("p1");
});
  
});
