import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  singleUser: [],
  loading: false,
  error: null,
};

export const singleUserReducers = createSlice({
  singleUser: 'singleUser',
  initialState,
  reducers: {
    fetchSingleUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSingleUserSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.guest = action.payload;
    },
    fetchSingleUserError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSingleUserStart,
  fetchSingleUserSuccess,
  fetchSingleUserError,
} = singleUserReducers.actions;
