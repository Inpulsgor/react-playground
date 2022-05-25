import { FC } from "react";
import { Outlet } from "react-router-dom";
import { SxProps } from "@mui/system";
import { Wrapper, Header, Footer, Main } from "common/layout";

interface LayoutStyles {
  [key: string]: SxProps;
}

const styles: LayoutStyles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "minmax(320px, 1fr)",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateAreas: `
    	'header'
    	'main'
    	'footer'`,
    gap: "40px 30px",
    minHeight: "100vh",
  },
  header: {
    gridArea: "header",
    padding: "24px",
  },
  sidebar: {
    gridArea: "sidebar",
    display: "grid",
    gap: "20px",
    alignContent: "start",
  },
  main: {
    gridArea: "main",
    display: "grid",
    alignContent: "center",
  },
  footer: {
    gridArea: "footer",
    fontWeight: 700,
    textAlign: "center",
    padding: "24px",
    color: "text.primary",
  },
};

const Layout: FC = () => {
  return (
    <Wrapper style={styles.wrapper}>
      <Header style={styles.header} />
      <Main style={styles.main}>
        <Outlet />
      </Main>
      <Footer style={styles.footer} />
    </Wrapper>
  );
};

export default Layout;
