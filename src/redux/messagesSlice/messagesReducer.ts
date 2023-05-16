import {  createSlice } from "@reduxjs/toolkit";
import {  IMessagesAction, MessagesState, Statuses } from "../../Types/interfaces";



const initialState: MessagesState = {
  requestStatus: Statuses.Start,
  messages: {},
  lastMessageId: '',
}


const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    requestSendMessagePending: (state) => {
      state.requestStatus = Statuses.Pending
    },
    requestSendMessageSuccess: (state) => {
      state.requestStatus = Statuses.Success
    },
    requestSendMessageError: (state) => {
      state.requestStatus = Statuses.Rejected
    },
    addMessage: (state, action:IMessagesAction) => {
      state.messages[action.payload.userNumber] ?
        state.messages[action.payload.userNumber].push(action.payload):
        state.messages[action.payload.userNumber] = []
    },
    addMessagesUser: (state, action) => {
      if(!state.messages[action.payload]){
        state.messages[action.payload] = []
      }
    },
    addLastMessageId: (state, action) => {
      state.lastMessageId = action.payload
    },
    deleteAllMessages: (state) => {
      state.messages
    }
  },
});

export default messagesSlice.reducer;
export const messagesActions = messagesSlice.actions