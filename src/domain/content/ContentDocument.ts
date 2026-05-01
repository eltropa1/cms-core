import { Block } from "./Block.js";
import {
  DuplicateBlockIdError,
  EmptyBlockIdError,
  UnsupportedSchemaVersionError,
  InvalidContentDocumentError,
} from "./ContentDocumentErrors.js";
import { BlockRegistry } from "./BlockRegistry.js";

export class ContentDocument {
  public readonly schemaVersion: number;
  private readonly blocks: Block[];

  constructor(params: { schemaVersion: number; blocks: Block[] }) {
    this.ensureValidSchemaVersion(params.schemaVersion);
    this.ensureValidBlocks(params.blocks);

    this.schemaVersion = params.schemaVersion;
    this.blocks = [...params.blocks];
  }

  public getBlocks(): Block[] {
    return [...this.blocks];
  }

  // ------------------------
  // VALIDACIONES
  // ------------------------

  private ensureValidSchemaVersion(version: number): void {
    if (version !== 1) {
      throw new UnsupportedSchemaVersionError(version);
    }
  }

  private ensureValidBlocks(blocks: Block[]): void {
    if (!Array.isArray(blocks) || blocks.length === 0) {
      throw new InvalidContentDocumentError(
        "ContentDocument must contain at least one block"
      );
    }

    const ids = new Set<string>();

    for (const block of blocks) {
      this.ensureValidBlock(block, ids);
    }
  }

  private ensureValidBlock(block: Block, ids: Set<string>): void {
    // 🔒 Validación estructural mínima
    if (!block.id || block.id.trim() === "") {
      throw new EmptyBlockIdError();
    }

    if (ids.has(block.id)) {
      throw new DuplicateBlockIdError(block.id);
    }

    // 🔒 Validación de dominio (data + tipo)
    BlockRegistry.validate(block);

    ids.add(block.id);
  }

  // ------------------------
  // PERSISTENCIA (SIN REDISEÑO)
  // ------------------------

  public static fromPersistence(raw: unknown): ContentDocument {
    if (
      typeof raw !== "object" ||
      raw === null ||
      !("schemaVersion" in raw) ||
      !("blocks" in raw)
    ) {
      throw new InvalidContentDocumentError(
        "Invalid persisted ContentDocument structure"
      );
    }

    const data = raw as {
      schemaVersion: number;
      blocks: Block[];
    };

    return new ContentDocument({
      schemaVersion: data.schemaVersion,
      blocks: data.blocks,
    });
  }

  public toPersistence(): unknown {
    return {
      schemaVersion: this.schemaVersion,
      blocks: this.blocks,
    };
  }
}