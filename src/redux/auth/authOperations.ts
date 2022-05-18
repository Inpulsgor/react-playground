import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginCredentials } from 'models/auth';

import { loaderActive, loaderDisabled } from 'redux/loader/loaderSlice';
import { loginError, clearError } from 'redux/auth/authSlice';

const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials, thunkAPI) => {
    thunkAPI.dispatch(loaderActive());

    const auth = getAuth();

    signInWithEmailAndPassword(auth, credentials.name, credentials.email)
      .then(response => {
        // thunkAPI.dispatch(loginSuccess(response));
        // thunkAPI.dispatch(clearError());
      })
      .catch(error => {
        thunkAPI.dispatch(loginError(error.message));
      })
      .finally(() => thunkAPI.dispatch(loaderDisabled()));
  },
);

export { login };
