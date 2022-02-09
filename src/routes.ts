import { lazy } from 'react';
import { ROUTES } from 'types/enum';

const routes = [
  {
    path: ROUTES.login,
    label: 'LoginPage',
    component: lazy(
      () => import('./pages/Login' /* webpackChunkName: "LoginPage" */),
    ),
  },
  {
    path: ROUTES.registration,
    label: 'RegistrationPage',
    component: lazy(
      () =>
        import(
          './pages/Registration' /* webpackChunkName: "RegistrationPage" */
        ),
    ),
  },
  {
    path: ROUTES.recovery,
    label: 'RecoveryPage',
    component: lazy(
      () => import('./pages/Recovery' /* webpackChunkName: "RecoveryPage" */),
    ),
  },
  {
    path: ROUTES.home,
    label: 'HomePage',
    component: lazy(
      () => import('./pages/Home' /* webpackChunkName: "HomePage" */),
    ),
    sub: [],
    exact: true,
    private: true,
    restricted: false,
  },
  {
    path: ROUTES.playground,
    label: 'PlaygroundPage',
    component: lazy(
      () =>
        import('./pages/Playground' /* webpackChunkName: "PlaygroundPage" */),
    ),
  },
  {
    path: ROUTES.notFound,
    label: 'NotFoundPage',
    component: lazy(
      () => import('./pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
    ),
  },
];

export default routes;
