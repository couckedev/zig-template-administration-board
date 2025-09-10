import type { ButtonSize } from "./button-size.type";
import type { ButtonVariant } from "./button-variant.type";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  isActive?: boolean
}