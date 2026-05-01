import { DomainError } from "../errors/DomainError.js";

export class InvalidPublicationTransitionError extends DomainError {
  constructor(from: string, to: string) {
    super(`Cannot transition publication state from "${from}" to "${to}"`);
  }
}

export type PublicationStatus = "draft" | "published" | "archived" | "deleted";

export class PublicationState {
  private readonly status: PublicationStatus;

  private constructor(status: PublicationStatus) {
    this.status = status;
  }

  public static draft(): PublicationState {
    return new PublicationState("draft");
  }

  public static published(): PublicationState {
    return new PublicationState("published");
  }

  public static archived(): PublicationState {
    return new PublicationState("archived");
  }

  public static deleted(): PublicationState {
    return new PublicationState("deleted");
  }

  public isDraft(): boolean {
    return this.status === "draft";
  }

  public isPublished(): boolean {
    return this.status === "published";
  }

  public isArchived(): boolean {
    return this.status === "archived";
  }

  public isDeleted(): boolean {
    return this.status === "deleted";
  }

  public publish(): PublicationState {
    if (this.isDraft()) return PublicationState.published();
    throw new InvalidPublicationTransitionError(this.status, "published");
  }

  public unpublish(): PublicationState {
    if (this.isPublished()) return PublicationState.draft();
    throw new InvalidPublicationTransitionError(this.status, "draft");
  }

  public archive(): PublicationState {
    if (this.isDraft() || this.isPublished()) {
      return PublicationState.archived();
    }
    throw new InvalidPublicationTransitionError(this.status, "archived");
  }

  public restoreToDraft(): PublicationState {
    if (this.isArchived()) {
      return PublicationState.draft();
    }
    throw new InvalidPublicationTransitionError(this.status, "draft");
  }

  public delete(): PublicationState {
    if (this.isDraft() || this.isArchived()) {
      return PublicationState.deleted();
    }
    throw new InvalidPublicationTransitionError(this.status, "deleted");
  }

  /**
   * Reconstruye un PublicationState desde persistencia.
   *
   * Uso exclusivo de infraestructura.
   */
  public static fromPersistence(value: PublicationStatus): PublicationState {
    switch (value) {
      case "draft":
        return PublicationState.draft();
      case "published":
        return PublicationState.published();
      case "archived":
        return PublicationState.archived();
      case "deleted":
        return PublicationState.deleted();
      default:
        throw new Error(
          `Invalid publication status from persistence: ${value}`,
        );
    }
  }
  public toString(): PublicationStatus {
    return this.status;
  }
}
