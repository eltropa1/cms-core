export abstract class DomainError extends Error {
  public readonly name: string;

  protected constructor(message: string) {
    super(message);
    this.name = this.constructor.name;

    // Mantiene stack trace correcto en Node
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
