"use client";

/**
 * Header component
 *
 * Displays the top navigation bar of the site,
 * including the logo and main navigation.
 *
 * Hidden on demo routes.
 */

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

  if (pathname.startsWith("/demos")) {
    return null;
  }

  return (
    <header className="relative w-full z-50 bg-neutral-950 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">

      
  {/* CAPA DE PROTECCIÓN VISUAL */}
  
  <Container>
    <div className="relative flex items-center justify-between h-20">
      
      {/* Logo / Site Name */}
      <div>
        <Link
          href="/"
          className="text-lg font-semibold text-white"
        >
          {siteName}
        </Link>
      </div>

      {/* Navigation */}
      <Navigation links={navigation} />
    </div>
  </Container>

  
</header>
  );
}
