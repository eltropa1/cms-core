import type { CTABlockResponse } from "@/types/content";
import Link from "next/link";

type CTABlockProps = {
  block: CTABlockResponse;
};

export function CTABlock({ block }: CTABlockProps) {
  const { title, description, buttonText, url, variant } = block.data;

  return (
    <div className={`cta cta-${variant}`}>
      <h3>{title}</h3>

      {description && <p>{description}</p>}

      <Link href={url}>{buttonText}</Link>
    </div>
  );
}
