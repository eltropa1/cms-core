import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { FastifyInstance } from "fastify";

import { createServer } from "../../src/adapters/http/server/createServer.js";
import { closePool } from "../../src/infrastructure/db/connection.js";

let server: FastifyInstance;

describe("Post API", () => {
  beforeAll(async () => {
    server = await createServer();
  });

  afterAll(async () => {
    await closePool();
  });

  it("GET /posts should return list of posts", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/posts",
    });

    expect(response.statusCode).toBe(200);

    const body = JSON.parse(response.body);

    expect(Array.isArray(body)).toBe(true);
  });
});