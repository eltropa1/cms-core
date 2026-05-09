/**
 * Post API Contract (frontend)
 * -------------------------------------------------------
 * Representa el post tal como lo devuelve la API.
 * Solo incluye lo necesario para render.
 */

import type { ContentResponse } from "./content";

export type PostResponse = {
  id: string;
  title: string;
  slug: string;

  // ✅ NUEVO (alineado con backend)
  description: string;

  content: ContentResponse;

  publicationState: "draft" | "published" | "archived" | "deleted";
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  categoryIds: string[];
};

export type PostListItem = {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  description: string;
};