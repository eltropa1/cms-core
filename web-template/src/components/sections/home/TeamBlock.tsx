import { Section } from "@/components/layout/Section";
import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  members: {
    name: string;
    role: string;
    statement: string;
    description: string;
    experience?: string;
    image: string;
  }[];
};

export function TeamBlock({ title, subtitle, members }: Props) {
  return (
    <Section>
      <div className="mb-20 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div>
          <div className="mb-5 h-px w-14 bg-teal-700/45" />
          <h2 className="max-w-[13ch] text-[31px] font-semibold leading-[1.14] text-neutral-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="max-w-[620px] border-l border-teal-800/30 pl-7 lg:justify-self-end">
          <p className="text-[17px] font-medium leading-8 text-neutral-800">
            {subtitle ?? "Antes de empezar, sabes quién te acompaña y cómo va a cuidar cada paso de tu tratamiento."}
          </p>
        </div>
      </div>

      <div className="grid gap-8">
        {members.map((m, i) => (
          <article
            key={i}
            className="group relative overflow-hidden border-y border-neutral-300/70 py-12 transition duration-300"
          >
            <div className="relative grid gap-0 bg-white lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.015]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/16 via-transparent to-white/5" />
                <div className="absolute bottom-5 left-5 bg-white/90 px-4 py-2 text-[12px] font-semibold text-teal-950">
                  Trato cercano
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-teal-800">
                  Te atenderá
                </p>
                <h3 className="max-w-[15rem] text-[30px] font-semibold leading-[1.08] text-neutral-950 sm:text-[34px]">
                  {m.name}
                </h3>
                <p className="mt-3 text-[15px] font-medium text-neutral-600">
                  {m.role}
                </p>

                <blockquote className="mt-9 border-l border-teal-700/40 pl-5">
                  <p className="text-[20px] font-medium leading-8 text-neutral-800">
                    &ldquo;{m.statement}.&rdquo;
                  </p>
                </blockquote>

                <p className="mt-8 text-[15px] leading-7 text-neutral-700">
                  {m.description}
                  {m.experience ? `. ${m.experience}` : ""}
                </p>

                <div className="mt-10 flex items-center gap-4 text-[13px] font-medium text-teal-900">
                  <span className="h-px w-10 bg-teal-700/55 transition duration-500 group-hover:w-14" />
                  Cuidado explicado con calma
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
