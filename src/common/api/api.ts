import { AxiosPromise } from 'axios';
import instance from './instance';

// AUTH REQUESTS
const LOGIN = (credentials): AxiosPromise =>
  instance.post(`/login`, credentials);
const LOGOUT = (credentials): AxiosPromise =>
  instance.post(`/logout`, credentials);
const RESET = (credentials): AxiosPromise =>
  instance.post(`/reset`, credentials);
const GET_USER = (credentials): AxiosPromise =>
  instance.get(`/user`, credentials);

export default {
  LOGIN,
  LOGOUT,
  RESET,
  GET_USER,
};
