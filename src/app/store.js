import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../features/AsyncApiSelice";

export const store = configureStore({
  reducer: {
    apiData: reducer,
  },
});
