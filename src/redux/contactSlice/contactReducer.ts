import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { ContactsState, IActivateAction, IContactsAction } from "../../Types/interfaces";
import uniqid from "uniqid";

const initialState: ContactsState = {
  contacts: [
    {
      id: uniqid(),
      name: "Anton",
      tel: "79283614760",
      active: false,
    },
    {
      id: uniqid(),
      name: "state",
      tel: "79283734260",
      active: false,
    },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: IContactsAction) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: AnyAction) => {
      state.contacts = state.contacts.filter((item) => item.id === action.id);
    },
    activateContact: (state, action: IActivateAction) => {
      state.contacts = state.contacts.map((contact) => ({
        ...contact,
        active: action.payload === contact.id ? true : false,
      }));
    },
  },
});

export default contactsSlice.reducer;
export const contactsActions = contactsSlice.actions;
