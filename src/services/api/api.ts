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
const TOKEN = {
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
const LOGIN = credentials => instance.post(`/login`, credentials);
const LOGOUT = credentials => instance.post(`/logout`, credentials);
const PASSWORD_RESET = credentials => instance.post(`/reset`, credentials);
const GET_USER = credentials => instance.get(`/user`, credentials);

export default {
  TOKEN,
  LOGIN,
  LOGOUT,
  PASSWORD_RESET,
  GET_USER,
};
