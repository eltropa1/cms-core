import { describe, it, expect } from "vitest";
import { ContentDocument } from "../../src/domain/content/ContentDocument.js";
import { Block, CTABlock } from "../../src/domain/content/Block.js";
import { CTAData } from "../../src/domain/content/structured/CTAData.js";
import { InfoboxData } from "../../src/domain/content/structured/InfoboxData.js";
import type { InfoboxBlock } from "../../src/domain/content/Block.js";
import { ParagraphData } from "../../src/domain/content/editorial/ParagraphData.js";
import type { ParagraphBlock } from "../../src/domain/content/Block.js";




describe("ContentDocument", () => {
  const validBlock: ParagraphBlock = {
  id: "block-1",
  type: "paragraph",
  data: new ParagraphData({ text: "Hello world" }),
};


  it("should create a valid ContentDocument", () => {
    const doc = new ContentDocument({
      schemaVersion: 1,
      blocks: [validBlock],
    });

    expect(doc.getBlocks().length).toBe(1);
  });

  it("should reject empty blocks array", () => {
    expect(
      () =>
        new ContentDocument({
          schemaVersion: 1,
          blocks: [],
        })
    ).toThrow();
  });

  it("should reject duplicate block ids", () => {
    expect(
      () =>
        new ContentDocument({
          schemaVersion: 1,
          blocks: [
            validBlock,
            { ...validBlock },
          ],
        })
    ).toThrow();
  });

  it("should reject unsupported schema version", () => {
    expect(
      () =>
        new ContentDocument({
          schemaVersion: 2,
          blocks: [validBlock],
        })
    ).toThrow();
  });

  

it("should reject CTABlock without proper CTAData instance", () => {
  const invalidBlock = {
    id: "block-cta",
    type: "cta",
    data: { title: "fake" }, // not instance of CTAData
  } as unknown as Block;

  expect(
    () =>
      new ContentDocument({
        schemaVersion: 1,
        blocks: [invalidBlock],
      })
  ).toThrow();
});

it("should accept valid CTABlock", () => {
  const validCTA = new CTAData({
    title: "Reserva",
    buttonText: "Contactar",
    url: "/contacto",
    variant: "primary",
  });

  const validBlock: CTABlock = {
    id: "block-cta",
    type: "cta",
    data: validCTA,
  };

  const doc = new ContentDocument({
    schemaVersion: 1,
    blocks: [validBlock],
  });

  expect(doc.getBlocks().length).toBe(1);
});

it("should accept valid InfoboxBlock", () => {
  const data = new InfoboxData({
    title: "Nota",
    content: "Contenido",
    variant: "info",
  });

  const block: InfoboxBlock = {
    id: "block-info",
    type: "infobox",
    data,
  };

  const doc = new ContentDocument({
    schemaVersion: 1,
    blocks: [block],
  });

  expect(doc.getBlocks().length).toBe(1);
});


});
