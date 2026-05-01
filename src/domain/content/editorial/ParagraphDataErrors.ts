import { DomainError } from "../../errors/DomainError.js";

export class InvalidParagraphDataError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
