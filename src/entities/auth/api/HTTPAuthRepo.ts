import { AxiosResponse } from 'axios';
import api from 'common/api/instance';
import { AuthTokenRequestPayload } from 'models/auth';
import { AuthRepo, AuthTokenResponse } from '../model/AuthRepo';
// import { GetAuthTokenSuccessPayload } from '../model/types';

const AUTH_ROUTE = '/http-service';

class HTTPAuthRepo implements AuthRepo {
  getAuthToken: (
    data: AuthTokenRequestPayload,
  ) => Promise<AxiosResponse<AuthTokenResponse, any>> = (
    data: AuthTokenRequestPayload,
  ) => api.post(`${AUTH_ROUTE}/login-by-metamask`, data);
  getRefreshToken: () => Promise<AxiosResponse<AuthTokenResponse, any>> = () =>
    api.post(`${AUTH_ROUTE}/refresh`);
}

export default HTTPAuthRepo;
