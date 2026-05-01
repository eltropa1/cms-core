import { DomainError } from "../errors/DomainError.js";

export class InvalidCategoryNameError extends DomainError {
  constructor() {
    super("Category name cannot be empty");
  }
}

export class InvalidCategorySlugError extends DomainError {
  constructor() {
    super("Category slug is invalid");
  }
}