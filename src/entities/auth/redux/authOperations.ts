import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithEmailAndPassword,
  // createUserWithEmailAndPassword,
} from "firebase/auth";
import { LoginCredentials } from "models/auth";

import {
  loaderActive,
  loaderDisabled,
} from "entities/loader/redux/loaderSlice";

export const signIn = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginCredentials, thunkAPI) => {
    thunkAPI.dispatch(loaderActive());

    try {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(auth, email, password);

      console.log("response", response);

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
