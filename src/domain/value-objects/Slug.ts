import { DomainError } from "../errors/DomainError.js";

export class InvalidSlugError extends DomainError {
  constructor(slug: string) {
    super(`Invalid slug: "${slug}"`);
  }
}

export class Slug {
  private readonly value: string;

  constructor(value: string) {
    if (!Slug.isValid(value)) {
      throw new InvalidSlugError(value);
    }

    this.value = value;
  }

  /**
   * Genera un slug a partir de un título.
   */
  static fromTitle(title: string): Slug {
    const normalized = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    return new Slug(normalized);
  }

  public toString(): string {
    return this.value;
  }

  public equals(other: Slug): boolean {
    return this.value === other.value;
  }

  private static isValid(value: string): boolean {
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    return slugRegex.test(value);
  }
}