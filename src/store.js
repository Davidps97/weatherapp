import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./Components/Header/language.js";
import islandReducer from "./Components/Header/island.js";

export default configureStore({
  reducer: {
    language: languageReducer,
    island: islandReducer,
  },
});
