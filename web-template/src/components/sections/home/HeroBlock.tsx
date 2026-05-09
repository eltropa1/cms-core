import { Section } from "@/components/layout/Section";
import Image from "next/image";
import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  image: string;
};

export function HeroBlock({
  eyebrow,
  title,
  subtitle,
  bullets,
  primaryCta,
  secondaryCta,
  image,
}: Props) {
  return (
    <Section variant="spacious">
      <div className="grid min-h-[860px] min-w-0 items-center gap-20 lg:grid-cols-[minmax(0,0.64fr)_minmax(0,1.36fr)] lg:gap-24 xl:gap-28">
        <div className="min-w-0 max-w-[560px] py-10 lg:py-20">
          <p className="mb-7 text-[13px] font-medium uppercase tracking-[0.18em] text-teal-800/80">
            {eyebrow}
          </p>

          <h1 className="max-w-[12.5ch] text-[46px] font-semibold leading-[1.03] text-neutral-900 sm:text-6xl lg:text-[74px]">
            {title}
          </h1>

          <p className="mt-10 max-w-[520px] text-[18px] leading-8 text-neutral-700">
            {subtitle}
          </p>

          <ul className="mt-14 max-w-[520px] space-y-5 border-l border-neutral-300/70 pl-6 text-[15px] text-neutral-700">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-900 text-white">
                  <svg
                    aria-hidden="true"
                    className="size-3.5"
                    fill="none"
                    viewBox="0 0 12 12"
                  >
                    <path
                      d="M2.5 6.2 4.8 8.5 9.5 3.6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
                <span className="leading-6 text-neutral-700">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Link
              className="inline-flex items-center justify-center rounded-full border border-teal-900 !bg-teal-900 px-8 py-4 text-sm font-medium !text-white shadow-[0_18px_44px_rgba(15,118,110,0.18)] transition hover:border-teal-950 hover:!bg-teal-950 hover:!text-white"
              href={primaryCta.href}
            >
              {primaryCta.label}
            </Link>

            {secondaryCta && (
              <Link
                className="inline-flex items-center justify-center px-1 py-3 text-sm font-medium !text-neutral-600 transition hover:!text-teal-900"
                href={secondaryCta.href}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="relative h-[420px] w-full max-w-full overflow-hidden bg-neutral-100 shadow-[0_34px_90px_rgba(15,23,42,0.16)] sm:h-[560px] lg:h-[720px]">
            <Image
              src={image}
              alt=""
              fill
              priority
              unoptimized
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/10 via-transparent to-white/15" />
          </div>
        </div>
      </div>
    </Section>
  );
}
