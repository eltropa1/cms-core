import type { LegalConfig } from "@/config/legal.config";
import LegalSection from "./LegalSection";

type Props = {
  config: LegalConfig;
};

export default function CookiesPolicyContent({ config }: Props) {
  const { cookies } = config;

  return (
    <>
      <LegalSection title="Uso actual de cookies">
        {cookies.usesNonEssentialCookies ? (
          <p>
            Este sitio utiliza cookies no esenciales o tecnologías equivalentes
            en las categorías descritas a continuación. Su uso requiere
            consentimiento cuando así lo exija la normativa aplicable.
          </p>
        ) : (
          <p>
            Actualmente este sitio no utiliza cookies no esenciales, cookies
            analíticas, cookies publicitarias ni tecnologías equivalentes para
            seguimiento de usuarios. Por este motivo no se muestra un banner de
            consentimiento en esta fase.
          </p>
        )}
      </LegalSection>

      <LegalSection title="Cookies técnicas">
        <p>
          Las cookies técnicas son aquellas necesarias para el funcionamiento
          básico del sitio o para prestar un servicio solicitado por la persona
          usuaria. Estas cookies no requieren consentimiento previo cuando se
          limitan a esa finalidad.
        </p>
      </LegalSection>

      <LegalSection title="Inventario de cookies">
        {cookies.items.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-neutral-500">
                  <th className="py-3 pr-4 font-medium">Nombre</th>
                  <th className="py-3 pr-4 font-medium">Proveedor</th>
                  <th className="py-3 pr-4 font-medium">Categoría</th>
                  <th className="py-3 pr-4 font-medium">Finalidad</th>
                  <th className="py-3 font-medium">Duración</th>
                </tr>
              </thead>
              <tbody>
                {cookies.items.map((cookie) => (
                  <tr key={`${cookie.provider}-${cookie.name}`} className="border-b border-white/10">
                    <td className="py-4 pr-4">{cookie.name}</td>
                    <td className="py-4 pr-4">{cookie.provider}</td>
                    <td className="py-4 pr-4">{cookie.category}</td>
                    <td className="py-4 pr-4">{cookie.purpose}</td>
                    <td className="py-4">{cookie.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>
            No hay cookies no esenciales declaradas en la configuración actual.
          </p>
        )}
      </LegalSection>

      <LegalSection title="Cambios futuros">
        <p>
          Si en el futuro se incorporan herramientas de analítica, marketing,
          mapas, vídeos embebidos u otros servicios de terceros que requieran
          consentimiento, esta política se actualizará y se habilitará un
          mecanismo de consentimiento previo antes de cargar dichos servicios.
        </p>
      </LegalSection>
    </>
  );
}
