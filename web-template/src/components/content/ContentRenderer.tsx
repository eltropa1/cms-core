/**
 * ContentRenderer
 * -------------------------------------------------------
 * Renderiza un ContentResponse delegando cada bloque
 * a su componente específico.
 */

import type {
  ContentResponse,
  ContentBlockResponse,
} from "@/types/content";

import { ParagraphBlock } from "./blocks/ParagraphBlock";
import { CTABlock } from "./blocks/CTABlock";
import { InfoboxBlock } from "./blocks/InfoboxBlock";

type ContentRendererProps = {
  content: ContentResponse;
};

export function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <>
      {content.blocks.map((block) => {
        switch (block.type) {
          case "paragraph":
            return <ParagraphBlock key={block.id} block={block} />;

          case "cta":
            return <CTABlock key={block.id} block={block} />;

          case "infobox":
            return <InfoboxBlock key={block.id} block={block} />;

          default: {
            // Exhaustiveness check
            const _exhaustive: never = block;
            return _exhaustive;
          }
        }
      })}
    </>
  );
}