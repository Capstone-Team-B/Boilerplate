import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  error: null
};

export const allUsersReducers = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    fetchAllUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAllUsersSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    },
    fetchAllUsersError(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchAllUsersStart, fetchAllUsersSuccess, fetchAllUsersError } = allUsersReducers.actions;
