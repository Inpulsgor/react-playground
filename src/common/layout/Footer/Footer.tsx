import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

export type FooterProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Footer: FC<FooterProps> = () => {
  const currentYear = format(new Date(), 'yyyy');
  const { t } = useTranslation();

  return (
    <Box component="footer">
      <Box component="span">
        {t('layout.footer.project')} - {currentYear} All Rights Reserved
      </Box>
    </Box>
  );
};

export default Footer;
