import { FC, ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { Container, Box } from '@mui/material';

interface MainProps {
  children?: ReactNode;
  style?: SxProps;
}

const Main: FC<MainProps> = ({ style, children }) => (
  <Box sx={style} component="main">
    <Container>{children}</Container>
  </Box>
);

export default Main;
