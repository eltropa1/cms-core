/**
 * Site configuration
 * -------------------------------------------------------
 * Defines the configuration contract of the generated site.
 */

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

  demo?: {
  dental?: {
    home: {
      hero: any;
      trust: any;
      problems: any;
      treatments: any;
      process: any;
      results: any;
      team: any;
      contact: any;
    };
  };
  
   psychology?: {
    home: {
      hero: any;
      trust: any;
      problems: any;
      treatments: any;
      process: any;
      results: any;
      team: any;
      contact: any;
    };
  };

   abogacia?: {
    home: {
      hero: any;
      trust: any;
      problems: any;
      treatments: any;
      process: any;
      results: any;
      team: any;
      contact: any;
    };
  };
};  
  
};

export const siteConfig: SiteConfig = {
  site: {
    name: "CMS Core",
    url: "https://cmscore.example",
  },

  seo: {
    defaultTitle: "CMS Core",
    titleTemplate: "%s | CMS Core",
    defaultDescription: "Web creada con CMS Core",
  },

  branding: {
    logo: "",
  },

  modules: {
    blog: false,
    admin: false,
    services: true,
    contactForm: false,
    categories: false,
  },

  navigation: {
    labels: {
      home: "Inicio",
      about: "Sobre mí",
      services: "Servicios",
      blog: "Blog",
      contact: "Contacto",
    },
  },

  // ✅ SOLUCIÓN
  theme: {
    variant: "dark-premium",
    hero: {
      variant: "centered-glow",
    },
    surface: {
      mode: "light",
    },
  },

  demo: {
  dental: {
    home: {
      hero: {
        eyebrow: "Clínica dental en Madrid",
        title: "Tratamientos dentales bien explicados, antes de empezar",
        subtitle:
          "Revisamos tu caso, te explicamos las opciones y decides con toda la información. Sin presión.",
        bullets: [
          "Primera valoración sin compromiso",
          "Especialistas en implantes y estética dental",
          "Tratamientos planificados, sin improvisar",
        ],
        primaryCta: {
          label: "Pedir cita",
          href: "/contact",
        },
        secondaryCta: {
          label: "Ver tratamientos →",
          href: "#tratamientos",
        },
        image: "/demo-dental/hero.jpg",
      },

      trust: {
        title: "Una forma de trabajar que prioriza tu tranquilidad",
        subtitle:
          "Antes de empezar cualquier tratamiento, entendemos tu caso y te explicamos exactamente qué vamos a hacer.",
        items: [
          {
            title: "Diagnóstico claro desde el principio",
            description:
              "Revisamos tu caso con detalle y te explicamos qué ocurre y qué opciones tienes.",
          },
          {
            title: "Tratamientos planificados",
            description:
              "Cada paso está definido antes de empezar, sin improvisaciones.",
          },
          {
            title: "Especialización real",
            description:
              "Enfocados en implantes y estética dental.",
          },
        ],
      },

      problems: {
        title: "¿En qué podemos ayudarte?",
        subtitle:
          "Si te reconoces en alguna de estas situaciones, podemos valorarlo contigo.",
        items: [
          {
            problem: "Me duele una muela",
            description:
              "El dolor suele ser señal de un problema que necesita tratamiento.",
            ctaLabel: "Ver tratamiento",
            ctaHref: "#",
          },
          {
            problem: "Me falta un diente",
            description:
              "La ausencia de una pieza afecta a la mordida con el tiempo.",
            ctaLabel: "Ver implantes",
            ctaHref: "#",
          },
        ],
      },

      treatments: {
        title: "Tratamientos más habituales",
        items: [
          {
            name: "Implantes dentales",
            description:
              "Sustituyen piezas perdidas de forma fija y funcional.",
            forWho:
              "Indicado si has perdido uno o varios dientes.",
            ctaLabel: "Ver tratamiento",
            ctaHref: "#",
          },
          {
            name: "Ortodoncia",
            description:
              "Corrige la posición de los dientes y la mordida.",
            ctaLabel: "Ver tratamiento",
            ctaHref: "#",
          },
          {
            name: "Estética dental",
            description:
              "Mejora el aspecto de tu sonrisa.",
            ctaLabel: "Ver opciones",
            ctaHref: "#",
          },
        ],
      },

      process: {
        title: "Así trabajamos en consulta",
        steps: [
          {
            title: "1. Valoramos tu caso",
            description:
              "Escuchamos y analizamos tu situación.",
          },
          {
            title: "2. Diagnóstico claro",
            description:
              "Entiendes qué ocurre y tus opciones.",
          },
          {
            title: "3. Tratamiento planificado",
            description:
              "Definimos todo antes de empezar.",
          },
          {
            title: "4. Seguimiento",
            description:
              "Acompañamos todo el proceso.",
          },
        ],
      },

      results: {
        title: "Resultados reales",
        cases: [
          {
            title: "Implante dental",
            problem: "Pérdida de una pieza",
            treatment: "Implante",
            result: "Recupera funcionalidad",
            testimonial:
              "Me explicaron todo desde el principio.",
          },
        ],
      },

      team: {
        title: "Quién te va a atender",
        members: [
          {
            name: "Dra. Laura Gómez",
            role: "Odontóloga",
            statement:
              "Explica cada tratamiento antes de empezar.",
            description:
              "Prioriza que el paciente entienda su caso.",
            image: "/demo-dental/team-1.jpg",
          },
        ],
      },

      contact: {
        title: "Pide cita o consúltanos tu caso",
        primaryCta: {
          label: "Pedir cita",
          href: "/contact",
        },
        trustMessages: [
          "Sin compromiso",
          "Te explicamos tu caso con claridad",
        ],
        address: "Madrid",
        schedule: "Lunes a viernes",
        formEnabled: true,
      },
    },
  },



  psychology: {
    home: {
      hero: {
        eyebrow: "Psicología presencial y online",
        title: "Un espacio tranquilo para entender lo que estás viviendo.",
        subtitle:
          "Trabajamos desde una terapia cercana, profesional y sin juicios, adaptada a tu momento y a tu ritmo.",
        bullets: [
          "Terapia presencial y online",
          "Un proceso adaptado a tu ritmo",
          "Espacio confidencial y profesional",
        ],
        primaryCta: {
          label: "Tener una primera conversación",
          href: "/contact",
        },
        secondaryCta: {
          label: "Cómo trabajamos →",
          href: "#proceso",
        },
        image: "/demo-psychology/hero.jpg",
      },

      trust: {
        title: "Una forma de trabajar que prioriza tu tranquilidad",
        subtitle:
          "Antes de empezar cualquier tratamiento, entendemos tu caso y te explicamos exactamente qué vamos a hacer.",
        items: [
          {
            title: "Diagnóstico claro desde el principio",
            description:
              "Revisamos tu caso con detalle y te explicamos qué ocurre y qué opciones tienes.",
          },
          {
            title: "Tratamientos planificados",
            description:
              "Cada paso está definido antes de empezar, sin improvisaciones.",
          },
          {
            title: "Especialización real",
            description:
              "Enfocados en implantes y estética dental.",
          },
        ],
      },

      problems: {
        title: "¿En qué podemos ayudarte?",
        subtitle:
          "Si te reconoces en alguna de estas situaciones, podemos valorarlo contigo.",
        items: [
          {
            problem: "Me duele una muela",
            description:
              "El dolor suele ser señal de un problema que necesita tratamiento.",
            ctaLabel: "Ver tratamiento",
            ctaHref: "#",
          },
          {
            problem: "Me falta un diente",
            description:
              "La ausencia de una pieza afecta a la mordida con el tiempo.",
            ctaLabel: "Ver implantes",
            ctaHref: "#",
          },
        ],
      },

      treatments: {
        title: "Tratamientos más habituales",
        items: [
          {
            name: "Implantes dentales",
            description:
              "Sustituyen piezas perdidas de forma fija y funcional.",
            forWho:
              "Indicado si has perdido uno o varios dientes.",
            ctaLabel: "Ver tratamiento",
            ctaHref: "#",
          },
          {
            name: "Ortodoncia",
            description:
              "Corrige la posición de los dientes y la mordida.",
            ctaLabel: "Ver tratamiento",
            ctaHref: "#",
          },
          {
            name: "Estética dental",
            description:
              "Mejora el aspecto de tu sonrisa.",
            ctaLabel: "Ver opciones",
            ctaHref: "#",
          },
        ],
      },

      process: {
        title: "Así trabajamos en consulta",
        steps: [
          {
            title: "1. Valoramos tu caso",
            description:
              "Escuchamos y analizamos tu situación.",
          },
          {
            title: "2. Diagnóstico claro",
            description:
              "Entiendes qué ocurre y tus opciones.",
          },
          {
            title: "3. Tratamiento planificado",
            description:
              "Definimos todo antes de empezar.",
          },
          {
            title: "4. Seguimiento",
            description:
              "Acompañamos todo el proceso.",
          },
        ],
      },

      results: {
        title: "Resultados reales",
        cases: [
          {
            title: "Implante dental",
            problem: "Pérdida de una pieza",
            treatment: "Implante",
            result: "Recupera funcionalidad",
            testimonial:
              "Me explicaron todo desde el principio.",
          },
        ],
      },

      team: {
        title: "Quién te va a atender",
        members: [
          {
            name: "Dra. Laura Gómez",
            role: "Odontóloga",
            statement:
              "Explica cada tratamiento antes de empezar.",
            description:
              "Prioriza que el paciente entienda su caso.",
            image: "/demo-dental/team-1.jpg",
          },
        ],
      },

      contact: {
        title: "Pide cita o consúltanos tu caso",
        primaryCta: {
          label: "Pedir cita",
          href: "/contact",
        },
        trustMessages: [
          "Sin compromiso",
          "Te explicamos tu caso con claridad",
        ],
        address: "Madrid",
        schedule: "Lunes a viernes",
        formEnabled: true,
      },
    },
  },



  abogacia: {
    home: {
      hero: {
        eyebrow: "Despacho de abogados",
        title: "Asesoramiento legal claro para tomar decisiones con seguridad.",
        subtitle:
          "Analizamos tu caso, te explicamos las opciones y te acompañamos con una estrategia jurídica realista y bien fundamentada.",
        bullets: [
          "Primera valoración del caso",
          "Especialistas en derecho civil y mercantil",
          "Estrategia legal clara desde el inicio",
        ],
        primaryCta: {
          label: "Solicitar consulta",
          href: "/contact",
        },
        secondaryCta: {
          label: "Ver áreas legales →",
          href: "#tratamientos",
        },
        image: "/demo-abogacia/hero.jpg",
      },

      trust: {
        title: "Una forma de trabajar basada en claridad y criterio",
        subtitle:
          "Antes de iniciar cualquier actuación, entendemos tu situación, valoramos riesgos y te explicamos los pasos posibles.",
        items: [
          {
            title: "Análisis jurídico claro",
            description:
              "Estudiamos tu caso con detalle para que entiendas tus opciones antes de decidir.",
          },
          {
            title: "Estrategia desde el inicio",
            description:
              "Definimos una hoja de ruta legal con prioridades, tiempos y escenarios posibles.",
          },
          {
            title: "Comunicación directa",
            description:
              "Te mantenemos informado con un lenguaje claro, sin tecnicismos innecesarios.",
          },
        ],
      },

      problems: {
        title: "¿En qué situación podemos ayudarte?",
        subtitle:
          "Si estás ante una decisión legal importante, podemos revisar tu caso y orientarte con claridad.",
        items: [
          {
            problem: "Tengo un conflicto contractual",
            description:
              "Revisamos documentos, obligaciones y posibles vías de reclamación o defensa.",
            ctaLabel: "Ver área legal",
            ctaHref: "#",
          },
          {
            problem: "Necesito asesoramiento antes de firmar",
            description:
              "Analizamos riesgos y condiciones para que tomes decisiones con mayor seguridad.",
            ctaLabel: "Ver asesoramiento",
            ctaHref: "#",
          },
        ],
      },

      treatments: {
        title: "Áreas legales principales",
        items: [
          {
            name: "Derecho civil",
            description:
              "Contratos, reclamaciones, responsabilidad civil y conflictos entre particulares.",
            forWho:
              "Indicado si necesitas resolver o prevenir un conflicto civil.",
            ctaLabel: "Ver área",
            ctaHref: "#",
          },
          {
            name: "Derecho mercantil",
            description:
              "Asesoramiento para empresas, socios, contratos y operaciones comerciales.",
            ctaLabel: "Ver área",
            ctaHref: "#",
          },
          {
            name: "Derecho laboral",
            description:
              "Orientación en despidos, contratos, reclamaciones y conflictos laborales.",
            ctaLabel: "Ver opciones",
            ctaHref: "#",
          },
        ],
      },

      process: {
        title: "Así trabajamos tu caso",
        steps: [
          {
            title: "1. Escuchamos la situación",
            description:
              "Entendemos qué ha ocurrido y qué necesitas conseguir.",
          },
          {
            title: "2. Revisamos la documentación",
            description:
              "Analizamos contratos, comunicaciones y pruebas relevantes.",
          },
          {
            title: "3. Definimos estrategia",
            description:
              "Te explicamos opciones, riesgos y próximos pasos.",
          },
          {
            title: "4. Acompañamos el proceso",
            description:
              "Gestionamos la actuación legal y te mantenemos informado.",
          },
        ],
      },

      results: {
        title: "Casos y situaciones habituales",
        cases: [
          {
            title: "Reclamación contractual",
            problem: "Incumplimiento de acuerdo",
            treatment: "Análisis y reclamación",
            result: "Estrategia definida",
            testimonial:
              "Me explicaron las opciones con mucha claridad.",
          },
        ],
      },

      team: {
        title: "Quién llevará tu caso",
        members: [
          {
            name: "Laura Martín",
            role: "Abogada",
            statement:
              "Cada decisión legal debe entenderse antes de tomarla",
            description:
              "Trabaja con una comunicación clara, análisis riguroso y enfoque estratégico.",
            image: "/demo-abogacia/team-1.jpg",
          },
        ],
      },

      contact: {
        title: "Cuéntanos tu caso y lo valoramos contigo",
        primaryCta: {
          label: "Solicitar consulta",
          href: "/contact",
        },
        trustMessages: [
          "Primera valoración",
          "Respuesta clara y confidencial",
        ],
        address: "Madrid",
        schedule: "Lunes a viernes",
        formEnabled: true,
      },
    },
  },
},

};
