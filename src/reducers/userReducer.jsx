import { createSlice } from "@reduxjs/toolkit";
import { getUserList } from '../api/userApi';

const INIT_STATE = {
  loading: false,
  users: []
}

const userSlice = createSlice({
  name: 'users',
  initialState: INIT_STATE,
  reducers: {
    resetToInitial: () => {
      return INIT_STATE;
    },
    getList: (state, action) => {
      return { ...state, ...action.payload }
    },
    
  },
  extraReducers: {
    [getUserList.fulfilled]: (state, action) => {
      return {
        ...state,
        users: [ ...action.payload?.data],
        loading: !action.payload?.fetchNextPage
      }
    },
    [getUserList.rejected]: (state, action) => {
      return { ...state, errorMsg: 'Request failed' }
    },
  }
});

export const { getList, startLoading, resetToInitial } = userSlice.actions;

export default userSlice.reducer;