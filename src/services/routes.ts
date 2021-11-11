import { lazy } from 'react';
import { ROUTES } from 'src/types/enum';
import { RouteTypes } from 'src/types/routes.interface';

const routes: Array<RouteTypes> = [
  {
    path: ROUTES.login,
    label: 'LoginPage',
    exact: true,
    component: lazy(
      () => import('src/pages/Login' /* webpackChunkName: "LoginPage" */),
    ),
    private: false,
    restricted: true,
  },
  {
    path: ROUTES.registration,
    label: 'RegistrationPage',
    exact: true,
    component: lazy(
      () =>
        import(
          'src/pages/Registration' /* webpackChunkName: "RegistrationPage" */
        ),
    ),
    private: false,
    restricted: true,
  },
  {
    path: ROUTES.recovery,
    label: 'RecoveryPage',
    exact: true,
    component: lazy(
      () => import('src/pages/Recovery' /* webpackChunkName: "RecoveryPage" */),
    ),
    private: false,
    restricted: true,
  },
  {
    path: ROUTES.home,
    label: 'HomePage',
    exact: true,
    component: lazy(
      () => import('src/pages/Home' /* webpackChunkName: "HomePage" */),
    ),
    private: true,
    restricted: false,
  },
  {
    path: ROUTES.playground,
    label: 'PlaygroundPage',
    exact: true,
    component: lazy(
      () =>
        import('src/pages/Playground' /* webpackChunkName: "PlaygroundPage" */),
    ),
    private: true,
    restricted: false,
  },
  {
    path: ROUTES.notFound,
    label: 'NotFoundPage',
    exact: true,
    component: lazy(
      () => import('src/pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
    ),
    private: true,
    restricted: false,
  },
];

export default routes;
