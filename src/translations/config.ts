import i18n from "i18next";
import translation from "translations/en/translation.json";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["translation"],
  interpolation: {
    escapeValue: false,
  },
  keySeparator: ".",
  resources,
});
