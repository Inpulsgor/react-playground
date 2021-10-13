import React, { FC } from 'react';
import { Logo } from '../../components';
import { Header, Footer, Container } from '../../layout';
import { IProps } from './interface';
import CoffeeLogo from '../../assets/icons/coffee.svg';
import styles from './styles.module.scss';

const Layout: FC<IProps> = ({ children }) => {
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
