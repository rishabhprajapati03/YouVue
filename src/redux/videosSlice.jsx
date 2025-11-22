import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    mostPopular: [],
    nextPageToken: null,
    hasLoadedInitial: false,
  },
  reducers: {
    cacheInitialVideos: (state, action) => {
      if (state.hasLoadedInitial) return;

      state.mostPopular = action.payload.items;
      state.nextPageToken = action.payload.nextPageToken;
      state.hasLoadedInitial = true;
    },
    cacheMoreVideos: (state, action) => {
      const newItems = action.payload.items;

      newItems.forEach((video) => {
        const exists = state.mostPopular.some((v) => v.id === video.id);
        if (!exists) state.mostPopular.push(video);
      });

      state.nextPageToken = action.payload.nextPageToken;
    },
  },
});

export const selectVideosSlice = (store) => store.videos;

export const { cacheInitialVideos, cacheMoreVideos } = videosSlice.actions;

export default videosSlice.reducer;
