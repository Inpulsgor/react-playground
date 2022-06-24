import { FC, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { api } from "common/api/instance";

const Home: FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    api.get("/posts");
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("meta.blog.title")}</title>
        <meta name="description" content={t("meta.blog.description")} />
      </Helmet>

      <Typography>Blog page</Typography>
    </>
  );
};

export default Home;
