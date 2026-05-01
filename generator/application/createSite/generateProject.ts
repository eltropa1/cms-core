import { SiteConfig } from "../../domain/siteConfig/siteConfig.types.js";
import { scaffoldProject } from "../../infrastructure/fs/scaffoldProject.js";
import { writeSiteConfig } from "../../infrastructure/fs/writeSiteConfig.js";
import { pruneProject } from "../../infrastructure/fs/pruneProject.js";

/**
 * Generates the project on disk
 */
export async function generateProject(
  projectName: string,
  config: SiteConfig
): Promise<void> {
  // 1. Copy template
  console.log("CONFIG SERVICES:", config.services);
  await scaffoldProject(projectName);

  // 2. Write config
  await writeSiteConfig(projectName, config);

  // 3. Prune routing based on modules
  await pruneProject({
    projectRoot: projectName,
    modules: config.modules,
  });
}