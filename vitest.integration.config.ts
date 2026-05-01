import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["./tests/integration/setup.ts"],

    fileParallelism: false,

    sequence: {
      concurrent: false,
    },

    maxWorkers: 1,
  },
});