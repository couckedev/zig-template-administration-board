import { cva } from "class-variance-authority";

export const COMBOBOX_CONTENT = cva("p-0 bg-white", {
  variants: {
    size: {
      small: "w-[--radix-popover-trigger-width]",
      regular: "w-[--radix-popover-trigger-width]",
      medium: "w-[--radix-popover-trigger-width]",
      large: "w-[--radix-popover-trigger-width]",
    },
    fixedWidth: {
      true: "",
      false: "",
    },
  },
  defaultVariants: { size: "regular", fixedWidth: false },
})