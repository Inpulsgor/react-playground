import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'models/auth';
import { LOADING_STATUS, REQUEST_STATUS } from 'types/enum';
import { login, logout, getCurrentUser } from 'redux/auth/authOperations';

const initialState: AuthState = {
  loading: LOADING_STATUS.IDLE,
  accessToken: null,
  currentUser: null,
  error: null,
  status: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = LOADING_STATUS.LOADING;
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loading = LOADING_STATUS.IDLE;
      state.status = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(login.rejected, (state, action) => {
      state = {
        ...initialState,
        error: action.payload,
        status: REQUEST_STATUS.FAILED,
      };
    });
    builder.addCase(logout.pending, state => {
      state.loading = LOADING_STATUS.LOADING;
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(logout.fulfilled, state => {
      state = { ...initialState };
    });
    builder.addCase(logout.rejected, (state, action) => {
      state = { ...initialState, error: action.payload };
    });
    builder.addCase(getCurrentUser.fulfilled, state => {
      state = { ...initialState };
    });
  },
});

export const { reset, updateAccessToken } = authSlice.actions;

export default authSlice;
