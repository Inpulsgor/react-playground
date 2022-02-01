import { FailurePayload } from 'common/api/types';
import {
  authTypes,
  GetAuthTokenRequest,
  GetRefreshTokenRequest,
  LogOut,
  SetAuthError,
  SetPending,
  SetPublicAddress,
} from 'models/auth';

export interface AuthState {
  pending: boolean;
  accessToken?: string;
  publicAddress?: string;
  error: string | null;
}

export interface GetAuthTokenSuccessPayload {
  accessToken: string;
}

export type GetAuthTokenFailurePayload = FailurePayload;

export type GetRefreshTokenSuccessPayload = {
  accessToken: string;
};

export type GetRefreshTokenFailurePayload = FailurePayload;

export type GetAuthTokenSuccess = {
  type: typeof authTypes.GET_AUTH_TOKEN_SUCCESS;
  payload: GetAuthTokenSuccessPayload;
};

export type GetAuthTokenFailure = {
  type: typeof authTypes.GET_AUTH_TOKEN_FAILURE;
  payload: GetAuthTokenFailurePayload;
};

export type GetRefreshTokenSuccess = {
  type: typeof authTypes.GET_REFRESH_TOKEN_SUCCESS;
  payload: GetRefreshTokenSuccessPayload;
};

export type GetRefreshTokenFailure = {
  type: typeof authTypes.GET_REFRESH_TOKEN_FAILURE;
  payload: GetRefreshTokenFailurePayload;
};

export type AuthActions =
  | GetAuthTokenRequest
  | GetAuthTokenSuccess
  | GetAuthTokenFailure
  | GetRefreshTokenRequest
  | GetRefreshTokenSuccess
  | GetRefreshTokenFailure
  | SetAuthError
  | SetPending
  | SetPublicAddress
  | LogOut;
