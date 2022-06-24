import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  loaderActive,
  loaderDisabled,
} from "entities/loader/redux/loaderSlice";

export const signIn = createAsyncThunk(
  "posts/signIn",
  async (credential, thunkAPI) => {
    thunkAPI.dispatch(loaderActive());

    try {
      console.log("credential", credential);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(loaderDisabled());
    }
  },
);
