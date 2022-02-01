import {
  GetAuthTokenRequest,
  authTypes,
  AuthTokenRequestPayload,
  SetAuthError,
  SetPending,
  SetPublicAddress,
  LogOut,
  GetRefreshTokenRequest,
} from 'models/auth';
import {
  GetAuthTokenSuccessPayload,
  GetAuthTokenSuccess,
  GetAuthTokenFailurePayload,
  GetAuthTokenFailure,
  GetRefreshTokenFailure,
  GetRefreshTokenFailurePayload,
  GetRefreshTokenSuccess,
  GetRefreshTokenSuccessPayload,
} from '../model/types';

export const getAuthTokenRequest = (
  data: AuthTokenRequestPayload,
): GetAuthTokenRequest => ({
  type: authTypes.GET_AUTH_TOKEN_REQUEST,
  payload: data,
});

export const getAuthTokenSuccess = (
  payload: GetAuthTokenSuccessPayload,
): GetAuthTokenSuccess => ({
  type: authTypes.GET_AUTH_TOKEN_SUCCESS,
  payload,
});

export const getAuthTokenFailure = (
  payload: GetAuthTokenFailurePayload,
): GetAuthTokenFailure => ({
  type: authTypes.GET_AUTH_TOKEN_FAILURE,
  payload,
});

export const getRefreshTokenRequest = (): GetRefreshTokenRequest => ({
  type: authTypes.GET_REFRESH_TOKEN_REQUEST,
});

export const getRefreshTokenSuccess = (
  payload: GetRefreshTokenSuccessPayload,
): GetRefreshTokenSuccess => ({
  type: authTypes.GET_REFRESH_TOKEN_SUCCESS,
  payload,
});

export const getRefreshTokenFailure = (
  payload: GetRefreshTokenFailurePayload,
): GetRefreshTokenFailure => ({
  type: authTypes.GET_REFRESH_TOKEN_FAILURE,
  payload,
});

export const setAuthError = (message: string | null): SetAuthError => ({
  type: authTypes.SET_AUTH_ERROR,
  payload: message,
});

export const setPending = (pending: boolean): SetPending => ({
  type: authTypes.SET_PENDING,
  payload: pending,
});

export const setPublicAddress = (publicAddress: string): SetPublicAddress => ({
  type: authTypes.SET_PUBLIC_ADDRESS,
  payload: publicAddress,
});

export const logout = (): LogOut => ({
  type: authTypes.LOG_OUT,
});
