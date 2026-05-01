import { describe, it, expect } from "vitest";
import { AssignCategoriesToPost } from "../../src/application/post/AssignCategoriesToPost.js";
import { PostRepository } from "../../src/domain/post/PostRepository.js";
import { CategoryRepository } from "../../src/domain/category/CategoryRepository.js";
import { Post } from "../../src/domain/post/Post.js";
import { Category } from "../../src/domain/category/Category.js";
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

class InMemoryCategoryRepository implements CategoryRepository {
  private categories: Category[] = [];

  async save(category: Category): Promise<void> {
    const index = this.categories.findIndex(c => c.id === category.id);
    if (index >= 0) this.categories[index] = category;
    else this.categories.push(category);
  }

  async findById(id: string): Promise<Category | null> {
    return this.categories.find(c => c.id === id) ?? null;
  }

  async findBySlug(slug: Slug): Promise<Category | null> {
    return (
      this.categories.find(c => c.getSlug().toString() === slug.toString()) ??
      null
    );
  }

  async findAll(): Promise<Category[]> {
    return [...this.categories];
  }

  async delete(id: string): Promise<void> {
    this.categories = this.categories.filter(c => c.id !== id);
  }
}

describe("AssignCategoriesToPost Use Case", () => {
  const block: ParagraphBlock = {
    id: "b1",
    type: "paragraph",
    data: new ParagraphData({ text: "Contenido" }),
  };

  const content = new ContentDocument({
    schemaVersion: 1,
    blocks: [block],
  });

  it("should assign categories to a post", async () => {
    const postRepo = new InMemoryPostRepository();
    const categoryRepo = new InMemoryCategoryRepository();

    const post = new Post({
      id: "p1",
      slug: new Slug("mi-post"),
      title: "Título",
      content,
    });

    await postRepo.save(post);

    const c1 = new Category({
      id: "c1",
      name: "Ansiedad",
      slug: new Slug("ansiedad"),
    });

    const c2 = new Category({
      id: "c2",
      name: "Depresión",
      slug: new Slug("depresion"),
    });

    await categoryRepo.save(c1);
    await categoryRepo.save(c2);

    const useCase = new AssignCategoriesToPost(postRepo, categoryRepo);

    await useCase.execute({
      postId: "p1",
      categoryIds: ["c1", "c2"],
    });

    const updated = await postRepo.findById("p1");

    expect(updated?.getCategoryIds()).toEqual(["c1", "c2"]);
  });

  it("should throw if a category does not exist", async () => {
    const postRepo = new InMemoryPostRepository();
    const categoryRepo = new InMemoryCategoryRepository();

    const post = new Post({
      id: "p1",
      slug: new Slug("mi-post"),
      title: "Título",
      content,
    });

    await postRepo.save(post);

    const useCase = new AssignCategoriesToPost(postRepo, categoryRepo);

    await expect(
      useCase.execute({
        postId: "p1",
        categoryIds: ["c999"],
      })
    ).rejects.toThrow();
  });
});