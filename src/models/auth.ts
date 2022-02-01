export enum authTypes {
  GET_AUTH_TOKEN_REQUEST = 'GET_AUTH_TOKEN_REQUEST',
  GET_AUTH_TOKEN_SUCCESS = 'GET_AUTH_TOKEN_SUCCESS',
  GET_AUTH_TOKEN_FAILURE = 'GET_AUTH_TOKEN_FAILURE',
  GET_REFRESH_TOKEN_REQUEST = 'GET_REFRESH_TOKEN_REQUEST',
  GET_REFRESH_TOKEN_SUCCESS = 'GET_REFRESH_TOKEN_SUCCESS',
  GET_REFRESH_TOKEN_FAILURE = 'GET_REFRESH_TOKEN_FAILURE',
  SET_AUTH_ERROR = 'SET_AUTH_ERROR',
  SET_PENDING = 'SET_PENDING',
  SET_PUBLIC_ADDRESS = 'SET_PUBLIC_ADDRESS',
  LOG_OUT = 'LOG_OUT',
}

export const PUBLIC_ADDRESS = 'publicAddress';

export interface AuthTokenRequestPayload {
  timestamp: string;
  signature: string;
}

export interface GetAuthTokenRequest {
  type: typeof authTypes.GET_AUTH_TOKEN_REQUEST;
  payload: AuthTokenRequestPayload;
}

export interface GetRefreshTokenRequest {
  type: typeof authTypes.GET_REFRESH_TOKEN_REQUEST;
}

export interface SetAuthError {
  type: typeof authTypes.SET_AUTH_ERROR;
  payload: string | null;
}

export interface SetPending {
  type: typeof authTypes.SET_PENDING;
  payload: boolean;
}

export interface SetPublicAddress {
  type: typeof authTypes.SET_PUBLIC_ADDRESS;
  payload: string;
}

export interface LogOut {
  type: typeof authTypes.LOG_OUT;
}

export interface AuthService {
  getAuthTokenRequest: (data: AuthTokenRequestPayload) => GetAuthTokenRequest;
  getRefreshTokenRequest: () => GetRefreshTokenRequest;
  setAuthError: (message: string) => SetAuthError;
  setPending: (pending: boolean) => SetPending;
  setPublicAddress: (publicAddress: string) => SetPublicAddress;
  logout: () => LogOut;
}
