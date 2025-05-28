import { expect, describe, test } from "vitest";

const getUserData = async () => {
  try {
    throw new Error("エラーが発生しました");
  } catch {
    return null;
  }
};

describe("toBeFalsy test", () => {
  test("getUserDataはnullを返す", async () => {
    const result = await getUserData();
    expect(result).toBeFalsy();
  });
  const data = {
    name: "test",
    nickname: null,
    array: [1, 2],
    isDisabled: true,
  };
  test("NicknameはFalsyである", async () => {
    expect(data.nickname).toBeFalsy();
  });
});
