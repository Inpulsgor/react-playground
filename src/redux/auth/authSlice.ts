import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from 'models/auth';
import { LOADING_STATUS, REQUEST_STATUS } from 'types/enum';
import { login } from 'redux/auth/authOperations';

const initialState: AuthState = {
  loading: LOADING_STATUS.IDLE,
  isAuthenticated: false,
  token: null,
  user: null,
  status: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAccessToken: (state, action) => {
      state.token = action.payload;
    },
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = LOADING_STATUS.LOADING;
      state.status = REQUEST_STATUS.PENDING;
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction) => {
      // state.token = action.payload.token;
      state.loading = LOADING_STATUS.IDLE;
      state.status = REQUEST_STATUS.SUCCEEDED;
    });
    builder.addCase(login.rejected, (state, action) => {
      state = {
        ...initialState,
        error: action.payload,
        status: REQUEST_STATUS.FAILED,
      };
    });
  },
});

export const { reset, updateAccessToken } = authSlice.actions;

export default authSlice;
