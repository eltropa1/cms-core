import Link from "next/link";
import { siteConfig } from "@/config/site.config";

import ApproachBlock from "@/components/sections/home/ApproachBlock";
import EmotionalStatesBlock from "@/components/sections/home/EmotionalStatesBlock";
import { HeroBlock } from "@/components/sections/home/HeroBlock";
import TherapyProcessBlock from "@/components/sections/home/TherapyProcessBlock";
import SafeSpaceBlock from "@/components/sections/home/SafeSpaceBlock";
import ReflectionsBlock from "@/components/sections/home/ReflectionsBlock";
import TherapistBlock from "@/components/sections/home/TherapistBlock";
import TherapyContactBlock from "@/components/sections/home/TherapyContactBlock";

export default function DemoPsychologyPage() {
  const home = siteConfig.demo?.psychology?.home;

  if (!home) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 border-b border-[#DED6CD] bg-[#F7F1EA]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-[#766B60] sm:px-6 lg:px-8">
          <span>DEMO — Psicología</span>
          <Link className="font-medium text-[#51483F] hover:text-[#3F382F] hover:underline" href="/">
            Volver a mi web
          </Link>
        </div>
      </div>
      <div className="psychology-demo min-h-screen bg-[#E8DFD2] pt-3 text-neutral-900 [&_a]:text-[#6F7C6B] [&_a:hover]:text-[#55624F] [&_h1]:text-neutral-900 [&_h2]:text-neutral-900 [&_h3]:text-neutral-950 [&_p]:text-neutral-700">
        <HeroBlock {...home.hero} />
        <ApproachBlock />
        <EmotionalStatesBlock />
        <TherapyProcessBlock />
        <SafeSpaceBlock />
        <ReflectionsBlock />
        <TherapistBlock />
        <TherapyContactBlock />
      </div>
      <style>{`
        .psychology-demo > section {
          padding-top: 3.75rem;
          padding-bottom: 3.75rem;
        }

        .psychology-demo > section:first-child {
          padding-top: 2rem;
          padding-bottom: 3.5rem;
        }

        .psychology-demo > section:last-child {
          padding-top: 3.5rem;
        }

        .psychology-demo > section:first-child .min-h-\\[860px\\] {
          min-height: 720px;
        }

        .psychology-demo > section:first-child .max-w-\\[560px\\] {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
        }

        .psychology-demo > section:first-child .mb-7 {
          margin-bottom: 1rem;
        }

        .psychology-demo > section:first-child h1 {
          max-width: 13.75ch;
        }

        .psychology-demo > section:first-child h1 + p {
          margin-top: 1.75rem;
        }

        .psychology-demo > section:first-child ul {
          margin-top: 2rem;
          row-gap: 0.75rem;
        }

        .psychology-demo > section:first-child ul + div {
          margin-top: 2rem;
        }

        .psychology-demo .mb-20 {
          margin-bottom: 3rem;
        }

        .psychology-demo .mb-12 {
          margin-bottom: 2rem;
        }

        .psychology-demo .gap-20 {
          gap: 3.5rem;
        }

        .psychology-demo .gap-12 {
          gap: 2.25rem;
        }

        .psychology-demo .py-12 {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        .psychology-demo .shadow-\\[0_34px_90px_rgba\\(15\\,23\\,42\\,0\\.16\\)\\] {
          box-shadow: 0 24px 72px rgba(74, 63, 51, 0.14);
        }

        .psychology-demo .bg-white,
        .psychology-demo [class*="bg-[#fff"],
        .psychology-demo [class*="bg-[#fcff"] {
          background-color: #fbf6ee;
        }

        @media (min-width: 768px) {
          .psychology-demo > section {
            padding-top: 4.5rem;
            padding-bottom: 4.5rem;
          }

          .psychology-demo > section:first-child {
            padding-top: 2.5rem;
            padding-bottom: 4rem;
          }
        }

        @media (min-width: 1024px) {
          .psychology-demo > section {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }

          .psychology-demo > section:first-child {
            padding-top: 2.75rem;
            padding-bottom: 4.25rem;
          }

          .psychology-demo > section:first-child .min-h-\\[860px\\] {
            min-height: 760px;
          }

          .psychology-demo > section:first-child h1 {
            font-size: 4rem;
            line-height: 1.02;
          }

          .psychology-demo > section:first-child p.text-\\[18px\\] {
            font-size: 1rem;
            line-height: 1.75rem;
          }
        }
      `}</style>
    </>
  );
}
