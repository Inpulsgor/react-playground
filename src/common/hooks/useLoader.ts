import { RootState } from "redux/store";
import { LoaderState } from "entities/loader/model/state";
import { useAppSelector } from "common/hooks/useSelector";

export const useLoading = (): LoaderState => {
  const { isLoading, status } = useAppSelector(
    (state: RootState) => state.loader,
  );

  return {
    isLoading,
    status,
  };
};
