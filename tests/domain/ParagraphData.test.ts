import { describe, it, expect } from "vitest";
import { ParagraphData } from "../../src/domain/content/editorial/ParagraphData.js";
import { InvalidParagraphDataError } from "../../src/domain/content/editorial/ParagraphDataErrors.js";

describe("ParagraphData", () => {
  it("should create valid ParagraphData", () => {
    const data = new ParagraphData({ text: "Texto válido" });
    expect(data.text).toBe("Texto válido");
  });

  it("should reject empty text", () => {
    expect(
      () => new ParagraphData({ text: "" })
    ).toThrow(InvalidParagraphDataError);
  });
});
