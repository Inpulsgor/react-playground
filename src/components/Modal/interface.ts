import { ReactNode } from 'react';

export interface IProps {
  showModal: boolean;
  toggleModal: () => void;
  children?: ReactNode | JSX.Element;
}

export interface IState {}
