import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/constants";

const livechatslice = createSlice({
  name: "livechat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});
export const selectLivechatSlice = (store) => store.livechat;
export const { addMessage } = livechatslice.actions;
export default livechatslice.reducer;
