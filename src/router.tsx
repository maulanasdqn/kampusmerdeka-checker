import { lazily } from "react-lazily";
import { createBrowserRouter } from "react-router-dom";

const { HomePage } = lazily(() => import("@/pages"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
