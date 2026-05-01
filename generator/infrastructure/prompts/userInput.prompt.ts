import inquirer from "inquirer";
import { UserInputV1 } from "../../domain/siteConfig/siteConfig.types.js";

/**
 * Interactive user input
 */
export async function promptUserInput(): Promise<UserInputV1> {
  const answers = await inquirer.prompt([
    { name: "name", message: "Nombre del sitio:", type: "input" },
    { name: "description", message: "Descripción SEO:", type: "input" },
    { name: "url", message: "URL (opcional):", type: "input" },
    { name: "logo", message: "Logo (opcional):", type: "input" },
  ]);

  return {
    site: {
      name: answers.name,
      url: answers.url || undefined,
    },
    seo: {
      defaultDescription: answers.description,
    },
    branding: {
      logo: answers.logo || undefined,
    },
  };
}