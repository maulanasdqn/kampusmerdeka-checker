import { NonAuthenticated } from "@/middlewares";
import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

export const AuthWraper: FC = (): ReactElement => {
  return (
    <section className="flex items-center bg-gradient-to-l from-slate-300 via-sky-500 to-blue-300 justify-center h-screen w-full px-6">
      <NonAuthenticated>
        <Outlet />
      </NonAuthenticated>
    </section>
  );
};
