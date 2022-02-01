import { Dispatch } from 'react';
import Injector from 'injector';
import { AUTH_SERVICE } from 'injector/constants';
import { AuthService, PUBLIC_ADDRESS } from 'models/auth';

const { getRefreshTokenRequest } = Injector.get(AUTH_SERVICE) as AuthService;

export const refreshToken = (dispatch: Dispatch<unknown>): void => {
  const publicAddress = localStorage.getItem(PUBLIC_ADDRESS);

  if (publicAddress) dispatch(getRefreshTokenRequest());
};
