import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { AppContainer } from "common/layout";
import { ROUTES } from "routes";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
  },
  title: {
    mb: "20px",
  },
};

const NotFound: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES.HOME);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>{t("meta.notFound.title")}</title>
        <meta name="description" content={t("meta.notFound.description")} />
      </Helmet>

      <AppContainer>
        <Box sx={styles.wrapper}>
          <Typography sx={styles.title} variant="h2">
            {t("pages.not_found.message")}
          </Typography>
          <Typography variant="body1">
            {t("pages.not_found.redirect")}
          </Typography>
        </Box>
      </AppContainer>
    </>
  );
};

export default NotFound;
