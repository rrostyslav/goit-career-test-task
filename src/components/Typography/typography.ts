export const typography = {
  h1: "font-semibold text-[48px] leading-[32px] tracking-normal not-italic",
  h2: "font-semibold text-[24px] leading-[32px] tracking-normal not-italic",
  button:
    "font-medium text-[16px] leading-[24px] tracking-[-0.005em] not-italic align-middle",
  body2:
    "font-medium text-[16px] leading-[24px] tracking-normal text-center not-italic",
} as const;

export type TTypographyName = keyof typeof typography;
