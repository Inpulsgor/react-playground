import { FC, ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { Box } from '@mui/material';

export interface WrapperProps {
  children?: ReactNode;
  style?: SxProps;
}

const Wrapper: FC<WrapperProps> = ({ style, children }) => (
  <Box sx={style}>{children}</Box>
);

export default Wrapper;
