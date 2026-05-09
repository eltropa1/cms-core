import type { CookieCategory, CookieItem } from "@/config/legal.config";

export type ConsentStatus = "pending" | "accepted" | "rejected" | "custom";

export type ConsentState = {
  version: string;
  status: ConsentStatus;
  acceptedCategories: CookieCategory[];
  updatedAt: string;
};

export type CookieConsentConfig = {
  version: string;
  requiredCategories: CookieCategory[];
  optionalCategories: CookieCategory[];
  cookies: CookieItem[];
};
