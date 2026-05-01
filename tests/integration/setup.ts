import { beforeAll, afterAll } from "vitest";
import { getPool, closePool } from "../../src/infrastructure/db/connection.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * Resolves project root in ESM environment.
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Absolute path to migration file.
 */
const migrationPath = path.resolve(
  __dirname,
  "../../database/migrations/001_init.sql"
);

/**
 * Runs before entire integration suite.
 *
 * - Drops schema
 * - Recreates schema
 * - Executes initial migration
 */
beforeAll(async () => {
  const pool = getPool();
  const client = await pool.connect();

  try {
    // Reset schema completely
    await client.query(`DROP SCHEMA public CASCADE;`);
    await client.query(`CREATE SCHEMA public;`);

    // Read migration SQL
    const migrationSql = fs.readFileSync(migrationPath, "utf-8");

    // Execute migration
    await client.query(migrationSql);
  } finally {
    client.release();
  }
});

/**
 * Gracefully closes DB pool after suite ends.
 */
afterAll(async () => {
  await closePool();
});