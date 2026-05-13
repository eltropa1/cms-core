import type { SiteConfig, SiteConfigOverrides } from "./siteConfig.types.js";

/**
 * -------------------------------------------------------
 * applyOverrides
 * -------------------------------------------------------
 * Applies overrides to a base SiteConfig in a controlled,
 * deterministic way.
 *
 * Rules:
 * - No mutation of base object
 * - No shared references
 * - No override of modules
 * - titleTemplate is NEVER modified
 * - Only defined override values are applied
 * - navigation is optional
 */
export function applyOverrides(
  base: SiteConfig,
  overrides: SiteConfigOverrides,
): SiteConfig {
  return {
    site: {
      name: overrides.site?.name ?? base.site.name,
      url: overrides.site?.url ?? base.site.url,
    },

    seo: {
      defaultTitle: overrides.seo?.defaultTitle ?? base.seo.defaultTitle,

      // 🔒 NEVER overridden
      titleTemplate: base.seo.titleTemplate,

      defaultDescription:
        overrides.seo?.defaultDescription ?? base.seo.defaultDescription,
    },

    branding: {
      logo: overrides.branding?.logo ?? base.branding.logo,
    },

    // 🔒 Modules are immutable from overrides
    modules: {
      blog: base.modules.blog,
      admin: base.modules.admin,
      services: base.modules.services,
      contactForm: base.modules.contactForm,
      categories: base.modules.categories,
    },

    pages: [...base.pages],

    navigation: {
      labels: {
        home: overrides.navigation?.labels?.home ?? base.navigation.labels.home,

        about:
          overrides.navigation?.labels?.about ?? base.navigation.labels.about,

        services:
          overrides.navigation?.labels?.services ??
          base.navigation.labels.services,

        blog: overrides.navigation?.labels?.blog ?? base.navigation.labels.blog,

        contact:
          overrides.navigation?.labels?.contact ??
          base.navigation.labels.contact,
      },
    },

    // 🔥 FIX: preservar services del base
    services: base.services,

    contact: base.contact
      ? {
          email: overrides.contact?.email ?? base.contact.email,
          phone: overrides.contact?.phone ?? base.contact.phone,
        }
      : undefined,
    theme: {
      variant: overrides.theme?.variant ?? base.theme.variant,

      hero: {
        variant: overrides.theme?.hero?.variant ?? base.theme.hero.variant,
      },

      surface: {
        mode: overrides.theme?.surface?.mode ?? base.theme.surface.mode,
      },
    },
  };
}
