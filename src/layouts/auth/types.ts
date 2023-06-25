import { FormEventHandler, ReactNode } from "react";

export type TAuthLayoutProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  title: string;
  subTitle: string;
  errorMessage?: string;
  children: ReactNode;
};
