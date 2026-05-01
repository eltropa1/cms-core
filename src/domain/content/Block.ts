import { BlockType } from "./BlockTypes.js";
import { CTAData } from "./structured/CTAData.js";
import { InfoboxData } from "./structured/InfoboxData.js";
import { ParagraphData } from "./editorial/ParagraphData.js";

export interface BaseBlock {
  id: string;
  type: BlockType;
}

// --- BLOQUES CONCRETOS ---

export interface ParagraphBlock extends BaseBlock {
  type: "paragraph";
  data: ParagraphData;
}

export interface CTABlock extends BaseBlock {
  type: "cta";
  data: CTAData;
}

export interface InfoboxBlock extends BaseBlock {
  type: "infobox";
  data: InfoboxData;
}

// --- UNION DISCRIMINADA ---

export type Block =
  | ParagraphBlock
  | CTABlock
  | InfoboxBlock;