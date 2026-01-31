import {
  ACFeature,
  AutomaticFeature,
  KitchenFeature,
  PetrolFeature,
} from "@/pages/Catalog/TruckFeature";

export type TFeatures = Partial<
  Record<"automatic" | "petrol" | "kitchen" | "ac", boolean>
>;

type TruckFeaturesProps = {
  features: TFeatures;
};

export const TruckFeatures = ({ features }: TruckFeaturesProps) => {
  return (
    <div className="flex-1 flex gap-2 flex-wrap">
      {features?.automatic && <AutomaticFeature />}
      {features?.petrol && <PetrolFeature />}
      {features?.kitchen && <KitchenFeature />}
      {features?.ac && <ACFeature />}
    </div>
  );
};
