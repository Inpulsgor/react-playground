import { FC } from 'react';
import { Header, Footer, Main, Sidebar, Nav } from 'common/layout';
import { IProps } from './interface';

const Layout: FC<IProps> = ({ children }) => (
  <div>
    <Header />
    <Sidebar>
      <Nav />
    </Sidebar>
    <Main>{children}</Main>
    <Footer />
  </div>
);

export default Layout;
