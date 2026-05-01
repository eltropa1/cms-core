import { createSiteUseCase } from "../../generator/application/createSite/createSite.usecase.js";
import { ProductType } from "../../generator/domain/siteConfig/siteConfig.types.js";

/**
 * CLI command handler
 */
export async function createSiteCommand(
  projectName: string,
  type: string
): Promise<void> {
  if (!["basica", "media", "completa"].includes(type)) {
    throw new Error(`Invalid type: ${type}`);
  }

  await createSiteUseCase(projectName, type as ProductType);
}