import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

type UseAuthValue = {
  token: string | null;
  isAuthenticated: boolean;
};

export const useAuth = (): UseAuthValue => {
  const { token, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );

  return {
    token,
    isAuthenticated,
  };
};
