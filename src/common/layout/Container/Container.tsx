import { FC, ReactNode } from 'react';

export interface ContainerProps {
  children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => <div>{children}</div>;

export default Container;
