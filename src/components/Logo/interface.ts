import { ReactNode } from 'react';

export interface IProps {
  path?: string;
  alt?: string;
  children?: ReactNode | JSX.Element;
}
