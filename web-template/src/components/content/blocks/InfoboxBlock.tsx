import type { InfoboxBlockResponse } from "@/types/content";

type InfoboxBlockProps = {
  block: InfoboxBlockResponse;
};

export function InfoboxBlock({ block }: InfoboxBlockProps) {
  const { title, content, variant } = block.data;

  return (
    <div className={`infobox infobox-${variant}`}>
      <strong>{title}</strong>
      <p>{content}</p>
    </div>
  );
}