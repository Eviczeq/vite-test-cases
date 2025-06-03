import { expect, describe, test } from "vitest";

import { updateUser } from "../../api/updateUser";

describe("updateUser Api test", () => {
  test("update User 22 age to be 31", async () => {
    const user = await updateUser(22, {
      name: "Yamada",
      age: 31,
      hobby: "baseball",
    });
    expect(user.age).toBe(31);
  });
});
