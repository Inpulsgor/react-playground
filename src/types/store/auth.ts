import { SerializedError } from '@reduxjs/toolkit';
import { LoadingStatus } from 'src/types/enum';
export interface AuthState {
  loading: LoadingStatus;
  accessToken: string | null;
  currentUser: Record<string, unknown> | null;
  error: SerializedError | null | unknown;
}
