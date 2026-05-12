import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import bankReducer from "./bankSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bank: bankReducer,
  },
});
