import Link from "next/link";
import { siteConfig } from "@/config/site.config";

import { HeroBlock } from "@/components/sections/home/HeroBlock";
import { TrustBlock } from "@/components/sections/home/TrustBlock";
import { ProblemsBlock } from "@/components/sections/home/ProblemsBlock";
import { TreatmentsBlock } from "@/components/sections/home/TreatmentsBlock";
import { ProcessBlock } from "@/components/sections/home/ProcessBlock";
import { ResultsBlock } from "@/components/sections/home/ResultsBlock";
import { TeamBlock } from "@/components/sections/home/TeamBlock";
import { ContactBlock } from "@/components/sections/home/ContactBlock";

export default function DemoDentalPage() {
  const home = siteConfig.demo?.dental?.home;

  if (!home) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-neutral-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-neutral-700 sm:px-6 lg:px-8">
          <span>DEMO — Clínica dental</span>
          <Link className="font-medium text-neutral-900 hover:underline" href="/">
            Volver a mi web
          </Link>
        </div>
      </div>
      <div className="min-h-screen bg-[#f7f5f1] pt-8 text-neutral-900 [&_a]:text-teal-800 [&_a:hover]:text-teal-950 [&_h1]:text-neutral-900 [&_h2]:text-neutral-900 [&_h3]:text-neutral-950 [&_p]:text-neutral-700">
        <HeroBlock {...home.hero} />
        <TrustBlock {...home.trust} />
        <ProblemsBlock {...home.problems} />
        <TreatmentsBlock {...home.treatments} />
        <ProcessBlock {...home.process} />
        <ResultsBlock {...home.results} />
        <TeamBlock {...home.team} />
        <ContactBlock {...home.contact} />
      </div>
    </>
  );
}
