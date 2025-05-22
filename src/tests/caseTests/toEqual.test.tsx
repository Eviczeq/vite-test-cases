import { expect, describe, test } from "vitest";

describe("toEqual test", () => {
  const data = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
  ];
  const target = {
    name: "John",
    age: 30,
  };
  test("選択されたデータが期待値通りか", () => {
    expect(data[0]).toEqual(target);
  });
});
