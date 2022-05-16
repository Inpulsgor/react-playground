import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Layout } from 'common/layout';

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Typography>{t('pages.home.title')}</Typography>
    </Layout>
  );
};

export default Home;
