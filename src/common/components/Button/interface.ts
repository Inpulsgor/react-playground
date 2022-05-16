import { ReactNode } from 'react';
export interface IProps {
  style: string;
  type?: Type;
  isVisible?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

enum Type {
  submit = 'submit',
  button = 'button',
  reset = 'reset',
}
