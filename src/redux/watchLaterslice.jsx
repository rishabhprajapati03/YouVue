import { createSlice } from "@reduxjs/toolkit";

const watchLaterSlice = createSlice({
  name: "watchlater",
  initialState: {
    watchList: [],
    total: 0,
  },
  reducers: {
    addToWatchList: (state, action) => {
      if (!action?.payload?.id) return;
      const id = action.payload.id;
      const exists = state.watchList.some((item) => item.id === id);
      if (exists) return;
      state.watchList.push(action.payload);
      state.total++
    },

    removeFromWatchList: (state, action) => {
      if (!action?.payload) return;

      const id = action.payload;
      console.log(id);
      state.watchList = state.watchList.filter((item) => {
        return item.id !== id;
      });
      state.total--
    },
    clearWatchList: (state) => {
      state.watchList.length = 0;
      state.total=0;
    },
  },
});

export const selectWatchLaterSlice = (store) => store.watchlater;
export const { addToWatchList, removeFromWatchList, clearWatchList } =
  watchLaterSlice.actions;
export default watchLaterSlice.reducer;
