import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

interface FormValues {
  name: string;
  email: string;
}

const login = createAsyncThunk(
  'auth/login',
  async (credentials: FormValues, thunkAPI) => {
    try {
      const auth = getAuth();
      const { name, email } = credentials;

      const response = await signInWithEmailAndPassword(auth, name, email);
      console.log('response', response?.user);
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error });
    }
  },
);

export { login };
