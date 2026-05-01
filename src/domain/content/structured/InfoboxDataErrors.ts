import { DomainError } from "../../errors/DomainError.js";

export class InvalidInfoboxDataError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
