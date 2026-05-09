/**
 * Footer component
 *
 * Displays the bottom section of the site,
 * including basic information and links.
 */

import Container from "./Container";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 mt-24 border-t border-white/10">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between py-10 gap-6 text-sm text-neutral-500">
          
          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} {siteConfig.site.name}. Todos los derechos reservados.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <Link
              href="/privacidad"
              className="hover:text-amber-400 transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/aviso-legal"
              className="hover:text-amber-400 transition-colors"
            >
              Aviso legal
            </Link>
            <Link
              href="/cookies"
              className="hover:text-amber-400 transition-colors"
            >
              Cookies
            </Link>
          </div>

        </div>
      </Container>
    </footer>
  );
}
