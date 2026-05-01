import { ProductType, SiteConfig, UserInputV1 } from "../../domain/siteConfig/siteConfig.types.js";
import { mapProductTypeToSiteConfig } from "../../domain/siteConfig/mapProductTypeToSiteConfig.js";
import { transformUserInputToOverrides } from "../../domain/siteConfig/transformUserInputToOverrides.js";
import { applyOverrides } from "../../domain/siteConfig/applyOverrides.js";

/**
 * Builds final SiteConfig from type + user input
 */
export function buildSiteConfig(
  type: ProductType,
  input: UserInputV1
): SiteConfig {
  const base = mapProductTypeToSiteConfig(type);

  const overrides = transformUserInputToOverrides(input);

  return applyOverrides(base, overrides);
}