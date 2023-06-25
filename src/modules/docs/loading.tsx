import { LoadingSpinner } from "@/components";
import { FC, ReactElement } from "react";

export const DocsModuleLoading: FC = (): ReactElement => {
  return (
    <main className="flex items-center justify-center w-full bg-gray-100 h-screen">
      <LoadingSpinner />
    </main>
  );
};
