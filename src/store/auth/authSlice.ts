import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from 'src/services/api/axios';
import { AppState } from 'src/store/store';
import { ROUTES } from 'src/types/enum';
import { AuthStates } from 'src/types/store/auth';

const initialState = {
  accessToken: '',
  loading: AuthStates.IDLE,
  currentUser: null,
  error: null,
};

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState() as AppState;
    try {
      const response = await instance.get(`/admin/get`, {
        headers: { Authorization: `Bearer ${state.auth.accessToken}` },
      });
      return { currentUser: response.data };
    } catch (error: any) {
      throw new Error(error);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: any, thunkAPI) => {
    try {
      const response = await instance.post(`/admin/login`, credentials);
      // instance.defaults.headers.common['Authorization'] = response.data.accessToken;
      thunkAPI.dispatch(updateAccessToken(response.data.accessToken));
      const res = await instance.get(`/admin/get`);
      localStorage.setItem('refresh', response.data.refreshToken);
      window.location.href = ROUTES.home;
      return { currentUser: res.data };
    } catch (error: any) {
      thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as AppState;
      // await axios.post(`${process.env.REACT_APP_CORE_API_URL}/admin/logout`, null, {
      //   headers: { Authorization: `Bearer ${state.authReducer.accessToken}` },
      // });
      localStorage.removeItem('refresh');
      reset();
      window.location.href = ROUTES.home;
    } catch (error: any) {
      thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (credentials: any, thunkAPI) => {
    const response = await instance
      .post(`${process.env.REACT_APP_CORE_API_URL}/admin/password/reset`, {
        email: credentials,
      })
      .then(response => {
        console.log(response, 'response');
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
);

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
    builder.addCase(login.pending, (state, action) => {
      state.loading = AuthStates.LOADING;
    });
    // builder.addCase(login.fulfilled, (state: AuthSliceState, action) => {
    //   state.currentUser = action.payload.currentUser;
    //   state.loading = AuthStates.IDLE;
    // });
    builder.addCase(login.rejected, (state, action) => {
      // state = { ...initialState, error: action.error };
      throw new Error(action.error.message);
    });

    builder.addCase(logout.pending, (state, action) => {
      state.loading = AuthStates.LOADING;
    });
    builder.addCase(logout.fulfilled, _state => initialState);

    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.currentUser = action.payload.currentUser;
    });
  },
});

export const { reset, updateAccessToken } = authSlice.actions;
