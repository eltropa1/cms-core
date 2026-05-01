import { describe, it, expect } from "vitest";
import { DomainError } from "../../src/domain/errors/DomainError";

class TestError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}

describe("DomainError", () => {
  it("should preserve message", () => {
    const error = new TestError("Test message");
    expect(error.message).toBe("Test message");
  });

  it("should preserve class name", () => {
    const error = new TestError("Test message");
    expect(error.name).toBe("TestError");
  });

  it("should be instance of Error", () => {
    const error = new TestError("Test message");
    expect(error instanceof Error).toBe(true);
  });
});
