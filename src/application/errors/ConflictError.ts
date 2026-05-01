import { ApplicationError } from "./ApplicationError.js";

/**
 * Represents a conflict in the application layer (e.g. slug already exists).
 * Typical mapping later: HTTP 409.
 */
export class ConflictError extends ApplicationError {
  constructor(message: string, code = "CONFLICT") {
    super(message, code);
  }
}