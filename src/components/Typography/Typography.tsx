import type { CSSProperties, JSX } from "react";
import {
  type TTypographyName,
  typography,
} from "@/components/Typography/typography.ts";
import type { TColor } from "@/types/theme.ts";
import clsx from "clsx";
import { getColorVar } from "@/utils/getColorVar.ts";

type TTypographyProps = {
  name: TTypographyName;
  color: TColor;
  as?: keyof JSX.IntrinsicElements;
  children: string;
};

export const Typography = ({
  name,
  color,
  as: Component = "span",
  children,
}: TTypographyProps) => {
  const typographyClassname = typography[name];

  return (
    <Component
      className={clsx(typographyClassname, "text-(--color)")}
      style={
        {
          "--color": getColorVar(color),
        } as CSSProperties
      }
    >
      {children}
    </Component>
  );
};
