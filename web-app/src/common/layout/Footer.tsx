import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { SxProps } from "@mui/system";
import { Box, Typography, Link } from "@mui/material";
import { useAuth } from "common/hooks/useAuth";

interface FooterProps {
  children?: ReactNode;
  style?: SxProps;
}

const styles = {
  link: { color: "text.primary" },
};

const Footer: FC<FooterProps> = ({ style }) => {
  const currentYear = format(new Date(), "yyyy");
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();

  return (
    <Box sx={style} component="footer">
      <Typography component="span">
        {currentYear} - {t("pages.home.rights")}
      </Typography>

      {isAuthenticated && (
        <>
          <Link sx={styles.link} href="#">
            {t("pages.home.agreement")}
          </Link>
          <Link sx={styles.link} href="#">
            {t("pages.home.policy")}
          </Link>
        </>
      )}
    </Box>
  );
};

export default Footer;
