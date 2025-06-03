import { expect, describe, test } from "vitest";

import { getUsers } from "../../api/getUsers";

describe("getUsers Api test", () => {
  test("users exists", async () => {
    const users = await getUsers();
    expect(users).toBeTruthy();
  });
});
