import { createSlice } from "@reduxjs/toolkit";
import {
  signIn,
  signUp,
  signOut,
  getCurrentUser,
} from "entities/auth/redux/authOperations";
import { AuthState, AuthActions } from "entities/auth/model/types";
import { REQUEST_STATUS } from "types/enum";

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  user: null,
  status: REQUEST_STATUS.IDLE,
  error: null,
};

const authSlice = createSlice({
  name: AuthActions.AUTH,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUp.pending, state => {
      state.status = REQUEST_STATUS.PENDING;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload?.accessToken;
      state.user = action.payload?.user;
      state.status = REQUEST_STATUS.SUCCEEDED;
      state.error = null;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state = {
        ...initialState,
        error: action.error,
        status: REQUEST_STATUS.FAILED,
      };
    });
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
    builder.addCase(signOut.pending, state => {
      state.status = REQUEST_STATUS.PENDING;
      state.error = null;
    });
    builder.addCase(signOut.fulfilled, () => initialState);
    builder.addCase(signOut.rejected, (state, action) => {
      state = {
        ...state,
        error: action.error,
        status: REQUEST_STATUS.FAILED,
      };
    });
    builder.addCase(getCurrentUser.pending, state => {
      state.isAuthenticated = true;
      state.status = REQUEST_STATUS.PENDING;
      state.error = null;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.status = REQUEST_STATUS.SUCCEEDED;
      state.user = action.payload?.user;
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state = {
        ...initialState,
        error: action.error,
        status: REQUEST_STATUS.FAILED,
      };
    });
  },
});

export default authSlice;
