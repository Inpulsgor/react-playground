import { FC, ReactNode } from "react";
import { SxProps } from "@mui/system";
import { Box } from "@mui/material";

interface HeaderProps {
  children?: ReactNode;
  style?: SxProps;
}

const Header: FC<HeaderProps> = ({ style }) => (
  <Box sx={style} component="header">
    Header
  </Box>
);

export default Header;
