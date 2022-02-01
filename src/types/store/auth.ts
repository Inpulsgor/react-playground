import { SerializedError } from '@reduxjs/toolkit';
import { LoadingStatus } from 'types/enum';
export interface AuthState {
  loading: LoadingStatus;
  accessToken: string | null;
  currentUser: Record<string, unknown> | null;
  error: SerializedError | null | unknown;
}
