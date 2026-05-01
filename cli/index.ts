#!/usr/bin/env node

import { createSiteCommand } from "./commands/createSite.js";

async function main() {
  const args = process.argv.slice(2);

  const projectName = args[0];

  const typeIndex = args.indexOf("--type");
  const type =
    typeIndex !== -1 && args[typeIndex + 1]
      ? args[typeIndex + 1]
      : undefined;

  if (!projectName) {
    console.error("Error: project name is required");
    process.exit(1);
  }

  if (!type) {
    console.error(
      "Error: --type is required (basica | media | completa)"
    );
    process.exit(1);
  }

  if (!["basica", "media", "completa"].includes(type)) {
    console.error(
      `Error: invalid type "${type}". Allowed: basica | media | completa`
    );
    process.exit(1);
  }

  await createSiteCommand(projectName, type);
}

main();