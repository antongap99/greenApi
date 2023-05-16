import { createSlice } from "@reduxjs/toolkit";
import { authState } from "../../Interfaces/interfaces";



export const initialState:authState = {
  idInstance: null,
  apiToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, action) => {
      state.apiToken = action.payload.apiToken
      state.idInstance = action.payload.idInstance
    },
    deleteToken: (state) => {
      state.apiToken = null
      state.idInstance = null
    }
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
