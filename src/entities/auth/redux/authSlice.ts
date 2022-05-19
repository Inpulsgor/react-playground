import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "entities/auth/model/state";
import { REQUEST_STATUS } from "types/enum";
import { signIn } from "entities/auth/redux/authOperations";

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  user: null,
  status: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signIn.pending, state => {
      state.status = REQUEST_STATUS.PENDING;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.accessToken = action.payload?.accessToken;
      state.user = action.payload?.user;
      state.status = REQUEST_STATUS.SUCCEEDED;
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

// export const {} = authSlice.actions;

export default authSlice;
