import { cva } from "class-variance-authority";

export const COMBOBOX_INPUT = cva("", {
  variants: {
    size: {
      small: "h-7 text-xs",
      regular: "h-9 text-sm",
      medium: "h-10 text-base",
      large: "h-11 text-base",
    },
  },
  defaultVariants: { size: "regular" },
})

