import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "lg" | "md" | "sm";
  variant: "";
  loading?: boolean;
  href?: string;
}
