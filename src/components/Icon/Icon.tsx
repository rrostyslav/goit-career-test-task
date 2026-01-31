import { icons, type TIconName } from "@/components/Icon/icons.ts";
import clsx from "clsx";

export type TIconProps = {
  name: TIconName;
  size?: "24x24";
  className?: string;
};

export const Icon = ({ name, size, className }: TIconProps) => {
  const Component = icons[name];

  return (
    <Component
      className={clsx(className, {
        "size-[24px]": size === "24x24",
      })}
    />
  );
};
