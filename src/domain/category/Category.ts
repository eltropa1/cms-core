import { Slug } from "../value-objects/Slug.js";
import {
  InvalidCategoryNameError,
} from "./CategoryErrors.js";

export interface CategoryProps {
  id: string;
  name: string;
  slug: Slug;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Category {
  public readonly id: string;
  private name: string;
  private slug: Slug;
  private description?: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(props: CategoryProps) {
    if (!props.name || props.name.trim() === "") {
      throw new InvalidCategoryNameError();
    }

    this.id = props.id;
    this.name = props.name.trim();
    this.slug = props.slug;
    this.description = props.description;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  public getName(): string {
    return this.name;
  }

  public getSlug(): Slug {
    return this.slug;
  }

  public getDescription(): string | undefined {
    return this.description;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public updateName(name: string): void {
    if (!name || name.trim() === "") {
      throw new InvalidCategoryNameError();
    }

    this.name = name.trim();
    this.touch();
  }

  public updateSlug(slug: Slug): void {
    this.slug = slug;
    this.touch();
  }

  public updateDescription(description?: string): void {
    this.description = description;
    this.touch();
  }

  private touch(): void {
    this.updatedAt = new Date();
  }
}