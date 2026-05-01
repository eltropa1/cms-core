import fs from "fs/promises";
import path from "path";

/**
 * Modules configuration (aligned with SiteConfig)
 */
type ModulesConfig = {
  blog: boolean;
  services: boolean;
  contactForm: boolean;
  admin: boolean;
  categories: boolean;
};

/**
 * Input for pruneProject
 */
type PruneProjectInput = {
  projectRoot: string;
  modules: ModulesConfig;
};

/**
 * Declarative routing map
 * -------------------------------------------------------
 * Defines which routes must be removed if a module is disabled.
 */
type ModuleRoutingRule = {
  remove: string[];
};

type ModuleRoutingMap = {
  [K in keyof ModulesConfig]?: ModuleRoutingRule;
};

/**
 * V1 Routing Rules (routing only, no over-engineering)
 */
const MODULE_ROUTING_MAP: ModuleRoutingMap = {
  blog: {
    remove: ["src/app/posts"],
  },
  services: {
    remove: ["src/app/services"],
  },
};

/**
 * -------------------------------------------------------
 * pruneProject
 * -------------------------------------------------------
 * Removes routing folders based on disabled modules.
 *
 * Rules:
 * - Acts ONLY on src/app/
 * - Idempotent (safe if folders do not exist)
 * - No side effects outside routing
 * - Deterministic
 */
export async function pruneProject(
  input: PruneProjectInput
): Promise<void> {
  const { projectRoot, modules } = input;

  for (const [moduleName, rule] of Object.entries(
    MODULE_ROUTING_MAP
  ) as [keyof ModulesConfig, ModuleRoutingRule][]) {
    const isEnabled = modules[moduleName];

    // Skip if module is enabled
    if (isEnabled) {
      console.log(`[prune] skip ${moduleName} (enabled)`);
      continue;
    }

    // Apply removal rules
    for (const relativePath of rule.remove) {
      const absolutePath = path.join(projectRoot, relativePath);

      try {
        // Check existence (idempotency)
        await fs.access(absolutePath);

        // Remove folder recursively
        await fs.rm(absolutePath, { recursive: true });
        
        console.log(`[prune] removed ${relativePath}`);
      } catch {
        // Path does not exist → skip silently
        console.log(`[prune] skip ${relativePath} (not found)`);
      }
    }
  }
}