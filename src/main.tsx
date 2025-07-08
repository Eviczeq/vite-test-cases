import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Register from "./pages/register/index.tsx";

const enableMocking = async () => {
  const { worker } = await import("./msw/browser.ts");
  return worker.start();
};
enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Register />
    </StrictMode>
  );
});
