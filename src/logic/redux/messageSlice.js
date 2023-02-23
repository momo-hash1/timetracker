import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "alert",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > 4) {
        state.messages.splice(0, 1);
      }
      state.messages.push(action.payload);
    },
    clearMessage: (state, action) => {
      if(isNaN(action.payload)){
        state.messages = state.messages.filter(
          (searchMsg) => searchMsg.title !== action.payload
        );
      }else{
        state.messages = state.messages.filter(
          (_, index) => index !== action.payload
        );
      }
    },
  },
});

export const { addMessage, clearMessage } = messageSlice.actions;

export default messageSlice.reducer;
