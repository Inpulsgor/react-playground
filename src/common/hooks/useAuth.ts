import { RootState } from "redux/store";
import { AuthState } from "entities/auth/model/types";
import { useAppSelector } from "common/hooks/useSelector";

export const useAuth = (): AuthState => {
  const { accessToken, isAuthenticated, user, error, status } = useAppSelector(
    (state: RootState) => state.auth,
  );

  return {
    isAuthenticated,
    accessToken,
    user,
    error,
    status,
  };
};
