import { describe, it, expect } from "vitest";
import { Category } from "../../src/domain/category/Category.js";
import { Slug } from "../../src/domain/value-objects/Slug.js";

describe("Category", () => {
  it("should create a valid category", () => {
    const category = new Category({
      id: "c1",
      name: "Ansiedad",
      slug: new Slug("ansiedad"),
    });

    expect(category.getName()).toBe("Ansiedad");
  });

  it("should not allow empty name", () => {
    expect(() =>
      new Category({
        id: "c1",
        name: "",
        slug: new Slug("ansiedad"),
      })
    ).toThrow();
  });

  it("should update name correctly", () => {
    const category = new Category({
      id: "c1",
      name: "Ansiedad",
      slug: new Slug("ansiedad"),
    });

    category.updateName("Depresión");

    expect(category.getName()).toBe("Depresión");
  });
});