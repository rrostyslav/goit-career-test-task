import { icons, type TIconName } from "@/components/Icon/icons.ts";

type TIconProps = {
  name: TIconName;
};

export const Icon = ({ name }: TIconProps) => {
  const Component = icons[name];

  return <Component />;
};
