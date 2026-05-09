import { Section } from "@/components/layout/Section";

type Props = {
  title: string;
  subtitle?: string;
  steps: {
    title: string;
    description: string;
  }[];
};

function ProcessIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
        <path
          d="M4.25 10.5c0-3.05 2.5-5.5 5.75-5.5s5.75 2.45 5.75 5.5S13.25 16 10 16s-5.75-2.45-5.75-5.5Z"
          stroke="currentColor"
          strokeWidth="1.35"
        />
        <path
          d="M7.4 10.2h5.2M10 7.6v5.2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.35"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
        <path
          d="M4.5 4.25h11v11.5h-11V4.25Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.35"
        />
        <path
          d="M7 7.25h6M7 10h6M7 12.75h3.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.35"
        />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
        <path
          d="M5 5.25h10M5 10h10M5 14.75h10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.35"
        />
        <path
          d="M7.2 5.25v9.5M12.8 5.25v9.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.35"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path
        d="M10 3.75c3.1 0 5.65 2.28 5.65 5.1 0 3.45-3.58 5.95-5.65 7.4-2.07-1.45-5.65-3.95-5.65-7.4 0-2.82 2.55-5.1 5.65-5.1Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
      <path
        d="M7.55 9.55 9.35 11.3l3.2-3.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </svg>
  );
}

export function ProcessBlock({ title, subtitle, steps }: Props) {
  return (
    <Section>
      <div className="mb-20 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div>
          <div className="mb-5 h-px w-14 bg-teal-700/45" />
          <h2 className="max-w-[15ch] text-[31px] font-semibold leading-[1.14] text-neutral-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="max-w-[620px] border-l border-teal-800/30 pl-7 lg:justify-self-end">
          <p className="text-[17px] font-medium leading-8 text-neutral-800">
            {subtitle ?? "Un proceso claro, sin prisas y con cada paso explicado antes de avanzar."}
          </p>
        </div>
      </div>

      <div className="relative border-y border-neutral-300/70 py-12">
        <div className="relative grid gap-10 lg:grid-cols-4">
          {steps.map((step, i) => (
            <article
              key={i}
              className="group relative transition duration-300"
            >
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute left-1/2 top-full h-5 w-px bg-gradient-to-b from-teal-700/35 to-transparent lg:left-full lg:top-12 lg:h-px lg:w-5 lg:bg-gradient-to-r" />
              )}

              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-teal-900 text-white transition duration-500 group-hover:-translate-y-0.5">
                  <ProcessIcon index={i} />
                </span>
                <span className="text-[12px] font-semibold tracking-[0.16em] text-teal-800/70">
                  PASO {i + 1}
                </span>
              </div>

              <h3 className="text-[18px] font-semibold leading-6 text-neutral-950">
                {step.title.replace(/^\d+\.\s*/, "")}
              </h3>
              <p className="mt-4 text-[14px] leading-7 text-neutral-700">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
