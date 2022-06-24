import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: URL || "http://localhost:5000",
  // withCredentials: true,
});

export const token = {
  set(token: string) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    api.defaults.headers.common.Authorization = "";
  },
};
