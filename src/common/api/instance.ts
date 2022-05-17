import axios from 'axios';
import { localStorageGet } from 'common/utils/storage';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API || '',
  withCredentials: true,
});

export const interceptor = (): void => {
  instance.interceptors.request.use(
    (config: Record<string, any>) => {
      const accessToken = localStorageGet('accessToken');

      if (accessToken) {
        config.headers['Authorization'] = 'Bearer' + accessToken;
      }
    },
    error => {
      Promise.reject(error);
    },
  );
};

export const token = {
  set(token: string): void {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(): void {
    axios.defaults.headers.common.Authorization = '';
  },
};
