import { SerializedError } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "types/enum";
import { UserData } from "models/auth";

export interface AuthState {
  accessToken: string | null | undefined;
  isAuthenticated: boolean;
  user: UserData | null | undefined;
  status: REQUEST_STATUS | null;
  error: SerializedError | null;
}

export enum AuthActions {
  AUTH = "auth",
  AUTH_SIGNIN = "auth/signIn",
  AUTH_SIGNUP = "auth/signUp",
  AUTH_SIGNOUT = "auth/signOut",
  AUTH_CURRENT_USER = "auth/getCurrentUser",
}
