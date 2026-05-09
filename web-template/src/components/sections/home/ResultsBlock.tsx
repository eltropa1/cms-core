import { Section } from "@/components/layout/Section";

type Props = {
  title: string;
  subtitle?: string;
  cases: {
    title: string;
    problem: string;
    treatment: string;
    result: string;
    testimonial: string;
    context?: string;
  }[];
};

function ResultIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path
        d="M4.75 10.25c0-3 2.3-5.5 5.25-5.5s5.25 2.5 5.25 5.5S12.95 15.75 10 15.75s-5.25-2.5-5.25-5.5Z"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <path
        d="M7.45 10.2 9.3 12l3.45-3.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </svg>
  );
}

export function ResultsBlock({ title, subtitle, cases }: Props) {
  return (
    <Section>
      <div className="mb-20 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div>
          <div className="mb-5 h-px w-14 bg-teal-700/45" />
          <h2 className="max-w-[12ch] text-[31px] font-semibold leading-[1.14] text-neutral-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="max-w-[620px] border-l border-teal-800/30 pl-7 lg:justify-self-end">
          <p className="text-[17px] font-medium leading-8 text-neutral-800">
            {subtitle ?? "Casos explicados con calma: qué ocurría, qué hicimos y qué cambió después del tratamiento."}
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {cases.map((c, i) => (
          <article
            key={i}
            className="group relative overflow-hidden border-t border-neutral-300/70 py-12 transition duration-300 last:border-b"
          >
            <div className="relative grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-teal-900 text-white transition duration-500 group-hover:-translate-y-0.5">
                    <ResultIcon />
                  </span>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-teal-900">
                    Caso real
                  </span>
                </div>

                <h3 className="max-w-[18rem] text-[26px] font-semibold leading-[1.12] text-neutral-950">
                  {c.title}
                </h3>
                <p className="mt-5 max-w-[28rem] text-[15px] leading-7 text-neutral-700">
                  Una situación habitual abordada con diagnóstico, planificación y seguimiento.
                </p>
              </div>

              <div className="border-l border-neutral-300/70 pl-7">
                <dl className="grid gap-5 text-[14px] leading-7 text-neutral-700 sm:grid-cols-3">
                  <div>
                    <dt className="mb-2 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-teal-800">
                      <span className="h-px w-5 bg-teal-700/45" />
                      Problema
                    </dt>
                    <dd className="font-medium text-neutral-800">{c.problem}</dd>
                  </div>
                  <div>
                    <dt className="mb-2 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-teal-800">
                      <span className="h-px w-5 bg-teal-700/45" />
                      Tratamiento
                    </dt>
                    <dd className="font-medium text-neutral-800">{c.treatment}</dd>
                  </div>
                  <div>
                    <dt className="mb-2 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-teal-800">
                      <span className="h-px w-5 bg-teal-700/45" />
                      Resultado
                    </dt>
                    <dd className="font-medium text-neutral-800">{c.result}</dd>
                  </div>
                </dl>

                <blockquote className="mt-7 border-t border-neutral-200 pt-6">
                  <p className="text-[18px] font-medium leading-8 text-neutral-800">
                    &ldquo;{c.testimonial}&rdquo;
                  </p>
                  <footer className="mt-4 text-[13px] font-medium text-neutral-600">
                    Paciente tras el tratamiento
                  </footer>
                </blockquote>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
