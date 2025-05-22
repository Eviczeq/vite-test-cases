import { expect, describe, test } from "vitest";

const sum = (a: number, b: number) => a + b;

describe("toBe test", () => {
  test("1+2は3になる", () => {
    const a = 1;
    const b = 2;
    expect(sum(a, b)).toBe(3);
  });
});
