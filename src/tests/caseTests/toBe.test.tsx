import { expect, describe, test } from "vitest";

const sum = (a: number, b: number) => a + b;

describe("toBe test", () => {
  const a = 1;
  const b = 2;
  test("1+2は3になる", () => {
    expect(sum(a, b)).toBe(3);
  });
});
