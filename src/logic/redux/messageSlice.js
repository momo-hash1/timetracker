import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "alert",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({ ...action.payload, id: state.messages.length + 1 });
    },
    clearMessage: (state, action) => {
      state.messages = state.messages.filter(
        (msg) => msg.id !== action.payload
      );
    },
  },
});

export const { addMessage, clearMessage } = messageSlice.actions;

export default messageSlice.reducer;
