import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./videosSlice";
import suggestionSearchReducer from "./suggestionSearchslice";
import watchLaterReducer from "./watchLaterslice";
import livechatReducer from "./livechatslice";

const store = configureStore({
  reducer: {
    videos: videosReducer,
    suggestionsearch: suggestionSearchReducer,
    watchlater: watchLaterReducer,
    livechat: livechatReducer,
  },
});
export default store;
