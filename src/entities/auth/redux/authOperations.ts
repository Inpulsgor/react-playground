import { register, logIn, logOut } from "entities/auth/api/auth";
import { RegistrationCredentials } from "models/auth";
import { AuthActions } from "entities/auth/model/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   loaderActive,
//   loaderDisabled,
// } from "entities/loader/redux/loaderSlice";

export const signUp = createAsyncThunk(
  AuthActions.AUTH_SIGNUP,
  async (credentials: RegistrationCredentials, thunkAPI) => {
    try {
      const response = await register(credentials);

      return {
        accessToken: response.user.refreshToken,
        user: response.user,
      };
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

export const signIn = createAsyncThunk(
  AuthActions.AUTH_SIGNIN,
  async (credentials: RegistrationCredentials, thunkAPI) => {
    try {
      const response = await logIn(credentials);

      return {
        accessToken: response.user.refreshToken,
        user: response.user,
      };
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

export const signOut = createAsyncThunk(
  AuthActions.AUTH_SIGNOUT,
  async (_, thunkAPI) => {
    try {
      const response = await logOut();

      return response;
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);
