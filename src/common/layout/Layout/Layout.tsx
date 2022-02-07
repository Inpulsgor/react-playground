import { FC, ReactNode } from 'react';
import { Header, Footer, Main, Sidebar, Nav } from 'common/layout';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <Sidebar>
      <Nav />
    </Sidebar>
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
