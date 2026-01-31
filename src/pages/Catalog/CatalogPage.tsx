import TruckCardImage from "@/assets/images/truck-card.png";
import { Typography } from "@/components/Typography";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import type { TIconName } from "@/components/Icon/icons.ts";

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

const AutomaticFeature = createTruckFeature({
  icon: "automatic",
  label: "Automatic",
});

const PetrolFeature = createTruckFeature({
  icon: "fuel",
  label: "Petrol",
});

const KitchenFeature = createTruckFeature({
  icon: "cupHot",
  label: "Kitchen",
});

const ACFeature = createTruckFeature({
  icon: "wind",
  label: "AC",
});

type TruckFeaturesProps = {
  features: Partial<Record<"automatic" | "petrol" | "kitchen" | "ac", boolean>>;
};

const TruckFeatures = ({ features }: TruckFeaturesProps) => {
  return (
    <div className="flex-1 flex gap-2 flex-wrap">
      {features.automatic && <AutomaticFeature />}
      {features.petrol && <PetrolFeature />}
      {features.kitchen && <KitchenFeature />}
      {features.ac && <ACFeature />}
    </div>
  );
};

const TruckCard = () => {
  return (
    <div className="flex p-[24px] gap-x-[24px] w-[888px] border border-solid border-gray-light rounded-[20px]">
      <div className="w-[292px] h-[320px] overflow-hidden">
        <img
          src={TruckCardImage}
          alt="Truck"
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="flex flex-col flex-1 gap-y-6">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <Typography name="h2" color="main">
              Mavericks
            </Typography>
            <div className="flex gap-x-[12px] items-center">
              <Typography name="h2" color="main">
                €8000.00
              </Typography>
              <Icon name="favourite" size="24x24" />
            </div>
          </div>

          <div className="flex gap-x-4">
            <div className="flex gap-x-1 items-center">
              <Icon name="rating" />
              <Typography name="body" color="main">
                4.4(2 Reviews)
              </Typography>
            </div>

            <div className="flex gap-x-1 items-center">
              <Icon name="map" />
              <Typography name="body" color="main">
                Kyiv, Ukraine
              </Typography>
            </div>
          </div>
        </div>

        <Typography name="body" color="text">
          Embrace simplicity and freedom with the Mavericks panel truck...
        </Typography>

        <TruckFeatures
          features={{
            automatic: true,
            ac: true,
          }}
        />

        <Button>Show more</Button>
      </div>
    </div>
  );
};

export const CatalogPage = () => {
  return <TruckCard />;
};
