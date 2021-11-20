import { SerializedError } from '@reduxjs/toolkit';

export enum AuthStates {
  IDLE = 'idle',
  LOADING = 'loading',
}

export interface AuthSliceState {
  accessToken: string;
  loading: AuthStates;
  currentUser: Record<string, unknown>;
  error?: SerializedError;
}
