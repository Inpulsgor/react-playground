import { FC } from "react";
import { Toolbar } from "@mui/material";
import { NavProps } from "./Nav.types";
import { styles } from "./Nav.styles";

const Nav: FC<NavProps> = () => (
  <Toolbar sx={styles.nav} disableGutters></Toolbar>
);

export default Nav;
