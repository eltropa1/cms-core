import { Slug } from "../value-objects/Slug.js";
import { PublicationState } from "../value-objects/PublicationState.js";
import { ContentDocument } from "../content/ContentDocument.js";
import {
  InvalidPostTitleError,
  CannotModifyDeletedPostError,
  InvalidPostUpdateError,
  DuplicateCategoryIdError,
} from "./PostErrors.js";

export interface PostPrimitives {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: ContentDocument;
  publicationState: PublicationState;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  categoryIds: string[];
}

export class Post {
  public readonly id: string;
  private slug: Slug;
  private title: string;
  private description: string;
  private content: ContentDocument;
  private publicationState: PublicationState;
  public readonly createdAt: Date;
  private updatedAt: Date;
  private categoryIds: string[];
  private publishedAt: Date | null;

  constructor(params: {
    id: string;
    title: string;
    description: string;
    content: ContentDocument;
    createdAt?: Date;
  }) {
    if (!params.title || params.title.trim() === "") {
      throw new InvalidPostTitleError();
    }

    if (!params.description || params.description.trim() === "") {
      throw new InvalidPostUpdateError("Post description cannot be empty");
    }

    this.id = params.id;
    this.title = params.title.trim();
    this.description = params.description.trim();
    this.slug = Slug.fromTitle(this.title);
    this.content = params.content;
    this.publicationState = PublicationState.draft();
    this.createdAt = params.createdAt ?? new Date();
    this.updatedAt = this.createdAt;
    this.categoryIds = [];
    this.publishedAt = null;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getSlug(): Slug {
    return this.slug;
  }

  public getContent(): ContentDocument {
    return this.content;
  }

  public getPublicationState(): PublicationState {
    return this.publicationState;
  }

  public getUpdatedAt(): Date {
    return new Date(this.updatedAt);
  }

  public getCategoryIds(): string[] {
    return [...this.categoryIds];
  }

  public getPublishedAt(): Date | null {
    return this.publishedAt ? new Date(this.publishedAt) : null;
  }

  public updateTitle(newTitle: string): void {
    this.ensureNotDeleted();

    if (!newTitle || newTitle.trim() === "") {
      throw new InvalidPostUpdateError("Post title cannot be empty");
    }

    this.title = newTitle.trim();

    if (!this.publicationState.isPublished()) {
      this.slug = Slug.fromTitle(this.title);
    }

    this.touch();
  }

  public updateDescription(newDescription: string): void {
    this.ensureNotDeleted();

    if (!newDescription || newDescription.trim() === "") {
      throw new InvalidPostUpdateError(
        "Post description cannot be empty",
      );
    }

    this.description = newDescription.trim();
    this.touch();
  }

  public updateContent(newContent: ContentDocument): void {
    this.ensureNotDeleted();
    this.content = newContent;
    this.touch();
  }

  public publish(): void {
    this.ensureNotDeleted();

    if (!this.title || this.title.trim() === "") {
      throw new InvalidPostUpdateError("Cannot publish without title");
    }

    if (!this.description || this.description.trim() === "") {
      throw new InvalidPostUpdateError(
        "Cannot publish without description",
      );
    }

    this.publicationState = this.publicationState.publish();
    this.publishedAt = new Date();
    this.touch();
  }

  public archive(): void {
    this.ensureNotDeleted();
    this.publicationState = this.publicationState.archive();
    this.touch();
  }

  public restoreToDraft(): void {
    this.ensureNotDeleted();
    this.publicationState = this.publicationState.restoreToDraft();
    this.touch();
  }

  public delete(): void {
    this.publicationState = this.publicationState.delete();
    this.touch();
  }

  public setCategories(categoryIds: string[]): void {
    this.ensureNotDeleted();

    const unique = new Set(categoryIds);
    if (unique.size !== categoryIds.length) {
      throw new DuplicateCategoryIdError();
    }

    this.categoryIds = [...categoryIds];
    this.touch();
  }

  /**
   * Override controlado del slug.
   * Uso exclusivo desde application layer.
   */
  public overrideSlug(newSlug: Slug): void {
    this.slug = newSlug;
  }

  private ensureNotDeleted(): void {
    if (this.publicationState.isDeleted()) {
      throw new CannotModifyDeletedPostError();
    }
  }

  private touch(): void {
    this.updatedAt = new Date();
  }

  static rehydrate(primitives: PostPrimitives): Post {
    const post = new Post({
      id: primitives.id,
      title: primitives.title,
      description: primitives.description,
      content: primitives.content,
      createdAt: primitives.createdAt,
    });

    post.slug = new Slug(primitives.slug);
    post.publicationState = primitives.publicationState;
    post.publishedAt = primitives.publishedAt;
    post.updatedAt = primitives.updatedAt;
    post.categoryIds = [...primitives.categoryIds];

    return post;
  }

  toPrimitives(): PostPrimitives {
    return {
      id: this.id,
      slug: this.slug.toString(),
      title: this.title,
      description: this.description,
      content: this.content,
      publicationState: this.publicationState,
      publishedAt: this.publishedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      categoryIds: [...this.categoryIds],
    };
  }
}