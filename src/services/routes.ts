import { lazy } from 'react';
import { ROUTES } from 'src/types/enum';
import { RouteTypes, SubRouteTypes } from 'src/types/routes.interface';

const subRoutes: SubRouteTypes = {
  playground: [
    {
      path: '',
      label: 'Tetris',
      exact: true,
      component: lazy(
        () => import('src/components/Tetris' /* webpackChunkName: "Tetris" */),
      ),
    },
    {
      path: '',
      label: '2048',
      exact: true,
      component: lazy(
        () => import('src/components/Tetris' /* webpackChunkName: "2048" */),
      ),
    },
  ],
};

const routes: Array<RouteTypes> = [
  {
    path: ROUTES.login,
    label: 'LoginPage',
    component: lazy(
      () => import('src/pages/Login' /* webpackChunkName: "LoginPage" */),
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
      () =>
        import(
          'src/pages/Registration' /* webpackChunkName: "RegistrationPage" */
        ),
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
      () => import('src/pages/Recovery' /* webpackChunkName: "RecoveryPage" */),
    ),
    sub: [],
    exact: true,
    private: false,
    restricted: true,
  },
  {
    path: ROUTES.home,
    label: 'HomePage',
    component: lazy(
      () => import('src/pages/Home' /* webpackChunkName: "HomePage" */),
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
        import('src/pages/Playground' /* webpackChunkName: "PlaygroundPage" */),
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
      () => import('src/pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
    ),
    sub: [],
    exact: true,
    private: true,
    restricted: false,
  },
];

export default routes;
