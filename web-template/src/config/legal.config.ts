export type LegalIdentity = {
  ownerName: string;
  tradeName?: string;
  nif: string;
  address: string;
  email: string;
  phone?: string;
};

export type PrivacyTreatment = {
  id: string;
  name: string;
  purpose: string;
  legalBasis: string;
  retention: string;
};

export type CookieCategory =
  | "technical"
  | "analytics"
  | "marketing"
  | "preferences";

export type CookieItem = {
  name: string;
  provider: string;
  category: CookieCategory;
  purpose: string;
  duration: string;
};

export type LegalConfig = {
  identity: LegalIdentity;
  privacy: {
    rightsEmail: string;
    treatments: PrivacyTreatment[];
  };
  cookies: {
    usesNonEssentialCookies: boolean;
    items: CookieItem[];
  };
};

export const legalConfig: LegalConfig = {
  identity: {
    ownerName: "[NOMBRE LEGAL DEL TITULAR]",
    tradeName: "CMS Core",
    nif: "[NIF/CIF PENDIENTE]",
    address: "[DIRECCIÓN FISCAL PENDIENTE]",
    email: "hola@cmscore.dev",
    phone: "[TELÉFONO PENDIENTE]",
  },
  privacy: {
    rightsEmail: "hola@cmscore.dev",
    treatments: [
      {
        id: "contact",
        name: "Consultas recibidas a través del formulario o email",
        purpose:
          "Responder solicitudes de información, valorar necesidades del proyecto y mantener comunicaciones relacionadas con la consulta.",
        legalBasis:
          "Interés legítimo en atender solicitudes recibidas y, cuando proceda, aplicación de medidas precontractuales solicitadas por la persona interesada.",
        retention:
          "Durante el tiempo necesario para gestionar la consulta y, en su caso, mientras puedan derivarse responsabilidades legales.",
      },
      {
        id: "clients",
        name: "Gestión de clientes y servicios contratados",
        purpose:
          "Gestionar la relación profesional, la prestación de servicios, comunicaciones operativas y obligaciones administrativas asociadas.",
        legalBasis:
          "Ejecución de una relación contractual y cumplimiento de obligaciones legales aplicables.",
        retention:
          "Durante la relación profesional y los plazos legalmente exigibles para obligaciones fiscales, contables o de responsabilidad.",
      },
      {
        id: "newsletter",
        name: "Comunicaciones informativas o newsletter",
        purpose:
          "Enviar comunicaciones informativas si este módulo se activa y la persona interesada lo solicita expresamente.",
        legalBasis:
          "Consentimiento de la persona interesada, revocable en cualquier momento.",
        retention:
          "Hasta la retirada del consentimiento o solicitud de baja.",
      },
      {
        id: "analytics",
        name: "Analítica web",
        purpose:
          "Medir el uso del sitio web si en el futuro se activan herramientas de analítica no esenciales.",
        legalBasis:
          "Consentimiento de la persona usuaria cuando la herramienta requiera cookies o tecnologías no técnicas.",
        retention:
          "Según la herramienta configurada y siempre informado en la política de cookies vigente.",
      },
    ],
  },
  cookies: {
    usesNonEssentialCookies: false,
    items: [],
  },
};
