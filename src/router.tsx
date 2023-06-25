import { createBrowserRouter } from "react-router-dom";
import { AuthWraper } from "@/layouts";
import { DocsPage, LoginPage } from "@/pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthWraper />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/docs",
    element: <DocsPage />,
  },
]);
