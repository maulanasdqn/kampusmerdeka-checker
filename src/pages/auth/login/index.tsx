import { LoginModuleSkeleton } from "@/modules";
import { FC, ReactElement, Suspense } from "react";
import { lazily } from "react-lazily";

const { LoginModule } = lazily(() => import("@/modules"));

export const LoginPage: FC = (): ReactElement => {
  return (
    <Suspense fallback={<LoginModuleSkeleton />}>
      <LoginModule />
    </Suspense>
  );
};
