import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { SxProps } from '@mui/system';
import { Box, Link } from '@mui/material';

interface FooterProps {
  children?: ReactNode;
  style?: SxProps;
}

const Footer: FC<FooterProps> = ({ style }) => {
  const currentYear = format(new Date(), 'yyyy');
  const { t } = useTranslation();

  return (
    <Box sx={style} component="footer">
      <Box component="span">
        {t('layout.footer.project')} - {currentYear} All Rights Reserved
      </Box>
      <Link sx={{ color: 'custom.white' }} href="#">
        User agreement
      </Link>
      <Link sx={{ color: 'custom.white' }} href="#">
        Privacy policy
      </Link>
    </Box>
  );
};

export default Footer;