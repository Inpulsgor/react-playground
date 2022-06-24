import { createAsyncThunk } from "@reduxjs/toolkit";
import { logIn, logOut, register, getUser } from "entities/auth/api/auth";
import { AuthActions } from "entities/auth/model/types";
import { AppState } from "redux/store";
import { token } from "common/api/instance";
import {
  LoginCredentials,
  RegisterCredentials,
  LogoutCredentials,
} from "models/auth";
import {
  loaderActive,
  loaderDisabled,
} from "entities/loader/redux/loaderSlice";

export const signUp = createAsyncThunk(
  AuthActions.AUTH_SIGNUP,
  async (credential: RegisterCredentials, thunkAPI) => {
    thunkAPI.dispatch(loaderActive());

    try {
      const { data } = await register(credential);

      token.set(data.token);

      return {
        accessToken: data.token,
        user: data.userData,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(loaderDisabled());
    }
  },
);

export const signIn = createAsyncThunk(
  AuthActions.AUTH_SIGNIN,
  async (credential: LoginCredentials, thunkAPI) => {
    thunkAPI.dispatch(loaderActive());

    try {
      const { data } = await logIn(credential);

      token.set(data.token);

      return {
        accessToken: data.token,
        user: data.userData,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(loaderDisabled());
    }
  },
);

export const signOut = createAsyncThunk(
  AuthActions.AUTH_SIGNOUT,
  async (credential: LogoutCredentials, thunkAPI) => {
    thunkAPI.dispatch(loaderActive());

    try {
      const { data } = await logOut(credential);

      if (data.success) token.unset();

      return {
        success: data.success,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(loaderDisabled());
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  AuthActions.AUTH_CURRENT_USER,
  async (_, thunkAPI) => {
    // thunkAPI.dispatch(loaderActive());

    const { auth } = thunkAPI.getState() as AppState;

    if (!auth.accessToken) return;

    token.set(auth.accessToken);

    try {
      console.log("getUser", getUser);
      const { data } = await getUser();

      console.log("data", data.userData);

      return {
        user: data.userData,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } finally {
      // thunkAPI.dispatch(loaderDisabled());
    }
  },
);
