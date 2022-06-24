import { FC, ReactNode } from "react";
import { SxProps } from "@mui/system";
import { Box } from "@mui/material";
import { Nav, Search } from "common/components";

interface SidebarProps {
  children?: ReactNode;
  style?: SxProps;
}

const Sidebar: FC<SidebarProps> = ({ style }) => (
  <Box sx={style} component="aside">
    <Search />
    <Nav />
  </Box>
);

export default Sidebar;
