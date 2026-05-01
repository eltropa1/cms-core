import { describe, it, expect } from "vitest";
import { InfoboxData } from "../../src/domain/content/structured/InfoboxData.js";
import { InvalidInfoboxDataError } from "../../src/domain/content/structured/InfoboxDataErrors.js";

describe("InfoboxData", () => {
  it("should create valid InfoboxData", () => {
    const data = new InfoboxData({
      title: "Importante",
      content: "Texto relevante",
      variant: "info",
    });

    expect(data.title).toBe("Importante");
  });

  it("should reject empty title", () => {
    expect(
      () =>
        new InfoboxData({
          title: "",
          content: "Texto",
          variant: "info",
        })
    ).toThrow(InvalidInfoboxDataError);
  });

  it("should reject empty content", () => {
    expect(
      () =>
        new InfoboxData({
          title: "Titulo",
          content: "",
          variant: "info",
        })
    ).toThrow(InvalidInfoboxDataError);
  });
});
