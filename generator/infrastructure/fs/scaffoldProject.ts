import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * Copies the existing web-template into a new project folder
 */
export async function scaffoldProject(projectName: string): Promise<void> {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Subimos hasta cms-core/
  const rootPath = path.resolve(__dirname, "../../..");

  const templatePath = path.join(rootPath, "web-template");
  const targetPath = path.resolve(projectName);

  if (!fs.existsSync(templatePath)) {
    throw new Error(`web-template not found at ${templatePath}`);
  }

  if (fs.existsSync(targetPath)) {
    throw new Error(`Directory ${projectName} already exists`);
  }

  fs.cpSync(templatePath, targetPath, {
    recursive: true,
  });
}