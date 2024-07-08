import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./FavoritesSlice.js";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;
