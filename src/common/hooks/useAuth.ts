import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { AuthState } from 'entities/auth/model/state';

export const useAuth = (): AuthState => {
  const { accessToken, isAuthenticated, user, error, status } = useSelector(
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
