import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Typography, Box } from "@mui/material";

const Recovery: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.recovery.title")}</title>
        <meta name="description" content={t("meta.recovery.description")} />
      </Helmet>

      <Typography>{t("pages.recovery.title")}</Typography>
      <Box
        sx={{
          bgcolor: "#F0F0F0",
          padding: "30px 50px 36px",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "120%",
        }}
      >
        <Typography>Courses</Typography>
        <Box sx={{ display: "grid" }}></Box>
      </Box>
    </>
  );
};

export default Recovery;
