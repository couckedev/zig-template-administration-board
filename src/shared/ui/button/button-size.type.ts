import type { VariantProps } from "class-variance-authority";
import type { BUTTON_VARIANTS } from "./button-variants.constant";

export type ButtonSize = NonNullable<VariantProps<typeof BUTTON_VARIANTS>["size"]>