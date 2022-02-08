import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default instance;
