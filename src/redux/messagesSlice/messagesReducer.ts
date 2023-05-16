import {  createSlice } from "@reduxjs/toolkit";
import {  IMessagesAction, MessagesState } from "../../Types/interfaces";



const initialState: MessagesState = {
  messages: [],
}


const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action:IMessagesAction) => {
      state.messages.push(action.payload)
    },
  },
});

export default messagesSlice.reducer;
export const messagesActions = messagesSlice.actions