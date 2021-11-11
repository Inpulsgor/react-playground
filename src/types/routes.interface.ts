import { ReactNode } from 'react';

export interface RouteTypes {
  path: string;
  label: string;
  exact: boolean;
  component: ReactNode;
  private: boolean;
  restricted: boolean;
}
