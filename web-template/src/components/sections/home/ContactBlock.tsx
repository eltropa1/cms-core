import { Section } from "@/components/layout/Section";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  phone?: string;
  whatsapp?: string;
  formEnabled: boolean;
  trustMessages: string[];
  address: string;
  schedule: string;
  extraInfo?: string;
};

export function ContactBlock({
  title,
  subtitle,
  primaryCta,
  phone,
  whatsapp,
  formEnabled,
  trustMessages,
  address,
  schedule,
  extraInfo,
}: Props) {
  return (
    <Section variant="compact">
      <div className="group relative overflow-hidden bg-neutral-950 p-8 text-white shadow-[0_34px_100px_rgba(15,23,42,0.18)] md:p-10 lg:p-14">

        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="py-2 lg:py-6">
            <div className="mb-5 h-px w-14 bg-teal-300/60" />
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-teal-200">
              Contacto tranquilo
            </p>
            <h2 className="max-w-[13ch] text-[34px] font-semibold leading-[1.08] !text-white sm:text-5xl">
              {title}
            </h2>

            <p className="mt-7 max-w-[560px] text-[18px] font-medium leading-8 !text-neutral-200">
              {subtitle ?? "Cuéntanos qué te preocupa y valoramos tu caso contigo, sin presión y con explicaciones claras."}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold !text-neutral-950 transition hover:-translate-y-0.5 hover:bg-teal-50"
                href={primaryCta.href}
              >
                {primaryCta.label}
              </Link>
              <span className="text-[14px] font-medium text-neutral-300">
                Te respondemos personalmente.
              </span>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {[...trustMessages, "Te respondemos personalmente"].map((msg, i) => (
                <li
                  key={`${msg}-${i}`}
                  className="flex items-center gap-3 border-t border-white/12 py-3 text-[14px] font-medium !text-neutral-200"
                >
                  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-800 ring-1 ring-teal-200">
                    <svg aria-hidden="true" className="size-2.5" fill="none" viewBox="0 0 10 10">
                      <path
                        d="M2 5.1 4 7l4-4"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </span>
                  {msg}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 text-neutral-900 md:p-7">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-teal-800">
                  Escríbenos
                </p>
                <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                  Un primer mensaje sencillo es suficiente.
                </p>
              </div>
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-teal-200 bg-teal-50 text-teal-900">
                <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M3 4.5h10v7H3v-7Z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.35"
                  />
                  <path
                    d="m3.5 5 4.5 3.4L12.5 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.35"
                  />
                </svg>
              </span>
            </div>

            <div className="mb-7 rounded-[1.1rem] border border-sky-100 bg-sky-50/70 p-4 text-[14px] leading-7 text-neutral-700">
              {phone && <p>Tel: {phone}</p>}
              {whatsapp && <p>WhatsApp: {whatsapp}</p>}
              <p className="font-medium text-neutral-950">{address}</p>
              <p>{schedule}</p>
              {extraInfo && <p>{extraInfo}</p>}
            </div>

            {formEnabled && (
              <form className="space-y-4">
                <input type="text" placeholder="Nombre" className="w-full rounded-2xl border border-neutral-200 bg-[#fffdf9] px-5 py-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-500 hover:border-neutral-300 focus:border-teal-700 focus:bg-white focus:shadow-[0_0_0_4px_rgba(15,118,110,0.08)]" />
                <input type="text" placeholder="Teléfono" className="w-full rounded-2xl border border-neutral-200 bg-[#fffdf9] px-5 py-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-500 hover:border-neutral-300 focus:border-teal-700 focus:bg-white focus:shadow-[0_0_0_4px_rgba(15,118,110,0.08)]" />
                <textarea placeholder="Mensaje" className="min-h-32 w-full rounded-2xl border border-neutral-200 bg-[#fffdf9] px-5 py-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-500 hover:border-neutral-300 focus:border-teal-700 focus:bg-white focus:shadow-[0_0_0_4px_rgba(15,118,110,0.08)]" />
                <button type="submit" className="inline-flex items-center gap-3 rounded-full border border-teal-800 bg-white px-5 py-3 text-[13px] font-semibold text-teal-900 transition hover:-translate-y-0.5 hover:border-teal-900 hover:bg-teal-50">
                  Enviar
                  <span className="h-px w-7 bg-teal-800" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
