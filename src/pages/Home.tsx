import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from 'common/layout';

const Home: FC = () => {
  const { t } = useTranslation();

  return <Layout>{t('pages.home.title')}</Layout>;
};

export default Home;
