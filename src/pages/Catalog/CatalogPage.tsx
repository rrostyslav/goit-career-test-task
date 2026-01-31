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
  const { data, isLoading, isFetching } = useGetCampersQuery();
  const isPending = isLoading || isFetching;

  return (
    <div className="flex justify-center">
      {isPending ? (
        <div className="flex items-center gap-x-3 py-10 text-[16px] font-medium text-[var(--color-text)]">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-4 border-[var(--color-badges)] border-t-[var(--color-button)] animate-spin" />
          Loading catalog...
        </div>
      ) : (
        <TruckList campers={data?.items ?? []} />
      )}
    </div>
  );
};
