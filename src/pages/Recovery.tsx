import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

const Recovery: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.recovery.title")}</title>
        <meta name="description" content={t("meta.recovery.description")} />
      </Helmet>

      <Typography>{t("pages.recovery.title")}</Typography>
    </>
  );
};

export default Recovery;
