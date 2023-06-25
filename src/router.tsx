import { createBrowserRouter } from "react-router-dom";
import { AuthWraper } from "@/layouts";
import { HomePage, LoginPage } from "@/pages";

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
    path: "/me",
    element: <HomePage />,
  },
]);
