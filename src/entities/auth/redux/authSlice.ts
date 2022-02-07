import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'common/api/api';
// import { AppStore } from 'src/store/store';
import { AuthState } from 'types/store/auth';
import { LoadingStatus } from 'types/enum';
import { ROUTES } from 'types/enum';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.LOGIN(credentials);

      thunkAPI.dispatch(updateAccessToken(response.data.accessToken));

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.LOGOUT(credentials);

      console.log(`logout`, response);

      localStorage.removeItem('refresh');
      reset();
      window.location.href = ROUTES.home;
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (credentials, thunkAPI) => {
    // const state = thunkAPI.getState() as AppStore;

    try {
      const response = await api.GET_USER(credentials);

      return { currentUser: response.data };
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.PASSWORD_RESET(credentials);

      return response;
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

const initialState: AuthState = {
  loading: LoadingStatus.IDLE,
  accessToken: null,
  currentUser: null,
  error: null,
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
      state.loading = LoadingStatus.LOADING;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loading = LoadingStatus.IDLE;
    });
    builder.addCase(login.rejected, (state, action) => {
      state = { ...initialState, error: action.payload };
    });
    builder.addCase(logout.pending, state => {
      state.loading = LoadingStatus.LOADING;
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
