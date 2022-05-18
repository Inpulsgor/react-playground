import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { SxProps } from '@mui/system';
import { useTheme, useMediaQuery } from '@mui/material';
import { Wrapper, Header, Footer, Main, Sidebar } from 'common/layout';
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
    padding: '24px',
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
    bgcolor: '#7653FC',
    color: 'custom.white',
  },
};

const Layout: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Wrapper style={styles.wrapper}>
      <Header style={styles.header} />
      {matches && <Sidebar style={styles.sidebar} />}
      <Main style={styles.main}>
        <Outlet />
      </Main>
      <Footer style={styles.footer} />
    </Wrapper>
  );
};

export default Layout;
