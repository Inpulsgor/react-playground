import { createAsyncThunk } from '@reduxjs/toolkit';
import { Credentials } from 'common/api/types';
// import api from 'common/api/api';

const login = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials, thunkAPI) => {
    try {
      // const response = await api.LOGIN(credentials);
      // return response;
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

export { login };
