import { createSlice } from "@reduxjs/toolkit";

export const islandSlice = createSlice({
  name: "island",
  initialState: { value: "" },
  reducers: {
    changeIsland: (state, newIsland) => {
      state.value = newIsland.payload;
    },
  },
});

export const {changeIsland} = islandSlice.actions;

export default islandSlice.reducer;