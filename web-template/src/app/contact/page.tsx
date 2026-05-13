import Link from "next/link";
import { legalConfig } from "@/config/legal.config";

const contactEmail = "hola@cmscore.dev";

const expectations = [
  "Te respondo personalmente.",
  "Sin llamadas comerciales ni presión.",
  "Podemos empezar con una idea poco definida.",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
                Contacto
              </p>

              <h1 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl">
                Hablemos de tu web.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-300">
                Si necesitas una web clara y profesional para tu negocio,
                escríbeme. No hace falta tenerlo todo decidido.
              </p>
            </div>

            <div className="mt-12 border-y border-white/10 py-6">
              <a
                href={`mailto:${contactEmail}`}
                className="text-2xl font-semibold text-white transition hover:text-amber-400"
              >
                {contactEmail}
              </a>

              <ul className="mt-8 grid gap-4 text-sm text-neutral-400 sm:grid-cols-3 lg:grid-cols-1">
                {expectations.map((item) => (
                  <li key={item} className="border-t border-white/10 pt-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10">
            <div className="mb-10">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Cuéntame qué necesitas
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-400">
                Cuéntame brevemente qué necesitas y te responderé personalmente.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-400"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-400"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Qué quieres construir o mejorar
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={6}
                  className="w-full resize-none border-0 border-b border-white/15 bg-transparent px-0 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-neutral-600 focus:border-amber-400"
                  placeholder="Cuéntame brevemente qué necesitas o qué tienes en mente."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-amber-400/40 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-amber-400 hover:text-black"
              >
                Enviar mensaje
              </button>

              <label className="flex items-start gap-3 border-t border-white/10 pt-5 text-sm leading-6 text-neutral-400">
                <input
                  type="checkbox"
                  className="mt-1 size-4 rounded border-white/20 bg-transparent"
                  aria-describedby="privacy-info"
                />
                <span>
                  He leído y acepto la{" "}
                  <Link className="text-amber-400 hover:text-amber-300" href="/privacidad">
                    política de privacidad
                  </Link>
                  .
                </span>
              </label>

              <p id="privacy-info" className="text-xs leading-6 text-neutral-500">
                Responsable: {legalConfig.identity.ownerName}. Finalidad:
                responder a tu consulta. Base jurídica: atención de solicitudes
                y medidas precontractuales. Puedes ejercer tus derechos en{" "}
                <a className="text-amber-400" href={`mailto:${legalConfig.privacy.rightsEmail}`}>
                  {legalConfig.privacy.rightsEmail}
                </a>
                . Este formulario todavía no envía datos hasta conectar el
                backend.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
