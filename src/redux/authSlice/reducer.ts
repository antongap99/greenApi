import { createSlice } from "@reduxjs/toolkit"

interface initialState {
  loading: boolean,
  data: Record<string, unknown> | null,
  status: string,
  error: string,
}

interface Action{
  type: string,
  payload: {
    data?:  Record<string, unknown> | string,
    error: string
  }
}

export const initialState = {
  data: {},
  error: '',
  status: '',
  access: false
}


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth_success: (state) => {
      state.error = '',
      state.status = 'success',
      state.access = true
    },
    auth_error: (state, action: Action) => {
      state.error = action.payload.error,
      state.status = 'reject',
      state.access = false
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions