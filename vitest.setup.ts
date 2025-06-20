import "@testing-library/jest-dom";

import { beforeAll, afterEach, afterAll, vi } from "vitest";
import { server } from "./src/msw/server";

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  vi.resetAllMocks();
});

afterAll(() => server.close());
