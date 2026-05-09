import { Section } from "@/components/layout/Section";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  items: {
    name: string;
    description: string;
    forWho?: string;
    ctaLabel: string;
    ctaHref: string;
  }[];
};

function TreatmentIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
        <path
          d="M7.3 9.5c0-3.3 2.1-6 4.7-6s4.7 2.7 4.7 6c0 4.1-2.25 7.25-4.7 9.75-2.45-2.5-4.7-5.65-4.7-9.75Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.45"
        />
        <path
          d="M9.3 14.5h5.4M12 11.8v5.4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.45"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
        <path
          d="M5.25 8.5c1.6-2.2 3.85-3.3 6.75-3.3s5.15 1.1 6.75 3.3M5.25 15.5c1.6 2.2 3.85 3.3 6.75 3.3s5.15-1.1 6.75-3.3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.45"
        />
        <path
          d="M8.25 10.25h7.5M8.25 13.75h7.5M12 7.4v9.2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.45"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 4.25c2.3 3.1 4.58 5.38 7.75 7.75-3.17 2.37-5.45 4.65-7.75 7.75-2.3-3.1-4.58-5.38-7.75-7.75C7.42 9.63 9.7 7.35 12 4.25Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.45"
      />
      <path
        d="M12 9.25v5.5M9.25 12h5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.45"
      />
    </svg>
  );
}

export function TreatmentsBlock({ title, subtitle, items }: Props) {
  return (
    <Section>
      <div className="mb-20 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div>
          <div className="mb-5 h-px w-14 bg-teal-700/45" />
          <h2 className="max-w-[14ch] text-[31px] font-semibold leading-[1.14] text-neutral-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="max-w-[650px] border-l border-teal-800/30 pl-7 lg:justify-self-end">
          <p className="text-[17px] font-medium leading-8 text-neutral-800">
            {subtitle ?? "Después de entender qué te preocupa, te explicamos qué opciones pueden ayudarte y por qué."}
          </p>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        {items.map((item, i) => {
          const accents = [
            {
              label: "Recuperar función",
              bg: "bg-[#f5fbf8]",
              border: "border-teal-200",
              text: "text-teal-900",
              halo: "bg-teal-100/65",
              line: "from-teal-800/65 via-teal-700/22",
            },
            {
              label: "Corregir progresivamente",
              bg: "bg-[#f7f8ff]",
              border: "border-indigo-100",
              text: "text-indigo-900",
              halo: "bg-indigo-100/55",
              line: "from-indigo-700/55 via-indigo-500/18",
            },
            {
              label: "Mejorar con naturalidad",
              bg: "bg-[#fffaf1]",
              border: "border-amber-200",
              text: "text-amber-900",
              halo: "bg-amber-100/55",
              line: "from-amber-700/60 via-amber-500/22",
            },
          ][i] ?? {
            label: "Solución clara",
            bg: "bg-white",
            border: "border-neutral-200",
            text: "text-teal-900",
            halo: "bg-teal-100/55",
            line: "from-teal-800/55 via-teal-700/18",
          };

          return (
            <article
              key={i}
              className={`group relative min-h-[360px] border-t ${accents.border} bg-transparent py-8 transition duration-300`}
            >
              <div className="relative mb-9 flex items-center justify-between gap-4">
                <span className={`inline-flex size-12 items-center justify-center rounded-full bg-white ${accents.text}`}>
                  <TreatmentIcon index={i} />
                </span>
                <span className={`text-[12px] font-semibold uppercase tracking-[0.14em] ${accents.text}`}>
                  {accents.label}
                </span>
              </div>

              <h3 className="relative text-[23px] font-semibold leading-[1.15] text-neutral-950">
                {item.name}
              </h3>
              <p className="relative mt-5 text-[15px] leading-7 text-neutral-700">
                {item.description}
              </p>
              {item.forWho && (
                <div className="relative mt-8 border-t border-neutral-300/70 pt-5">
                  <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                    Indicado si
                  </p>
                  <p className="text-[14px] font-medium leading-6 text-neutral-800">
                    {item.forWho.replace(/^Indicado si\s*/i, "")}
                  </p>
                </div>
              )}
              <Link
                className={`relative mt-7 inline-flex items-center gap-3 text-[14px] font-semibold ${accents.text} transition hover:text-neutral-950`}
                href={item.ctaHref}
              >
                {item.ctaLabel}
                <span className="h-px w-7 bg-current transition group-hover:w-9" />
              </Link>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
