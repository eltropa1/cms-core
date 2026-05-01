import { describe, it, expect } from "vitest";
import { Slug, InvalidSlugError } from "../../src/domain/value-objects/Slug.js";

describe("Slug", () => {
  it("should create a valid slug", () => {
    const slug = new Slug("mi-articulo");
    expect(slug.toString()).toBe("mi-articulo");
  });

  it("should throw error for invalid slug", () => {
    expect(() => new Slug("MiArticulo")).toThrow(InvalidSlugError);
  });

  it("should reject spaces", () => {
    expect(() => new Slug("hola mundo")).toThrow(InvalidSlugError);
  });

  it("should reject trailing hyphen", () => {
    expect(() => new Slug("final-")).toThrow(InvalidSlugError);
  });

  it("should compare equality correctly", () => {
    const a = new Slug("test-slug");
    const b = new Slug("test-slug");
    expect(a.equals(b)).toBe(true);
  });
});
