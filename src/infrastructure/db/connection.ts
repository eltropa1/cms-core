import { Pool } from "pg";

/**
 * Singleton Pool instance.
 * 
 * We intentionally keep a single Pool per process.
 * This is the recommended pattern for node-postgres.
 */
let pool: Pool | null = null;

/**
 * Creates a new Pool instance based on environment configuration.
 *
 * Priority:
 * 1. process.env.DATABASE_URL
 * 2. Fallback local development configuration
 *
 * This allows:
 * - Production environments to inject DATABASE_URL
 * - Local development without dotenv
 * - Test environments to override DB cleanly
 */
function createPool(): Pool {
  if (process.env.DATABASE_URL) {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }

  // Fallback for local development
  return new Pool({
    host: "localhost",
    port: 5433,
    user: "cms",
    password: "cms",
    database: "cms_core",
  });
}

/**
 * Returns a singleton Pool instance.
 *
 * Ensures:
 * - No multiple pools created accidentally
 * - Shared connections across repositories
 */
export function getPool(): Pool {
  if (!pool) {
    pool = createPool();
  }

  return pool;
}

/**
 * Closes the pool gracefully.
 *
 * Used in:
 * - Test teardown
 * - Process shutdown
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}