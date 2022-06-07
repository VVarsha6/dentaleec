import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: [],
};

const InfoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    fetchData: (state, { payload }) => {
      state.info = payload;
    },
  },
});

export const { fetchData } = InfoSlice.actions;
export const getAllInfo = (state) => state.info.info;
export default InfoSlice.reducer;
