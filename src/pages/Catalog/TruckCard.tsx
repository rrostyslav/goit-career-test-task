import { TFeatures, TruckFeatures } from "@/pages/Catalog/TruckFeatures";
import { Typography } from "@/components/Typography";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";

type TruckCardProps = {
  name: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string | undefined;
  description: string | undefined;
  features: TFeatures;
};

export const TruckCard = ({
  name,
  price,
  rating,
  reviewsCount,
  image,
  features,
  description,
}: TruckCardProps) => {
  return (
    <div className="flex p-[24px] gap-x-[24px] w-[888px] border border-solid border-gray-light rounded-[20px]">
      <div className="w-[292px] h-[320px] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt="Truck"
            className="w-full h-full object-cover object-center"
          />
        ) : // todo add image placeholder
        null}
      </div>

      <div className="flex flex-col flex-1 gap-y-6">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <Typography name="h2" color="main">
              {name}
            </Typography>
            <div className="flex gap-x-[12px] items-center">
              <Typography name="h2" color="main">
                €{price}
              </Typography>
              <Icon name="favourite" size="24x24" />
            </div>
          </div>

          <div className="flex gap-x-4">
            <div className="flex gap-x-1 items-center">
              <Icon name="rating" />
              <Typography name="body" color="main">
                {rating}({reviewsCount} Reviews)
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
          {description}
        </Typography>

        <TruckFeatures features={features} />

        <Button>Show more</Button>
      </div>
    </div>
  );
};
