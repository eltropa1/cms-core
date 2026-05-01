/**
 * Puerto de invalidación de cache
 *
 * Define la intención de invalidar cache del sistema externo
 * (Next.js u otro).
 */
export interface CacheInvalidationService {
  invalidatePosts(): Promise<void>;
}