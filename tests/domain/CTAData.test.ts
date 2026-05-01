import { describe, it, expect } from "vitest";
import { CTAData, InvalidCTADataError } from "../../src/domain/content/structured/CTAData.js";

describe("CTAData", () => {
  it("should create valid CTAData with relative URL", () => {
    const data = new CTAData({
      title: "Reserva ahora",
      buttonText: "Contactar",
      url: "/contacto",
      variant: "primary",
    });

    expect(data.title).toBe("Reserva ahora");
  });

  it("should create valid CTAData with absolute URL", () => {
    const data = new CTAData({
      title: "Ir a Google",
      buttonText: "Visitar",
      url: "https://google.com",
      variant: "secondary",
    });

    expect(data.url).toBe("https://google.com");
  });

  it("should reject empty title", () => {
    expect(
      () =>
        new CTAData({
          title: "",
          buttonText: "Click",
          url: "/test",
          variant: "primary",
        })
    ).toThrow(InvalidCTADataError);
  });

  it("should reject invalid URL", () => {
    expect(
      () =>
        new CTAData({
          title: "Test",
          buttonText: "Click",
          url: "invalid-url",
          variant: "primary",
        })
    ).toThrow(InvalidCTADataError);
  });
});
