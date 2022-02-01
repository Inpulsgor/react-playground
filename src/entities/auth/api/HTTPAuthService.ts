import {
  AuthService,
  AuthTokenRequestPayload,
  GetAuthTokenRequest,
  GetRefreshTokenRequest,
  LogOut,
  SetAuthError,
  SetPending,
  SetPublicAddress,
  PUBLIC_ADDRESS,
} from 'models/auth';
import {
  getAuthTokenRequest,
  getRefreshTokenRequest,
  logout,
  setAuthError,
  setPending,
  setPublicAddress,
} from '../redux/authActions';

class HTTPAuthService implements AuthService {
  public getRefreshTokenRequest: () => GetRefreshTokenRequest =
    getRefreshTokenRequest;

  public getAuthTokenRequest: (
    data: AuthTokenRequestPayload,
  ) => GetAuthTokenRequest = getAuthTokenRequest;

  public setAuthError: (message: string) => SetAuthError = setAuthError;

  public setPending: (pending: boolean) => SetPending = setPending;

  public setPublicAddress: (publicAddress: string) => SetPublicAddress = (
    publicAddress: string,
  ) => {
    return setPublicAddress(publicAddress);
  };

  public logout: () => LogOut = () => {
    localStorage.removeItem(PUBLIC_ADDRESS);
    return logout();
  };
}

export default HTTPAuthService;
