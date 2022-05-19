import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

const Home: FC = () => {
  const { t } = useTranslation();

  return <Typography>{t("pages.home.title")}</Typography>;
};

export default Home;
