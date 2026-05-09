import type { CookieCategory } from "@/config/legal.config";
import type { ConsentState, CookieConsentConfig } from "./types";

export const CONSENT_VERSION = "2026-05-09";
export const CONSENT_STORAGE_KEY = "cmscore_cookie_consent";

export function createInitialConsentState(): ConsentState {
  return {
    version: CONSENT_VERSION,
    status: "pending",
    acceptedCategories: ["technical"],
    updatedAt: new Date().toISOString(),
  };
}

export function buildConsentConfig(
  optionalCategories: CookieCategory[],
  cookies: CookieConsentConfig["cookies"]
): CookieConsentConfig {
  return {
    version: CONSENT_VERSION,
    requiredCategories: ["technical"],
    optionalCategories,
    cookies,
  };
}

export function canLoadCategory(
  consent: ConsentState,
  category: CookieCategory
): boolean {
  if (category === "technical") {
    return true;
  }

  return consent.acceptedCategories.includes(category);
}
