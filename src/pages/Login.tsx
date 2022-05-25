import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Form } from "common/components";

const Login: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.login.title")}</title>
        <meta name="description" content={t("meta.login.description")} />
      </Helmet>

      <Form type="login" />
    </>
  );
};

export default Login;
