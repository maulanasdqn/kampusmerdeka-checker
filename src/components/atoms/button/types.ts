import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "lg" | "md" | "sm";
  variant:
    | "primary"
    | "primary-outline"
    | "error"
    | "error-outline"
    | "warning"
    | "warning-outline";
  loading?: boolean;
  href?: string;
}
