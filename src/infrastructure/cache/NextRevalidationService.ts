import { CacheInvalidationService } from "../../application/ports/CacheInvalidationService.js";

export class NextRevalidationService implements CacheInvalidationService {
  async invalidatePosts(): Promise<void> {
    const FRONTEND_URL = process.env.FRONTEND_URL;

    await fetch(`${FRONTEND_URL}/api/revalidate`, {
      method: "POST",
    });
  }
}
