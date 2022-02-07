import { Container } from 'common/layout';

import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';

export type MainProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Main: FC<MainProps> = ({ children }) => (
  <main>
    <Container>{children}</Container>
  </main>
);

export default Main;
