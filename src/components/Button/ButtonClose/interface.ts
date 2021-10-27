import { ReactNode } from 'react';

export interface IProps {
  isVisible?: boolean;
  onClick?: () => void;
  onClose?: () => void;
  children?: ReactNode;
}
