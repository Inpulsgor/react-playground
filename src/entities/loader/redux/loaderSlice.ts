import { createSlice } from '@reduxjs/toolkit';
import { LoaderState } from 'entities/loader/model/state';
import { LOADING_STATUS } from 'types/enum';

const initialState: LoaderState = {
  isLoading: false,
  status: LOADING_STATUS.IDLE,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    loaderActive: state => {
      state.isLoading = true;
      state.status = LOADING_STATUS.LOADING;
    },
    loaderDisabled: state => {
      state.isLoading = false;
      state.status = LOADING_STATUS.IDLE;
    },
  },
});

export const { loaderActive, loaderDisabled } = loaderSlice.actions;

export default loaderSlice;
