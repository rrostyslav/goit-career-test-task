import LogoSvg from "@/assets/icons/logo.svg?react";

export const icons = {
  logo: LogoSvg,
} as const;

export type TIconName = keyof typeof icons;
