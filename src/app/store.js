import { configureStore } from "@reduxjs/toolkit";
import listingReducer from "./features/listingSlice";

export const store = configureStore({
  reducer: {
    listing: listingReducer,
  },
});