import LogoSvg from "@/assets/icons/logo.svg?react";
import FavouriteSvg from "@/assets/icons/favourite.svg?react";
import RatingSvg from "@/assets/icons/rating.svg?react";
import MapSvg from "@/assets/icons/map.svg?react";
import AutomaticSvg from "@/assets/icons/automatic.svg?react";
import FuelSvg from "@/assets/icons/fuel.svg?react";
import CupHotSvg from "@/assets/icons/cup-hot.svg?react";
import WindSvg from "@/assets/icons/wind.svg?react";

export const icons = {
  logo: LogoSvg,
  favourite: FavouriteSvg,
  rating: RatingSvg,
  map: MapSvg,
  automatic: AutomaticSvg,
  fuel: FuelSvg,
  cupHot: CupHotSvg,
  wind: WindSvg,
} as const;

export type TIconName = keyof typeof icons;
