import { AxiosResponse } from 'axios';
import { AuthTokenRequestPayload } from 'models/auth';

export type AuthTokenResponse = string;

export interface AuthRepo {
  getAuthToken: (
    data: AuthTokenRequestPayload,
  ) => Promise<AxiosResponse<AuthTokenResponse, any>>;
  getRefreshToken: () => Promise<AxiosResponse<AuthTokenResponse, any>>;
}
