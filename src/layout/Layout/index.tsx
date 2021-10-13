import React from 'react';
import { Logo } from '../../components';
import { Header, Footer, Container } from '../../layout';
import CoffeeLogo from '../../assets/icons/coffee.svg';
import styles from './styles.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header>
        <Logo logo={CoffeeLogo} />
      </Header>
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
