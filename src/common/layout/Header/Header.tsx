import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Box } from '@mui/material';
export type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Header: FC<HeaderProps> = ({ children }) => (
  <Box component="header">{children}</Box>
);

export default Header;
