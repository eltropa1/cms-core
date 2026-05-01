import { ContentDocument } from "../../domain/content/ContentDocument.js";

import { ParagraphData } from "../../domain/content/editorial/ParagraphData.js";
import { CTAData } from "../../domain/content/structured/CTAData.js";
import { InfoboxData } from "../../domain/content/structured/InfoboxData.js";
import { Block } from "../../domain/content/Block.js";

export class ContentMapper {
  static fromExternal(raw: unknown): ContentDocument {
    if (typeof raw !== "object" || raw === null) {
      throw new Error("Invalid content format");
    }

    const data = raw as {
      schemaVersion?: number;
      blocks?: Array<{
        id: string;
        type: string;
        data: unknown;
      }>;
    };

    if (!Array.isArray(data.blocks)) {
      throw new Error("Content blocks must be an array");
    }

    const blocks: Block[] = data.blocks.map((block: any) => {
      if (!block.id || !block.type) {
        throw new Error("Invalid block structure");
      }

      switch (block.type) {
        case "paragraph":
          return {
            id: block.id,
            type: "paragraph",
            data: new ParagraphData({ text: block.data.text }),
          };

        case "cta":
          return {
            id: block.id,
            type: "cta",
            data: new CTAData(block.data),
          };

        case "infobox":
          return {
            id: block.id,
            type: "infobox",
            data: new InfoboxData(block.data),
          };

        default:
          throw new Error(`Unsupported block type: ${block.type}`);
      }
    });

    return new ContentDocument({
      schemaVersion: data.schemaVersion ?? 1,
      blocks,
    });
  }

  static fromPersistence(raw: unknown): ContentDocument {
    if (typeof raw !== "object" || raw === null) {
      throw new Error("Invalid persisted content");
    }

    const data = raw as {
      schemaVersion: number;
      blocks: Array<{
        id: string;
        type: string;
        data: unknown;
      }>;
    };

    if (!Array.isArray(data.blocks)) {
      throw new Error("Persisted blocks must be an array");
    }

    const blocks: Block[] = data.blocks.map((block: any) => {
      if (!block.id || !block.type) {
        throw new Error("Invalid block structure");
      }

      switch (block.type) {
        case "paragraph":
          return {
            id: block.id,
            type: "paragraph",
            data: new ParagraphData({ text: block.data.text }),
          };

        case "cta":
          return {
            id: block.id,
            type: "cta",
            data: new CTAData(block.data),
          };

        case "infobox":
          return {
            id: block.id,
            type: "infobox",
            data: new InfoboxData(block.data),
          };

        default:
          throw new Error(`Unsupported block type: ${block.type}`);
      }
    });

    return new ContentDocument({
      schemaVersion: data.schemaVersion,
      blocks,
    });
  }
}