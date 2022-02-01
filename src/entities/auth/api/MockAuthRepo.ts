import { AxiosResponse } from 'axios';
import { mockSuccess } from 'common/api/utils';
import { AuthTokenRequestPayload } from 'models/auth';
import { AuthRepo, AuthTokenResponse } from '../model/AuthRepo';

class MockAuthRepo implements AuthRepo {
  private mockResponse: AuthTokenResponse = 'mockaccesstoken';

  getAuthToken: (
    data: AuthTokenRequestPayload,
  ) => Promise<AxiosResponse<AuthTokenResponse, any>> = () => {
    console.log('mock auth called: ', this.mockResponse);
    return mockSuccess(this.mockResponse);
  };

  getRefreshToken: () => Promise<AxiosResponse<AuthTokenResponse, any>> = () =>
    mockSuccess(this.mockResponse);
}

export default MockAuthRepo;
