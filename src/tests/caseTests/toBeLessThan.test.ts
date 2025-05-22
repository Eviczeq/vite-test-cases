import { expect, describe, test } from "vitest";

describe("toBeLessThan test", () => {
  test("5は10より小さい", () => {
    const data1 = 5;
    const data2 = 10;
    expect(data1).toBeLessThan(data2);
  });
});
