import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        // If the item is already in favorites, remove it
        state.splice(existingIndex, 1);
      } else {
        // If the item is not in favorites, add it
        state.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
