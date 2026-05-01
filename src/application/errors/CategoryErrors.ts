import { NotFoundError } from "./NotFoundError.js";
import { ConflictError } from "./ConflictError.js";

export class CategoryNotFoundError extends NotFoundError {
  constructor(categoryId: string) {
    super(`Category not found: ${categoryId}`, "CATEGORY_NOT_FOUND");
  }
}

export class CategorySlugAlreadyExistsError extends ConflictError {
  constructor(slug: string) {
    super(`Category slug already exists: ${slug}`, "CATEGORY_SLUG_ALREADY_EXISTS");
  }
}

export class CategoryNameAlreadyExistsError extends ConflictError {
  constructor(name: string) {
    super(`Category name already exists: ${name}`, "CATEGORY_NAME_ALREADY_EXISTS");
  }
}