import { register } from "entities/auth/api/auth";
import { RegistrationCredentials } from "models/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  loaderActive,
  loaderDisabled,
} from "entities/loader/redux/loaderSlice";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials: RegistrationCredentials, thunkAPI) => {
    thunkAPI.dispatch(loaderActive());

    try {
      const response = await register(credentials);

      return {
        accessToken: response.user.refreshToken,
        user: response.user,
      };
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    } finally {
      thunkAPI.dispatch(loaderDisabled());
    }
  },
);
