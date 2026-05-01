import { NotFoundError } from "./NotFoundError.js";
import { ConflictError } from "./ConflictError.js";

export class PostNotFoundError extends NotFoundError {
  constructor(postId: string) {
    super(`Post not found: ${postId}`, "POST_NOT_FOUND");
  }
}

export class PostSlugAlreadyExistsError extends ConflictError {
  constructor(slug: string) {
    super(`Post slug already exists: ${slug}`, "POST_SLUG_ALREADY_EXISTS");
  }
}