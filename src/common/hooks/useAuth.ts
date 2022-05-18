import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { AuthState } from 'models/auth';

export const useAuth = (): AuthState => {
  const { token, isAuthenticated, user, loading, error, status } = useSelector(
    (state: RootState) => state.auth,
  );

  return {
    isAuthenticated,
    loading,
    token,
    user,
    error,
    status,
  };
};
