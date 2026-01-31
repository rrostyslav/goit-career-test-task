import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/redux/services/axiosBaseQuery.ts";

type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  gallery: {
    thumb: string;
    original: string;
  }[];
  adults: number;
  children: number;
  engine: string;
  transmission: string;
  kitchen: boolean;
  AC: boolean;
  bathroom: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  reviews: Array<{
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }>;
};

type CampersResponse = {
  total: number;
  items: Camper[];
};

export const campersApi = createApi({
  reducerPath: "campersApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
  }),
  tagTypes: ["Campers"],
  endpoints: (builder) => ({
    getCampers: builder.query<CampersResponse, void>({
      query: () => ({
        url: "/campers",
        method: "GET",
      }),
    }),

    getCamperById: builder.query<Camper, string>({
      query: (id) => ({
        url: `/campers/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCampersQuery, useGetCamperByIdQuery } = campersApi;
