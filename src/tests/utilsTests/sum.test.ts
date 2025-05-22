import { expect, describe, test } from "vitest";
import { sum } from "../../utils/sum";

describe("sum test", () => {
  test("should return 3 when 1 and 2 are passed", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
