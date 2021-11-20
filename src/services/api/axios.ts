import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { updateAccessToken } from 'src/store/auth/authSlice';
import store from 'src/store/store';

const instance = axios.create({
  baseURL: process.env.REACT_APP_CORE_API_URL,
});

instance.interceptors.request.use(request => {
  if (request) {
    // request.headers['Authorization'] = `Bearer ${
    //   store.store.getState().auth.accessToken
    // }`;
  }

  return request;
});

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

export { instance };
