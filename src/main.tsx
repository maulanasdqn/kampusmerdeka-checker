import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
