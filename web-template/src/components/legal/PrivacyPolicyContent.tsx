import type { LegalConfig } from "@/config/legal.config";
import LegalSection from "./LegalSection";

type Props = {
  config: LegalConfig;
};

export default function PrivacyPolicyContent({ config }: Props) {
  const { identity, privacy } = config;

  return (
    <>
      <LegalSection title="Responsable del tratamiento">
        <p>
          El responsable del tratamiento es {identity.ownerName}
          {identity.tradeName ? `, titular de ${identity.tradeName}` : ""}, con
          NIF/CIF {identity.nif}, domicilio en {identity.address} y email de
          contacto{" "}
          <a className="text-amber-400" href={`mailto:${identity.email}`}>
            {identity.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Tratamientos de datos previstos">
        <div className="space-y-6">
          {privacy.treatments.map((treatment) => (
            <article key={treatment.id} className="border-t border-white/10 pt-5">
              <h3 className="font-semibold text-white">{treatment.name}</h3>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-[9rem_1fr]">
                <dt className="text-neutral-500">Finalidad</dt>
                <dd>{treatment.purpose}</dd>
                <dt className="text-neutral-500">Base jurídica</dt>
                <dd>{treatment.legalBasis}</dd>
                <dt className="text-neutral-500">Conservación</dt>
                <dd>{treatment.retention}</dd>
              </dl>
            </article>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="Destinatarios y encargados">
        <p>
          Los datos no se comunicarán a terceros salvo obligación legal o cuando
          sea necesario para prestar el servicio solicitado mediante proveedores
          que actúen como encargados del tratamiento bajo las garantías exigidas
          por la normativa de protección de datos.
        </p>
      </LegalSection>

      <LegalSection title="Derechos de las personas interesadas">
        <p>
          Puedes ejercer los derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad escribiendo a{" "}
          <a className="text-amber-400" href={`mailto:${privacy.rightsEmail}`}>
            {privacy.rightsEmail}
          </a>
          . La solicitud deberá permitir identificar a la persona interesada y
          concretar el derecho que desea ejercer.
        </p>
      </LegalSection>

      <LegalSection title="Reclamación ante la autoridad de control">
        <p>
          Si consideras que el tratamiento de tus datos no se ajusta a la
          normativa, puedes presentar una reclamación ante la Agencia Española
          de Protección de Datos a través de{" "}
          <a
            className="text-amber-400"
            href="https://www.aepd.es"
            rel="noreferrer"
            target="_blank"
          >
            www.aepd.es
          </a>
          .
        </p>
      </LegalSection>
    </>
  );
}
