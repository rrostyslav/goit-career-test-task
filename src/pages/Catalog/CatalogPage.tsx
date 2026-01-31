import { Camper, useGetCampersQuery } from "@/redux/services/api.ts";
import { TruckCard } from "@/pages/Catalog/TruckCard.tsx";

type TruckListProps = {
  campers: Camper[];
};

const TruckList = ({ campers }: TruckListProps) => {
  return (
    <div className="flex flex-col gap-y-[32px]">
      {campers.map((truck) => (
        <TruckCard
          key={truck.name}
          name={truck.name}
          rating={truck.rating}
          price={truck.price}
          reviewsCount={truck.reviews.length}
          image={truck.gallery.at(0)?.thumb}
          description={truck.description}
          features={{
            automatic: truck.transmission === "automatic",
            petrol: truck.engine === "diesel",
            kitchen: truck.kitchen,
            ac: truck.AC,
          }}
        />
      ))}
    </div>
  );
};

export const CatalogPage = () => {
  const { data } = useGetCampersQuery();

  return (
    <div className="flex justify-center">
      <TruckList campers={data?.items ?? []} />
    </div>
  );
};
