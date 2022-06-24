import { api } from "common/api/instance";
import {
  LoginResponse,
  LoginCredentials,
  RegisterResponse,
  RegisterCredentials,
  LogoutResponse,
  LogoutCredentials,
  CurrentUserResponse,
} from "models/auth";

export const register = (credentials: RegisterCredentials) =>
  api.post<RegisterResponse>("/auth/register", credentials);

export const logIn = (credentials: LoginCredentials) =>
  api.post<LoginResponse>("/auth/login", credentials);

export const logOut = (credentials: LogoutCredentials) =>
  api.post<LogoutResponse>("/auth/user", credentials);

export const getUser = () => api.get<CurrentUserResponse>("/auth/user");
