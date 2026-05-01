import { ApplicationError } from "./ApplicationError.js";

/**
 * Represents a missing resource in the application layer.
 * Typical mapping later: HTTP 404.
 */
export class NotFoundError extends ApplicationError {
  constructor(message: string, code = "NOT_FOUND") {
    super(message, code);
  }
}