import { Section } from "@/components/layout/Section";

type Props = {
  title: string;
  subtitle?: string;
  items: {
    title: string;
    description: string;
  }[];
};

function TrustIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
        <path
          d="M5.5 2.75h5M8 1.75v2M4.25 5h7.5v8.25h-7.5V5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.35"
        />
        <path
          d="M6.25 8.25h3.5M8 6.5V10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.35"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
        <path
          d="M4.25 3.25h7.5v9.5h-7.5v-9.5Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.35"
        />
        <path
          d="M6.25 6h3.5M6.25 8h3.5M6.25 10h2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.35"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M8 2.5c1.45 0 2.7.82 3.33 2.02a3.75 3.75 0 0 1-.38 4.15L8 13.25 5.05 8.67a3.75 3.75 0 0 1-.38-4.15A3.74 3.74 0 0 1 8 2.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
      <path
        d="M6.45 6.85 7.55 8l2-2.15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </svg>
  );
}

export function TrustBlock({ title, subtitle, items }: Props) {
  return (
    <Section>
      <div className="mb-20 max-w-[760px]">
        <div className="mb-5 h-px w-16 bg-teal-700/55" />
        <h2 className="max-w-[16ch] text-[32px] font-semibold leading-[1.14] text-neutral-900 sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-6 max-w-[620px] text-[16px] leading-7 text-neutral-700">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid gap-10 border-y border-neutral-300/70 py-12 md:grid-cols-3 lg:gap-12">
        {items.map((item, i) => (
          <article
            key={i}
            className="group relative min-h-[230px] px-0 py-2 transition duration-300"
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-teal-900 text-white">
                <TrustIcon index={i} />
              </span>
              <span className="h-px w-12 bg-neutral-200" />
            </div>

            <h3 className="max-w-[14rem] text-[17px] font-semibold leading-6 text-neutral-950">
              {item.title}
            </h3>
            <p className="mt-5 text-[14px] leading-7 text-neutral-700">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
