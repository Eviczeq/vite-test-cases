import { expect, describe, test } from "vitest";

describe("toBeGreaterThan test", () => {
  test("10は5より大きい", () => {
    const data1 = 10;
    const data2 = 5;
    expect(data1).toBeGreaterThan(data2);
  });
});
