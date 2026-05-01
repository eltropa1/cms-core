import { Block } from "./Block.js";
import { CTAData } from "./structured/CTAData.js";
import { InfoboxData } from "./structured/InfoboxData.js";
import { ParagraphData } from "./editorial/ParagraphData.js";
import { InvalidContentDocumentError } from "./ContentDocumentErrors.js";

type BlockValidator = (block: Block) => void;

export class BlockRegistry {
  private static validators: Record<Block["type"], BlockValidator> = {
    paragraph: (block) => {
      if (!(block.data instanceof ParagraphData)) {
        throw new InvalidContentDocumentError(
          "ParagraphBlock must contain valid ParagraphData instance"
        );
      }
    },

    cta: (block) => {
      if (!(block.data instanceof CTAData)) {
        throw new InvalidContentDocumentError(
          "CTABlock must contain valid CTAData instance"
        );
      }
    },

    infobox: (block) => {
      if (!(block.data instanceof InfoboxData)) {
        throw new InvalidContentDocumentError(
          "InfoboxBlock must contain valid InfoboxData instance"
        );
      }
    },
  };

  public static validate(block: Block): void {
    const validator = this.validators[block.type];

    // 🔒 Dominio cerrado → siempre debería existir
    if (!validator) {
      throw new InvalidContentDocumentError(
        `No validator found for block type: ${block.type}`
      );
    }

    validator(block);
  }
}