import { createSlice } from '@reduxjs/toolkit';
import { LoaderState } from 'models/loader';
import { LOADING_STATUS } from 'types/enum';

const initialState: LoaderState = {
  isLoading: LOADING_STATUS.IDLE,
};

export const loaderSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loaderActive: state => {
      state.isLoading = LOADING_STATUS.LOADING;
    },
    loaderDisabled: state => {
      state.isLoading = LOADING_STATUS.IDLE;
    },
  },
});

export const { loaderActive, loaderDisabled } = loaderSlice.actions;

export default loaderSlice;
