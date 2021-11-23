import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { updateAccessToken } from 'src/store/auth/authSlice';
import store from 'src/store/store';

const instance = axios.create({
  baseURL: process.env.REACT_APP_CORE_API_URL,
});

// INTERCEPTORS
instance.interceptors.request.use(request => {
  const token = store.store.getState().auth.accessToken;

  // request.headers['Authorization'] = `Bearer ${token}`;

  return request;
});

// TOKEN
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const refresh = localStorage.getItem('refresh');

// Function that will be called to refresh authorization
const refreshAuthLogic = failedRequest => {
  return instance.post(`/admin/refreshToken`, { token: refresh }).then(res => {
    store.store.dispatch(updateAccessToken(res.data.accessToken));
    localStorage.setItem('refresh', res.data.refreshToken);
    failedRequest.response.config.headers['Authorization'] =
      'Bearer ' + res.data.accessToken;
    return Promise.resolve();
  });
};

// Instantiate the interceptor
createAuthRefreshInterceptor(instance, refreshAuthLogic);

// AUTH REQUESTS
const loginRequest = credentials => instance.post(`/login`, credentials);
const resetPasswordRequest = credentials =>
  instance.post(`/reset`, credentials);
const logoutRequest = credentials => instance.post(`/logout`, credentials);
const getUserRequest = credentials => instance.get(`/user`, credentials);

export default {
  token,
  loginRequest,
  logoutRequest,
  resetPasswordRequest,
  getUserRequest,
};
