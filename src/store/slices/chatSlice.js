import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socket: null,
  chats: [],
  currentChat: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSocket(state, action) {
      state.socket = action.payload;
    },
    addChat(state, action) {
      state.chats.push(action.payload);
    },
    removeChat(state, action) {
      state.chats = state.chats.filter(
        (chat) => chat.callId !== action.payload
      );
    },

    setCurrentChat(state, action) {
      state.currentChat = action.payload;
    },
    clearCurrentChat(state) {
      state.currentChat = null;
    },
    resetState() {
      return initialState;
    },
  },
});

export const {
  setSocket,
  addChat,
  removeChat,
  setCurrentChat,
  clearCurrentChat,
  resetState,
} = chatSlice.actions;

export default chatSlice.reducer;
