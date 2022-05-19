import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "entities/auth/model/state";
import { REQUEST_STATUS } from "types/enum";
import { signIn } from "entities/auth/redux/authOperations";

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
    // signInRequest: state => ({
    //   ...state,
    //   status: REQUEST_STATUS.PENDING,
    // }),
    // signInSuccess: (state, { payload }) => ({
    //   isAuthenticated: true,
    //   accessToken: payload.accessToken,
    //   user: payload.user,
    //   status: REQUEST_STATUS.SUCCEEDED,
    //   error: null,
    // }),
    // signInError: (state, { payload }) => ({
    //   ...state,
    //   status: REQUEST_STATUS.FAILED,
    //   error: payload,
    // }),
    // signUpSuccess: (state, { payload }) => ({
    //   isAuthenticated: true,
    //   accessToken: payload.accessToken,
    //   user: payload.user,
    //   status: REQUEST_STATUS.SUCCEEDED,
    //   error: null,
    // }),
    // signUpError: (state, { payload }) => ({
    //   ...state,
    //   status: REQUEST_STATUS.FAILED,
    //   error: payload,
    // }),
    // signOutSuccess: () => initialState,
    // signOutError: (state, { payload }) => ({
    //   ...state,
    //   error: payload,
    // }),
    // clearError: state => ({
    //   ...state,
    //   status: REQUEST_STATUS.IDLE,
    //   error: null,
    // }),
  },
  extraReducers: builder => {
    builder.addCase(signIn.pending, state => {
      state.status = REQUEST_STATUS.PENDING;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
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

// export const { signInRequest, signInSuccess, signInError, clearError } =
//   authSlice.actions;

export default authSlice;
