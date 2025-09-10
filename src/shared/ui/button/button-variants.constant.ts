import { cva } from "class-variance-authority"

export const BUTTON_VARIANTS = cva(
  [
    "inline-flex items-center justify-center gap-2 font-semibold select-none",
    "rounded-[var(--radius,8px)] border",
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    "disabled:opacity-60 disabled:cursor-not-allowed",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-primary text-white border-primary",
          "hover:bg-primary-hover text-white hover:border-primary-hover",
          "disabled:bg-primary-disabled disabled:text-white disabled:border-primary-disabled",
        ].join(" "),
        secondary: [
          "bg-secondary text-zig-green border-secondary",
          "hover:bg-secondary-hover hover:text-white hover:border-secondary-hover",
          "disabled:bg-secondary-disabled disabled:zig-green-lightest disabled:border-secondary-disabled",
        ].join(" "),
        ghost: [
          "bg-white text-zig-dark-gray-dark border-ghost",
          "hover:bg-gray-100 hover:text-zig-green hover:border-ghost-hover",
          "disabled:bg-white disabled:text-zig-light-gray-dark disabled:border-ghost-disabled",
        ].join(" "),
        decline: [
          "bg-decline text-white border-decline",
          "hover:bg-decline-hover hover:text-white hover:border-decline-hover",
          "disabled:bg-decline-disabled disabled:text-zig-red-light disabled:border-decline-disabled",
        ].join(" "),
        info: [
          "bg-info text-white border-info",
          "hover:bg-info-hover text-white hover:border-info-hover",
          "disabled:info-disabled disabled:text-white disabled:border-info-disabled",
        ].join(" "),
      },
      size: {
        small: "h-[33px] px-3 text-[12px]",
        regular: "h-[43px] px-4 text-[16px]",
        medium: "h-[53px] px-5 text-[20px]",
        large: "h-[63px] px-6 text-[24px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "regular",
    },
  }
)

