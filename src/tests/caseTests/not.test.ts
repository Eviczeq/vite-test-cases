import { expect, describe, test } from "vitest";
const sum = (a: number, b: number) => a + b;

describe("not test", () => {
  test("1+2は5ではない", () => {
    const a = 1;
    const b = 2;
    expect(sum(a, b)).not.toBe(5);
  });
});
