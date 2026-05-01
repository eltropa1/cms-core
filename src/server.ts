import { createServer } from "./adapters/http/server/createServer.js";

/**
 * Bootstraps the CMS Core HTTP API.
 */
async function start(): Promise<void> {
  const server = await createServer();
  const port = 4000;

  try {
    await server.listen({
      port,
      host: "0.0.0.0",
    });

    console.log(`CMS API running on port ${port}`);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

start();