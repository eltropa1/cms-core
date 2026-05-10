import type {
  ProductType,
  SiteConfig,
  ThemeVariant,
} from "./siteConfig.types.js";
import { generateSEODescription } from "./generateSeo.js";

/**
 * Base services pool (V1)
 * -------------------------------------------------------
 * Generic, professional, reusable content.
 */
const BASE_SERVICES = [
  {
    title: "Asesoramiento profesional",
    description:
      "Te ayudamos a encontrar la mejor solución adaptada a tus necesidades.",
  },
  {
    title: "Servicio personalizado",
    description:
      "Adaptamos cada proyecto a las características específicas de cada cliente.",
  },
  {
    title: "Mantenimiento y soporte",
    description:
      "Ofrecemos seguimiento continuo para garantizar el mejor resultado.",
  },
  {
    title: "Optimización de resultados",
    description:
      "Mejoramos procesos y recursos para maximizar la eficiencia.",
  },
  {
    title: "Implementación completa",
    description:
      "Nos encargamos de todo el proceso de principio a fin.",
  },
  {
    title: "Consultoría especializada",
    description:
      "Analizamos tu situación para ofrecerte soluciones estratégicas.",
  },
];

/**
 * Returns visual defaults for each theme variant.
 */
function getThemeDefaults(variant: ThemeVariant): SiteConfig["theme"] {
  switch (variant) {
    case "dark-premium":
      return {
        variant,
        hero: {
          variant: "centered-glow",
        },
        surface: {
          mode: "light",
        },
      };

    case "light-clean":
      return {
        variant,
        hero: {
          variant: "centered-clean",
        },
        surface: {
          mode: "light",
        },
      };

    case "minimal-soft":
      return {
        variant,
        hero: {
          variant: "minimal",
        },
        surface: {
          mode: "light",
        },
      };

    case "bold-contrast":
      return {
        variant,
        hero: {
          variant: "split-modern",
        },
        surface: {
          mode: "light",
        },
      };
  }
}

/**
 * Maps product type to SiteConfig.
 */
export function mapProductTypeToSiteConfig(
  type: ProductType
): SiteConfig {
  const themeVariant: ThemeVariant = "dark-premium";
  const theme = getThemeDefaults(themeVariant);

  const modules = {
    blog: type === "completa",
    services: true,
    contactForm: true,
    admin: type === "completa",
    categories: type === "completa",
  };

  const siteName = "Mi Sitio"; // o lo que venga del input
  const businessType = "servicios profesionales"; // puedes mejorar esto luego

  const config: SiteConfig = {
    site: {
      name: siteName,
      url: "http://localhost:3000",
    },

    seo: {
      defaultTitle: siteName,
      titleTemplate: `%s | ${siteName}`,
      defaultDescription: generateSEODescription(siteName, businessType),
    },

    branding: {
      logo: "",
    },

    modules,

    navigation: {
      labels: {
        home: "Inicio",
        about: "Sobre mí",
        services: "Servicios",
        blog: "Blog",
        contact: "Contacto",
      },
    },

    contact: {
      email: "contacto@empresa.com",
      phone: "+34 600 000 000",
    },

    theme,
  };

  if (modules.services) {
    const count =
      type === "completa" ? 6 :
      type === "media" ? 4 : 3;

    config.services = {
      items: BASE_SERVICES.slice(0, count),
    };
  }

  return config;
}
