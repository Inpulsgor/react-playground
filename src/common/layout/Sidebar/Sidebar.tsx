import { FC } from 'react';
import { IProps } from './interface';

const Sidebar: FC<IProps> = ({ children, ...props }) => (
  <aside {...props}>{children}</aside>
);

export default Sidebar;
