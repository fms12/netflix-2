import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    lists: [],
    movieIdsInList: [],
  },
  reducers: {
    updateMovieList: (state, action) => {
      state.lists = action.payload;
    },
    addItem: (state, action) => {
      state.lists.push(action.payload);
      state.movieIdsInList.push(action.payload.id);
    },
    removeItem: (state, action) => {
      const idToRemove = action.payload;
      state.lists = state.lists.filter((item) => item.id !== idToRemove);
      state.movieIdsInList = state.movieIdsInList.filter(
        (id) => id !== idToRemove
      );
    },
  },
});

export const {addItem,removeItem,updateMovieList}  = listSlice.actions;

export default listSlice.reducer;