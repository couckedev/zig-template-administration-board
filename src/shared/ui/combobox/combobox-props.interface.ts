import type { ButtonProps } from "@/shared/ui/button/button-props.interface";
import type { ButtonSize } from "@/shared/ui/button/button-size.type";
import type { ButtonVariant } from "@/shared/ui/button/button-variant.type";
import type { ComboboxEntry } from "./combobox-entry.interface";


export interface ComboboxProps {
  entries: ComboboxEntry[]
  placeholder?: string
  popoverSide?: "top" | "right" | "bottom" | "left"
  value?: string
  onChange?: (value: string) => void
  size?: ButtonSize
  variant?: ButtonVariant
  matchTriggerWidth?: boolean
  popoverClassName?: string
  inputClassName?: string
  buttonProps?: Omit<ButtonProps, "size" | "variant" | "children">
}