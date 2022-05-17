import { LOADING_STATUS } from 'types/enum';

export interface LoaderState {
  isLoading: boolean;
  status: LOADING_STATUS;
}
