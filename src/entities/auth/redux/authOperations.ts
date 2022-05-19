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

const signIn = createAsyncThunk(
  "auth/login",
  async (credentials: LoginCredentials, thunkAPI) => {
    thunkAPI.dispatch(loaderActive());

    try {
      const auth = await getAuth();
      const { email, password } = credentials;
      const response = await signInWithEmailAndPassword(auth, email, password);

      console.log("auth/login", response);

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

export { signIn };
