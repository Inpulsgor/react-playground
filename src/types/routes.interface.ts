import { ReactNode } from 'react';

export interface RouteTypes {
  path: string;
  label: string;
  exact: boolean;
  sub: Array<SubRouteItem>;
  component: ReactNode;
  private: boolean;
  restricted: boolean;
}

export interface SubRouteTypes {
  playground: Array<SubRouteItem>;
}

interface SubRouteItem {
  path: string;
  label: string;
  exact: boolean;
  component: ReactNode;
}
