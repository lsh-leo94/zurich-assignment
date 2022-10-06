import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  user_token: '',
  user_id: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState: INIT_STATE,
  reducers: {
    login: (state, action) => {
      return { ...state, user_token: 111, user_id: 1, from: action?.payload ?? 'manual-click' }
    },
    logout: (state) => {
      return INIT_STATE;
    }
  }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;