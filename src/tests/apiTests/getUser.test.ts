import { expect, describe, test } from "vitest";
import { userSchema } from "../../schemas/user.schema";
import { getUser } from "../../api/getUser";

describe("user Api test", () => {
  test("userId 22 name is Yamada", async () => {
    const user = await getUser(22);
    expect(user.name).toBe("Yamada");
  });
  test("fetched type of user is same as Front ", async () => {
    const user = await getUser(22);
    expect(() => userSchema.parse(user)).not.toThrow();
  });
  test("id 33 is not found test", async () => {
    const user = getUser(33);
    await expect(user).rejects.toThrow();
  });
  test("user age 22 is 30", async () => {
    const user = await getUser(22);
    expect(user.age).toBe(30);
  });
});
