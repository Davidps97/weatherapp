import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: { value: "spanish" },
  reducers: {
    changeLanguage: (state, newLanguage) => {
      state.value = newLanguage.payload;
    },
  },
});

export const {changeLanguage} = languageSlice.actions;

export default languageSlice.reducer;