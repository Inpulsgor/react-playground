import { SerializedError } from '@reduxjs/toolkit';
import { LOADING_STATUS, REQUEST_STATUS } from 'types/enum';
export interface AuthState {
  accessToken: string | null;
  currentUser: Record<string, unknown> | null;
  loading: LOADING_STATUS;
  status: REQUEST_STATUS | null;
  error: SerializedError | null | unknown;
}
