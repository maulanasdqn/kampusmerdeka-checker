import TokenService from "@/services/token";
import { FC, PropsWithChildren, ReactElement } from "react";
import { useLocation, Navigate } from "react-router-dom";

export const NonAuthenticated: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const isAuthenticated = !!TokenService.getToken();
  const Location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/docs" state={{ from: Location }} replace />;
  } else {
    return <>{children}</>;
  }
};
