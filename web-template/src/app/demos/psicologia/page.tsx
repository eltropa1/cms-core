import Link from "next/link";
import { siteConfig } from "@/config/site.config";

import ApproachBlock from "@/components/sections/home/ApproachBlock";
import { HeroBlock } from "@/components/sections/home/HeroBlock";
import TherapyProcessBlock from "@/components/sections/home/TherapyProcessBlock";
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
        <TherapyProcessBlock />
        <TherapistBlock />
        <TherapyContactBlock />
      </div>
      <style>{`
        body:has(.psychology-demo) {
          background: #e8dfd2;
        }

        .psychology-demo > section {
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
        }

        .psychology-demo > section:nth-child(1) {
          background: #e8dfd2;
        }

        .psychology-demo > section:nth-child(2),
        .psychology-demo > section:nth-child(4) {
          background: #ece4d9;
        }

        .psychology-demo > section:nth-child(3),
        .psychology-demo > section:nth-child(5) {
          background: #f2ebe2;
        }

        .psychology-demo > section:first-child {
          padding-top: 1.25rem;
          padding-bottom: 2rem;
        }

        .psychology-demo > section:last-child {
          padding-top: 2.5rem;
        }

        .psychology-demo > section:first-child .min-h-\\[860px\\] {
          min-height: 600px;
          gap: 2rem;
        }

        .psychology-demo > section:first-child .max-w-\\[560px\\] {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }

        .psychology-demo > section:first-child .mb-7 {
          margin-bottom: 0.875rem;
        }

        .psychology-demo > section:first-child h1 {
          max-width: 13.75ch;
          font-size: clamp(2.5rem, 10vw, 3.35rem);
        }

        .psychology-demo > section:first-child h1 + p {
          margin-top: 1.25rem;
        }

        .psychology-demo > section:first-child ul {
          margin-top: 1.5rem;
          row-gap: 0.625rem;
        }

        .psychology-demo > section:first-child ul + div {
          margin-top: 1.5rem;
        }

        .psychology-demo > section:first-child .h-\\[420px\\] {
          height: 360px;
        }

        .psychology-demo .mb-20 {
          margin-bottom: 2.25rem;
        }

        .psychology-demo .mb-12 {
          margin-bottom: 1.5rem;
        }

        .psychology-demo .gap-20 {
          gap: 2.5rem;
        }

        .psychology-demo .gap-12 {
          gap: 1.75rem;
        }

        .psychology-demo .py-12 {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
        }

        .psychology-demo .shadow-\\[0_34px_90px_rgba\\(15\\,23\\,42\\,0\\.16\\)\\] {
          box-shadow: 0 18px 54px rgba(74, 63, 51, 0.11);
        }

        .psychology-demo .bg-white,
        .psychology-demo [class*="bg-[#fff"],
        .psychology-demo [class*="bg-[#fcff"] {
          background-color: #fbf6ee;
        }

        .psychology-demo [class*="border-[#BFAF9E"] {
          border-color: rgba(191, 175, 158, 0.24);
        }

        .psychology-demo > section:nth-child(2) [class*="border-y"],
        .psychology-demo > section:nth-child(3) [class*="border-y"],
        .psychology-demo > section:nth-child(4) [class*="border-y"] {
          border-bottom-color: transparent;
        }

        .psychology-demo > section:nth-child(2) article[class*="border-t"],
        .psychology-demo > section:nth-child(3) article[class*="border-t"] {
          border-color: rgba(191, 175, 158, 0.18);
        }

        .psychology-demo > section:nth-child(3) article:first-child {
          border-top-color: rgba(191, 175, 158, 0.24);
        }

        .psychology-demo > section:nth-child(3) article:last-child {
          border-bottom-color: transparent;
        }

        .psychology-demo > section:nth-child(5) form {
          background: rgba(251, 246, 238, 0.58);
          border: 1px solid rgba(191, 175, 158, 0.18);
          padding: 1.25rem;
        }

        .psychology-demo > section:nth-child(5) input,
        .psychology-demo > section:nth-child(5) textarea {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          border-color: rgba(191, 175, 158, 0.36);
        }

        .psychology-demo > section:nth-child(5) textarea {
          min-height: 7rem;
        }

        body:has(.psychology-demo) footer {
          margin-top: 0;
          background: #211c18;
          border-top-color: rgba(232, 223, 210, 0.14);
        }

        body:has(.psychology-demo) footer > div > div {
          color: #b9aa9a;
        }

        body:has(.psychology-demo) footer a {
          color: #c8b8a6;
        }

        body:has(.psychology-demo) footer a:hover {
          color: #efe3d4;
        }

        @media (min-width: 768px) {
          .psychology-demo > section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .psychology-demo > section:first-child {
            padding-top: 1.75rem;
            padding-bottom: 2.5rem;
          }

          .psychology-demo > section:first-child .h-\\[420px\\] {
            height: 440px;
          }

          .psychology-demo > section:nth-child(5) form {
            padding: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .psychology-demo > section {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }

          .psychology-demo > section:first-child {
            padding-top: 1.75rem;
            padding-bottom: 2.75rem;
          }

          .psychology-demo > section:first-child .min-h-\\[860px\\] {
            min-height: 620px;
          }

          .psychology-demo > section:first-child h1 {
            font-size: 3.55rem;
            line-height: 1.04;
          }

          .psychology-demo > section:first-child .lg\\:h-\\[720px\\] {
            height: 600px;
          }

          .psychology-demo > section:first-child .lg\\:gap-24 {
            gap: 3rem;
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
