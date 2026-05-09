/**
 * Content API Contract (frontend)
 * -------------------------------------------------------
 * Representa exactamente el contrato devuelto por la API.
 * No contiene lógica ni transformación.
 */

export type ContentResponse = {
  version: 1;
  blocks: ContentBlockResponse[];
};

/**
 * Unión discriminada de bloques
 */
export type ContentBlockResponse =
  | ParagraphBlockResponse
  | CTABlockResponse
  | InfoboxBlockResponse;

/**
 * Paragraph
 */
export type ParagraphBlockResponse = {
  id: string;
  type: "paragraph";
  data: {
    text: string;
  };
};

/**
 * CTA
 */
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

/**
 * Infobox
 */
export type InfoboxBlockResponse = {
  id: string;
  type: "infobox";
  data: {
    title: string;
    content: string;
    variant: "info" | "warning" | "success";
  };
};