import fs from "fs";
import path from "path";
import { SiteConfig } from "../../domain/siteConfig/siteConfig.types.js";

/**
 * Writes site.config.ts into generated project
 */
export async function writeSiteConfig(
  projectName: string,
  config: SiteConfig
): Promise<void> {
  const filePath = path.join(
    projectName,
    "src",
    "config",
    "site.config.ts"
  );

  const content = `import type { SiteConfig } from "@/config/site.config";

export const siteConfig: SiteConfig = ${JSON.stringify(
    config,
    null,
    2
  )};
`;

  fs.writeFileSync(filePath, content, "utf-8");
}