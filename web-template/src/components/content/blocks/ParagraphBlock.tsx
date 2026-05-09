import type { ParagraphBlockResponse } from "@/types/content";

type ParagraphBlockProps = {
  block: ParagraphBlockResponse;
};

export function ParagraphBlock({ block }: ParagraphBlockProps) {
  return <p>{block.data.text}</p>;
}