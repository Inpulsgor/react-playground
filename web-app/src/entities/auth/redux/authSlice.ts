import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "entities/auth/redux/authOperations";
import { AuthState } from "entities/auth/model/types";
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
    setCredentials: (state, { payload }) => ({
      isAuthenticated: true,
      accessToken: payload.token,
      user: payload.user,
      status: REQUEST_STATUS.SUCCEEDED,
      error: null,
    }),
    signInError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    signOutSuccess: () => initialState,
    signOutError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  extraReducers: builder => {
    builder.addCase(signIn.pending, state => {
      state.status = REQUEST_STATUS.PENDING;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload?.accessToken;
      state.user = action.payload?.user;
      state.status = REQUEST_STATUS.SUCCEEDED;
      state.error = null;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state = {
        ...initialState,
        error: action.error,
        status: REQUEST_STATUS.FAILED,
      };
    });
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice;
