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

export default function LegalHeroBlock({
  eyebrow,
  title,
  subtitle,
  bullets,
  primaryCta,
  secondaryCta,
  image,
}: Props) {
  return (
    <section className="relative min-h-[880px] overflow-hidden bg-[#17130F] text-[#F3E8D8] lg:min-h-screen">
      <Image
        src={image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover opacity-72"
      />
      <div className="absolute inset-0 bg-[#17130F]/52" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#17130F] via-[#17130F]/58 to-[#17130F]/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-transparent to-[#17130F]/28" />

      <div className="relative mx-auto flex min-h-[880px] max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 lg:min-h-screen lg:px-8 lg:pb-14">
        <div className="max-w-[960px]">
          <p className="mb-8 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C2A36E]">
            {eyebrow}
          </p>

          <h1 className="max-w-[11ch] font-serif text-[54px] font-normal leading-[0.96] tracking-[-0.03em] text-[#F3E8D8] sm:text-[76px] lg:text-[104px]">
            {title}
          </h1>

          <div className="mt-10 grid gap-8 border-t border-[#D8CBB9]/18 pt-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <p className="max-w-[620px] text-[18px] leading-8 text-[#D8CBB9]">
              {subtitle}
            </p>

            <div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  className="inline-flex w-fit items-center justify-center border border-[#E8D3AA]/70 bg-[#E8D3AA] px-7 py-3.5 text-sm font-semibold text-[#211914] transition hover:bg-[#F3E8D8]"
                  href={primaryCta.href}
                >
                  {primaryCta.label}
                </Link>

                {secondaryCta && (
                  <Link
                    className="inline-flex w-fit items-center justify-center px-1 py-3 text-sm font-semibold text-[#E8D3AA] transition hover:text-[#F3E8D8]"
                    href={secondaryCta.href}
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid border-y border-[#D8CBB9]/16 text-[13px] font-medium text-[#C9BBAA] md:grid-cols-3">
          {bullets.map((bullet) => (
            <p
              key={bullet}
              className="border-[#D8CBB9]/16 py-4 md:border-l md:px-6 first:md:border-l-0 first:md:pl-0"
            >
              {bullet}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
