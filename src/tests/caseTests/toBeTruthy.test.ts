import { expect, describe, test } from "vitest";

describe("toBeTruthy test", () => {
  const data = {
    name: "test",
    nickname: null,
    array: [1, 2],
    isDisabled: true,
  };

  test("Nameが存在する", () => {
    expect(data.name).toBeTruthy();
  });

  test("Arrayが存在する", () => {
    expect(data.array.length).toBeTruthy();
  });

  test("isDisabledがtrue", () => {
    expect(data.isDisabled).toBeTruthy();
  });
});
