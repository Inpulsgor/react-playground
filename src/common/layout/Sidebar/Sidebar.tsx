import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Box } from '@mui/material';

export type SidebarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Sidebar: FC<SidebarProps> = ({ children }) => (
  <Box component="aside">{children}</Box>
);

export default Sidebar;
