import type { TColor } from "@/types/theme.ts";

export const getColorVar = (color: TColor) => `var(--color-${color})`;
