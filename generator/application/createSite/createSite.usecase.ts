import { ProductType, UserInputV1 } from "../../domain/siteConfig/siteConfig.types.js";
import { buildSiteConfig } from "./buildSiteConfig.js";
import { generateProject } from "./generateProject.js";
import { promptUserInput } from "../../infrastructure/prompts/userInput.prompt.js";


/**
 * Main use case for creating a site
 */
export async function createSiteUseCase(
  projectName: string,
  type: ProductType
): Promise<void> {
  // 1. Get user input
  const input: UserInputV1 = await promptUserInput();

  // 2. Build config
  const config = buildSiteConfig(type, input);

  // 3. Generate project
  await generateProject(projectName, config);
}