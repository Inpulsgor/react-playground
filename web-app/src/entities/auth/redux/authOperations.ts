import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginCredentials } from "models/auth";
import { logIn } from "entities/auth/api/auth";

import {
  loaderActive,
  loaderDisabled,
} from "entities/loader/redux/loaderSlice";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credential: LoginCredentials, thunkAPI) => {
    thunkAPI.dispatch(loaderActive());

    try {
      const response = await logIn(credential);

      console.log("response", response);

      return {
        accessToken: response.user.refreshToken,
        user: response.user,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(loaderDisabled());
    }
  },
);
