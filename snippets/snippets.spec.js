import { describe, test, expect } from "vitest";
import snippets from "./snippets.json";

describe("Playwright Snippets", () => {
  for (const [name, snippet] of Object.entries(snippets)) {
    describe("snippet: " + name, () => {
      test("has a prefix", () => {
        const { prefix } = snippet;

        expect(prefix).toBeDefined();
        expect(prefix.length).toBeGreaterThan(0);
        expect(prefix.startsWith("pw-")).toBe(true);
      });

      test("has body", () => {
        const { body } = snippet;

        expect(body).toBeDefined();
        expect(body.length).toBeGreaterThan(0);
      });
    });
  }
});
