import { DocsModuleLoading } from "@/modules";
import { FC, ReactElement, Suspense } from "react";
import { lazily } from "react-lazily";

const { DocsModule } = lazily(() => import("@/modules"));

export const DocsPage: FC = (): ReactElement => {
  return (
    <Suspense fallback={<DocsModuleLoading />}>
      <DocsModule />
    </Suspense>
  );
};
