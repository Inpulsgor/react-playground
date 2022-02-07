import { FC, ReactNode } from 'react';
import { Container as ContainerWrapper } from '@mui/material';
export interface IProps {
  children?: ReactNode;
}

const Container: FC<IProps> = ({ children }) => (
  <ContainerWrapper maxWidth="md">{children}</ContainerWrapper>
);

export default Container;
