import { FC } from 'react';
import { Container } from '..';
import { IProps } from './interface';

const Main: FC<IProps> = ({ children, ...props }) => (
  <main {...props}>
    <Container>{children}</Container>
  </main>
);

export default Main;
