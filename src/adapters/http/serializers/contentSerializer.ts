import { ContentDocument } from "../../../domain/content/ContentDocument.js";
import { Block } from "../../../domain/content/Block.js";

export type ContentResponse = {
  version: 1;
  blocks: ContentBlockResponse[];
};

export type ContentBlockResponse =
  | ParagraphBlockResponse
  | CTABlockResponse
  | InfoboxBlockResponse;

export type ParagraphBlockResponse = {
  id: string;
  type: "paragraph";
  data: {
    text: string;
  };
};

export type CTABlockResponse = {
  id: string;
  type: "cta";
  data: {
    title: string;
    description?: string;
    buttonText: string;
    url: string;
    variant: "primary" | "secondary";
  };
};

export type InfoboxBlockResponse = {
  id: string;
  type: "infobox";
  data: {
    title: string;
    content: string;
    variant: "info" | "warning" | "success";
  };
};

export const ContentSerializer = {
  toResponse(document: ContentDocument): ContentResponse {
    const blocks = document
      .getBlocks()
      .map((block) => ContentSerializer.serializeBlock(block));

    return {
      version: 1,
      blocks,
    };
  },

  serializeBlock(block: Block): ContentBlockResponse {
    switch (block.type) {
      case "paragraph":
        return {
          id: block.id,
          type: "paragraph",
          data: {
            text: block.data.text,
          },
        };

      case "cta":
        return {
          id: block.id,
          type: "cta",
          data: {
            title: block.data.title,
            description: block.data.description,
            buttonText: block.data.buttonText,
            url: block.data.url,
            variant: block.data.variant,
          },
        };

      case "infobox":
        return {
          id: block.id,
          type: "infobox",
          data: {
            title: block.data.title,
            content: block.data.content,
            variant: block.data.variant,
          },
        };

      default:
        // Exhaustiveness check (TypeScript)
        const _exhaustive: never = block;
        return _exhaustive;
    }
  },
};
