import { DomainError } from "../errors/DomainError.js";

export class InvalidContentDocumentError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}

export class DuplicateBlockIdError extends DomainError {
  constructor(id: string) {
    super(`Duplicate block id detected: "${id}"`);
  }
}

export class EmptyBlockIdError extends DomainError {
  constructor() {
    super("Block id cannot be empty");
  }
}

export class UnsupportedSchemaVersionError extends DomainError {
  constructor(version: number) {
    super(`Unsupported schema version: ${version}`);
  }
}
