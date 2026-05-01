export type ThemeVariant =
  | "dark-premium"
  | "light-clean"
  | "minimal-soft"
  | "bold-contrast";

export type HeroVariant =
  | "centered-clean"
  | "centered-glow"
  | "split-modern"
  | "minimal";

export type SurfaceMode = "light" | "dark";

export type ProductType = "basica" | "media" | "completa";

export type SiteConfig = {
  site: { name: string; url: string };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
  };
  branding: { logo: string };
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
  services?: {
    items: {
      title: string;
      description: string;
    }[];
  };
  contact?: {
    email: string;
    phone: string;
  };

  theme: {
    variant: ThemeVariant;
    hero: {
      variant: HeroVariant;
    };
    surface: {
      mode: SurfaceMode;
    };
  };

};

export type UserInputV1 = {
  site: { name: string; url?: string };
  seo: { defaultDescription: string };
  branding?: { logo?: string };
  navigation?: {
    labels?: Partial<SiteConfig["navigation"]["labels"]>;
  };
};

export type SiteConfigOverrides = {
  site?: { name?: string; url?: string };

  seo?: {
    defaultTitle?: string;
    defaultDescription?: string;
  };

  branding?: { logo?: string };

  navigation?: {
    labels?: Partial<SiteConfig["navigation"]["labels"]>;
  };

  contact?: {
    email?: string;
    phone?: string;
  };

    theme?: {
    variant?: ThemeVariant;
    hero?: {
      variant?: HeroVariant;
    };
    surface?: {
      mode?: SurfaceMode;
    };
  };
};