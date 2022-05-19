import "react-i18next";
import { resources } from "translations/config";

declare module "react-i18next" {
  type DefaultResources = typeof resources["en"];
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Resources extends DefaultResources {}
}
