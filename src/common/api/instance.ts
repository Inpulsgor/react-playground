import axios from 'axios';
import { RootState } from 'redux/rootReducer';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const interceptor = (store: { getState: () => RootState }) => {
  api.interceptors.request.use(config => {
    // no need to add accessToken to headers as it is in cookies
    return config;
  });
};

export default api;
