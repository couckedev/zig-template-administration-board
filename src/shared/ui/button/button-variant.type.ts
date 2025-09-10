import type { VariantProps } from "class-variance-authority";
import type { BUTTON_VARIANTS } from "./button-variants.constant";

export type ButtonVariant = NonNullable<
  VariantProps<typeof BUTTON_VARIANTS>["variant"]
>;
