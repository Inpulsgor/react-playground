import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { LoaderState } from 'models/loader';

export const useLoading = (): LoaderState => {
  const { isLoading, status } = useSelector((state: RootState) => state.loader);

  return {
    isLoading,
    status,
  };
};
