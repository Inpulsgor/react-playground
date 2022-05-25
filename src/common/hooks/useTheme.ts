import { AppState, useAppSelector } from "redux/store";
import { ThemeState } from "entities/theme/model/state";

export const useTheme = (): ThemeState => {
  const { isThemeDark } = useAppSelector((state: AppState) => state.theme);

  return {
    isThemeDark,
  };
};
