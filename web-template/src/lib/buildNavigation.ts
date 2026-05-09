/**
 * Navigation builder
 * -------------------------------------------------------
 * Builds navigation links from SiteConfig.
 * Pure function: no side effects, no direct dependency
 * on the config instance.
 */

import type { NavigationItem } from "@/types/navigation";
import type { SiteConfig } from "@/config/site.config";

export function buildNavigation(
  config: SiteConfig
): NavigationItem[] {
  const links: NavigationItem[] = [];

  // Home (structural)
  links.push({
    label: config.navigation.labels.home,
    href: "/",
  });

  // About (structural)
  links.push({
    label: config.navigation.labels.about,
    href: "/about",
  });

  // Services (module-driven)
  if (config.modules.services) {
    links.push({
      label: config.navigation.labels.services,
      href: "/services",
    });
  }

  // Blog (module-driven)
  if (config.modules.blog) {
    links.push({
      label: config.navigation.labels.blog,
      href: "/posts",
    });
  }

  // Contact (structural)
  links.push({
    label: config.navigation.labels.contact,
    href: "/contact",
  });

  return links;
}