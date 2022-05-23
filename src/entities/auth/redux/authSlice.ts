import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "entities/auth/model/state";
import { REQUEST_STATUS } from "types/enum";

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  user: null,
  status: REQUEST_STATUS.IDLE,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInRequest: state => ({
      ...state,
      status: REQUEST_STATUS.PENDING,
    }),
    signInSuccess: (state, { payload }) => ({
      isAuthenticated: true,
      accessToken: payload.accessToken,
      user: payload.user,
      status: REQUEST_STATUS.SUCCEEDED,
      error: null,
    }),
    signInError: (state, { payload }) => ({
      ...state,
      status: REQUEST_STATUS.FAILED,
      error: payload,
    }),
    signUpSuccess: (state, { payload }) => ({
      isAuthenticated: true,
      accessToken: payload.accessToken,
      user: payload.user,
      status: REQUEST_STATUS.SUCCEEDED,
      error: null,
    }),
    signUpError: (state, { payload }) => ({
      ...state,
      status: REQUEST_STATUS.FAILED,
      error: payload,
    }),
    signOutSuccess: () => initialState,
    signOutError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    clearError: state => ({
      ...state,
      status: REQUEST_STATUS.IDLE,
      error: null,
    }),
  },
});

export const { signInRequest, signInSuccess, signInError, clearError } =
  authSlice.actions;

export default authSlice;
