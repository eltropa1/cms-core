/**
 * -------------------------------------------------------
 * User Input → Overrides → Final SiteConfig
 * -------------------------------------------------------
 * - Pure functions
 * - No shared references
 * - Deterministic
 * - Controlled merge (no generic deep merge)
 */

/**
 * Product types
 */
export type ProductType = "basica" | "media" | "completa";

/**
 * SiteConfig (final contract)
 */
export type SiteConfig = {
  site: {
    name: string;
    url: string;
  };

  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
  };

  branding: {
    logo: string;
  };

  modules: {
    blog: boolean;
    admin: boolean;
    services: boolean;
    contactForm: boolean;
    categories: boolean;
  };

  navigation: {
    labels: {
      home: string;
      about: string;
      services: string;
      blog: string;
      contact: string;
    };
  };
};

/**
 * User input model (V1)
 */
export type UserInputV1 = {
  site: {
    name: string;
    url?: string;
  };

  seo: {
    defaultDescription: string;
  };

  branding?: {
    logo?: string;
  };

  navigation?: {
    labels?: Partial<SiteConfig["navigation"]["labels"]>;
  };
};

/**
 * Overrides model (controlled subset of SiteConfig)
 * NOTE: modules are intentionally excluded
 */
export type SiteConfigOverrides = {
  site?: {
    name?: string;
    url?: string;
  };

  seo?: {
    defaultTitle?: string;
    defaultDescription?: string;
  };

  branding?: {
    logo?: string;
  };

  navigation?: {
    labels?: Partial<SiteConfig["navigation"]["labels"]>;
  };
};

/**
 * -------------------------------------------------------
 * transformUserInputToOverrides (ajustada)
 * -------------------------------------------------------
 * - No crea navigation si no hay overrides reales
 * - Mantiene el modelo limpio (sin objetos vacíos)
 */
export function transformUserInputToOverrides(
  input: UserInputV1
): SiteConfigOverrides {
  // Detect if navigation labels actually contain any value
  const hasNavigationOverrides =
    input.navigation?.labels &&
    Object.values(input.navigation.labels).some(
      (value) => value !== undefined
    );

  return {
    site: {
      name: input.site.name,
      url: input.site.url ?? "http://localhost:3000",
    },

    seo: {
      defaultTitle: input.site.name, // explicit derivation
      defaultDescription: input.seo.defaultDescription,
    },

    branding: {
      logo: input.branding?.logo ?? "",
    },

    // Only include navigation if there are real overrides
    ...(hasNavigationOverrides && {
      navigation: {
        labels: {
          ...input.navigation!.labels,
        },
      },
    }),
  };
}

/**
 * -------------------------------------------------------
 * 2. applyOverrides
 * -------------------------------------------------------
 * Applies overrides to a base SiteConfig.
 *
 * Rules:
 * - Controlled merge (no generic deep merge)
 * - modules cannot be overridden
 * - no shared references
 * - undefined values do not overwrite
 */
export function applyOverrides(
  base: SiteConfig,
  overrides: SiteConfigOverrides
): SiteConfig {
  return {
    site: {
      name: overrides.site?.name ?? base.site.name,
      url: overrides.site?.url ?? base.site.url,
    },

    seo: {
      defaultTitle:
        overrides.seo?.defaultTitle ?? base.seo.defaultTitle,

      // IMPORTANT:
      // titleTemplate is NEVER overridden
      titleTemplate: base.seo.titleTemplate,

      defaultDescription:
        overrides.seo?.defaultDescription ??
        base.seo.defaultDescription,
    },

    branding: {
      logo: overrides.branding?.logo ?? base.branding.logo,
    },

    // IMPORTANT:
    // modules are copied directly, never overridden
    modules: {
      blog: base.modules.blog,
      admin: base.modules.admin,
      services: base.modules.services,
      contactForm: base.modules.contactForm,
      categories: base.modules.categories,
    },

    navigation: {
      labels: {
        home:
          overrides.navigation?.labels?.home ??
          base.navigation.labels.home,

        about:
          overrides.navigation?.labels?.about ??
          base.navigation.labels.about,

        services:
          overrides.navigation?.labels?.services ??
          base.navigation.labels.services,

        blog:
          overrides.navigation?.labels?.blog ??
          base.navigation.labels.blog,

        contact:
          overrides.navigation?.labels?.contact ??
          base.navigation.labels.contact,
      },
    },
  };
}