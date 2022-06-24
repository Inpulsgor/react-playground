import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.home.title")}</title>
        <meta name="description" content={t("meta.home.description")} />
      </Helmet>

      <Typography>{t("pages.home.title")}</Typography>
    </>
  );
};

export default Home;
