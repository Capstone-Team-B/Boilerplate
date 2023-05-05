import { configureStore } from '@reduxjs/toolkit';
import allUsersReducer from '../reducers/allUsersReducer';

const store = configureStore({
  reducer: {
    auth: allUsersReducer,
  },
});

export default store;
