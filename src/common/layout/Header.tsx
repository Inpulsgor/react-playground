import { FC, ReactNode } from "react";
import { SxProps } from "@mui/system";
import { Box } from "@mui/material";
import { ToggleSwitch } from "common/components";

interface HeaderProps {
  children?: ReactNode;
  style?: SxProps;
}

const styles = {
  header: {
    display: "flex",
  },
};

const Header: FC<HeaderProps> = ({ style = {} }) => (
  <Box sx={{ ...style, ...styles.header }} component="header">
    <ToggleSwitch />
  </Box>
);

export default Header;
