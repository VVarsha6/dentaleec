import { configureStore } from "@reduxjs/toolkit";

import infoReducer from "./Info/infoSlice";

export const store = configureStore({
  reducer: { info: infoReducer },
});
