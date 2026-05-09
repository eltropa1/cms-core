import type { ReactNode } from "react";

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export default function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="border-b border-white/10 pb-8">
      <h2 className="text-xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-4 space-y-4 leading-7 text-neutral-300">
        {children}
      </div>
    </section>
  );
}
