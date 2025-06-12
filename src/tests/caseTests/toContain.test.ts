import { expect, describe, test } from "vitest";

function transformUserData(users: { email: string; active: boolean }[]) {
  return users.filter((user) => user.active).map((user) => user.email);
}
const users = [
  { email: "john@test.com", active: true },
  { email: "jane@test.com", active: true },
  { email: "bob@test.com", active: false },
];
describe("toContainTest test", () => {
  const emails = transformUserData(users);
  test("notActive user is filterd out", async () => {
    expect(emails).not.toContain("jbob@test.com");
  });
});
