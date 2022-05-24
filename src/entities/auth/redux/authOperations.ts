import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "entities/auth/api/auth";
import { RegistrationCredentials, LoginCredentials } from "models/auth";
import { AuthActions } from "entities/auth/model/types";
import { token } from "common/api/instance";

import {
  loaderActive,
  loaderDisabled,
} from "entities/loader/redux/loaderSlice";

export const signIn = createAsyncThunk(
  AuthActions.AUTH_SIGNIN,
  async (credentials: LoginCredentials, thunkAPI) => {
    thunkAPI.dispatch(loaderActive());

    try {
      const response = await logIn(credentials);

      const data = {
        accessToken: response.user.refreshToken,
        user: response.user,
      };

      token.set(response.user.refreshToken);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(loaderDisabled());
    }
  },
);

export const signUp = createAsyncThunk(
  AuthActions.AUTH_SIGNUP,
  async (credentials: RegistrationCredentials, thunkAPI) => {
    thunkAPI.dispatch(loaderActive());

    try {
      const response = await register(credentials);

      const data = {
        accessToken: response.user.refreshToken,
        user: response.user,
      };

      token.set(response.user.refreshToken);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(loaderDisabled());
    }
  },
);

export const signOut = createAsyncThunk(
  AuthActions.AUTH_SIGNOUT,
  async (_, thunkAPI) => {
    thunkAPI.dispatch(loaderActive());

    try {
      const response = await logOut();

      token.unset();

      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(loaderDisabled());
    }
  },
);
