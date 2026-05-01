import { describe, it, expect } from "vitest";
import { Post } from "../../src/domain/post/Post.js";
import { Slug } from "../../src/domain/value-objects/Slug.js";
import { ContentDocument } from "../../src/domain/content/ContentDocument.js";
import { ParagraphData } from "../../src/domain/content/editorial/ParagraphData.js";
import type { ParagraphBlock } from "../../src/domain/content/Block.js";
import {
  InvalidPostTitleError,
  CannotModifyDeletedPostError,
} from "../../src/domain/post/PostErrors.js";

describe("Post Aggregate", () => {
  const validBlock: ParagraphBlock = {
    id: "block-1",
    type: "paragraph",
    data: new ParagraphData({ text: "Contenido válido" }),
  };

  const validContent = new ContentDocument({
    schemaVersion: 1,
    blocks: [validBlock],
  });

  const validSlug = new Slug("mi-post");

  it("should create a valid Post in draft state", () => {
    const post = new Post({
      id: "post-1",
      slug: validSlug,
      title: "Título válido",
      content: validContent,
    });

    expect(post.getPublicationState().isDraft()).toBe(true);
  });

  it("should reject empty title", () => {
    expect(
      () =>
        new Post({
          id: "post-1",
          slug: validSlug,
          title: "",
          content: validContent,
        }),
    ).toThrow(InvalidPostTitleError);
  });

  it("should publish a draft post", () => {
    const post = new Post({
      id: "post-1",
      slug: validSlug,
      title: "Título válido",
      content: validContent,
    });

    post.publish();

    expect(post.getPublicationState().isPublished()).toBe(true);
  });

  it("should archive a published post", () => {
    const post = new Post({
      id: "post-1",
      slug: validSlug,
      title: "Título válido",
      content: validContent,
    });

    post.publish();
    post.archive();

    expect(post.getPublicationState().isArchived()).toBe(true);
  });

  it("should not allow modification after deletion", () => {
    const post = new Post({
      id: "post-1",
      slug: validSlug,
      title: "Título válido",
      content: validContent,
    });

    post.delete();

    expect(() => post.publish()).toThrow(CannotModifyDeletedPostError);
  });

  it("should update title when published", () => {
    const post = new Post({
      id: "post-1",
      slug: validSlug,
      title: "Título original",
      content: validContent,
    });

    post.publish();
    post.updateTitle("Nuevo título");

    expect(post.getTitle()).toBe("Nuevo título");
  });

  it("should update content when published", () => {
    const post = new Post({
      id: "post-1",
      slug: validSlug,
      title: "Título",
      content: validContent,
    });

    post.publish();

    const newBlock: ParagraphBlock = {
      id: "block-2",
      type: "paragraph",
      data: new ParagraphData({ text: "Nuevo contenido" }),
    };

    const newContent = new ContentDocument({
      schemaVersion: 1,
      blocks: [newBlock],
    });

    post.updateContent(newContent);

    expect(post.getContent().getBlocks().length).toBe(1);
  });

  it("should not allow update after deletion", () => {
    const post = new Post({
      id: "post-1",
      slug: validSlug,
      title: "Título",
      content: validContent,
    });

    post.delete();

    expect(() => post.updateTitle("Intento")).toThrow();
  });

  it("should allow setting categories", () => {
    const post = new Post({
      id: "p1",
      slug: validSlug,
      title: "Título",
      content: validContent,
    });

    post.setCategories(["c1", "c2"]);

    expect(post.getCategoryIds().length).toBe(2);
  });

  it("should reject duplicate category ids", () => {
    const post = new Post({
      id: "p1",
      slug: validSlug,
      title: "Título",
      content: validContent,
    });

    expect(() => post.setCategories(["c1", "c1"])).toThrow();
  });

  it("should set publishedAt when publishing", () => {
  const post = new Post({
    id: "p1",
    slug: validSlug,
    title: "Título",
    content: validContent,
  });

  expect(post.getPublishedAt()).toBeNull();

  post.publish();

  expect(post.getPublishedAt()).not.toBeNull();
});

});
