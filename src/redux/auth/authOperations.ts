import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'common/api/api';

const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await api.LOGIN(credentials);

    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue({ error: error });
  }
});

const logout = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.LOGOUT(credentials);

      return response;
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

const getCurrentUser = createAsyncThunk(
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

const reset = createAsyncThunk(
  'auth/resetPassword',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.RESET(credentials);

      return response;
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

export { login, logout, reset, getCurrentUser };
