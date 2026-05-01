import { describe, it, expect } from "vitest";
import {
  PublicationState,
  InvalidPublicationTransitionError,
} from "../../src/domain/value-objects/PublicationState.js";

describe("PublicationState", () => {
  it("should start as draft", () => {
    const state = PublicationState.draft();
    expect(state.isDraft()).toBe(true);
  });

  it("should publish from draft", () => {
    const state = PublicationState.draft();
    const published = state.publish();
    expect(published.isPublished()).toBe(true);
  });

  it("should not publish if already published", () => {
    const state = PublicationState.published();
    expect(() => state.publish()).toThrow(InvalidPublicationTransitionError);
  });

  it("should unpublish from published", () => {
    const state = PublicationState.published();
    const draft = state.unpublish();
    expect(draft.isDraft()).toBe(true);
  });

  it("should not unpublish if already draft", () => {
    const state = PublicationState.draft();
    expect(() => state.unpublish()).toThrow(
      InvalidPublicationTransitionError
    );
  });
});
