/**
 * Base error for the application layer.
 * 
 * IMPORTANT:
 * - Domain errors already exist and must remain domain-only.
 * - Application errors represent orchestration/contract failures:
 *   not found, conflicts, invalid input at use-case boundary, etc.
 */
export class ApplicationError extends Error {
  public readonly code: string;

  constructor(message: string, code: string) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
  }
}