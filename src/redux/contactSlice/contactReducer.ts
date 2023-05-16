import { AnyAction, createSlice } from "@reduxjs/toolkit";
import {
  ContactsState,
  IActivateAction,
  IContactsAction,
} from "../../Interfaces/interfaces";

const initialState: ContactsState = {
  contacts: [],
  activeNumber: '',
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
      state.activeNumber = state.contacts.find(
        (contact) => contact.active === true
      )?.tel || '';
    },
    deleteAllContacts: (state) => {
      state.contacts = [];
      state.activeNumber = ''
    }
  },
});

export default contactsSlice.reducer;
export const contactsActions = contactsSlice.actions;
