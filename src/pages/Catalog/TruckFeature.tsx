import { TIconName } from "@/components/Icon/icons";
import { Icon } from "@/components/Icon";
import { Typography } from "@/components/Typography";

const createTruckFeature =
  ({ icon, label }: { icon: TIconName; label: string }) =>
  () => {
    return (
      <div className="flex px-[18px] py-[12px] rounded-[100px] w-fit h-[48px] bg-badges items-center gap-x-1">
        <Icon name={icon} className="w-[20px]" />
        <Typography name="body2" color="main">
          {label}
        </Typography>
      </div>
    );
  };

export const AutomaticFeature = createTruckFeature({
  icon: "automatic",
  label: "Automatic",
});

export const PetrolFeature = createTruckFeature({
  icon: "fuel",
  label: "Petrol",
});

export const KitchenFeature = createTruckFeature({
  icon: "cupHot",
  label: "Kitchen",
});

export const ACFeature = createTruckFeature({
  icon: "wind",
  label: "AC",
});
