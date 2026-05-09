import type { LegalConfig } from "@/config/legal.config";
import LegalSection from "./LegalSection";

type Props = {
  config: LegalConfig;
};

export default function LegalNoticeContent({ config }: Props) {
  const { identity } = config;

  return (
    <>
      <LegalSection title="Titular del sitio web">
        <dl className="grid gap-3 sm:grid-cols-[12rem_1fr]">
          <dt className="text-neutral-500">Titular</dt>
          <dd>{identity.ownerName}</dd>
          {identity.tradeName && (
            <>
              <dt className="text-neutral-500">Nombre comercial</dt>
              <dd>{identity.tradeName}</dd>
            </>
          )}
          <dt className="text-neutral-500">NIF/CIF</dt>
          <dd>{identity.nif}</dd>
          <dt className="text-neutral-500">Domicilio</dt>
          <dd>{identity.address}</dd>
          <dt className="text-neutral-500">Email</dt>
          <dd>
            <a className="text-amber-400" href={`mailto:${identity.email}`}>
              {identity.email}
            </a>
          </dd>
          {identity.phone && (
            <>
              <dt className="text-neutral-500">Teléfono</dt>
              <dd>{identity.phone}</dd>
            </>
          )}
        </dl>
      </LegalSection>

      <LegalSection title="Objeto del sitio">
        <p>
          Este sitio web presenta información sobre servicios profesionales,
          proyectos, contenidos y vías de contacto relacionados con la actividad
          de {identity.tradeName ?? identity.ownerName}. Su finalidad es
          ofrecer información clara a las personas interesadas y facilitar una
          primera comunicación profesional.
        </p>
      </LegalSection>

      <LegalSection title="Condiciones de uso">
        <p>
          La persona usuaria se compromete a utilizar este sitio web de forma
          diligente, lícita y respetuosa con la legislación vigente, la buena fe
          y los derechos de terceros. Queda prohibido cualquier uso que pueda
          dañar, inutilizar, sobrecargar o deteriorar el sitio, sus contenidos o
          su funcionamiento ordinario.
        </p>
      </LegalSection>

      <LegalSection title="Propiedad intelectual e industrial">
        <p>
          Los textos, diseños, imágenes, estructura, código, identidad visual y
          demás contenidos del sitio pertenecen a {identity.ownerName} o se
          utilizan con autorización suficiente. La reproducción, distribución,
          comunicación pública o transformación de estos contenidos requiere
          autorización previa, salvo en los casos permitidos por la ley.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilidad">
        <p>
          {identity.ownerName} procura que la información publicada sea clara,
          actualizada y precisa, pero no garantiza la ausencia absoluta de
          errores ni la disponibilidad continua del sitio. El uso de la
          información publicada se realiza bajo responsabilidad de la persona
          usuaria, especialmente cuando se adopten decisiones profesionales o
          comerciales basadas en ella.
        </p>
      </LegalSection>

      <LegalSection title="Legislación aplicable y jurisdicción">
        <p>
          Este aviso legal se rige por la legislación española, incluyendo la
          Ley 34/2002, de servicios de la sociedad de la información y de
          comercio electrónico. Para cualquier controversia, las partes se
          someterán a los juzgados y tribunales que resulten competentes
          conforme a la normativa aplicable.
        </p>
      </LegalSection>
    </>
  );
}
