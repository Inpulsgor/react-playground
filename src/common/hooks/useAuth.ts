import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

type UseAuthValue = {
  token: string | null;
};

export const useAuth = (): UseAuthValue => {
  const { token } = useSelector((state: RootState) => state.auth);

  return {
    token,
  };
};
