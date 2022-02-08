import instance from './instance';
import { localStorageGet } from 'common/utils/storage';

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
