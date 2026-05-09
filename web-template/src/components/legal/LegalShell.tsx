import type { ReactNode } from "react";

type LegalShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function LegalShell({
  eyebrow,
  title,
  description,
  children,
}: LegalShellProps) {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-14 max-w-3xl border-b border-white/10 pb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            {description}
          </p>
        </div>

        <div className="space-y-10 text-neutral-300">{children}</div>
      </section>
    </main>
  );
}
