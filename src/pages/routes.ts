import { lazy } from 'react';
import { ROUTES } from 'types/enum';
import { RouteTypes, SubRouteTypes } from 'types/routes.interface';

const subRoutes: SubRouteTypes = {
  playground: [
    {
      path: '',
      label: 'Tetris',
      exact: true,
      component: lazy(
        () =>
          import(
            'common/components/Tetris/Tetris' /* webpackChunkName: "Tetris" */
          ),
      ),
    },
    {
      path: '',
      label: '2048',
      exact: true,
      component: lazy(
        () =>
          import(
            'common/components/Tetris/Tetris' /* webpackChunkName: "2048" */
          ),
      ),
    },
  ],
};

const routes: Array<RouteTypes> = [
  {
    path: ROUTES.login,
    label: 'LoginPage',
    component: lazy(
      () => import('./Login' /* webpackChunkName: "LoginPage" */),
    ),
    sub: [],
    exact: true,
    private: false,
    restricted: true,
  },
  {
    path: ROUTES.registration,
    label: 'RegistrationPage',
    component: lazy(
      () => import('./Registration' /* webpackChunkName: "RegistrationPage" */),
    ),
    sub: [],
    exact: true,
    private: false,
    restricted: true,
  },
  {
    path: ROUTES.recovery,
    label: 'RecoveryPage',
    component: lazy(
      () => import('./Recovery' /* webpackChunkName: "RecoveryPage" */),
    ),
    sub: [],
    exact: true,
    private: false,
    restricted: true,
  },
  {
    path: ROUTES.home,
    label: 'HomePage',
    component: lazy(() => import('./Home' /* webpackChunkName: "HomePage" */)),
    sub: [],
    exact: true,
    private: true,
    restricted: false,
  },
  {
    path: ROUTES.playground,
    label: 'PlaygroundPage',
    component: lazy(
      () => import('./Playground' /* webpackChunkName: "PlaygroundPage" */),
    ),
    sub: subRoutes.playground,
    exact: true,
    private: true,
    restricted: false,
  },
  {
    path: ROUTES.notFound,
    label: 'NotFoundPage',
    component: lazy(
      () => import('./NotFound' /* webpackChunkName: "NotFoundPage" */),
    ),
    sub: [],
    exact: true,
    private: true,
    restricted: false,
  },
];

export default routes;
