import { configureStore } from "@reduxjs/toolkit";
import { campersApi } from "./services/api";

export const store = configureStore({
  reducer: {
    [campersApi.reducerPath]: campersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(campersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
