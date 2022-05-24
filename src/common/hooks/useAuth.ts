import { AppState, useAppSelector } from "redux/store";
import { AuthState } from "entities/auth/model/types";

export const useAuth = (): AuthState => {
  const { accessToken, isAuthenticated, user, error, status } = useAppSelector(
    (state: AppState) => state.auth,
  );

  return {
    isAuthenticated,
    accessToken,
    user,
    error,
    status,
  };
};
