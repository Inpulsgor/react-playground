import React from 'react';
import { Header, Footer, Container } from '../../layout';
import styles from './styles.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
