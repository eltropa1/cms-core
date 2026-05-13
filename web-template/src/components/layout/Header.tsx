"use client";

/**
 * Header component
 *
 * Displays the top navigation bar of the site,
 * including the logo and main navigation.
 *
 * Hidden on demo routes.
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Navigation from "./Navigation";

import type { NavigationItem } from "@/types/navigation";

type HeaderProps = {
  siteName: string;
  navigation: NavigationItem[];
};

export default function Header({
  siteName,
  navigation,
}: HeaderProps) {
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const atTop = currentScrollY < 18;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      const delta = Math.abs(currentScrollY - lastScrollY.current);

      setIsAtTop(atTop);
      setShowBackTop(currentScrollY > 560);

      if (atTop) {
        setIsHidden(false);
      } else if (delta > 8) {
        setIsHidden(isScrollingDown && currentScrollY > 120);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateHeader);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateHeader();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleBackTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (pathname.startsWith("/demos")) {
    return null;
  }

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50 w-full
          transition-[transform,opacity,background-color,border-color,box-shadow,backdrop-filter]
          duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isHidden ? "-translate-y-5 opacity-0" : "translate-y-0 opacity-100"}
          ${
            isAtTop
              ? "border-transparent bg-neutral-950/[0.02] shadow-none backdrop-blur-0"
              : "border-transparent bg-neutral-950/[0.08] shadow-none backdrop-blur-[6px]"
          }
        `}
      >
        <Container>
          <div className="relative flex h-16 items-center justify-between md:h-[76px]">
            <Link
              href="/"
              className="
                text-[15px] font-medium tracking-[0.08em] text-white/92
                transition-colors duration-500 hover:text-amber-300
                md:text-base
              "
            >
              {siteName}
            </Link>

            <Navigation links={navigation} siteName={siteName} />
          </div>
        </Container>
      </header>

      <button
        type="button"
        onClick={handleBackTop}
        className={`
          fixed bottom-5 right-5 z-40
          inline-flex h-10 w-10 items-center justify-center
          rounded-[14px] border border-white/[0.09] bg-neutral-950/55 text-white/80
          shadow-[0_18px_45px_rgba(0,0,0,0.32)]
          backdrop-blur-md
          transition-[opacity,transform,border-color,color,background-color]
          duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:border-amber-300/30 hover:bg-neutral-900/70 hover:text-amber-200
          md:bottom-7 md:right-7
          ${showBackTop ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 pointer-events-none"}
        `}
        aria-label="Volver arriba"
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M12 19V5" />
          <path d="M6 11l6-6 6 6" />
        </svg>
      </button>
    </>
  );
}
