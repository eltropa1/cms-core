import { Section } from "@/components/layout/Section";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  items: {
    problem: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  }[];
};

function SituationIcon({ urgent }: { urgent: boolean }) {
  if (urgent) {
    return (
      <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
        <path
          d="M8.6 3.8c1.35 0 2 .65 3.4.65s2.05-.65 3.4-.65c2.25 0 3.65 1.78 3.65 4.15 0 2.75-1.42 5.78-2.52 7.8-.74 1.37-1.38 2.55-2.47 2.55-.95 0-1.08-1.1-2.06-1.1s-1.11 1.1-2.06 1.1c-1.09 0-1.73-1.18-2.47-2.55-1.1-2.02-2.52-5.05-2.52-7.8C4.95 5.58 6.35 3.8 8.6 3.8Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.45"
        />
        <path
          d="m6.25 4.2-1.1-1.35M17.75 4.2l1.1-1.35M12 7.4l-1.2 3.1h2.35L12 13.7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.45"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M7.2 9.45c0-3.28 2.15-5.95 4.8-5.95s4.8 2.67 4.8 5.95c0 4.05-2.32 7.15-4.8 9.55-2.48-2.4-4.8-5.5-4.8-9.55Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.45"
      />
      <path
        d="M9.15 9.75h5.7M12 6.95v5.6M9.7 15.35h4.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.45"
      />
    </svg>
  );
}

export function ProblemsBlock({ title, subtitle, items }: Props) {
  return (
    <Section>
      <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div>
          <div className="mb-5 h-px w-14 bg-teal-700/45" />
          <h2 className="max-w-[14ch] text-[31px] font-semibold leading-[1.14] text-neutral-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        {subtitle && (
          <div className="relative max-w-[650px] overflow-hidden rounded-[1.35rem] border border-teal-200/80 bg-[#fffdf9] p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)] lg:justify-self-end">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-teal-700/45 via-teal-700/15 to-transparent" />
            <p className="text-[18px] font-medium leading-8 text-neutral-800">
              {subtitle}
            </p>
          </div>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-[1.08fr_0.92fr]">
        {items.map((item, i) => {
          const urgent = i === 0;

          return (
            <article
              key={i}
              className={
                urgent
                  ? "group relative overflow-hidden rounded-[1.5rem] border border-amber-300/80 bg-[#fff8ec] p-8 shadow-[0_26px_74px_rgba(120,53,15,0.13)] transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-[#fff5e4] hover:shadow-[0_32px_86px_rgba(120,53,15,0.18)]"
                  : "group relative overflow-hidden rounded-[1.5rem] border border-teal-100 bg-[#fcfffd] p-8 shadow-[0_20px_58px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-[0_28px_76px_rgba(15,23,42,0.1)]"
              }
            >
              <div
                className={
                  urgent
                    ? "pointer-events-none absolute -right-12 -top-16 size-44 rounded-full bg-amber-200/45 blur-3xl transition duration-500 group-hover:scale-110 group-hover:bg-amber-200/65 group-hover:opacity-100"
                    : "pointer-events-none absolute -right-14 -top-16 size-40 rounded-full bg-teal-100/55 blur-3xl transition duration-500 group-hover:scale-110 group-hover:bg-teal-100/75 group-hover:opacity-100"
                }
              />
              {urgent && (
                <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-amber-200/70 transition duration-500 group-hover:ring-amber-300/80" />
              )}
              <div
                className={
                  urgent
                    ? "absolute inset-x-8 top-0 h-px bg-gradient-to-r from-amber-600/80 via-amber-500/28 to-transparent transition duration-500 group-hover:from-amber-700 group-hover:via-amber-500/45"
                    : "absolute inset-x-8 top-0 h-px bg-gradient-to-r from-teal-800/65 via-teal-700/20 to-transparent transition duration-500 group-hover:from-teal-900 group-hover:via-teal-700/35"
                }
              />

              <div className="relative mb-9 flex items-center justify-between gap-4">
                <span
                  className={
                    urgent
                      ? "inline-flex size-14 items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-amber-900 shadow-[0_14px_34px_rgba(180,83,9,0.16)] transition duration-500 group-hover:-translate-y-0.5"
                      : "inline-flex size-14 items-center justify-center rounded-full border border-teal-200 bg-teal-50 text-teal-900 shadow-[0_14px_34px_rgba(15,118,110,0.1)] transition duration-500 group-hover:-translate-y-0.5"
                  }
                >
                  <SituationIcon urgent={urgent} />
                </span>
                <span
                  className={
                    urgent
                      ? "rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-[12px] font-semibold text-amber-950"
                      : "rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[12px] font-semibold text-teal-950"
                  }
                >
                  {urgent ? "Necesita atención" : "Solución planificada"}
                </span>
              </div>

              <h3 className="relative max-w-[18rem] text-[25px] font-semibold leading-[1.15] text-neutral-950">
                {item.problem}
              </h3>
              <p className="relative mt-5 max-w-[34rem] text-[15px] leading-7 text-neutral-700">
                {item.description}
              </p>
              <Link
                className={
                  urgent
                    ? "relative mt-8 inline-flex items-center gap-3 text-[14px] font-semibold text-amber-950 transition hover:text-neutral-950"
                    : "relative mt-8 inline-flex items-center gap-3 text-[14px] font-semibold text-teal-900 transition hover:text-teal-950"
                }
                href={item.ctaHref}
              >
                {item.ctaLabel}
                <span
                  aria-hidden="true"
                  className={
                    urgent
                      ? "h-px w-7 bg-amber-700 transition group-hover:w-9"
                      : "h-px w-7 bg-teal-800 transition group-hover:w-9"
                  }
                />
              </Link>
            </article>
          );
        })}
      </div>

      <div className="mt-8 rounded-[1.25rem] border border-sky-200 bg-[#eaf6fb] px-7 py-6 shadow-[0_18px_48px_rgba(14,116,144,0.08)]">
        <div className="flex items-start gap-4">
          <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-sky-300 bg-white text-sky-900 shadow-[0_8px_22px_rgba(14,116,144,0.08)]">
            <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 14 14">
              <path
                d="M3 7.15 5.55 9.7 11 4.3"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <p className="max-w-[760px] text-[16px] font-medium leading-7 text-neutral-800">
            Después de valorar tu caso, te explicamos qué tratamiento encaja mejor contigo.
          </p>
        </div>
      </div>
    </Section>
  );
}
