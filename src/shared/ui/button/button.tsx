import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/shared/lib/utils"
import type { ButtonProps } from "./button-props.interface"
import { BUTTON_VARIANTS } from "./button-variants.constant"
import React from "react"

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "regular", asChild = false, ...props }, ref) => {
    if (asChild) {
      // Pas de ref ici: le Slot est polymorphe, on évite tout cast "any"
      return (
        <Slot className={cn(BUTTON_VARIANTS({ variant, size }), className)} {...props} />
      )
    }

    return (
      <button
        ref={ref}
        className={cn(BUTTON_VARIANTS({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"