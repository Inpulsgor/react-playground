import { FC, ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { useTheme, useMediaQuery } from '@mui/material';
import { Wrapper, Header, Footer, Main, Sidebar } from 'common/layout';

interface LayoutProps {
  children: ReactNode;
}

interface LayoutStyles {
  [key: string]: SxProps;
}

const styles: LayoutStyles = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'minmax(320px, 1fr)',
      md: 'auto 230px minmax(320px, 1200px) auto',
    },
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: {
      xs: `
    	'header'
    	'main'
    	'footer'`,
      md: `
    	'. header header .'
    	'. sidebar main .'
    	'footer footer footer footer'`,
    },
    gap: '40px 30px',
    minHeight: '100vh',
  },
  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
    display: 'grid',
    gap: '20px',
    alignContent: 'start',
  },
  main: {
    gridArea: 'main',
  },
  footer: {
    gridArea: 'footer',
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr auto auto' },
    gap: '10px 40px',
    padding: '24px',
  },
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Wrapper style={styles.wrapper}>
      {!matches && <Header style={styles.header} />}
      {matches && <Sidebar style={styles.sidebar} />}
      <Main style={styles.main}>{children}</Main>
      <Footer style={styles.footer} />
    </Wrapper>
  );
};

export default Layout;
