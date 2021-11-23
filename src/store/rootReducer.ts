import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// SLICES
import loaderSlice from './loader/loaderSlice';
import authSlice from './auth/authSlice';

// CONFIG
const persistConfig = {
  key: 'auth', // localStorage key name
  storage,
};

// ROOT REDUCER
const rootReducer = combineReducers({
  [loaderSlice.name]: loaderSlice.reducer,
  [authSlice.name]: persistReducer(persistConfig, authSlice.reducer),
});

export default rootReducer;
