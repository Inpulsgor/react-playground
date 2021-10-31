import { ReactNode } from 'react';

export interface IProps {
  className?: string;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children?: ReactNode;
}
