import { lazy } from 'react';
import { ROUTES } from 'types/enum';

export const LoginPage = lazy(
  () => import('pages/Login' /* webpackChunkName: "LoginPage" */),
);

export const RegistrationPage = lazy(
  () => import('pages/Registration' /* webpackChunkName: "RegistrationPage" */),
);

export const RecoveryPage = lazy(
  () => import('pages/Recovery' /* webpackChunkName: "RecoveryPage" */),
);

export const HomePage = lazy(
  () => import('pages/Home' /* webpackChunkName: "HomePage" */),
);

export const NotFoundPage = lazy(
  () => import('pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
);

export const routes = [
  {
    path: ROUTES.HOME,
    label: 'HomePage',
    component: HomePage,
    private: true,
    restricted: false,
  },
  {
    path: ROUTES.LOGIN,
    label: 'LoginPage',
    component: LoginPage,
    private: false,
    restricted: true,
  },
  {
    path: ROUTES.REGISTRATION,
    label: 'RegistrationPage',
    component: RegistrationPage,
    private: false,
    restricted: true,
  },
  {
    path: ROUTES.RECOVERY,
    label: 'RecoveryPage',
    component: RecoveryPage,
    private: false,
    restricted: true,
  },
  {
    path: ROUTES.NOT_FOUND,
    label: 'NotFoundPage',
    component: NotFoundPage,
    private: false,
    restricted: false,
  },
];
