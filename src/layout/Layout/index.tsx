import React, { FC } from 'react';
import { Header, Footer, Main, Sidebar } from '../../layout';
import { IProps } from './interface';
import styles from './styles.module.scss';

const Layout: FC<IProps> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <Sidebar />
    <Main>{children}</Main>
    <Footer />
  </div>
);

export default Layout;
