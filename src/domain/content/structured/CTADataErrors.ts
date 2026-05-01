import { DomainError } from "../../errors/DomainError.js";

export class InvalidCTADataError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
