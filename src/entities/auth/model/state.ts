import { SerializedError } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "types/enum";
import { User } from "firebase/auth";

export interface AuthState {
  accessToken: string | null | undefined;
  isAuthenticated: boolean;
  user: User | null | undefined;
  status: REQUEST_STATUS | null;
  error: SerializedError | null;
}
