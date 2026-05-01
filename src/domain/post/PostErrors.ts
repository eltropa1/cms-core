import { DomainError } from "../errors/DomainError.js";

export class InvalidPostTitleError extends DomainError {
  constructor() {
    super("Post title cannot be empty");
  }
}

export class CannotModifyDeletedPostError extends DomainError {
  constructor() {
    super("Cannot modify a deleted post");
  }
}

export class InvalidPostUpdateError extends DomainError {
  constructor(message: string) {
    super(message);
  } 
}

export class DuplicateCategoryIdError extends DomainError {
  constructor() {
    super("Duplicate category ids are not allowed");
  }
}
