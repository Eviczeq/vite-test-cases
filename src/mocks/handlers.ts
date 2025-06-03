// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";

const data = [
  {
    id: 11,
    name: "Tanaka",
    age: 30,
    hobby: "soccer",
  },
  {
    id: 22,
    name: "Yamada",
    age: 30,
    hobby: "soccer",
  },
];

export const handlers = [
  http.get("/users", () => {
    return HttpResponse.json(data);
  }),

  http.get("/user/:id", ({ params }) => {
    const userId = Number(params.id);
    const target = data.find((v) => v.id === userId);

    if (!target) {
      return HttpResponse.json({ message: "not found" }, { status: 404 });
    }

    return HttpResponse.json(target, { status: 200 });
  }),
  http.put("/user/:id", async ({ params, request }) => {
    const userId = Number(params.id);
    const targetIndex = data.findIndex((v) => v.id === userId);

    if (targetIndex === -1) {
      return HttpResponse.json({ message: "not found" }, { status: 404 });
    }

    const body = (await request.json()) as Record<string, unknown>;
    const updatedUser = { ...data[targetIndex], ...body };
    data[targetIndex] = updatedUser;

    return HttpResponse.json(updatedUser, { status: 200 });
  }),
];
