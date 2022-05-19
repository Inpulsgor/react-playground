import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loaderSlice from "entities/loader/redux/loaderSlice";
import authSlice from "entities/auth/redux/authSlice";

const authPersistConfig = {
  key: "auth", // localStorage key name
  storage,
  whitelist: ["accessToken"], // set only accessToken
};

const rootReducer = combineReducers({
  // [loaderSlice.name]: loaderSlice.reducer,
  [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
});

export default rootReducer;
