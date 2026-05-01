import { getPool } from "../../src/infrastructure/db/connection.js";

export async function truncateAllTables(): Promise<void> {
  const pool = getPool();
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    await client.query(`
      TRUNCATE TABLE
        post_categories,
        posts,
        categories
      RESTART IDENTITY CASCADE
    `);

    await client.query("COMMIT");

  } catch (err) {
    await client.query("ROLLBACK");
    throw err;

  } finally {
    client.release();
  }
}