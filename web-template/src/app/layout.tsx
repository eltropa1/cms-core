/**
 * Root Layout
 *
 * Defines the global structure of the application.
 * All pages will be rendered inside this layout.
 */

import "@/styles/globals.css";
import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { siteConfig } from "@/config/site.config";
import { buildNavigation } from "@/lib/buildNavigation";

const navigation = buildNavigation(siteConfig);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.site.url),

  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },

  description: siteConfig.seo.defaultDescription,

  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.site.url,
    siteName: siteConfig.site.name,
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">

        <Header
          siteName={siteConfig.site.name}
          navigation={navigation}
        />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}