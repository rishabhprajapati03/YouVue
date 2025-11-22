import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const suggestionSearchSlice = createSlice({
  name: "suggestionsearch",
  initialState: {},
  reducers: {
    cacheSearchSuggestion: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const selectSearchSuggestion = (store) => store.suggestionsearch;
export const { cacheSearchSuggestion } = suggestionSearchSlice.actions;
export default suggestionSearchSlice.reducer;
