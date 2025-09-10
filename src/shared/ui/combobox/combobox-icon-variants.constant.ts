import { cva } from "class-variance-authority"

export const COMBOBOX_ICON = cva("", {
  variants: {
    size: {
      small: "h-3 w-3",
      regular: "h-4 w-4",
      medium: "h-5 w-5",
      large: "h-6 w-6",
    },
  },
  defaultVariants: { size: "regular" },
})
