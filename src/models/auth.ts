import { SerializedError } from '@reduxjs/toolkit';
import { LOADING_STATUS, REQUEST_STATUS } from 'types/enum';
import { UserCredential } from 'firebase/auth';
export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: UserCredential | null | undefined;
  loading: LOADING_STATUS;
  status: REQUEST_STATUS | null;
  error: SerializedError | null | unknown;
}
